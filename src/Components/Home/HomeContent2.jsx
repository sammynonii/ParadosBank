import React from 'react'

function HomeContent2() {
    return (
        <div>
            <div class="mt-10 md:mt-16">
                <h1 class="text-3xl font-bold text-start">Our <span class="text-[#caff33]">Products</span>
                </h1>
                <div class="flex flex-col gap-5 md:justify-between md:flex-row md:items-center mt-5">
                    <p class="w-[100%] md:w-[700px] text-gray-500">Discover a range of comprehensive and customizable
                        banking
                        products
                        at ParadosBank,
                        designed to suit
                        your unique financial needs and aspirations</p>
                    <div class="flex gap-2 w-fit border border-neutral-800 rounded-full bg-[#0a0a0a] py-4 px-3">
                        <div><a class="py-2 px-3 bg-[#caff33] rounded-full font-bold text-black" href="#">For Individuals</a></div>
                        <div><a class="font-bold" href="#">For Businesses</a></div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-5 mt-8 md:grid-cols-3">
                    <div className='p-5 flex flex-col items-center'>
                        <div class="flex justify-center items-center h-16 w-16 rounded-full bg-[#1f211a] font-bold text-2xl text-[#caff33] mb-7">
                            <span className='flex justify-center items-center h-12 w-12 bg-[#323a1b] rounded-full'>℗</span>
                        </div>
                        <div class="font-bold text-lg mb-4">Checking Accounts</div>
                        <p class="text-zinc-500 text-center">Enjoy easy and convenient access to your funds with our
                            range
                            of checking
                            account options.
                            Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                        </p>
                    </div>
                    <div className='flex flex-col items-center md:border-y-0 border-y-[2px] border-y-neutral-900 md:border-x-[2px] md:border-x-neutral-900 p-5'>
                        <div class="flex justify-center items-center h-16 w-16 rounded-full bg-[#1f211a] font-bold text-2xl text-[#caff33] mb-7">
                            <span className='flex justify-center items-center h-12 w-12 bg-[#323a1b] rounded-full'>®</span>
                        </div>
                        <div class="text-center font-bold text-lg mb-4">Saving Accounts</div>
                        <p class="text-zinc-500 text-center">Build your savings with our competitive interest rates and
                            flexible savings
                            account options.
                            Whether you're saving for a specific goal or want to grow your wealth over time, we have the
                            right account for you.</p>
                    </div>
                    <div className='flex flex-col items-center p-5'>
                        <div class="flex justify-center items-center h-16 w-16 rounded-full bg-[#1f211a] font-bold text-2xl text-[#caff33] mb-7">
                            <span className='flex justify-center items-center h-12 w-12 bg-[#323a1b] rounded-full'>⇏</span>
                        </div>
                        <div class="text-center font-bold text-lg mb-4">Loans and Mortgages</div>
                        <p class="text-zinc-500 text-center">Realize your dreams with our flexible loan and mortgage
                            options. From
                            personal loans to home
                            mortgages, our experienced loan officers are here to guide you through the application
                            process
                            and help you secure the funds you need.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent2
