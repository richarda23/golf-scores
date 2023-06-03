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
    return (<div>
        <ul>
            {course.map(c => (
                <li key={c.date}>{c.date} - {c.score} - {c.playedWith} <Link href={`/golf/details/${c.roundId}`}>Details</Link></li>
            ))}
        </ul>
        <div><CourseLink /></div>
    </div>)
}

function CourseLink() {
    return (
        <Link href="/golf/courses">Back to courses</Link>
    )
}