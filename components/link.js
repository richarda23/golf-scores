import Link from "next/link"
export default function StyledLink({ href, children }) {
    return (
        <Link href={href} className='font-medium  text-blue-500 hover:text-sky-900'>{children}</Link>

    )
}
