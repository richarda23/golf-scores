export const groupBy = <T>(items: Array<T>, keyGetter: (x: T) => string | number) => {
    const map = new Map<string | number, T[]>();
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

export const distinct = <T>(items: Array<T>): Array<T> => {
    return items.filter((c, i, arr) => arr.indexOf(c) === i);
}

export const mean = (items: number[]): number => {
    if (!items || items.length === 0) {
        return 0;
    }
    return items.reduce((sum, i) => sum += i) / items.length;
}


export const roundScore = holes => holes.reduce((sum, x) => sum + +x.score, 0);
export const puttScore = holes => holes.reduce((sum, x) => sum + +x.putts, 0);
