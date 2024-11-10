import React from 'react'
import Security2 from '../../assets/images/security2.jpg'

function SecurityContent1() {
    return (
        <div>
            <section className="flex h-[510px] md:h-fit md:justify-end bg-zinc-950 rounded-xl mt-8 p-6 md:p-11 relative">

                <div
                    className="md:w-[47%] absolute left-0 top-44 md:top-10 md:mt-1 md:left-12 bg-black p-8 sm:pb-6 rounded-l-lg rounded-br-[40px] z-10">
                    <header className="mb-5 md:w-[70%]">
                        <h1 className="font-bold text-2xl md:text-3xl">Your Security is Our <span className="text-lime-500">Top
                            Priority</span>
                        </h1>
                    </header>
                    <main>
                        <p className="text-sm text-zinc-500">At ParadosBank, we understand the importance of keeping your
                            financial information secure. We employ robust security measures and advanced technologies to
                            protect your personal and financial data. Rest assured that when you bank with us, your security
                            is our utmost priority.</p>
                    </main>
                </div>

                <div className="w-[600px] h-[350px] flex justify-end">
                    <img className=" object-cover w-full h-full grayscale rounded-lg" src={Security2}
                        alt="security" />
                </div>
            </section>
        </div>
    )
}

export default SecurityContent1
