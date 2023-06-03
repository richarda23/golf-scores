import getGoogleSheetRange from "./googleapi";
import { distinct } from "./utils";
const RoundSheet = 'Rounds'
const CoursesSheet = 'Courses'
const HoleScoreSheet = 'HoleScores'
export const getAllCourseNames = async () => {
    const range = `${CoursesSheet}!A2:A`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    return distinct(data.map(d => d[0]))
}

const roundSummaryRowMapper = (row) => (
    {
        roundId: row[0],
        course: row[1],
        courseNotes: row[2] ?? '',
        date: row[3],
        score: row[4],
        playedWith: row[5] ?? 'Solo',
        weatherNotes: row[6] ?? '',
    });

export const getRoundSummaryForCourse = async (course) => {
    const range = `${RoundSheet}!A2:G`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    const byCourse = data.filter(row => row[1] === course)
    console.log(byCourse)
    return byCourse.map(roundSummaryRowMapper)
}

export const getRoundSummaries = async () => {
    const range = `${RoundSheet}!A2:G`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    return data.map(roundSummaryRowMapper)
}

export const getRoundDetails = async (roundId) => {
    const range = `${HoleScoreSheet}!A2:H`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    const byRound = data.filter(row => row[0] === roundId)
    return byRound.map(row => {
        return {
            roundId: +row[0],
            course: row[1],
            holeNumber: row[2] ?? '',
            score: row[3],
            putts: row[4] ?? '',
            driveClub: row[5] ?? '',
            notes: row[6] ?? '',
            penaltiesInScore: row[7] ?? '',
        }
    })
}