import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="bg-[url('/banner_Img.png')] bg-center bg-no-repeat bg-cover h-[400px] w-[100%] " >

                <div className="wrapper columns-1 sm:columns-2">
                    <div className='pt-32 sm:leading-[60px] sm:max-w-[450px]'>
                        <h1 className='text-2xl sm:text-4xl text-white font-bold'>We Build Liquid Markets
                            for Digital Assets</h1>
                        <a
                            className="mt-10 sm:mt-20 inline-flex items-center rounded-full border border-indigo-600 px-8 py-3 text-blue hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring  bg-white"
                            href="/download"
                        >
                            <span className="text-sm font-medium"> DISCOVER MORE</span>
                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                    <div >
                        <img className='pt-32' src="/header.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[url('/bg_Img_down.png')] bg-center bg-no-repeat bg-cover h-[200px] w-[100%]">
            </div>

        </>

    )
}

export default Banner