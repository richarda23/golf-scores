export interface RoundSummary {
    roundId: number,
    course: string,
    courseNotes: string,
    date: string,
    score: number,
    playedWith: string,
    weatherNotes: string
}

export interface CourseHoleDetails {
    course: string,
    hole: number,
    holeName: string,
    whiteYards: number,
    whitePar: number,
    whiteSi: number,
    yellowYards: number,
    yellowPar: number,
    yellowSi: number,
    redYards: number,
    redPar: number,
    redSi: number
}

export interface RoundHoleDetails {
    roundId: number,
    course: string,
    holeNumber: number,
    score: number,
    putts: number,
    driveClub: string
    notes: string
    penaltiesInScore: number
}