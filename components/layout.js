import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './navbar';
import Footer from './footer';
import Content from './content';

const name = 'Your Name';
export const siteTitle = 'Golf scores';

export default function Layout({ children }) {
    return (
        <div className='container m-auto grid grid-cols-1 h-600 md:grid-cols-6 '>
            <Navbar />
            <Content>{children}</Content>
            <Footer />
        </div>
    );
}