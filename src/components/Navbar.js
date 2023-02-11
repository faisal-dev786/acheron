import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' bg-[#2334D8]'>
                <header className=" wrapper flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  text-sm py-4">
                    <nav
                        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
                        aria-label="Global"
                    >
                        <div className="flex items-center justify-between">
                            <a className="flex-none text-xl font-semibold text-white" href="#">
                                <img src="/barnd_name.png" alt="" />
                            </a>
                            <div className="sm:hidden">
                                <button
                                    type="button"
                                    className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.25] font-medium bg-blue-600 text-white shadow-sm align-middle hover:bg-white/[.15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white transition-all text-sm"
                                    data-hs-collapse="#navbar-primary"
                                    aria-controls="navbar-primary"
                                    aria-label="Toggle navigation"
                                >
                                    <svg
                                        className="hs-collapse-open:hidden w-4 h-4"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                        />
                                    </svg>
                                    <svg
                                        className="hs-collapse-open:block hidden w-4 h-4"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            id="navbar-primary"
                            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                        >
                            <div className="flex flex-col   gap-x-[50px] mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                                <a className="text-1xl sm:text-[20px]  font-medium text-white" href="#" aria-current="page">
                                    HOME
                                </a>
                                <a className="text-1xl sm:text-[20px] font-medium text-gray-300 hover:text-white" href="#">
                                    ABOUT
                                </a>
                                <a className="text-1xl sm:text-[20px]  font-medium text-gray-300 hover:text-white" href="#">
                                    SERVICES
                                </a>
                                <a
                                    className="bg-[#35EABF] text-1xl sm:text-[20px] max-w-[150px] sm:max-w-none  inline-flex items-center rounded-full border border-indigo-600 px-8 py-3 text-blue hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring"
                                    href="/download"
                                >
                                    <span className=" text-sm font-medium"> CONTACT US</span>

                                </a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>


        </>

    )
}

export default Navbar