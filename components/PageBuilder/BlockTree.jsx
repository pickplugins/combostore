'use client'

import React, { useState } from 'react';
import {
    IconChevronRight,
    IconChevronDown,
    IconGripVertical,
    IconEye,
    IconEyeOff,
    IconLayoutGrid,
    IconHeading,
    IconType,
    IconPointer,
    IconColumns,
    IconVideo,
    IconPhoto,
    IconSlideshow
} from '@tabler/icons-react';

const BlockTree = ({
    blocks,
    selectedId,
    setSelectedId,
    setBlocks,
    handleMoveBlock
}) => {

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

    const TreeItem = ({ block, depth = 0 }) => {
        const [isOpen, setIsOpen] = useState(true);
        const [dragOverPos, setDragOverPos] = useState(null); // 'before', 'after', 'inside', null
        const hasChildren = block?.children && block.children.length > 0;
        const isSelected = selectedId === block.id;

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
                    draggable
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(block.id);
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
                                setIsOpen(!isOpen);
                            }}
                        >
                            {isOpen ? <IconChevronDown size={14} /> : <IconChevronRight size={14} />}
                        </div>
                        {/* `getIcon` was built and then commented out, leaving the
                            tree as a column of undifferentiated text. */}
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
                        {/* <IconEye size={14} className="text-gray-400 hover:text-blue-500" /> */}
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
                            <TreeItem key={child.id} block={child} depth={depth + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    /* The wrapper carried `px-3`, which indented every row away from the panel
       edge and cut the full-width selection highlight short of it. The header
       is sticky so the count stays visible down a long tree. */
    return (
        <div className="flex h-full flex-col">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-3 py-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Structure</span>
                <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-semibold text-gray-600">
                    {blocks.length}
                </span>
            </div>
            <div className="py-1.5">
                {blocks.length > 0 ? (
                    blocks.map((block) => (
                        <TreeItem key={block.id} block={block} />
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
