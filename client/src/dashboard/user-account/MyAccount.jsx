import React, { useContext, useState } from 'react'
import { authContenxt } from '../../context/AuthContext'
import MyBookings from './MyBookings'
import Profile from './Profile'

import useGetProfile from '../../hooks/UseFetchData'
import { BASE_URL } from '../../config'
import Loading from '../../components/loader/Loading'
import Error from '../../components/error/Error'


const MyAccount = () => {
    const { dispatch } = useContext(authContenxt)
    const [tab, setTab] = useState('bookings')

    const { data: userData, loading, error } = useGetProfile(`${BASE_URL}/users/profile/me`)


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto '>
                {loading && !error && <Loading />}
                {error && loading && <Error errMessage={error}/>}
                {
                    !loading && !error &&

                    <div className='grid md:grid-cols-3 gap-10'>
                        <div className='pb-[50px] px-[30px] rounded-md'>
                            <div className='flex items-center justify-center'>
                                <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-[#0067ff]'>
                                    <img src={userData.photo} alt='' className='w-full h-full rounded-full' />
                                </figure>
                            </div>
                            <div className='text-center mt-4'>
                                <h3 className='text-[18px] leading-[30px] text-[#393939] font-bold'>{userData.name}</h3>
                                <p className='text-[#4e545f] text-[15px] leading-6 font-medium'>${userData.email}</p>
                                <p className='text-[#4e545f] text-[15px] leading-6 font-medium'>
                                    Blood Type :<span className='mt-2 text-[#393939] text-[22px]  leading-8'>{userData.bloodType}</span>
                                </p>
                            </div>
                            <div className='mt-[50px] md:mt-[100px]'>
                                <button onClick={handleLogout} className='w-full cursor-pointer bg-[#181a1e] p-3 text-[16px] leading-7 rounded-md text-white'>
                                    Logout
                                </button>
                                <button className='w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white'>
                                    Delete account
                                </button>


                            </div>
                        </div>
                        <div className='md:col-span-2 md:px-[30px]'>
                            <div>
                                <button onClick={() => setTab("bookings")} className={`${tab === "bookings" && 'bg-[#0067ff] text-white font-normal'}p-2 mr-5 px-5 rounded-md py-3 text-[#393939] font-semibold text-[16px] leading-7 border border-solid border-[#0067ff]`}>My Bookings
                                </button>
                                <button onClick={() => setTab("settings")} className={`${tab === "settings" && 'bg-[#0067ff] text-white font-normal'}p-2  px-5 py-3 rounded-md text-[#393939] font-semibold text-[16px] leading-7 border border-solid border-[#0067ff]`}> Profile Settings
                                </button>

                            </div>
                            {tab === "bookings" && <MyBookings />}
                            {tab === "settings" && <Profile user={userData} />}

                        </div>
                    </div>
                }
            </div>
        </section>

    )
}

export default MyAccount