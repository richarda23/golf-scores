export default function CourseCard({ holes, course }) {
    return (
        <div className='container border-2  grid-cols-3  grid md:grid-cols-12'>
            <div>Hole</div>
            <div className='col-span-2'>Name</div>
            <div>Par</div>
            <div>Yards</div>
            <div>Si</div>
            <div>Par</div>
            <div>Yards</div>
            <div>Si</div>
            <div>Par</div>
            <div>Yards</div>
            <div>Si</div>
            {
                holes.filter(c => c.course === course)
                    .map((hole) => (
                        <>
                            <div key={hole.hole} className='col-span-1'>
                                {hole.hole}.
                            </div>
                            <div className='text-ellipsis col-span-2'>
                                {hole.holeName}
                            </div>
                            <div className='col-span-1 bg-white'>
                                {hole.whitePar}
                            </div>
                            <div className=' bg-white'>
                                {hole.whiteYards}
                            </div>
                            <div className='  bg-white'>
                                {hole.whiteSi}
                            </div>
                            <div className=' bg-yellow-300'>
                                {hole.yellowPar}
                            </div>
                            <div className=' bg-yellow-300'>
                                {hole.yellowYards}
                            </div>
                            <div className=' bg-yellow-300'>
                                {hole.yellowSi}
                            </div>
                            <div className=' bg-red-300'>
                                {hole.redPar}
                            </div>
                            <div className=' bg-red-300'>
                                {hole.redYards}
                            </div>
                            <div className=' bg-red-300'>
                                {hole.redSi}
                            </div>
                        </>
                    ))
            }
        </div>
    )
}