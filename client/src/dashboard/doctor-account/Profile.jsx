import React, { useEffect, useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import uploadImageToCloudinary from '../../utils/uploadCloudinary'

import {BASE_URL, token} from '../../config'
import {toast} from 'react-toastify'

const Profile = ({doctorData}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password:"",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about:"",
    photo:null

  })

  useEffect(() => {
  setFormData({
    name:doctorData?.name,
    email:doctorData?.email,
    phone:doctorData?.phone,
    bio:doctorData?.gender,
    specialization:doctorData?.specialization,
    ticketPrice:doctorData?.ticketPrice,
    qualifications:doctorData?.qualifications,
    experiences:doctorData?.experiences,
    timeSlots:doctorData?.timeSlots,
    about:doctorData?.about,
    photo:doctorData?.photo
  })
  },[doctorData])

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleFileInputChange = async (e) => {
     const file = e.target.files[0]
     const data = await uploadImageToCloudinary(file)
     setFormData({...formData,photo:data?.url})
  }
   
  const updateProfileHandler =async (e) => {
    e.preventDefault()
    try{
        const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
          method:"PUT",
          headers:{
            'content-type' : 'application/json',
            Authorization : `Bearer ${token}`
          },
          body:JSON.stringify(formData)
        })
        const result = await res.json()
        if(!res.ok){
          throw Errr(result.message)
        }
        toast.success(result.message)
    }catch(err){
       toast.error(err.message)
    }
  }

  const addItem = (key,item) => {
    setFormData(prevFormData => ({...prevFormData,[key]:[...prevFormData[key],item]}))
  }

  const handleReusableInputChangeFunc = (key,index,event) => {
    const {name,value} = event.target
    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]]
      updateItems[index][name] = value
      return {
        ...prevFormData,
        [key] : updateItems,
      }
    })
  }

  const deleteItem = (key,index) => {
    console.log(key,index)
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]:prevFormData[key].filter((_,i) => i !== index),
    }));
  }
  const addQualification = (e)=> {
    e.preventDefault()
    addItem('qualifications',{
      startingDate:"",endingDate:"",position:"Senior Surgeon",hospital:"Dhaka Medical"
    })
  }
  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications",index,event)
  }
  const deletequalification = (e,index) => {
    e.preventDefault()
    deleteItem("qualifications",index)
  }
 
  const addExperience = (e)=> {
    e.preventDefault()
    addItem('experiences',{
      startingDate:"",endingDate:"",degree:"PHD",university:"Dhaka Medical College"
    })
  }

  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences",index,event)
  } 
  
  const deleteExperience = (e,index) => {
    e.preventDefault()
    deleteItem("experiences",index)
  }
  
  const addTimeSlot = (e)=> {
    e.preventDefault()
    addItem('timeSlots', {
      day:"Sunday",startingTime:"10:00",endingTime:"04:30"
    })
  }

  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots",index,event)
  } 
  
  const deleteTimeSlot = (e,index) => {
    e.preventDefault()
    deleteItem("timeSlots",index)
  }
 
  return (
    <div>
      <h2 className='text-[#393939] font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form onSubmit={updateProfileHandler}>
        <div className='mb-5'>
          <p className='mt-5'>Name</p>
          <input type='text' name='name' value={formData.name}
            onChange={handleInputChange}
            placeholder='Full Name'
            className='border border-gray-500  w-full rounded py-2 px-2 outline-none' />
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Email</p>
          <input type='email' name='email' value={formData.email}
            onChange={handleInputChange}
            placeholder='Email '
            className='border border-gray-500 rounded w-full py-2 px-2 outline-none' />
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Number</p>
          <input type='number' name='number' value={formData.number}
            onChange={handleInputChange}
            placeholder='Number'
            className='border border-gray-500 rounded w-full py-2 px-2 outline-none' />
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Bio</p>
          <input type='text' name='bio' value={formData.bio}
            onChange={handleInputChange}
            placeholder='Bio'
            className='border border-gray-500   w-full py-2 px-2 outline-none rounded' />
        </div>
        <div className='mb-5'>
          <div className='grid grid-cols-3 gap-5 md-[30px]'>
            <div>
              <p className='mt-5'>Gender*</p>
              <select name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className='border border-gray-500   w-full py-2 px-2 outline-none rounded'>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Othar</option>
              </select>
            </div>
            <div>
              <p className='mt-5'>specialization*</p>
              <select name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className='border border-gray-500   w-full py-2 px-2 outline-none rounded'>
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className='mt-5'>Ticket Price*</p>
              <input type='number' placeholder='100'
                name="ticketPrice" value={formData.ticketPrice}
                onChange={handleInputChange}
                className='border border-gray-500   w-full py-2 px-2 outline-none rounded' />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Qualifications*</p>
          {formData.qualifications?.map((item, index) =>
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='mt-5'>Starting Date*</p>
                    <input type="date" name="startingDate" onChange={e => handleQualificationChange(e,index)} value={item.startingDate}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'/>
                  </div>
                  <div>
                    <p className='mt-5'>Ending Date*</p>
                    <input type="date" name="endingDate" value={item.endingDate}
                    className='border border-gray-500 w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleQualificationChange(e,index)}/>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 '>
                  <div>
                    <p className='mt-5'>Degree*</p>
                    <input type="text" name="degree" value={item.degr}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleQualificationChange(e,index)}/>
                  </div>
                  <div>
                    <p className='mt-5'>University*</p>
                    <input type="text" name="university" value={item.university}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleQualificationChange(e,index)}/>
                  </div>
                </div>
                <button onClick={e => deletequalification(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2
                mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
              </div>
            </div>
          )}
          <button type='submit' className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer' onClick={addQualification}>Add Qualification</button>
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Experiences*</p>
          {formData.experiences?.map((item, index) =>
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='mt-5'>Starting Date*</p>
                    <input type="date" name="startingDate" value={item.startingDate}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleExperienceChange(e,index)}/>
                  </div>
                  <div>
                    <p className='mt-5'>Ending Date*</p>
                    <input type="date" name="endingDate" value={item.endingDate}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleExperienceChange(e,index)}/>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 '>
                  <div>
                    <p className='mt-5'>Position*</p>
                    <input type="text" name="position" value={item.position}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleExperienceChange(e,index)}/>
                  </div>
                  <div>
                    <p className='mt-5'>Hospital*</p>
                    <input type="text" name="hospital" value={item.hospital}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleExperienceChange(e,index)}/>

                  </div>
                </div>
                <button onClick={e => deleteExperience(e,index)} className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2
                mb-[30px] cursor-pointer'><AiOutlineDelete/></button>
              </div>
            </div>
          )}
          <button onClick={addExperience} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add Experience</button>
        </div>
        <div className='mb-5'>
          <p className='mt-5'>Time Slotes*</p>
          {formData.timeSlots?.map((item, index) =>
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                  <div>
                    <p className='mt-5'>Day*</p>
                    <select name="day" onChange={e => handleTimeSlotChange(e,index)} value={item.day} className='border border-gray-500   w-full py-2 px-2 outline-none rounded'>
                    <option value="">Select</option>
                    <option value="saturday">Saturday</option>
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className='mt-5'>Starting Time*</p>
                    <input type="time" name="startingTime" value={item.startingTime}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleTimeSlotChange(e,index)}/>
                  </div>
                  <div>
                    <p className='mt-5'>Ending Time*</p>
                    <input type="time" name="endingTime" value={item.endingTime}
                    className='border border-gray-500   w-full py-2 px-2 outline-none rounded'
                    onChange={e => handleTimeSlotChange(e,index)}/>
                  </div>
                  <div onClick={e => deleteTimeSlot(e,index)} className='flex items-center'>
                  <button className='bg-red-600 p-2 rounded-full text-white text-[18px] 
                 cursor-pointer mt-6'><AiOutlineDelete/>
                    </button>
                   </div>
                </div>
              </div>
            </div>
          )}
          <button  onClick={addTimeSlot} className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>Add TimeSlot</button>
        </div>
        <div className='mb-5'>
          <p className='mt-5'>About*</p>
          <textarea name="about" 
          rows={5} value={formData.about}
          placeholder='Write about you'
          onChange={handleInputChange}
          className='border border-gray-500   w-full py-2 px-2 outline-none rounded' />
        </div>
        <div className='mb-5 flex items-center gap-3'>
             {
              formData.photo && <figure className='w-[60px] rounded-full object-cover border-2 border-solid border-[#0067ff] flex items-center justify-center'>
              <img className='w-full rounded-full' src={formData.photo} alt=''/>
            </figure>
           
             } 
              <div className='relative w-[130px] h-[50px]'>
              <input
               type='file'
               name = "photo"
               id = "customFile"
               accept='.jpg, .png'
               onChange={handleFileInputChange}
               className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
               />
               <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center
               px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-[#393939]
               font-semibold rounded-lg truncate cursor-pointer'>Upload Photo
               </label>
              </div>
         </div>
         <div className='mt-7'>
          <button type='submit' className='bg-[#12279e] text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>
         </div>
      </form>
    </div>
  )

}

export default Profile