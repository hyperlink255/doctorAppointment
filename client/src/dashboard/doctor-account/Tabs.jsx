import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { authContenxt } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Tabs = ({ tab, setTab }) => {
  const { dispatch } = React.useContext(authContenxt)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
    navigate('/')
  }
  return (
    <div>
      <span className='lg:hidden'><BiMenu className='w-6 h-6 cursor-pointer' /></span>
      <div className='hidden lg:flex flex-col p-[30px] bg-white shadow items-center h-max rounded-md'>
        <button onClick={() => setTab("overview")} className={` ${tab === 'overview' ? 'bg-indigo-100 text-[#3915c7]' : 'bg-transparent text-[#393939]'} w-full mt-0 cursor-pointer py-3 rounded-md `}>Overview</button>
        <button onClick={() => setTab("appointments")} className={` ${tab === 'appointments' ? 'bg-indigo-100 text-[#3915c7]' : 'bg-transparent text-[#393939]'} w-full  cursor-pointer mt-0 py-3 rounded-md `}>Appointments</button>
        <button onClick={() => setTab("settings")} className={` ${tab === 'settings' ? 'bg-indigo-100 text-[#3915c7]' : 'bg-transparent text-[#393939]'} cursor-pointer w-full mt-0 py-3 rounded-md `}>Profile</button>
        <div className='mt-[50px] m-full'>
          <button onClick={handleLogout} className='w-full cursor-pointer bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white'>
            Logout
          </button>
          <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
            Delete account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tabs