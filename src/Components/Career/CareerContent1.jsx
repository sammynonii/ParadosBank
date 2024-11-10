import React from 'react'
import Career2 from '../../assets/images/career2.jpg'

function CareerContent1() {
    return (
        <div>
            <section className="flex h-[570px] md:h-fit md:justify-end bg-zinc-950 rounded-xl mt-8 p-6 md:p-11 relative">

                <div
                    className="md:w-[47%] absolute left-0 top-44 md:top-10 md:mt-1 md:left-12 bg-black p-8 sm:pb-7 rounded-l-lg rounded-br-[40px] z-10">
                    <header className="mb-5 w-[80%]">
                        <h1 className="font-bold text-2xl md:text-3xl">Welcome to <span className="text-[#caff33]">ParadosBank</span>
                            Careers!
                        </h1>
                    </header>
                    <main>
                        <p className="text-sm text-zinc-500">Join our team and embark on a rewarding journey in the
                            banking
                            industry. At ParadosBank, we are
                            committed to fostering a culture of excellence and providing opportunities for professional
                            growth. With a focus on innovation, customer service, and integrity, we strive to make a
                            positive impact in the lives of our customers and communities. Join us today and be a part of
                            our mission to shape the future of banking.</p>
                    </main>
                </div>

                <div className="md:w-[600px] h-fit flex justify-end">
                    <img className=" object-cover w-full h-full md:w-[530px] grayscale rounded-lg" src={Career2} alt="career" />
                </div>
            </section>
        </div>
    )
}

export default CareerContent1
