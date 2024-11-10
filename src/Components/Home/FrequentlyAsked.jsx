import React from 'react'

function FrequentlyAsked() {
    return (
        <div>
            <section className="mt-10 md:mt-20">
                <header>
                    <h1 className="text-[#caff33] text-3xl font-bold mb-4">Frequently <span className="text-white">Asked
                        Questions</span>
                    </h1>
                    <p className="text-zinc-500">Still you have any questions? Contact our Team via support@paradosbank.com
                    </p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <div className="p-8 bg-zinc-950 rounded-md">
                        <header>
                            <h1 className="font-bold pb-4 border-b-2 border-neutral-900 mb-5">How do I open an account with
                                ParadosBank?</h1>
                        </header>
                        <main>
                            <p className="text-zinc-500 text-sm">Opening an account with ParadosBank is easy. Simply visit
                                our
                                website and
                                click on the "Open an
                                Account" button. Follow the prompts, provide the required information, and complete the
                                application process. If you have any questions or need assistance, our customer support
                                team
                                is available to help.</p>
                        </main>
                    </div>

                    <div className="p-8 bg-zinc-950 rounded-md">
                        <header>
                            <h1 className="font-bold pb-4 border-b-2 border-neutral-900 mb-5">What documents do I need to
                                provide to apply for a loan?</h1>
                        </header>
                        <main>
                            <p className="text-zinc-500 text-sm">The documents required for a loan application may vary
                                depending on the type of loan you are applying for. Generally, you will need to provide
                                identification documents (such as a passport or driver's license), proof of income (such
                                as
                                pay stubs or tax returns), and information about the collateral (if applicable). Our
                                loan
                                officers will guide you through the specific requirements during the application
                                process.
                            </p>
                        </main>
                    </div>

                    <div className="p-8 bg-zinc-950 rounded-md">
                        <header>
                            <h1 className="font-bold pb-4 border-b-2 border-neutral-900 mb-5">How can I access my accounts
                                online?</h1>
                        </header>
                        <main className="md:relative md:overflow-hidden md:max-h-32">
                            <p className="text-zinc-500 text-sm">Accessing your accounts online is simple and secure. Visit
                                our
                                website and click on the "Login" button. Enter your username and password to access your
                                accounts. If you haven't registered for online banking, click on the "Enroll Now" button
                                and
                                follow the registration process. If you need assistance, our customer support team is
                                available to guide you.</p>
                            <div
                                className="hidden md:block absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent">
                            </div>
                        </main>
                    </div>

                    <div className="p-8 bg-zinc-950 rounded-md">
                        <header>
                            <h1 className="font-bold pb-4 border-b-2 border-neutral-900 mb-5">Are my transactions and
                                personal
                                information secure?</h1>
                        </header>
                        <main className="relative overflow-hidden max-h-32">
                            <p className="text-zinc-500 text-sm">At ParadosBank, we prioritize the security of your
                                transactions
                                and personal information. We employ industry-leading encryption and multi-factor
                                authentication to ensure that your data is protected. Additionally, we regularly update
                                our
                                security measures to stay ahead of emerging threats. You can bank with confidence
                                knowing
                                that we have robust security systems in place.</p>
                            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent">
                            </div>
                        </main>
                    </div>
                </main>
                <div className="flex justify-center mt-5 cursor-pointer">
                    <div className="bg-zinc-950 rounded-full py-3 px-4">Load All FAQ's v</div>
                </div>
            </section>
        </div>
    )
}

export default FrequentlyAsked
