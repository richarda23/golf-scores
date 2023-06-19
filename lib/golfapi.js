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

export const getAllCourses = async () => {
    const range = `Courses!A2:L`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    const courseHoles = {}
    const courses = data.map((row) => (
        {
            course: row[0],
            hole: row[1],
            holeName: row[2],
            whiteYards: row[3],
            whitePar: row[4],
            whiteSi: row[5],
            yellowYards: row[6],
            yellowPar: row[7],
            yellowSi: row[8],
            redYards: row[9],
            redPar: row[10],
            redSi: row[11]
        }
    )).filter(hole => hole.hole !== '')
        .forEach(hole => {
            if (!courseHoles[hole.course]) {
                courseHoles[hole.course] = []
            }
            courseHoles[hole.course].push(hole)
        });//remove summary rows
    return courseHoles;

}