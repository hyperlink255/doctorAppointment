import React, { useState } from 'react'
import signupImg from '../assets/images/signup.gif'
import uploadImageToCloudinary from '../utils/uploadCloudinary'
import { toast } from 'react-toastify'
import { Link,useNavigate} from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import { BASE_URL } from '../config'
const Signup = () => {
    const [selectedFile,setSelectedFile] = useState(null)
    const [previewURL,setPreviewURL] = useState('')
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)

    const [formData,setFormData] = useState({
      name : "",
      email:"",
      password : "",
      photo:selectedFile,
      gender:"",
      role:"patient"
    })

    const handleFileInputChange = async (event) => {
      const file = event.target.files[0]
      const data = await uploadImageToCloudinary(file)
      setPreviewURL(data.url)
      setSelectedFile(data.url)
      setFormData({...formData,photo:data.url})
    }
    const handleInputChange = (e) => {
      setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    const submitHandler = async event => {
      event.preventDefault()
      setLoading(true)
      try{
        const res = await fetch(`${BASE_URL}/auth/register`,{
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(formData)
        })
        const {message} = await res.json()
        if(!res.ok){
          throw new Error(message)
        }
        setLoading(false)
        toast.success(message)
        navigate('/login')
        console.log(res)
      }catch(err){
       toast.error(err.message)
       setLoading(false)
      }
    }
  
  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='hidden lg:block bg-[#0067ff] rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt=''/>
            </figure>
          </div>
          <div className='rounded-l-lg lg:pl-16 py-10'>
             <h3 className='text-[#393939] text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-[#0067ff]'>account</span>
             </h3>
             <form className='' onSubmit={submitHandler}>
             <div className='mb-5'>
             <input type="text"
             value={formData.name}
             onChange={handleInputChange}
             placeholder='Enter Your Password'
             name="name"
             className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067ff] text-[16px] leading-7 text-[#393939] placeholder:text-[#4e545f]
             rounded-md cursor-pointer'
             />
            
            </div>
            <div className='mb-5'>
             <input type="email"
             placeholder='Enter Your Email'
             name="email"
             onChange={handleInputChange}
             value={formData.email}
             className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067ff] text-[16px] leading-7 text-[#393939] placeholder:text-[#4e545f]
             rounded-md cursor-pointer'
             />
            
            </div>
            <div className='mb-5'>
             <input type="password"
             placeholder='Enter Your Password'
             name="password"
             value={formData.password}
             onChange={handleInputChange}
             className='w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067ff] text-[16px] leading-7 text-[#393939] placeholder:text-[#4e545f]
             rounded-md cursor-pointer'
             />
            
            </div>
          
            <div className='mb-5 flex items-center justify-between'>
              <label htmlFor='' className='text-[#393939] font-bold text-[16px] leading-7'>
                Are you a:
                <select name='role' value={formData.role} onChange={handleInputChange} className='text-[#4e545f] font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>

                </select>
              </label>
              <label htmlFor='' className='text-[#393939] font-bold text-[16px] leading-7'>
                Gendar : 
                <select name='gender' onChange={handleInputChange} value={formData.gender} className='text-[#4e545f] font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Othar</option>
                </select>
              </label>
            </div>
            <div className='mb-5 flex items-center gap-3'>
             {
              selectedFile && <figure className='w-[60px] rounded-full border-2 border-solid border-[#0067ff] flex items-center justify-center'>
              <img className='w-full rounded-full' src={previewURL} alt=''/>
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
               font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
              </div>
            
            </div>
            <div className='mt-7'>
            <button disabled={loading && true} type='submit' className='w-full bg-[#0067ff] text-white text-[18px] rounded-lg px-4 py-3 leading-[30px] cursor-pointer'>
             {loading ?( <HashLoader size={35} color="#ffffff"/> ):("Sign Up")}
           </button>
          </div>
          <p className='mt-5 text-[#4e545f] text-center'>
            Already have an account <Link to="/login" className="text-[#0067ff] font-medium ml-1">Login</Link>
          </p>
   
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Signup