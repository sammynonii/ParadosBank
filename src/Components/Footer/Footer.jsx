import React from 'react'
import facebook from '../../assets/images/fb.png'
import twitter from '../../assets/images/twitter.png'
import linkdIn from '../../assets/images/link.jpg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="pt-12 pb-5 px-24 bg-zinc-950 text-white text-center mt-16">
            <header className="mb-10">
                <h1 className="font-bold text-sm md:text-2xl">
                    <span className="text-[#caff33]">⫷⫸</span> ParadosBank
                </h1>
            </header>
            <main className="flex justify-center sm:text-sm items-center gap-5 mb-7">
                <Link to="/">Home</Link>
                <Link to="/career">Careers</Link>
                <Link to="/about">About</Link>
                <Link to="/security">Security</Link>
            </main>
            <main
                className="flex flex-col md:flex-row sm:text-sm gap-5 md:justify-center md:items-center md:gap-10 mb-8 md:border-y-2 md:border-zinc-900 py-7">
                <address>
                    <p>sammynonii@gmail.com</p>
                </address>
                <address>
                    <p>+234 810 4841 354</p>
                </address>
                <address>
                    <p>Samaru, Zaria, Kaduna State, Nigeria.</p>
                </address>
            </main>
            <footer
                className="flex text-sm flex-col items-center md:flex-row gap-4 md:gap-0 md:justify-between md:items-center md:py-3 md:px-5 md:rounded-full md:bg-black md:border-2 md:border-zinc-900">
                <div className="flex gap-1">
                    <div className="h-10 w-10 rounded-full bg-lime-700 flex justify-center items-center">
                        <Link to='#'> <img className=" h-7 w-7 object-cover" src={facebook} alt="facebook" /></Link>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-lime-700 flex justify-center items-center">
                        <Link to='#'><img className=" h-9 w-9 object-cover" src={twitter} alt="twitter" /></Link>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-lime-700 flex justify-center items-center">
                        <Link to='#'><img className=" h-7 w-7 rounded-full object-cover" src={linkdIn} alt="linkedin" /></Link>
                    </div>
                </div>

                <p className="text-zinc-500">ParadosBank All Rights Reserved</p>

                <p className="text-zinc-500">Privacy Policy | Terms of Service</p>
            </footer>
        </footer>
    )
}

export default Footer
