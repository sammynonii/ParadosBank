import React from 'react'

function CareerContent3() {
    return (
        <div>
            <section className="mt-16 md:mt-20">
                <header className="mb-12 md:mb-16">
                    <h1 className="text-3xl font-bold mb-5">Our <span className="text-[#caff33]">Benefits</span></h1>
                    <p className="text-sm text-zinc-500 md:w-[75%]">At ParadosBank, we value our employees and are dedicated to
                        their
                        well-being and success. We offer a
                        comprehensive range of benefits designed to support their personal and professional growth.</p>
                </header>

                <main className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
                    <div className="md:border-r-[1px] md:border-b-[1px] md:border-lime-950 md:border-dashed md:pb-10 md:pr-10">
                        <div className="bg-zinc-950 p-5 md:p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg">
                            <header className="flex items-center gap-2 mb-5">
                                <div className="h-12 w-12 rounded-full bg-lime-950 flex items-center justify-center">
                                    <div
                                        className="h-10 w-10 rounded-full bg-lime-900 flex items-center justify-center text-2xl text-[#caff33] font-bold">
                                        ©</div>
                                </div>
                                <h1 className="md:text-lg font-semibold">Competitive Compensation</h1>
                            </header>
                            <main>
                                <p className="text-sm text-zinc-500 md:w-[93%]">We provide a competitive salary package that
                                    recognizes the
                                    skills and expertise of our
                                    employees. YourBank believes in rewarding exceptional performance and offering
                                    opportunities
                                    for
                                    financial growth.</p>
                            </main>
                        </div>
                    </div>

                    <div className="md:border-l-[1px] md:border-b-[1px] md:border-lime-950 md:border-dashed md:pb-10 md:pl-10">
                        <div className="bg-zinc-950 p-5 md:p-10 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                            <header className="flex items-center gap-2 mb-5">
                                <div className="h-12 w-12 rounded-full bg-lime-950 flex items-center justify-center">
                                    <div
                                        className="h-10 w-10 rounded-full bg-lime-900 flex items-center justify-center text-2xl text-[#caff33] font-bold">
                                        ©</div>
                                </div>
                                <h1 className="md:text-lg font-semibold">Health and Wellness</h1>
                            </header>
                            <main>
                                <p className="text-sm text-zinc-500">We prioritize the health and well-being of our employees by
                                    providing comprehensive medical, dental, and vision insurance plans. We also offer
                                    wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
                            </main>
                        </div>
                    </div>

                    <div className="md:border-r-[1px] md:border-t-[1px] md:border-lime-950 md:border-dashed md:pt-10 md:pr-10">
                        <div className="bg-zinc-950 p-5 md:p-10 rounded-tr-3xl rounded-bl-3xl rounded-tl-lg rounded-br-lg">
                            <header className="flex items-center gap-2 mb-5">
                                <div className="h-12 w-12 rounded-full bg-lime-950 flex items-center justify-center">
                                    <div
                                        className="h-10 w-10 rounded-full bg-lime-900 flex items-center justify-center text-2xl text-[#caff33] font-bold">
                                        ©</div>
                                </div>
                                <h1 className="md:text-lg font-semibold">Retirement Planning</h1>
                            </header>
                            <main>
                                <p className="text-sm text-zinc-500 md:w-[93%]">YourBank is committed to helping employees plan
                                    for
                                    their
                                    future. We offer a retirement savings plan with a generous employer match to help them
                                    build a secure financial foundation for the long term.</p>
                            </main>
                        </div>
                    </div>

                    <div className="md:border-l-[1px] md:border-t-[1px] md:border-lime-950 md:border-dashed md:pt-10 md:pl-10">
                        <div className="bg-zinc-950 p-5 md:p-10 rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg">
                            <header className="flex items-center gap-2 mb-5">
                                <div className="h-12 w-12 rounded-full bg-lime-950 flex items-center justify-center">
                                    <div
                                        className="h-10 w-10 rounded-full bg-lime-900 flex items-center justify-center text-2xl text-[#caff33] font-bold">
                                        ©</div>
                                </div>
                                <h1 className="md:text-lg font-semibold">Work-Life Balance</h1>
                            </header>
                            <main>
                                <p className="text-sm text-zinc-500">We understand the importance of maintaining a healthy
                                    work-life balance. YourBank offers flexible work arrangements, paid time off, parental
                                    leave, and other programs that support employees in managing their personal and
                                    professional commitments.</p>
                            </main>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default CareerContent3
