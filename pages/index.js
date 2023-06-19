import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='text-2xl'>
        <p>
          Welcome to your golf score recorder
        </p>
      </section>
      <section className='text-center'>
        <Link className='border-l-pink-300' href="/golf/courses">Courses</Link>
      </section>
    </Layout>
  );
}