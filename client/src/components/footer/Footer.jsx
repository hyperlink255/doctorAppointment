import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
const socialLinks = [
  {
    path : "https://www.youtube.com",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : "https://www.github.com",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : "https://www.instagram.com",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  },
  {
    path : "https://www.linkedin.com",
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5'/>
  },

]
const navLinks = [
 {
  path:"/home",
  display:"Home"
 },
 {
  path:"/doctors",
  display:"Find a Doctor"
 },
 {
  path:"/services",
  display:"Services"
 },
 {
  path:"/contact",
  display:"Contact"
 },

]
const quickLinks01 = [
  {
    path:"/home",
    display : "Home"
  },
  {
    path:"/",
    display : "About Us"
  },
  {
    path:"/services",
    display : "Services"
  },
  {
    path:"/",
    display : "Blog"
  },
  
]
const quickLinks02 = [
  {
    path:"/find-a-doctor",
    display : "Find a Doctor"
  },
  {
    path:"/",
    display : "Request an Appointment"
  },
  {
    path:"/",
    display : "Find a Location"
  },
  {
    path:"/",
    display : "Get a Opinion"
  },
  
]
const Footer = () => {
  return (
    <footer className='pb-16 pt-10'>
    <div className='container'>
     <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
      <div>
        <img src={logo} alt=''/>
        <p className='text-[16px] leading-7 font-[400]  text-[#4e545f] mt-4'>
          Copyright @ {new Date().getFullYear()} developed by vacnaCoder all Right reserved.
        </p>
        <div className='flex items-center gap-3 mt-4'>
          {
            socialLinks.map((link,i) => {
              return (
                <Link to={link.path} key={i} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-[#9771ff] hover:border-none'>{link.icon}</Link>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-[#393939]'>Quick Links</h2>
        <ul>
          {quickLinks01.map((item,i) => <li key={i} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-[#4e545f]' to={item.path}>{item.display}</Link></li>)}
        </ul>
      </div>
      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-[#393939]'>I want to:</h2>
        <ul>
          {quickLinks02.map((item,i) => <li key={i} className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-[#4e545f]' to={item.path}>{item.display}</Link></li>)}
        </ul>
      </div>
      <div>
        <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-[#393939]'>Support</h2>
        <ul>
          <li className='mb-4'>
            <Link className='text-[16px] leading-7 font-[400] text-[#4e545f]'>Donate</Link></li>
            <li className='mb-4'><Link className='text-[16px] leading-7 font-[400] text-[#4e545f]'>Contact Us</Link></li>
        </ul>
      </div>
     </div>
    </div>
    </footer>
  )
}

export default Footer