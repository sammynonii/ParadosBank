import React from 'react'

function FinancialJourney() {
    return (
        <div>
            <section
                className="mt-10 md:mt-20 flex flex-col md:flex-row md:justify-between md:items-center p-12 md:py-20 md:px-12 bg-zinc-950 rounded-xl border-2 border-zinc-900">
                <header className="mb-4">
                    <h1 className="font-bold text-lg md:text-2xl mb-3">Start your financial journey with <span className="text-[#caff33]">ParadosBank today!</span>
                    </h1>
                    <p className="text-zinc-500 text-sm md:w-[80%]">Lorem ipsum dolor sit amet consectetur. Blandit
                        odio
                        semper
                        risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur
                        viverra
                        arcu sed amet cursus purus.</p>
                </header>

                <a className="py-3 px-4 bg-[#caff33] text-black font-semibold rounded-full w-36 h-fit text-center"
                    href="#">Open
                    Account</a>

            </section>
        </div>
    )
}

export default FinancialJourney
