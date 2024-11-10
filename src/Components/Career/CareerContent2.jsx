import React from 'react'

function CareerContent2() {
    return (
        <div>
            <section className="mt-[50px] md:mt-20">
                <header className="mb-16">
                    <h1 className="text-3xl font-bold mb-5">Our <span className="text-[#caff33]">Values</span></h1>
                    <p className="text-sm text-zinc-500 md:w-[85%]">At ParadosBank, our values form the foundation of our
                        organization and
                        guide our actions. We believe
                        in upholding the highest standards of integrity, delivering exceptional service, and embracing
                        innovation. These values define our culture and shape the way we work together to achieve our goals.
                    </p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div className="pl-5 border-l-[1px] border-lime-600">
                        <header className="mb-5">
                            <h1 className="text-zinc-800 text-2xl md:text-3xl font-bold">Integrity</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500">We conduct ourselves with utmost honesty, transparency, and
                                ethical behavior. We believe in
                                doing what is right for our customers, colleagues, and stakeholders, even when faced with
                                difficult choices.</p>
                        </main>
                    </div>

                    <div className="pl-5 border-l-[1px] border-lime-600">
                        <header className="mb-5">
                            <h1 className="text-zinc-800 text-2xl md:text-3xl font-bold">Customer Centricity</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500">Our customers are at the heart of everything we do. We are
                                dedicated to understanding their needs, providing personalized solutions, and delivering
                                exceptional service that exceeds expectations.</p>
                        </main>
                    </div>

                    <div className="pl-5 border-l-[1px] border-lime-600">
                        <header className="mb-5">
                            <h1 className="text-zinc-800 text-2xl md:text-3xl font-bold">Collaboration</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500">We foster a collaborative and inclusive work environment, where
                                teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives
                                of our employees, we drive innovation and achieve greater success together.</p>
                        </main>
                    </div>

                    <div className="pl-5 border-l-[1px] border-lime-600">
                        <header className="mb-5">
                            <h1 className="text-zinc-800 text-2xl md:text-3xll font-bold">Innovation</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500">We embrace change and constantly seek innovative solutions to
                                meet the evolving needs of our customers. We encourage our employees to think creatively,
                                challenge conventions, and explore new ideas to drive the future of banking.</p>
                        </main>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default CareerContent2
