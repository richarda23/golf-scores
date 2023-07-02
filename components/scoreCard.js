export default function ScoreCard({ holeDetails, course }) {
    return (
        <div className='container  grid grid-cols-7'>

            <div>Hole</div>
            <div>Par</div>
            <div className="text-center">Score</div>
            <div className="text-center">Putts</div>
            <div>Drive club</div>
            <div>Notes</div>
            <div>Penalties</div>

            {
                holeDetails.map((hole, i) => (
                    <>
                        <div key={hole.holeNumber} className='col-span-1 border-b-2 border-r-2'>
                            {hole.holeNumber}
                        </div>
                        <div key={hole.holeNumber} className='col-span-1 border-b-2 border-r-2'>
                            {course[i].yellowPar}
                        </div>
                        <Score score={hole.score} par={course[i].yellowPar} />

                        <div className='col-span-1 border-b-2 border-r-2 text-center' >
                            {hole.putts}
                        </div>
                        <div className='col-span-1 border-b-2 border-r-2'>
                            {hole.driveClub}
                        </div>
                        <div className='col-span-1 border-b-2 border-r-2'>
                            {hole.notes}
                        </div>
                        <div className='col-span-1 border-b-2 border-r-2'>
                            {hole.penaltiesInScore}
                        </div>

                    </>
                ))
            }
        </div>
    )
}



function Score({ score, par }) {
    let myscore = +score
    let mypar = +par
    let color = 'bg-red-600';
    if (myscore === mypar) {
        color = 'bg-green-300'
    }

    if (myscore === mypar + 1) {
        color = 'bg-orange-300'
    }
    if (myscore === mypar + 2) {
        color = 'bg-orange-500'
    }
    if (myscore < mypar) {
        color = 'bg-yellow-400'
    }

    return (
        <div className={`${color} border-b-2 text-center`}>
            {score}
        </div>
    )

}