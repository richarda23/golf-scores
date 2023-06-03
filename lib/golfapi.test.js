import { getAllCourseNames } from "./golfapi"
//import { getGoogleSheetRange } from "./googleapi"
jest.mock('./googleapi', () => () => {
    return [
        ['c1', 1, 'Hazel Hill'],
        ['c1', 2, 'Kilbrannan'],
        ['course 2', 1, 'The First hole']
    ]
})
describe('get golf data', () => {
    // beforeEach(() => {
    //     getGoogleSheetRange.mockReset();
    // });
    it('getAllCourseNames', async () => {
        const names = await getAllCourseNames();
        expect(names).toHaveLength(2);
        expect(names).toContain('c1', 'course 2')
    })
})