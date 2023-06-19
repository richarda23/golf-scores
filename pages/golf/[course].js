import StyledLink from "../../components/link";
import Layout from "../../components/layout"
import { getAllCourseNames, getRoundSummaryForCourse } from "../../lib/golfapi";
import Link from "next/link";
export const getStaticPaths = async () => {

    const pathItems = await getAllCourseNames();
    const paths = pathItems.map(p => {
        return {
            params: {
                course: p
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const course = params.course
    const roundSummaries = await getRoundSummaryForCourse(course)
    return { props: { course: roundSummaries } }
}


export default function Round({ course }) {
    if (course.length === 0) {
        return (<div>
            <p>No rounds on this course</p>
            <CourseLink />

        </div>)
    }
    return (
        <Layout>
            <div className="text-2xl m-2">Rounds at {course[0].course}</div>
            <div>
                <div className="m-2 container flex flex-row gap-4 flex-wrap">

                    {course.map(c => (
                        <div key={c.date} className='bg-green-100 p-2 border-orange-400 rounded-lg  border-4 md:grid-cols-4 grid gap-2 '>
                            <div className="text-xl max-h-2 text-zinc-600" key={c.date}>Date:</div>
                            <div className="text-xl text-slate-700" key={c.date}>{c.date}</div>
                            <div className="text-xl text-center">Score:</div>
                            <div className="text-xl bg-red-100">{c.score}</div>
                            <div className="text-xl  text-center">Played with:</div>
                            <div className="text-xl">{c.playedWith}</div>
                            <div></div>
                            <div><StyledLink href={`/golf/details/${c.roundId}`}>Details</StyledLink></div>
                            <div className="col-span-1">Notes:</div>
                            <div className="col-span-3">{c.courseNotes.length === 0 ? 'No notes' : c.courseNotes}</div>

                        </div >
                    ))
                    }
                </div >
                <div><CourseLink /></div>
            </div>
        </Layout>)
    jbgwrRnK4bEepL
}

function CourseLink() {
    return (
        <StyledLink href="/golf/courses">Back to courses</StyledLink>
    )
}