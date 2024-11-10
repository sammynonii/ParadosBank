import React from 'react'
import Facebook from '../../assets/images/f.png'
import Google from '../../assets/images/go.png'
import Apple from '../../assets/images/ap.png'
import { Link } from 'react-router-dom'

function LoginContent1() {
    return (
        <div>
            <section className="flex justify-center mt-10">
                <section className="bg-zinc-950 rounded-xl w-[95%] md:w-[85%] p-5 md:p-10 flex flex-col items-center gap-10">
                    <header>
                        <header className="mb-3">
                            <h1 className="text-xl text-[#caff33] text-center font-bold">Login</h1>
                        </header>
                        <main>
                            <p className="text-zinc-500 text-center">Welcome back! Please log in to access your account.</p>
                        </main>
                    </header>

                    <main>
                        <form action="post">
                            <div className="flex flex-col md:flex-row gap-3 md:gap-2 mb-5">
                                <input
                                    className="focus:outline-none py-3 px-3 rounded-full bg-black w-[100%] md:w-[210px] border-[1px] border-zinc-700"
                                    type="email" placeholder="Enter your Email" />
                                <input
                                    className="focus:outline-none py-3 px-3 rounded-full bg-black w-[100%] md:w-[210px] border-[1px] border-zinc-700"
                                    type="password" placeholder="Enter your Password" />
                            </div>
                            <div className="flex justify-center mb-5">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="flex flex-col gap-3 items-center mb-5">
                                <button
                                    className="bg-[#caff33] text-black py-3 px-3 rounded-full font-semibold block w-[100%] md:w-[300px]"
                                    type="submit">Login</button>
                                <button className="bg-zinc-900 py-3 px-3 rounded-full font-semibold block w-[100%] md:w-[300px]"
                                    type="submit">SignUp</button>
                            </div>
                            <div className="flex justify-center mb-5">
                                <div className="text-zinc-500 flex items-center gap-2">
                                    <div className="h-[2px] w-10 md:w-20 bg-zinc-800"></div>
                                    <p>Or Continue with</p>
                                    <div className="h-[2px] w-10 md:w-20 bg-zinc-800"></div>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-center">
                                <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center">
                                    <div className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center">
                                        <Link to='#'><img className='h-5 w-5' src={Google} alt="google" /></Link>
                                    </div>
                                </div>

                                <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center">
                                    <div className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center">
                                        <Link to='#'><img className='h-5 w-5' src={Facebook} alt="facebook" /></Link>
                                    </div>
                                </div>
                                <div className="bg-lime-950 h-10 w-10 rounded-full flex justify-center items-center">
                                    <div className="bg-lime-900 h-8 w-8 rounded-full flex justify-center items-center">
                                        <Link to='#'><img src={Apple} alt="apple" /></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </main>
                </section>
            </section>
        </div>
    )
}

export default LoginContent1
