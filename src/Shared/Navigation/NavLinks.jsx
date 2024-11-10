import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
    const [isSmall, setIsSmall] = useState(false)


    const handleIsSmall = () => {
        setIsSmall(!isSmall)
    }
    return (
        <div>
            <header className="flex justify-between items-center py-3 px-7 border-solid border-2 border-zinc-900 rounded-full relative">

                <div className="md:text-xl font-bold sm:text-sm"><Link to="/"><span className="text-[#caff33]">⫷⫸</span>Parados<span
                    className="text-[#caff33]">Bank</span></Link></div>
                <div>
                    <div className='hidden md:block'>
                        <ul className="flex md:flex-row absolute md:mt-0 md:static md:items-center md:gap-5 font-bold">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/career">Careers</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/security">Security</Link></li>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        {isSmall === false ? null : <ul className="flex flex-col absolute font-bold right-0 mt-10 z-20 border border-[#5e6d34] bg-neutral-800 rounded-lg p-3 gap-3">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/career">Careers</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/security">Security</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                        }
                    </div>
                </div>
                <div>
                    <div className='hidden md:block'>
                        <ul
                            className="flex md:flex-row md:mt-0 md:static md:items-center md:gap-5 font-bold">
                            <li className="font-bold"><Link to="/signup">SignUp</Link>
                            </li>
                            <li className="md:bg-[#caff33] md:rounded-3xl md:px-4 md:py-2 md:text-black"><Link
                                to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="cursor-pointer md:hidden" onClick={handleIsSmall}>
                    <div className="h-1 w-6 bg-zinc-800 rounded-full mb-1"></div>
                    <div className="h-1 w-6 bg-zinc-800 rounded-full mb-1"></div>
                    <div className="h-1 w-6 bg-zinc-800 rounded-full"></div>
                </div>
            </header>

        </div>
    )
}

export default NavLinks
