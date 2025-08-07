import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { BASE_URL } from '../config'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import { authContenxt } from '../context/AuthContext'

const Login = () => {
  const [loading,setLoading] = useState(false)
  const {dispatch} = useContext(authContenxt)
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    email:"",
    password : ""
  })
  const handleInputChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

      const submitHandler = async event => {
        event.preventDefault()
        setLoading(true)
        try{
          const res = await fetch(`${BASE_URL}/auth/login`,{
            method : "POST",
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
          })
          const result = await res.json()
          if(!res.ok){
            throw new Error(result.message)
          }
          dispatch({
            type:"LOGIN_SUCCESS",
            payload:{
              user:result.data,
              token : result.token,
              role : result.role,
            }
          })
          console.log(result, "login data")
          setLoading(false)
          toast.success(result.message)
          navigate('/home')
          console.log(res)
        }catch(err){
         toast.error(err.message)
         setLoading(false)
        }
      }
  

  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-[#393939] text-[22px] leading-9 font-bold mb-10'>
          Hello ! <span className='text-[#0067ff]'>Welcome</span>Back
        </h3>
        <form className='py-4 md:py-0' onSubmit={submitHandler}>
          <div className='mb-5'>
            <input type="email"
             placeholder='Enter Your Email'
             name="email"
             value={formData.email}
             className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067ff] text-[16px] leading-7 text-[#393939] placeholder:text-[#4e545f]
             rounded-md cursor-pointer'
             onChange={handleInputChange}
             />
            
          </div>
          <div className='mb-5'>
            <input type="password"
             placeholder='Enter Your Password'
             name="password"
             value={formData.password}
             className='w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067ff] text-[16px] leading-7 text-[#393939] placeholder:text-[#4e545f]
             rounded-md cursor-pointer'
             onChange={handleInputChange}
             />
            
          </div>
          <div className='mt-7'>
            <button type='submit' className='w-full bg-[#0067ff] text-white text-[18px] rounded-lg px-4 py-3 leading-[30px] cursor-pointer'>{loading ? <HashLoader size={25} color="#fff"/> : "Login"}</button>
          </div>
          <p className='mt-5 text-[#4e545f] text-center'>
            Don&apos; t have an account <Link to="/register" className="text-[#0067ff] font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>

    </section>
  )
}

export default Login