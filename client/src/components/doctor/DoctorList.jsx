import React from 'react'
import DoctorCard from './DoctorCard'
import { BASE_URL } from '../../config'
import UseFetchData from '../../hooks/UseFetchData'
import Loader from '../../components/loader/Loading'
import Error from '../error/Error'


const DoctorList = () => {
  const {data:doctors,loading,error} = UseFetchData(`${BASE_URL}/doctors`)
  return (
    <>
    {loading && <Loader/>}
    {error && <Error/>}
    {!loading && !error &&(
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {doctors.map(item => (<DoctorCard key={item._id} doctor={item}/>
    ))}
    </div>
    )}
    </>
  )
}

export default DoctorList