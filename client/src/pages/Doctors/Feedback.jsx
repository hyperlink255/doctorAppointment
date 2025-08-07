import React, { useState } from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate'
import {AiFillStar} from'react-icons/ai'
import FeedbackForm from './FeedbackForm'
const Feedback = ({reviews,totalRating}) => {
  const [showFeedbackForm,setShowFeedbackForm] = useState(false)
  return (
    <div>
      <div className='mb-[50px]'>
      <h4 className='text-[20px]  my-5 leading-[30px] font-bold text-[#393939] md-[30px]'>
        All reviews ({totalRating})
      </h4>
      {reviews?.map((review,index) => (
      <div key={index} className='flex justify-between gap-10 mb-[30px]'>
      <div className='flex gap-3'>
        <figure className='w-10 h-10 rounded-full'>
          <img className='w-full' src={review?.user?.photo} alt=''/>
        </figure>
        <div>
          <h5 className='text-[16px] leading-6 text-[#0067ff] font-bold'>
            {review?.user?.name}
          </h5>
          <p className='text-[14px] leading-6 text-[#4e545f]'>
            {formateDate(review?.createdAt)}
          </p>
          <p className='mt-3 font-medium text-[15px]'>{review.reviewText}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(review?.rating).keys()].map((_,i) => <AiFillStar keys={i} color="#0067ff"/>)}
      </div>
    </div>
      ))}
    </div>
    {
      !showFeedbackForm && 
     <div className='text-center'>
      <button onClick={() => setShowFeedbackForm(true)} className='px-2 py-2 bg-[#0067ff] rounded-3xl text-white cursor-pointer'>Give Feedback</button>
    </div>
    }
    {showFeedbackForm &&  <FeedbackForm/>}
    </div>
  )
}

export default Feedback