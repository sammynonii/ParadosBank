import React from 'react'

function HomeContent1() {
    return (
        <div>
            <div className="mt-6 md:mt-16 md:flex">
                <div className="w-[100%] md:w-[70%]">
                    <div className="flex justify-start">
                        <div className="border-2 border-zinc-900 p-3 rounded-full w-fit md:mb-4 mb-2"><span
                            className="tex-[#caff33] font-bold">√</span> No
                            LLC Required, No Credit
                            Check</div>
                    </div>
                    <h1 className="text-lg md:text-3xl">Welcome to Parados<span className="tex-[#caff33]">Bank</span>
                    </h1>
                    <h1 className="text-lg md:text-3xl md:w-96 md:mb-4">Empowering Your <span
                        className="text-[#caff33]">Financial
                        Journey</span></h1>
                    <p className="text-gray-500 md:w-1/2 w-[100%] md:mb-4">At our bank, our mission is to providing
                        comprehensive banking
                        solution
                        that
                        empowers
                        individuals and
                        businesses to achive their financial goals. We are committed to dekivering personalized and
                        innovative services that priortize our cumstomers needs.</p>
                    <div className=" mt-4 md:mt-8 flex justify-start">
                        <a href="#" className="bg-[#caff33] text-black py-3 px-4 rounded-full font-bold">Open Account</a>
                    </div>
                </div>

                <div className="border-2 border-lime-900 p-5 rounded-lg md:w-[30%] mt-16 md:-ml-20 relative">
                    <div className="mt-4">
                        <h3 className="mb-4">Your Transactions</h3>
                        <div className="flex justify-between items-end border-2 border-zinc-900 rounded-2xl py-2 px-3">
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-[#caff33] rounded-full flex justify-center items-center mr-1">
                                    <span className='text-black'>⇄</span>
                                </div>
                                <div className="">
                                    <p>Transaction</p>
                                    <p>Sammy Jay</p>
                                </div>
                            </div>
                            <p>-$68.00</p>
                        </div>
                        <div className="flex justify-center -mt-2">
                            <div
                                className="flex justify-between items-end border-2 border-zinc-900 border-t-0 rounded-2xl py-2 px-3 w-[95%] opacity-70">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-[#718c26] rounded-full flex justify-center items-center mr-1">
                                        <span className='text-black'>⇄</span>
                                    </div>
                                    <div>
                                        <p>Transaction</p>
                                        <p>Kelly Keys</p>
                                    </div>
                                </div>
                                <p>-$68.00</p>
                            </div>
                        </div>
                        <div className="flex justify-center -mt-2">
                            <div
                                className="flex justify-between items-end border-2 border-zinc-900 border-t-0 rounded-2xl py-2 px-3 w-[87%] opacity-50">
                                <div className="flex items-center">
                                    <div className="h-8 w-8 bg-[#3c471e] rounded-full flex justify-center items-center mr-1">
                                        <span className='text-black'>⇄</span>
                                    </div>
                                    <div>
                                        <p>Transaction</p>
                                        <p>Clinton Bans</p>
                                    </div>
                                </div>
                                <p>-$68.00</p>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h3 className="mb-3">Money Exchange</h3>
                            <div className="grid grid-cols-2">
                                <div className="border-2 border-zinc-900 p-3 rounded-md rounded-r-none rounded-b-none">
                                    <div>
                                        <div className="flex mb-2">
                                            <span className="mr-1">🏁</span>
                                            <p>NIG</p>
                                        </div>
                                        <p className="text-xs">Nigerian Naira</p>
                                    </div>
                                </div>
                                <div
                                    className="border-2 border-zinc-900 p-3 border-l-0 rounded-md rounded-b-none rounded-l-none">
                                    <div>
                                        <div className="flex mb-2">
                                            <span className="mr-1">🏳️‍</span>
                                            <p>USA</p>
                                        </div>
                                        <p className="text-xs">United States Dollars</p>
                                    </div>
                                </div>
                                <div
                                    className=" border-2 border-zinc-900 p-3 border-t-0 rounded-t-none rounded-md rounded-r-none">
                                    <p>5,000</p>
                                </div>
                                <div
                                    className="border-2 border-zinc-900 p-3 border-t-0 rounded-t-none border-l-0 rounded-md rounded-l-none">
                                    <p>12.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-lime-950 text-center text-[#caff33] mt-3 rounded-full py-2 px-3">Exchange</div>

                        <div className="absolute top-0 bg-lime-950 p-3 flex -mt-9 md:-ml-20 ml-14 rounded-lg items-center">
                            <div
                                className="h-8 w-8 rounded-full bg-[#caff33] text-lime-900 text-lg flex justify-center items-center font-bold mr-2">
                                <span>⁜</span>
                            </div>
                            <div>
                                <p>+$5000,00</p>
                                <p>Monthly Income</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className="flex justify-center md:justify-end mt-4">
                <div className="flex gap-2 rounded-full bg-lime-950 w-fit py-2 px-3">
                    <div className="flex text-[10px] md:text-sm text-[#caff33] items-center font-bold">Supported Currency</div>
                    <div className="flex bg-zinc-950 gap-1 rounded-full py-2 px-3">
                        <div className="h-5 w-5 text-sm md:h-8 md:w-8 rounded-full bg-zinc-900 flex justify-center items-center text-[#caff33]">
                            <span>₦</span>
                        </div>
                        <div className="h-5 w-5 text-sm md:text-md md:h-8 md:w-8 rounded-full bg-zinc-900 flex justify-center items-center text-[#caff33]">
                            <span>£</span>
                        </div>
                        <div className="h-5 w-5 text-sm md:text-md md:h-8 md:w-8 rounded-full bg-zinc-900 flex justify-center items-center text-[#caff33]">
                            <span>฿</span>
                        </div>
                        <div className="h-5 w-5 text-sm md:text-md md:h-8 md:w-8 rounded-full bg-zinc-900 flex justify-center items-center text-[#caff33]">
                            <span>€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent1
