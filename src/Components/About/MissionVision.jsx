import React from 'react'
import SecurityImg from '../../assets/images/security.jpg'

function MissionVision() {
    return (
        <div>
            <section className="mt-16 md:mt-20">
                <header className="mb-10">
                    <header className="mb-5">
                        <h1 className="text-[#caff33] text-3xl font-bold">Mission & Vision</h1>
                    </header>

                    <main>
                        <p className="text-sm text-zinc-500 md:w-[75%]">We envision being a leading force in the industry,
                            driven
                            by
                            innovation, integrity, and inclusivity, creating a brighter financial future for individuals and
                            businesses while maintaining a strong commitment to customer satisfaction and community
                            development.
                        </p>
                    </main>
                </header>

                <main className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
                    <div className="rounded-tl-2xl rounded-tr-2xl px-5 md:px-10 pt-5 md:pt-10 bg-zinc-950">
                        <img className="rounded-tl-2xl rounded-tr-2xl object-cover grayscale" src={SecurityImg}
                            alt="security" />
                    </div>

                    <div className="flex items-center">
                        <div className="md:pl-10 md:border-l-[1px] md:border-lime-700">
                            <header>
                                <h1 className="text-2xl font-bold mb-4">Mission</h1>
                            </header>
                            <main>
                                <p className="text-zinc-500">At ParadosBank, our mission is to empower our customers to achieve
                                    financial success. We
                                    are dedicated to delivering innovative banking solutions that cater to their unique
                                    needs. Through personalized services, expert guidance, and cutting-edge technology, we
                                    aim to build strong, lasting relationships with our customers. Our mission is to be
                                    their trusted partner, helping them navigate their financial journey and realize their
                                    dreams.</p>
                            </main>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="md:pr-10 md:border-r-[1px] md:border-lime-700">
                            <header>
                                <h1 className="text-2xl font-bold mb-4">Vision</h1>
                            </header>
                            <main>
                                <p className="text-zinc-500">Our vision at ParadosBank is to redefine banking by creating a
                                    seamless and personalized experience for our customers. We envision a future where
                                    banking is accessible, transparent, and tailored to individual preferences. Through
                                    continuous innovation and collaboration, we strive to be at the forefront of the
                                    industry, setting new standards for customer-centric banking. Our vision is to be the
                                    preferred financial institution, known for our unwavering commitment to excellence,
                                    trust, and customer satisfaction.</p>
                            </main>
                        </div>
                    </div>
                    <div className="rounded-tl-2xl rounded-tr-2xl px-5 md:px-10 pt-5 md:pt-10 bg-zinc-950">
                        <img className="rounded-tl-2xl rounded-tr-2xl object-cover grayscale" src={SecurityImg}
                            alt="security" />
                    </div>
                </main>
            </section>
        </div>
    )
}

export default MissionVision
