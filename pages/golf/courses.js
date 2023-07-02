import { useState } from 'react';
import Head from 'next/head';
import StyledLink from '../../components/link';
import Layout from '../../components/layout';
import CourseCard from '../../components/courseCard';
import { getAllCourses } from '../../lib/golfapi';

export async function getServerSideProps() {

    const holes = await getAllCourses();
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
    const courses = Object.getOwnPropertyNames(holes);
    const [course, setCourse] = useState(courses[0])

    return (
        <>
            <Head>
                <title>Golf courses</title>
            </Head>
            <Layout>
                <div >
                    <p className='pb-2'>Choose a golf course</p>
                    <select className='pb-2' onChange={handleCourseChange}>
                        {courses.map(c => <option value={c}>{c}</option>)}

                    </select>
                    <StyledLink href={`/golf/${course}`} > View rounds at this course</StyledLink >

                    <h1 className='text-2xl py-2'>{course} card</h1>
                    <CourseCard holes={holes[course]} course={course} />
                </div>

            </Layout >
        </>
    )
}