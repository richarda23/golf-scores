export const groupBy = (items, keyGetter) => {
    const map = new Map();
    items.forEach(element => {
        const key = keyGetter(element)
        const coll = map.get(key)
        if (!coll) {
            map.set(key, [element])
        } else {
            coll.push(element)
        }
    });
    return map;
}

export const distinct = items => {
    return items.filter((c, i, arr) => arr.indexOf(c) === i);
}

export const roundScore = holes => holes.reduce((sum, x) => sum + +x.score, 0);
export const puttScore = holes => holes.reduce((sum, x) => sum + +x.putts, 0);
