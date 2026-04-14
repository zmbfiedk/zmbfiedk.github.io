## XMB Integration Notes

### File placement
- `Index.html` (home entry) at project root.
- `styles.css` at project root.
- `xmb.js` at project root and loaded at the end of `Index.html`.

### Adjustable constants
In `xmb.js`, change the `CONFIG` object:
- `keyRepeatDelay`: key-repeat debounce (ms)
- `touchThresholdPx`: minimum swipe distance
- `touchVelocityThreshold`: swipe velocity trigger
- `wheelSwitchThreshold`: magnitude before wheel switches section
- `scrollStepRatio`: section scroll step as % of viewport height
- `preserveProjectSelectionOnSectionChange`: keep current disk when leaving/returning Projects
- `animationDuration`: JS-driven scroll animation length

In `styles.css`, change variables in `:root`:
- Theme: `--xmb-bg`, `--xmb-accent`, `--xmb-text`, `--xmb-font-family`
- Motion: `--xmb-duration-fast`, `--xmb-duration`, `--xmb-duration-slow`, `--xmb-ease`
- Sizes: `--xmb-ribbon-item`, `--xmb-project-size`, `--xmb-project-column`

### Accessibility notes
- Main ribbon uses `role="tablist"`; section tiles use `role="tab"`.
- Panels use `role="tabpanel"` and toggle `aria-hidden`.
- Disk selector uses `role="list"`; each disk uses `role="listitem"`.
- Active disk updates `aria-current` and an adaptive `aria-label` with neighbor cues.
- Live region (`#xmbLive`) announces focused section and focused project.
- `prefers-reduced-motion` is respected in CSS.

### Input mapping
- **ArrowLeft / ArrowRight**: move between project disks (Projects section).
- **ArrowUp / ArrowDown**: move between sections.
  - In non-Projects sections, content scrolls first if overflow exists.
  - At top/bottom boundaries, navigation snaps to previous/next section.
- **Touch**: horizontal swipe on project selector moves disks; vertical swipe moves sections.
- **Wheel/Trackpad**:
  - Horizontal wheel over project selector moves disks.
  - Vertical wheel moves section flow; handles boundary snapping.

### JS-disabled fallback
- Panels remain stacked and readable (`noscript` style in `Index.html`).
- Users can navigate with normal page scrolling and links.

### Manual acceptance checklist
1. Load page: Projects focused, first disk selected, preview visible.
2. ArrowLeft/ArrowRight in Projects moves disk one step (no wrap).
3. ArrowUp/ArrowDown changes sections; non-project sections scroll before switching.
4. Rapid alternating left/right does not desync focused disk.
5. Wheel over project selector uses horizontal disk navigation behavior.
6. Touch swipe horizontal on selector changes disk; vertical swipe changes sections.
7. Resize test at desktop/tablet/mobile and `<400px` for compact carousel behavior.
8. Screen reader announces focused section and selected/adjacent disk labels.
