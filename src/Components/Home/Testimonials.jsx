import React from 'react'
import { Link } from 'react-router-dom'


function Testimonials() {
    return (
        <div>
            <section className="mt-10 md:mt-12">
                <header>
                    <h1 className="text-3xl font-bold mb-4">Our <span className="text-[#caff33]">Testimonials</span></h1>
                    <div className="flex flex-col md:flex-row gap-4 md:justify-between">
                        <p className="text-sm text-zinc-500 md:w-[70%]">Discover how ParadosBank has transformed lives with
                            innovative
                            digital solutions and personalized
                            customer service. See why our clients trust us for a secure and prosperous financial journey
                        </p>
                        <div className="flex items-center w-fit gap-3 py-3 px-4 bg-zinc-950 rounded-full font-bold">
                            <Link className="bg-[#caff33] rounded-full py-2 px-3 text-black" to="#">For Individuals</Link>
                            <Link to="#">For Businesses</Link>
                        </div>
                    </div>
                </header>

                <main className="mt-5 md:mt-9 flex justify-center">
                    <section className="grid grid-cols-1 md:grid-cols-3 md:justify-center md:items-center gap-2 relative">
                        <div
                            className="hidden md:flex md:justify-center md:items-center md:bg-zinc-950 md:h-10 md:w-10 md:rounded-full md:border-2 md:border-neutral-900 md:absolute md:left-[-40px] md:text-[#caff33] md:font-bold md:cursor-pointer">
                            ⋘
                        </div>
                        <div
                            className="md:hidden flex justify-center items-center bg-zinc-950 h-10 w-10 rounded-full border-2 border-neutral-900 absolute left-0 bottom-0 text-[#caff33] font-bold cursor-pointer">
                            ⨇
                        </div>

                        <div
                            className="flex flex-col justify-between items-center md:bg-gradient-to-l md:w-[350px] md:from-zinc-100 md:to-transparent md:bg-clip-text md:text-transparent">
                            <div className="mb-4 text-lime-700 text-3xl">"</div>
                            <p className="text-center text-sm mb-5">
                                ParadosBank has been my trusted financial partner
                                for years.
                                Their
                                personalized service and
                                innovative digital bankings solutions have made managing my finances a breeze.</p>
                            <div className="text-[#caff33] font-bold">Sara T.</div>
                        </div>

                        <div className="flex flex-col justify-between items-center md:w-[350px]">
                            <div className="mb-4 text-lime-700 text-3xl">"</div>
                            <div className="text-center text-sm mb-5">I recently started my own business, and YourBank has
                                been
                                instrumental in helping me set up my business accounts and secure the financing I
                                needed.
                                Their expert guidance and tailored solutions have been invaluable.</div>
                            <div className="text-[#caff33] font-bold">John D.
                            </div>
                        </div>


                        <div
                            className="flex flex-col justify-between items-center md:w-[350px] bg-gradient-to-b md:bg-gradient-to-r from-zinc-50 md:from-zinc-100 to-transparent md:to-transparent bg-clip-text md:bg-clip-text text-transparent md:text-transparent">
                            <div className="mb-4 text-lime-700 text-3xl">"</div>
                            <div className="text-center text-sm mb-5">
                                ParadosBank has been my trusted financial partner
                                for years. Their personalized service and
                                innovative digital bankings solutions have made managing my finances a breeze.</div>
                            <div className="text-[#caff33] font-bold">Sara T.</div>
                        </div>

                        <div
                            className="hidden md:flex md:justify-center md:items-center md:bg-zinc-950 md:h-10 w-10 md:rounded-full md:border-2 md:border-neutral-900 md:absolute md:right-[-40px] md:text-[#caff33] md:font-bold md:cursor-pointer">
                            ⋙</div>
                        <div
                            className="md:hidden flex justify-center items-center bg-zinc-950 h-10 w-10 rounded-full border-2 border-neutral-900 absolute bottom-0 right-0 text-[#caff33] font-bold cursor-pointer">
                            ⨈
                        </div>
                    </section>
                </main>
            </section>

        </div >
    )
}

export default Testimonials
