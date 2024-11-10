import React from 'react'
import AboutImg from '../../assets/images/about.jpg'
function AboutContent1() {
    return (
        <div>
            <section className="flex h-[640px] md:h-fit md:justify-end bg-zinc-950 rounded-xl mt-8 p-6 md:p-11 relative">

                <div
                    className="md:w-[47%] absolute left-0 top-44 md:top-10 md:mt-1 md:left-12 bg-black p-8 sm:pb-6 rounded-l-lg rounded-br-[40px] z-10">
                    <header className="mb-5 w-[80%]">
                        <h1 className="font-semibold">Welcome to ParadosBank</h1>
                        <h1 className="font-bold text-xl md:text-3xl">Where Banking Meets <span className="text-[#caff33]">
                            Excellence!</span>
                        </h1>
                    </header>
                    <main>
                        <p className="text-sm text-zinc-500">At ParadosBank, we believe that banking should be more than just
                            transactions. It should be an experience that empowers individuals and businesses to thrive and
                            reach their financial goals. As a trusted financial institution, we are committed to delivering
                            exceptional banking services that go beyond expectations. With a focus on innovation,
                            personalized solutions, and unwavering integrity, we strive to provide the best banking
                            experience for our valued customers. Join us on this exciting journey and discover a new level
                            of banking excellence.</p>
                    </main>
                </div>

                <div className="w-[600px] h-fit flex justify-end">
                    <img className=" object-cover w-full h-full grayscale rounded-lg" src={AboutImg} alt="about" />
                </div>
            </section>
        </div>
    )
}

export default AboutContent1
