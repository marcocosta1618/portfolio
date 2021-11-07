// get scroll position (%):
export default function getScrollPos() {
    const docElm = document.documentElement,
        pos = Math.round((document.body.scrollTop || docElm.scrollTop || docElm.scrollTop) / (docElm.scrollHeight - docElm.clientHeight) * 100) / 100;
    return pos;
}