// https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions

export default function getViewportDim(w) {
    // Use the specified window or the current window if no argument
    w = w || window;
    // This works for all browsers except IE8 and before
    if (w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };
    // For IE (or any browser) in Standards mode
    const d = w.document;
    if (document.compatMode == "CSS1Compat")
        return {
            w: d.documentElement.clientWidth,
            h: d.documentElement.clientHeight
        };
    // For browsers in Quirks mode
    return { w: d.body.clientWidth, h: d.body.clientHeight };
}