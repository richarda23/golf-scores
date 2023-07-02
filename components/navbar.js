import StyledLink from "./link";

export default function Navbar({ children }) {
    return (
        <div className='flex gap-x-1 justify-start bg-blue-400 col-span-full'>
            <div className="border-2 p-1 bg-slate-200">
                <StyledLink href='/golf/courses'>All courses</StyledLink>
            </div>
            <div className="border-2 p-1 bg-slate-200">
                <StyledLink href='/golf/stats'>Stats</StyledLink>
            </div>
            <div className="ml-auto relative">
                <div className="cursor-pointer  text-4xl p-1 ml-auto active:bg-green-600">
                    &#9776;
                </div>


            </div>

        </div>

    )
}
