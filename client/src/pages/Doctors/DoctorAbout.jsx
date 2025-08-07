import React from 'react'
import { formateDate } from '../../utils/formateDate'
const DoctorAbout = ({name,about,qualifications,experiences}) => {
  return (
    <div>
     <div>
     <h3 className='text-[20px] leading-[30px] text-[#393939] font-semibold flex items-center gap-2'>About of
     <span className='text-[#181a1e] font-bold text-[24px] leading-9'>
      {name}
     </span>
     </h3>
     <p>
      {about}
     </p>
  
    </div>
    <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-[#393939] font-semibold'>Education</h3>
      <ul className='pt-5 md:p-5'>
        {
          qualifications?.map((item, index) =>
            <>
            <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end  md:gap-5 mb-[30px]'>
          <div>
            <span className='text-[#181a1e] text-[15px] leading-6 font-semibold'>{formateDate(item.startingDate)} - {formateDate(item.endingDate)}</span>
            <p className='text-[16px] leading-6 font-medium text-[#4e545f]'>{item.degree}</p>
          </div>
          <p className='text-[14px] leading-5 font-medium text-[#4e545f]'>{item.university}</p>
        </li>
        </>
           )
        }

      </ul>
     </div>
     <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-[#393939] font-semibold'>
        Experience
      </h3>
      <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
        {experiences?.map((item, index) => 
        <>
                <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-[#feb60d] text-[15px] leading-6 font-semibold'>
                  {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                </span>
                <p className='text-[16px] leading-6 font-medium text-[#4e545f]'>{item.position}</p>
                <p className='text-[14px] leading-5 font-medium text-[#4e545f]'>{item.hospital}</p>
      
              </li>

              </>
        )}

    
      </ul>
    </div>
    </div>
  )
}

export default DoctorAbout