import React from 'react'

function HomeContent4() {
    return (
        <div>
            <section className="mt-10 md:mt-20">
                <header>
                    <h1 className="text-3xl font-bold mb-3">Our <span className="text-[#caff33]">Features</span></h1>
                    <p className="text-zinc-500 w-[100%] md:w-[75%]">Experience a host of powerful features at YourBank,
                        including
                        seamless online
                        banking, secure
                        transactions, and personalized financial insights, all designed to enhance your banking
                        experience.
                    </p>
                </header>
                <main className="flex flex-col md:flex-row gap-4 mt-12">
                    <div className="flex flex-col justify-center gap-5 p-7 bg-zinc-950 rounded-md md:w-[45%] h-fit">
                        <a className="bg-zinc-950 rounded-full py-3 px-5 border-2 border-neutral-900 text-[#caff33] text-center"
                            href="#">Online
                            Banking</a>
                        <a className="bg-zinc-950 rounded-full py-3 px-5 border-2 border-neutral-900 text-center"
                            href="#">Financial
                            Tools</a>
                        <a className="bg-zinc-950 rounded-full py-3 px-5 border-2 border-neutral-900 text-center"
                            href="#">Customer
                            Support</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-zinc-950 rounded-md p-7">
                            <header className="flex justify-between items-center mb-5">
                                <h1 className="font-bold text-md">24/7 Account Access</h1>
                                <div className="text-[#caff33] text-xl">√</div>
                            </header>
                            <main>
                                <p className="text-zinc-500 text-sm">Enjoy the convenience of accessing your accounts
                                    anytime,
                                    anywhere
                                    through our secure
                                    online banking platform. Check balances, transfer funds, and pay bills with ease.
                                </p>
                            </main>
                        </div>

                        <div className="bg-zinc-950 rounded-md p-7">
                            <header className="flex justify-between items-center mb-5">
                                <h1 className="font-bold text-md">Mobile Banking App</h1>
                                <div className="text-[#caff33] text-xl">√</div>
                            </header>
                            <main>
                                <p className="text-zinc-500 text-sm">Stay connected to your finances on the go with our
                                    user-friendly mobile banking app. Easily manage your accounts, deposit checks, and
                                    make
                                    payments from your smartphone or tablet.</p>
                            </main>
                        </div>

                        <div className="bg-zinc-950 rounded-md p-7">
                            <header className="flex justify-between items-center mb-5">
                                <h1 className="font-bold text-md">Secure Transactions</h1>
                                <div className="text-[#caff33] text-xl">√</div>
                            </header>
                            <main>
                                <p className="text-zinc-500 text-sm">Rest assured knowing that your transactions are
                                    protected
                                    by industry-leading security measures. We employ encryption and multi-factor
                                    authentication to safeguard your financial information.</p>
                            </main>
                        </div>

                        <div className="bg-zinc-950 rounded-md p-7">
                            <header className="flex justify-between items-center mb-5">
                                <h1 className="font-bold text-md">Bill Pay and Transfers</h1>
                                <div className="text-[#caff33] text-xl">√</div>
                            </header>
                            <main>
                                <p className="text-zinc-500 text-sm">Save time and avoid late fees with our convenient bill
                                    pay
                                    service. Set up recurring payments or make one-time transfers between your accounts
                                    with
                                    just a few clicks.</p>
                            </main>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default HomeContent4
