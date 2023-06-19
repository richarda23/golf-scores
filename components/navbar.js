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
                <div className="rounded-xl absolute flex-1 p-1 
                right-24   gap-1 border-2  border-red-500 bg-slate-50">
                    <div className="col-span-2">XXX</div>
                    <div className="grid-cols-1">YYY</div>
                    <div className="grid-cols-1">CCC</div>
                    <div className="grid-cols-1">DDD</div>

                </div>

            </div>

        </div>

    )
}
