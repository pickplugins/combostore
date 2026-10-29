'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBlockquote,
  IconBold,
  IconCheck,
  IconClearFormatting,
  IconCode,
  IconH2,
  IconH3,
  IconItalic,
  IconLink,
  IconLinkOff,
  IconList,
  IconListNumbers,
  IconMinus,
  IconInfoCircle,
  IconSourceCode,
  IconStrikethrough,
  IconUnderline,
  IconX,
} from "@tabler/icons-react";

/**
 * A rich-text editor that reads and writes an HTML string.
 *
 * Built on TipTap, whose StarterKit (v3) already registers everything the
 * toolbar below drives - Bold, Italic, Underline, Strike, Heading, BulletList,
 * OrderedList, Blockquote, Code, HorizontalRule, Link and UndoRedo - so no
 * extra extensions are imported.
 *
 * `value` is HTML and `onChange` hands back HTML, which keeps it a drop-in
 * replacement for the `<textarea>` these fields used to be: the surrounding
 * screens can go on storing `post_content` exactly as before.
 *
 * Two behaviours worth knowing about:
 *
 *   - An empty document reports as `<p></p>` from TipTap. That would write a
 *     stray paragraph into a field the user had just cleared, so an empty
 *     editor emits "" instead.
 *   - `immediatelyRender: false` is required under Next: TipTap renders the
 *     document on mount, and rendering it during SSR instead produces a
 *     hydration mismatch.
 *
 * The HTML toggle swaps the editor for a plain textarea on the same value, so
 * markup the toolbar cannot express - an embed, a table, a class on a div -
 * can still be pasted in and edited by hand.
 */

const BTN =
  "flex size-8 items-center justify-center rounded-md border border-transparent text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40";

const BTN_ON =
  "flex size-8 items-center justify-center rounded-md border border-[#634FE5]/30 bg-[#634FE5]/10 text-[#634FE5] transition-colors";

const SEP = "mx-1 h-5 w-px shrink-0 bg-gray-200";

/*
  Markup StarterKit's schema cannot represent. ProseMirror parses HTML into a
  document and throws away whatever the schema does not model, so opening a
  description that contains one of these in the rich editor and then typing
  would quietly drop it on the next save. Image, Table and TextStyle are not
  installed in this project, which is why they are on the list.

  When any of these turn up, the field opens in HTML view instead and says so,
  and the markup survives because nothing has parsed it.
*/
const UNSUPPORTED = /<\s*(table|thead|tbody|tfoot|tr|th|td|img|picture|source|iframe|video|audio|embed|object|svg|canvas|figure|figcaption|form|input|select|button|label|details|summary|style|script)\b/i;

const hasUnsupported = (html) => typeof html === "string" && UNSUPPORTED.test(html);

/*
  Content styling. There is no typography plugin in this project, so the
  editor's own elements are styled here through child variants - which also
  keeps it scoped to the editor rather than leaking into the dashboard.
*/
const PROSE = [
  "focus:outline-none",
  "[&_p]:my-2 [&_p]:leading-relaxed",
  "[&_h1]:mb-2 [&_h1]:mt-4 [&_h1]:text-2xl [&_h1]:font-semibold",
  "[&_h2]:mb-2 [&_h2]:mt-4 [&_h2]:text-xl [&_h2]:font-semibold",
  "[&_h3]:mb-2 [&_h3]:mt-3 [&_h3]:text-lg [&_h3]:font-semibold",
  "[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-6",
  "[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_li]:my-1",
  "[&_blockquote]:my-3 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-200 [&_blockquote]:pl-3 [&_blockquote]:text-gray-600",
  "[&_a]:text-[#634FE5] [&_a]:underline",
  "[&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[13px]",
  "[&_pre]:my-3 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-gray-900 [&_pre]:p-3 [&_pre]:text-[13px] [&_pre]:text-gray-100",
  "[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit",
  "[&_hr]:my-4 [&_hr]:border-gray-200",
  "[&_img]:my-2 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-lg",
  "[&_table]:my-3 [&_table]:w-full [&_table]:border-collapse",
  "[&_td]:border [&_td]:border-gray-200 [&_td]:p-2",
  "[&_th]:border [&_th]:border-gray-200 [&_th]:bg-gray-50 [&_th]:p-2",
].join(" ");

const HtmlEditor = ({
  value = "",
  onChange,
  placeholder = "Write the product description…",
  minHeight = 220,
  disabled = false,
}) => {
  const [showSource, setShowSource] = useState(() => hasUnsupported(value));
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  /*
    Whether this field has ever been handed markup the toolbar would destroy.
    Sticky rather than derived from `value`, so the warning does not flicker
    away the moment an edit removes the last table row.
  */
  const [richMarkup, setRichMarkup] = useState(() => hasUnsupported(value));

  /*
    The last HTML this component emitted. `value` comes back down as a prop on
    every keystroke, and without this the sync effect below would treat the
    echo as an outside edit and reset the document - moving the caret to the
    end of the field as you type.
  */
  const emitted = useRef(value || "");

  const emit = useCallback(
    (editor) => {
      const html = editor.isEmpty ? "" : editor.getHTML();
      emitted.current = html;
      if (onChange) onChange(html);
    },
    [onChange]
  );

  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({
          link: { openOnClick: false, autolink: true, HTMLAttributes: { rel: "noreferrer", target: "_blank" } },
        }),
      ],
      content: value || "",
      editable: !disabled,
      immediatelyRender: false,
      editorProps: { attributes: { class: PROSE } },
      onUpdate: ({ editor }) => emit(editor),
    },
    []
  );

  /* Content arriving from outside - the product loads after mount, or another
     control rewrites the field - is pushed into the document. */
  useEffect(() => {
    if (!editor) return;
    const incoming = value || "";
    if (incoming === emitted.current) return;
    if (incoming === editor.getHTML()) return;

    /*
      `currentObject` is null until the product request comes back, so the
      first real content usually arrives here rather than at mount - this is
      where an existing description gets checked.
    */
    if (hasUnsupported(incoming) && !richMarkup) {
      setRichMarkup(true);
      setShowSource(true);
    }

    emitted.current = incoming;
    editor.commands.setContent(incoming, { emitUpdate: false });
  }, [value, editor, richMarkup]);

  useEffect(() => {
    if (editor) editor.setEditable(!disabled);
  }, [disabled, editor]);

  const applyLink = () => {
    const href = linkUrl.trim();
    if (!href) return;
    editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setLinkOpen(false);
    setLinkUrl("");
  };

  const openLink = () => {
    if (!editor) return;
    setLinkUrl(editor.getAttributes("link")?.href || "");
    setLinkOpen((open) => !open);
  };

  /* Rendered before the editor exists so the field does not jump on mount. */
  if (!editor) {
    return (
      <div
        className="w-full animate-pulse rounded-lg border border-gray-300 bg-gray-50"
        style={{ minHeight: minHeight + 42 }}
      />
    );
  }

  const Tool = ({ on, onClick, title, disabled: off, children }) => (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={!!on}
      disabled={off || disabled}
      onClick={onClick}
      className={on ? BTN_ON : BTN}>
      {children}
    </button>
  );

  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-300 bg-white transition-colors focus-within:border-[#634FE5] focus-within:ring-2 focus-within:ring-[#634FE5]/20">

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
        <Tool title="Bold" on={editor.isActive("bold")} off={showSource}
          onClick={() => editor.chain().focus().toggleBold().run()}>
          <IconBold size={16} />
        </Tool>
        <Tool title="Italic" on={editor.isActive("italic")} off={showSource}
          onClick={() => editor.chain().focus().toggleItalic().run()}>
          <IconItalic size={16} />
        </Tool>
        <Tool title="Underline" on={editor.isActive("underline")} off={showSource}
          onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <IconUnderline size={16} />
        </Tool>
        <Tool title="Strikethrough" on={editor.isActive("strike")} off={showSource}
          onClick={() => editor.chain().focus().toggleStrike().run()}>
          <IconStrikethrough size={16} />
        </Tool>

        <span className={SEP} />

        <Tool title="Heading 2" on={editor.isActive("heading", { level: 2 })} off={showSource}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          <IconH2 size={16} />
        </Tool>
        <Tool title="Heading 3" on={editor.isActive("heading", { level: 3 })} off={showSource}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          <IconH3 size={16} />
        </Tool>

        <span className={SEP} />

        <Tool title="Bullet list" on={editor.isActive("bulletList")} off={showSource}
          onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <IconList size={16} />
        </Tool>
        <Tool title="Numbered list" on={editor.isActive("orderedList")} off={showSource}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <IconListNumbers size={16} />
        </Tool>
        <Tool title="Quote" on={editor.isActive("blockquote")} off={showSource}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <IconBlockquote size={16} />
        </Tool>
        <Tool title="Code" on={editor.isActive("code")} off={showSource}
          onClick={() => editor.chain().focus().toggleCode().run()}>
          <IconCode size={16} />
        </Tool>
        <Tool title="Divider" off={showSource}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <IconMinus size={16} />
        </Tool>

        <span className={SEP} />

        <Tool title="Add link" on={editor.isActive("link") || linkOpen} off={showSource} onClick={openLink}>
          <IconLink size={16} />
        </Tool>
        <Tool title="Remove link" off={showSource || !editor.isActive("link")}
          onClick={() => editor.chain().focus().unsetLink().run()}>
          <IconLinkOff size={16} />
        </Tool>
        <Tool title="Clear formatting" off={showSource}
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}>
          <IconClearFormatting size={16} />
        </Tool>

        <span className={SEP} />

        <Tool title="Undo" off={showSource || !editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}>
          <IconArrowBackUp size={16} />
        </Tool>
        <Tool title="Redo" off={showSource || !editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}>
          <IconArrowForwardUp size={16} />
        </Tool>

        {/* Source view, pushed to the far end. */}
        <button
          type="button"
          title="Edit HTML source"
          aria-pressed={showSource}
          onClick={() => setShowSource((s) => !s)}
          className={`ml-auto flex items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
            showSource
              ? "bg-[#634FE5]/10 text-[#634FE5]"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}>
          <IconSourceCode size={15} />
          HTML
        </button>
      </div>

      {/* Why this field opened as HTML. */}
      {richMarkup && (
        <div className="flex items-start gap-2 border-b border-amber-200 bg-amber-50 px-3 py-2">
          <IconInfoCircle size={15} className="mt-px shrink-0 text-amber-600" />
          <p className="text-xs leading-relaxed text-amber-800">
            This description contains markup the toolbar cannot edit - a table, an image,
            an embed or similar. It is shown as HTML so none of it is lost. Switching to
            rich text and editing will drop that markup.
          </p>
        </div>
      )}

      {/* Link bar - an inline row rather than a window.prompt, which blocks
          the page and cannot be cancelled with Escape. */}
      {linkOpen && !showSource && (
        <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-2 py-2">
          <input
            type="url"
            autoFocus
            value={linkUrl}
            placeholder="https://example.com"
            onChange={(ev) => setLinkUrl(ev.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") { ev.preventDefault(); applyLink(); }
              if (ev.key === "Escape") { ev.preventDefault(); setLinkOpen(false); }
            }}
            className="!shadow-none !border !border-gray-300 w-full rounded-lg bg-white px-3 py-1.5 text-sm transition-colors focus:!border-[#634FE5]"
          />
          <button type="button" onClick={applyLink} title="Apply link"
            className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#634FE5] text-white transition-opacity hover:opacity-90">
            <IconCheck size={16} />
          </button>
          <button type="button" onClick={() => setLinkOpen(false)} title="Cancel"
            className="flex size-8 shrink-0 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100">
            <IconX size={16} />
          </button>
        </div>
      )}

      {/* Body */}
      {showSource ? (
        <textarea
          spellCheck={false}
          disabled={disabled}
          value={value || ""}
          placeholder="<p>Markup goes here…</p>"
          onChange={(ev) => {
            const html = ev.target.value;
            emitted.current = html;
            if (onChange) onChange(html);
          }}
          className="!shadow-none !rounded-none !border-0 w-full resize-y bg-white px-3 py-2 font-mono text-[13px] leading-relaxed text-gray-800"
          style={{ minHeight }}
        />
      ) : (
        <div
          className="cursor-text px-3 py-2 text-sm text-gray-800"
          style={{ minHeight }}
          onClick={() => editor.chain().focus().run()}>
          <EditorContent editor={editor} />
          {editor.isEmpty && (
            <p className="pointer-events-none -mt-[1.85rem] select-none text-sm text-gray-400">
              {placeholder}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HtmlEditor;
