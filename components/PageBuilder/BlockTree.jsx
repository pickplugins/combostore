'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    IconChevronRight,
    IconChevronDown,
    IconGripVertical,
    IconLayoutGrid,
    IconHeading,
    IconPointer,
    IconColumns,
    IconVideo,
    IconPhoto,
    IconSlideshow
} from '@tabler/icons-react';

const getIcon = (type) => {
    switch (type) {
        case 'grid': return <IconLayoutGrid size={16} />;
        case 'columns': return <IconColumns size={16} />;
        case 'heading': return <IconHeading size={16} />;
        case 'text': return <IconLayoutGrid size={16} />;
        case 'button': return <IconPointer size={16} />;
        case 'video': return <IconVideo size={16} />;
        case 'image': return <IconPhoto size={16} />;
        case 'contentSlider': return <IconSlideshow size={16} />;
        default: return <IconChevronRight size={16} />;
    }
};

/* Ids of every ancestor of `targetId`, outermost first, or null if not found. */
const findAncestorIds = (blocks, targetId, path = []) => {
    for (const block of blocks || []) {
        if (block.id === targetId) return path;
        if (block.children?.length) {
            const found = findAncestorIds(block.children, targetId, [...path, block.id]);
            if (found) return found;
        }
    }
    return null;
};

/* Lives at module level so React keeps its identity between renders. Defined
   inside BlockTree it was a new component type on every render, so every row
   remounted and lost its state (collapse, drag indicator) on each selection. */
const TreeItem = ({
    block,
    depth = 0,
    selectedId,
    setSelectedId,
    handleMoveBlock,
    collapsedIds,
    toggleCollapsed,
    onRevealBlock
}) => {
    const [dragOverPos, setDragOverPos] = useState(null); // 'before', 'after', 'inside', null
    const hasChildren = block?.children && block.children.length > 0;
    const isSelected = selectedId === block.id;
    const isOpen = !collapsedIds.has(block.id);

    const onDragStart = (e) => {
        e.stopPropagation();
        e.dataTransfer.setData("canvasBlock", block.id);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const threshold = rect.height / 4;

        if (!block?.children) return;

        if (y < threshold) {
            setDragOverPos('before');
        } else if (y > rect.height - threshold) {
            setDragOverPos('after');
        } else {
            setDragOverPos('inside');
        }
    };

    const onDragLeave = () => {
        setDragOverPos(null);
    };

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const paletteType = e.dataTransfer.getData("paletteType");
        const canvasBlockId = e.dataTransfer.getData("canvasBlock");

        const position = dragOverPos || 'inside';
        setDragOverPos(null);

        if (handleMoveBlock && (paletteType || (canvasBlockId && canvasBlockId !== block.id))) {
            handleMoveBlock({ paletteType, canvasBlockId }, block.id, position);
        }
    };

    return (
        <div className="flex flex-col relative">
            {/* Before indicator */}
            {dragOverPos === 'before' && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand z-10" />
            )}

            <div
                data-tree-id={block.id}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(block.id);
                    onRevealBlock?.(block.id);
                }}
                style={{ paddingLeft: `${12 + depth * 14}px` }}
                className={`flex items-center gap-1.5 py-1.5 pr-2 cursor-pointer group transition-colors relative
                    ${isSelected ? 'bg-brand/10 text-brand-700 shadow-[inset_2px_0_0_var(--color-brand)]' : 'hover:bg-gray-100 text-gray-700'}
                    ${dragOverPos === 'inside' ? 'bg-brand/5 ring-1 ring-inset ring-brand/40' : ''}
                `}
            >
                <div className="flex items-center gap-1 flex-1 min-w-0">
                    <div
                        className={`p-0.5 rounded ${hasChildren || block.type === 'columns' || block.type === 'grid' ? 'hover:bg-gray-200' : 'opacity-0'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleCollapsed(block.id);
                        }}
                    >
                        {isOpen ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
                    </div>
                    <div className={`shrink-0 ${isSelected ? 'text-brand' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {getIcon(block.type)}
                    </div>
                    <span className="text-xs truncate capitalize font-medium">
                        {block.type}
                    </span>
                    <span className="text-[10px] text-gray-400 truncate opacity-0 group-hover:opacity-100">
                        #{block.id.slice(-4)}
                    </span>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
                    <IconGripVertical size={14} className="text-gray-300 cursor-grab" />
                </div>
            </div>

            {/* After indicator */}
            {dragOverPos === 'after' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand z-10" />
            )}

            {hasChildren && isOpen && (
                <div className="flex flex-col">
                    {block.children.map((child) => (
                        <TreeItem
                            key={child.id}
                            block={child}
                            depth={depth + 1}
                            selectedId={selectedId}
                            setSelectedId={setSelectedId}
                            handleMoveBlock={handleMoveBlock}
                            collapsedIds={collapsedIds}
                            toggleCollapsed={toggleCollapsed}
                            onRevealBlock={onRevealBlock}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const BlockTree = ({
    blocks,
    selectedId,
    setSelectedId,
    setBlocks,
    handleMoveBlock,
    onRevealBlock
}) => {
    const treeRef = useRef(null);
    const pendingScrollRef = useRef(false);

    /* Collapse state lives here, keyed by block id, so it survives re-renders
       and the tree can open a selected block's ancestors. */
    const [collapsedIds, setCollapsedIds] = useState(() => new Set());

    const toggleCollapsed = useCallback((id) => {
        setCollapsedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    }, []);

    /* On a new selection, open any collapsed ancestors so the row exists,
       then flag a scroll for the effect below. */
    useEffect(() => {
        if (!selectedId) return;
        pendingScrollRef.current = true;
        const ancestors = findAncestorIds(blocks, selectedId) || [];
        setCollapsedIds((prev) => {
            if (!ancestors.some((id) => prev.has(id))) return prev;
            const next = new Set(prev);
            ancestors.forEach((id) => next.delete(id));
            return next;
        });
        // `blocks` is deliberately left out: re-running on every block edit
        // would reopen nodes the user collapsed by hand.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedId]);

    /* Runs after the ancestors have rendered open. `block: 'nearest'` is a
       no-op when the row is already visible, so clicks inside the tree don't
       jump the panel. The pending flag stops collapse/expand clicks from
       scrolling on their own. */
    useEffect(() => {
        if (!pendingScrollRef.current || !selectedId || !treeRef.current) return;
        const row = treeRef.current.querySelector(`[data-tree-id="${CSS.escape(String(selectedId))}"]`);
        if (!row) return;
        pendingScrollRef.current = false;
        row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, [selectedId, collapsedIds]);

    /* The wrapper carried `px-3`, which indented every row away from the panel
       edge and cut the full-width selection highlight short of it. The header
       is sticky so the count stays visible down a long tree. */
    return (
        <div ref={treeRef} className="flex h-full flex-col">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Structure</span>
                <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">
                    {blocks.length}
                </span>
            </div>
            <div className="py-1.5">
                {blocks.length > 0 ? (
                    blocks.map((block) => (
                        <TreeItem
                            key={block.id}
                            block={block}
                            selectedId={selectedId}
                            setSelectedId={setSelectedId}
                            handleMoveBlock={handleMoveBlock}
                            collapsedIds={collapsedIds}
                            toggleCollapsed={toggleCollapsed}
                            onRevealBlock={onRevealBlock}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
                        <span className="text-gray-300"><IconLayoutGrid size={32} stroke={1.5} /></span>
                        <span className="text-xs text-gray-500">No blocks added yet</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlockTree;
