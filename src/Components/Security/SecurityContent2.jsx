import React from 'react'

function SecurityContent2() {
    return (
        <div>
            <section className="mt-20">
                <header className="mb-10">
                    <header className="mb-4">
                        <h1 className="text-3xl font-bold">How We <span className="text-lime-500">Protect You</span></h1>
                    </header>
                    <main>
                        <p className="text-sm text-zinc-500 md:w-[75%]">At ParadosBank, we prioritize the security and
                            confidentiality of
                            your financial information. Our
                            state-of-the-art encryption technology and stringent data protection measures ensure your assets
                            and transactions are safeguarded at all times</p>
                    </main>
                </header>

                <main className="bg-zinc-950 md:p-7 p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-black p-7 rounded-xl">
                        <header className="flex items-center gap-2 mb-5">
                            <div className="h-10 w-10 rounded-full bg-lime-950 flex justify-center items-center">
                                <div
                                    className="h-9 w-9 rounded-full bg-lime-900 text-lime-500 font-bold flex justify-center items-center">
                                    ⁜</div>
                            </div>
                            <h1 className="text-sm md:text-lg font-semibold">Secure Online Banking Platform</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500 ">Our online banking platform is built with multiple
                                layers of
                                security to safeguard your
                                information. We utilize industry-standard encryption protocols to ensure that your data
                                remains confidential and protected during transmission.</p>
                        </main>
                    </div>

                    <div className="bg-black p-7 rounded-xl">
                        <header className="flex items-center gap-2 mb-5">
                            <div className="h-10 w-10 rounded-full bg-lime-950 flex justify-center items-center">
                                <div
                                    className="h-9 w-9 rounded-full bg-lime-900 text-lime-500 font-bold flex justify-center items-center">
                                    ⁜</div>
                            </div>
                            <h1 className="text-sm md:text-lg font-semibold">Multi-Factor Authentication</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500 ">To enhance the security of your online banking experience, we
                                employ multi-factor authentication. This additional layer of security requires you to
                                provide multiple pieces of identification, such as a password and a one-time verification
                                code, to access your account.</p>
                        </main>
                    </div>

                    <div className="bg-black p-7 rounded-xl">
                        <header className="flex items-center gap-2 md:gap-1 mb-5">
                            <div className="h-10 w-10 rounded-full bg-lime-950 flex justify-center items-center">
                                <div
                                    className="h-9 w-9 rounded-full bg-lime-900 text-lime-500 font-bold flex justify-center items-center">
                                    ⁜</div>
                            </div>
                            <h1 className="text-sm md:text-lg font-semibold">Fraud Monitoring</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500 ">We have sophisticated fraud detection systems in place to
                                monitor your accounts for any suspicious activities. Our dedicated team works around the
                                clock to detect and prevent unauthorized transactions, providing you with peace of mind.</p>
                        </main>
                    </div>

                    <div className="bg-black p-7 rounded-xl">
                        <header className="flex items-center gap-2 md:gap-1 mb-5">
                            <div className="h-10 w-10 rounded-full bg-lime-950 flex justify-center items-center">
                                <div
                                    className="h-9 w-9 rounded-full bg-lime-900 text-lime-500 font-bold flex justify-center items-center">
                                    ⁜</div>
                            </div>
                            <h1 className="text-sm md:text-lg font-semibold">Secure Mobile Banking</h1>
                        </header>
                        <main>
                            <p className="text-sm text-zinc-500 ">Our mobile banking app is designed with the same level of
                                security as our online banking platform. You can confidently access your accounts, make
                                transactions, and manage your finances on the go, knowing that your information is
                                protected.</p>
                        </main>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default SecurityContent2
