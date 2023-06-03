import { groupBy, distinct } from '../../lib/utils';
import getGoogleSheetRange from '../../lib/googleapi';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps() {

    const range = `Courses!A2:L`;
    const data = await getGoogleSheetRange(process.env.SHEET_ID, range)
    const holes = data.map((row) => (
        {
            course: row[0],
            hole: row[1],
            holeName: row[2],
            yellowYards: row[6],
            yellowPar: row[7],
            yellowSi: row[8]
        }
    )).filter(hole => hole.hole !== '') //remove summary rows
    return {
        props: {
            holes
        }
    }
}


export default function Courses({ holes }) {

    const handleCourseChange = (evt) => {
        setCourse(evt.target.value)
    }
    const courses = distinct(holes.map(h => h.course))
    const [course, setCourse] = useState(courses[0])


    return (
        <>
            <Head>
                <title>Golf courses</title>
            </Head>
            <div>
                <p>Choose a golf course</p>
                <select onChange={handleCourseChange}>
                    {courses.map(c => <option value={c}>{c}</option>)}

                </select>
                {
                    holes.map((hole, i) => (
                        <div>

                            {i % 9 === 0 && hole.course === course && <h1>{hole.course}</h1>}
                            {hole.course === course && <div key={hole.holeName}>
                                {hole.hole}.  {hole.holeName} - {hole.yellowYards}yds - {hole.yellowPar}
                            </div>}
                        </div>
                    ))
                }
            </div>
            <Link href={`/golf/${course}`} > View rounds at this course</Link >

        </>

    )


}