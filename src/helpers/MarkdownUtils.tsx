export function shorten(str: string, maxLen: number, separator = ' ') {
    const p = str.split('\n\n').slice(0, maxLen)
    if (p[p.length - 1].startsWith('#')) { p.pop(); }
    return p.join('\n\n').trim() + '...'
    // return str.substring(0, str.lastIndexOf(separator, maxLen));
} //


export function getFirstImage(md: string) {
    const img = /!\[.*\]\((.*)\)/g.exec(md)
    return img && img[1]
}

// .split("<p>").join("").split("</p>").join("").split('<img>').join("").split('\n').filter(v => v)[0])