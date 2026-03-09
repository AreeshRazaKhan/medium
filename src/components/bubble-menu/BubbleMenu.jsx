"use client"

import { useState, useCallback } from 'react'
import { BubbleMenu } from '@tiptap/react/menus'
import { LinkPopover, LinkContent } from "@/components/tiptap-ui/link-popover"
import { ColorHighlightPopoverContent } from "@/components/tiptap-ui/color-highlight-popover"
import { HeadingDropdownMenu } from '../tiptap-ui/heading-dropdown-menu'

// --- Icons (inline SVGs, no extra deps) ---
const Icon = ({ d, size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
    </svg>
)

const ICONS = {
    bold: "M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z",
    italic: "M19 4h-9M14 20H5M15 4L9 20",
    underline: "M6 3v7a6 6 0 0 0 12 0V3M4 21h16",
    strike: "M16 4H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6M4 12h16",
    code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
    link: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    highlight: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
    comment: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    turnInto: "M3 6h18M3 12h18M3 18h18",
    moreOptions: "M5 12h.01M12 12h.01M19 12h.01",
    chevronDown: "M6 9l6 6 6-6",
}

const HIGHLIGHT_COLORS = [
    { color: '#fef08a', label: 'Yellow' },
    { color: '#bbf7d0', label: 'Green' },
    { color: '#bfdbfe', label: 'Blue' },
    { color: '#fecaca', label: 'Red' },
    { color: '#e9d5ff', label: 'Purple' },
    { color: '#fed7aa', label: 'Orange' },
    { color: '#f1f5f9', label: 'Gray' },
]


// Separator
const Sep = () => (
    <div style={{ width: 1, height: 16, background: '#e2e8f0', margin: '0 2px', flexShrink: 0 }} />
)

// Single toolbar button
const ToolBtn = ({ onClick, active, title, children, style = {} }) => (
    <button
        type="button"
        title={title}
        onClick={onClick}
        style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 3, padding: '3px 7px', borderRadius: 5, border: 'none', cursor: 'pointer',
            fontSize: 12, fontWeight: 500, fontFamily: 'inherit',
            color: active ? '#2563eb' : '#374151',
            background: active ? '#eff6ff' : 'transparent',
            transition: 'background 0.12s, color 0.12s',
            whiteSpace: 'nowrap',
            ...style,
        }}
        onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f1f5f9' }}
        onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
        {children}
    </button>
)

// Floating sub-panel (for colors, link)
const Panel = ({ children, style = {} }) => (
    <div style={{
        position: 'absolute', top: 'calc(100% + 6px)', left: 0,
        background: '#fff', borderRadius: 8, padding: 10,
        boxShadow: '0 4px 24px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.07)',
        border: '1px solid #e2e8f0', zIndex: 50, minWidth: 160,
        ...style,
    }}>
        {children}
    </div>
)

// Color swatch grid
const ColorGrid = ({ colors, onSelect, isBackground }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, width: 140 }}>
        {colors.map(({ color, label }) => (
            <button key={color} type="button" title={label} onClick={() => onSelect(color)}
                style={{
                    width: 22, height: 22, borderRadius: 5, border: '1.5px solid #e2e8f0',
                    background: isBackground ? color : '#fff', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.1s, border-color 0.1s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.borderColor = '#94a3b8' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#e2e8f0' }}
            >
                {!isBackground && (
                    <span style={{ width: 12, height: 12, borderRadius: 3, background: color, display: 'block' }} />
                )}
            </button>
        ))}
    </div>
)

// Link input panel
const LinkPanel = ({ editor, onClose }) => {
    const [url, setUrl] = useState(editor.getAttributes('link').href || '')

    const apply = () => {
        if (url) editor.chain().focus().setLink({ href: url }).run()
        else editor.chain().focus().unsetLink().run()
        onClose()
    }

    return (
        <Panel style={{ minWidth: 240 }}>
            <div style={{ fontSize: 11, color: '#64748b', marginBottom: 6, fontWeight: 600, letterSpacing: '0.05em' }}>
                LINK URL
            </div>
            <input
                autoFocus value={url} onChange={e => setUrl(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && apply()}
                placeholder="https://..."
                style={{
                    width: '100%', padding: '5px 8px', borderRadius: 6, outline: 'none',
                    border: '1.5px solid #e2e8f0', fontSize: 13, fontFamily: 'inherit',
                    boxSizing: 'border-box', transition: 'border-color 0.15s',
                }}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
            <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <button type="button" onClick={apply}
                    style={{
                        flex: 1, padding: '5px 0', borderRadius: 6, border: 'none',
                        background: '#2563eb', color: '#fff', fontSize: 12, fontWeight: 600,
                        cursor: 'pointer', fontFamily: 'inherit',
                    }}>
                    Apply
                </button>
                {editor.isActive('link') && (
                    <button type="button" onClick={() => { editor.chain().focus().unsetLink().run(); onClose() }}
                        style={{
                            padding: '5px 10px', borderRadius: 6, border: '1px solid #e2e8f0',
                            background: 'transparent', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit',
                        }}>
                        Remove
                    </button>
                )}
            </div>
        </Panel>
    )
}

// --- Main Component ---
export default function BubbleMenuEditor({ editor }) {
    const [openPanel, setOpenPanel] = useState(null) // 'highlight' | 'color' | 'link' | null

    const toggle = useCallback((panel) => {
        setOpenPanel(prev => prev === panel ? null : panel)
    }, [])

    const close = useCallback(() => setOpenPanel(null), [])

    if (!editor) return null

    const fmt = (cmd) => { editor.chain().focus()[cmd]().run(); close() }

    return (
        <BubbleMenu
            editor={editor}
            options={{ placement: 'top', offset: 10, flip: true }}
            shouldShow={({ editor, state }) => {
                const { from, to } = state.selection
                return from !== to && !editor.isActive('image')
            }}
        >
            {/* Wrapper — position:relative so sub-panels anchor correctly */}
            <div style={{ position: 'relative' }} onMouseDown={e => e.stopPropagation()}>

                {/* Main bar */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 1,
                    background: '#ffffff', borderRadius: 8, padding: '4px 5px',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: 13,
                    animation: 'bubbleIn 0.15s ease',
                }}>

                    {/* Text type label */}
                    <HeadingDropdownMenu levels={[2, 3, 4]} />
                    <Sep />

                    <ToolBtn
                        active={!editor.isActive('heading')}
                        title="Normal text"
                        onClick={() => editor.chain().focus().setParagraph().run()}
                    >
                        <span style={{ fontSize: 12, fontWeight: 600 }}>Text</span>
                    </ToolBtn>

                    {/* Core formatting */}
                    <ToolBtn active={editor.isActive('bold')} title="Bold (⌘B)" onClick={() => fmt('toggleBold')}>
                        <Icon d={ICONS.bold} />
                    </ToolBtn>
                    <ToolBtn active={editor.isActive('italic')} title="Italic (⌘I)" onClick={() => fmt('toggleItalic')}>
                        <Icon d={ICONS.italic} />
                    </ToolBtn>
                    <ToolBtn active={editor.isActive('underline')} title="Underline (⌘U)" onClick={() => fmt('toggleUnderline')}>
                        <Icon d={ICONS.underline} />
                    </ToolBtn>
                    <ToolBtn active={editor.isActive('strike')} title="Strikethrough" onClick={() => fmt('toggleStrike')}>
                        <Icon d={ICONS.strike} />
                    </ToolBtn>
                    <ToolBtn active={editor.isActive('code')} title="Inline code" onClick={() => fmt('toggleCode')}>
                        <Icon d={ICONS.code} />
                    </ToolBtn>

                    <Sep />

                    {/* Highlight color */}
                    <ToolBtn
                        active={openPanel === 'highlight' || editor.isActive('highlight')}
                        title="Highlight color"
                        onClick={() => toggle('highlight')}
                    >
                        <span style={{
                            display: 'inline-block', width: 13, height: 13, borderRadius: 3,
                            background: editor.getAttributes('highlight').color || '#fef08a',
                            border: '1px solid #d1d5db',
                        }} />
                        <Icon d={ICONS.chevronDown} size={10} />
                    </ToolBtn>

                    {/* Text color */}
                    <ToolBtn
                        active={openPanel === 'color'}
                        title="Text color"
                        onClick={() => toggle('color')}
                    >
                        <span style={{ position: 'relative', lineHeight: 1 }}>
                            <span style={{ fontSize: 13, fontWeight: 700, color: editor.getAttributes('textStyle')?.color || '#1e293b' }}>A</span>
                            <span style={{
                                position: 'absolute', bottom: -2, left: 0, right: 0, height: 3, borderRadius: 2,
                                background: editor.getAttributes('textStyle')?.color || '#1e293b',
                            }} />
                        </span>
                        <Icon d={ICONS.chevronDown} size={10} />
                    </ToolBtn>

                    <Sep />

                    {/* Link */}
                    <ToolBtn active={editor.isActive('link') || openPanel === 'link'} title="Link (⌘K)" onClick={() => toggle('link')}>
                        <Icon d={ICONS.link} />
                    </ToolBtn>
                </div>

                {/* Sub-panels */}
                {openPanel === 'highlight' && (
                    <Panel>
                        <div style={{ fontSize: 11, color: '#64748b', marginBottom: 6, fontWeight: 600, letterSpacing: '0.05em' }}>HIGHLIGHT</div>
                        <ColorGrid isBackground colors={HIGHLIGHT_COLORS} onSelect={color => {
                            editor.chain().focus().toggleHighlight({ color }).run()
                            close()
                        }} />
                        <button type="button" onClick={() => { editor.chain().focus().unsetHighlight().run(); close() }}
                            style={{ marginTop: 8, width: '100%', padding: '4px 0', borderRadius: 5, border: '1px solid #e2e8f0', background: 'transparent', fontSize: 11, cursor: 'pointer', color: '#64748b', fontFamily: 'inherit' }}>
                            Remove highlight
                        </button>
                    </Panel>
                )}


                {openPanel === 'link' && (
                    <LinkPanel editor={editor} onClose={close} />
                )}
            </div>

            {/* Keyframe for entry animation */}
            <style>{`
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(4px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
        </BubbleMenu>
    )
}