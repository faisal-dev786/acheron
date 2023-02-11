import React from 'react'

const Top_footer = () => {
  return (
    <>
      <div className='wrapper h-[120px] text-[#2334D8] gap-5 content-center grid grid-cols-1 sm:grid-cols-2'>
        <div className='top_fotter grid gap-5 sm:gap-20  content-center grid-cols-1 sm:grid-cols-2'>
          <div><img src="/brand_name_2.png" alt="" /></div>
          <div><p className='text-center sm:text-left'>© 2019 Acheron Trading Ltd </p></div>
        </div>

        <div className='ml-0 sm:ml-36 flex top_fotter justify-start gap-10 '>
          <a href=""><div>HOME</div></a>
          <a href=""><div>SERVICES</div></a>
          <a href=""><div>ABOUT</div></a>
        </div>
      </div>
<div className='bg-[#35EABF] mt-10 text-[#2334D8]'>


      <div className=' wrapper pt-5  gap-2 sm:gap-5 grid grid-cols-1 sm:grid-cols-5'>
        <div>Privacy Policy </div>
        <div>info@liquidmalta.com</div>
        <div className='sm:col-span-2'>230 Second Floor, Eucharistic Congress Road, Mosta, MST9039, Malta
        </div>
        <div>By Dimension Media
        </div>
      </div>
      </div>
    </>

  )
}

export default Top_footer