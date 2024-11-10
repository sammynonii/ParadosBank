import React from 'react'

function HomeContent3() {
    return (
        <div>
            <div className="mt-10 md:mt-20">
                <h1 className="text-3xl text-[#caff33] font-bold mb-4">Use Cases</h1>
                <p className="text-zinc-500 mb-7">At ParadosBank, we cater to the diverse needs of individuals and
                    businesses
                    alike,
                    offering a wide range
                    of financial solutions</p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 p-5 bg-zinc-950 rounded-md">
                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⋙</span>
                            </div>
                            <p className="text-center">Managing Personal Finances</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⋘</span>
                            </div>
                            <p className="text-center">Saving For the future</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⫷</span>
                            </div>
                            <p className="text-center">Home Ownership</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⫸</span>
                            </div>
                            <p className="text-center">Education Funding</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between pl-5">
                        <div>
                            <h1 className="font-bold text-xl mb-3">For Individuals</h1>
                            <p className="text-zinc-500 text-sm md:w-[500px]">For individuals, our mortgage services pave
                                the
                                way
                                to
                                homeownership, and
                                our flexible personal
                                loans provide vital support during various life milestones. We also prioritize
                                retirement
                                planning, ensuring a financially secure future for our customers.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
                            <div className="md:border-r-2 md:border-dashed md:border-r-zinc-900">
                                <h1 className="text-[30px] mb-5 text-[#caff33] font-bold">78%</h1>
                                <p className="text-sm text-zinc-500">Secure Retirement Planning</p>
                            </div>

                            <div className="md:border-r-2 md:border-dashed md:border-r-zinc-900">
                                <h1 className="text-[30px] mb-5 text-[#caff33] font-bold">63%</h1>
                                <p className="text-sm text-zinc-500">Manageable Dept Consolidation</p>
                            </div>

                            <div className="">
                                <h1 h1 className="text-[30px] mb-5 text-[#caff33] font-bold">91%</h1>
                                <p className="text-sm text-zinc-500">Reducing Finacial Burdens</p>
                            </div>
                        </div>

                        <button
                            className="mt-6 md:mt-20 bg-zinc-950 border-2 border-neutral-900 rounded-full py-3 px-4 w-fit font-bold">
                            Load More
                        </button>
                    </div>

                    <div className="flex flex-col justify-between pl-5 mt-7">
                        <div>
                            <h1 className="font-bold text-xl mb-3">For Business</h1>
                            <p className="text-zinc-500 text-sm md:w-[500px]"> For businesses, we empower growth with
                                working
                                capital solutions that optimize cash flow, and our tailored financing options fuel
                                business
                                expansion. Whatever your financial aspirations, ParadosBank is committed to providing
                                the
                                right
                                tools and support to achieve them.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
                            <div className="md:border-r-2 md:border-dashed md:border-r-zinc-900">
                                <h1 className="text-[30px] mb-5 text-[#caff33] font-bold">65%</h1>
                                <p className="text-sm text-zinc-500">Cash Flow Management</p>
                            </div>

                            <div className="md:border-r-2 md:border-dashed md:border-r-zinc-900">
                                <h1 className="text-[30px] mb-5 text-[#caff33] font-bold">70%</h1>
                                <p className="text-sm text-zinc-500">Drive Business Expansion</p>
                            </div>

                            <div>
                                <h1 h1 className="text-[30px] mb-5 text-[#caff33] font-bold">45%</h1>
                                <p className="text-sm text-zinc-500">Streamline payroll processing</p>
                            </div>
                        </div>

                        <button
                            className="mt-6 md:mt-20 bg-zinc-950 border-2 border-neutral-900 rounded-full py-3 px-4 w-fit font-bold cursor-pointer">
                            Load More
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-5 bg-zinc-950 rounded-md mt-7">
                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⋙</span>
                            </div>
                            <p className="text-center">Startups and Enterpreneurs</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⋘</span>
                            </div>
                            <p className="text-center">Cash Flow Management</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⫷</span>
                            </div>
                            <p className="text-center">Business Expansion</p>
                        </div>

                        <div className="bg-black rounded-md flex flex-col justify-center items-center p-4 h-[150px]">
                            <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center mb-3">
                                <span
                                    className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center text-[#caff33]">⫸</span>
                            </div>
                            <p className="text-center">Payment Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent3
