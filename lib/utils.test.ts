import { distinct, groupBy, roundScore } from "./utils"

describe("util function tests", () => {
    describe('distinct elements of array', () => {
        it('handles empty array', () => {
            expect(distinct([])).toHaveLength(0)
        });

        it('removes duplicates', () => {
            expect(distinct(['a', 'a', 'b', 'b'])).toHaveLength(2)
            expect(distinct(['a', 'a', 'b', 'b'])[0]).toBe('a')
        })
    });

    describe('group by', () => {
        it('returns empty map for empty array', () => {
            const empty: Array<{ a: string }> = []
            const map = groupBy(empty, null)
            const mapAssArray = map.keys()
            expect([...mapAssArray]).toHaveLength(0)
        });

        const items = [
            { a: 1, b: 23 },
            { a: 1, b: 24 },
            { a: 1, b: 25 },
            { a: 2, b: 33 },
            { a: 2, b: 35 },
            { a: 2, b: 35 },
            { a: 2, b: 36 },
        ]
        it('returns grouped items', () => {
            const groupedMap = groupBy(items, i => i.a)
            expect([...groupedMap.keys()]).toHaveLength(2)
            expect(groupedMap.get(1)).toHaveLength(3)
            expect(groupedMap.get(2)).toHaveLength(4)
            expect(groupedMap.get(1)[0].b).toBe(23)
        })
    });

    describe('round score', () => {
        it('sums score of round', () => {
            const data = [
                { score: 3 },
                { score: 4 },
                { score: 5 },
            ];
            expect(roundScore(data)).toBe(12);
        })
    })

})