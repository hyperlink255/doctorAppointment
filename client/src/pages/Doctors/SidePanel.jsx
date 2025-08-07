import React from 'react'
import convertTime from '../../utils/convertTime'

const SidePanel = ({doctorId,ticketPrice,timeSlots}) => {
  return (
    <div className='shadow-2xl p-3 lg:p-5 rounded-md'>
    <div className='flex items-center justify-between'>
    <p className='mt-0 font-semibold'>Ticket Price</p>
    <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-[#393939] font-bold'>{ticketPrice} BDT</span>
    </div>
    <div className='mt-[30px]'>
        <p className='mt-0 font-semibold text-[#393939]'>Availabe Time Slots:</p>
        <ul className='mt-3'>
           {
            timeSlots?.map((item,index) => 
              <li key={index} className='flex items-center justify-between mb-2'>
            <p className='text-[15px] leading-6 text-[#4e545f] font-semibold'>{item.day.charAt(0).toUpperCase() + item.day.slice(1)}</p>
            <p className='text-[15px] leading-6 text-[#4e545f] font-semibold'>{convertTime(item.startingTime)} - {convertTime(item.endingTime)}</p>
            </li>
            )
           }


        </ul>
    </div>
    <button className='px-2 mt-5 py-3 w-full bg-[#0067ff] text-white'>Book Appointment</button>
    </div>
  )
}

export default SidePanel