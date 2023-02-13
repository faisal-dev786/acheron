import React from 'react'

const Footer_Banner = () => {
    return (
        <>
            <div className="bg-[url('/footer_img2.png')] mb-[-10px] bg-center bg-no-repeat bg-cover h-[200px] w-[100%]">
            </div>
            <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 bg-[url('/banner_Img.png')] bg-center bg-no-repeat bg-cover h-[550px] w-[100%] " >
                <div></div>
                <div className='wrapper'>
                    <h1 className='text-2xl mb-10 text-white sm:text-4xl font-medium'>Request a consultation today.</h1>
                    <input className='min-w-full sm:min-w-[10px] mb-10 bg-transparent text-white  outline-none border-b-2 border-solid border-[white]' type="text" placeholder='First Name' /> 
                    <input className='min-w-full sm:min-w-[10px] mb-10 ml-0 sm:ml-20 bg-transparent text-white outline-none border-b-2 border-solid border-[white]' type="text" placeholder='Last Name' /> <br />
                    <input className='min-w-full sm:min-w-[460px] mb-10 bg-transparent text-white outline-none border-b-2 border-solid border-[white]' type="email" placeholder='Email' />
                    <input className='min-w-full sm:min-w-[460px] mb-10 bg-transparent text-white outline-none border-b-2 border-solid border-[white]' type="email" placeholder='Company' />
                    
                    <textarea className='min-w-full sm:min-w-[10px] sm:w-[460px]  bg-transparent text-white outline-none border-b-2 border-solid border-[white]' name="" id="" cols="30" placeholder='' rows="2"></textarea>
                    <br />
                    <a
                            className="my-10 inline-flex items-center rounded-full border border-indigo-600 px-8 py-3 text-blue hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring  bg-white"
                            href="/download"
                        >
                            <span className="text-sm font-medium"> Send Message</span>
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
            </div>
            

        </>
    )
}

export default Footer_Banner