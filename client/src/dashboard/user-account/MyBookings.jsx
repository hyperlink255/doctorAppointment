import React from 'react'
import UseFetchData from '../../hooks/UseFetchData'
import { BASE_URL } from '../../config'
import DoctorCard from '../../components/doctor/DoctorCard'
import Loading from '../../components/loader/Loading'
import Error from '../../components/error/Error'
const MyBookings = () => {
    const {data:appointments,loading,error} = UseFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return(
    <div>
      {loading && !error && <Loading />}
      {error && loading && <Error errMessage={error}/>}  
      {
        !loading && !error && (
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {appointments.map(doctor => 
                    <DoctorCard doctor={doctor} key={doctor._id}/>
                )}
            </div>
        )}    
        {!loading && !error && appointments.length === 0 && (
            <h2 className='mt-5 text-center leading-7 text-[20px] font-semibold text-[#5048ec]'>You did not book any doctor yet!</h2>
        )}
    </div>
  )
  
}

export default MyBookings