import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia blanditiis dignissimos? Laudantium, incidunt tenetur?
        </p>
        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor='email' className='text-[#4e545f] font-semibold text-[16px] leading-7 mb-2'> Your Email</label>
              <input placeholder='Enter Your Email' type="email" id="email"
               className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067ff] text-[16px] mt-1 leading-7 text-[#393939] placeholder:text-[#4e545f] cursor-pointer rounded-md' />
            
          </div>
          <div>
            <label htmlFor='subject' className='text-[#4e545f] font-semibold text-[16px] leading-7 mb-2'>Subject</label>
              <input placeholder='Let us know we can help you' type="text" id="text"
               className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067ff] text-[16px] mt-1 leading-7 text-[#393939] placeholder:text-[#4e545f] cursor-pointer rounded-md' />
            
          </div>
          <div>
            <label htmlFor='message' className='text-[#4e545f] font-semibold text-[16px] leading-7 mb-2'>Your Message</label>
              <textarea rows="6" placeholder='Leave a comment' type="email" id="email"
               className='w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-[#0067ff] text-[16px] leading-7 mt-1 text-[#393939] placeholder:text-[#4e545f] cursor-pointer rounded-md' />
          </div>
        <button type='submit' className='bg-[#0067ff] px-3 py-3 text-white rounded'>Submit</button>

        </form>
      </div> 
    </section>
  )
}

export default Contact