import React from 'react'

const Services = () => {
    return (
        <>
            <div class="grid gap-x-10 gap-10 sm:gap-y-20 py-10 sm:py-20 grid-cols-1 sm:grid-cols-3 wrapper ">
                <div className="sm:row-span-4">
                    <h1 className='text-[#2334D8] text-2xl font-normal'>Our Services</h1>
                </div>
                <div className="sm:col-span-2"><p className='text-[#070932]'>Liquid Malta has the technology and experience to deliver a full spectrum of custom market making and digital asset strategy services.
                </p></div>
                <div>
                    <img className='max-w-[60px] max-h-[60px]' src="/serviceImg1.png" alt="" />
                    <h3 className='text-[#2334D8] text-[25px] my-5'>Market Making</h3>
                    <p className='text-[#070932]'>Custom-tailored liquidity across all popular digital asset exchanges
                    </p>
                    <p className='text-[#2334D8] mt-2 underline'>Learn more</p>
                </div>
                <div>
                    <img className='max-w-[60px] max-h-[60px]' src="/serviceImg2.png" alt="" />
                    <h3 className='text-[#2334D8] text-[25px] my-5'>Exchange Listing</h3>
                    <p className='text-[#070932]'>We guide teams through each step of the various exchange listing processes 
                    </p>
                    <p className='text-[#2334D8] mt-2 underline'>Learn more</p>
                </div>
                <div>
                    <img className='max-w-[60px] max-h-[60px]' src="/serviceImg3.png" alt="" />
                    <h3 className='text-[#2334D8] text-[25px] my-5'>Market Strategies</h3>
                    <p className='text-[#070932]'>Build comprehensive market strategies to enable broad geographic distribution

                    </p>
                    <p className='text-[#2334D8] mt-2 underline'>Learn more</p>
                </div>
                <div>
                    <img className='max-w-[60px] max-h-[60px]' src="/serviceImg4.png" alt="" />
                    <h3 className='text-[#2334D8] text-[25px] my-5'>Tokenomic Analysis</h3>
                    <p className='text-[#070932]'>Create robust supply schedules and tokenomic structures that support user adoption  
                    </p>
                    <p className='text-[#2334D8] mt-2 underline'>Learn more</p>
                </div>


                <div className=''>
                    <img className='max-w-[60px] max-h-[60px]' src="/serviceImg5.png" alt="" />
                    <h3 className='text-[#2334D8] text-[25px] my-5'>Risk Management & Modeling </h3>
                    <p className='text-[#070932]'>Configurable risk controls, combined with robust in-house risk modeling capabilities available to our clients
                    </p>
                    <p className='text-[#2334D8] mt-2 underline'>Learn more</p>
                </div>
                
            </div>
        </>

    )
}

export default Services