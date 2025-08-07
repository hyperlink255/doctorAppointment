import React, { useEffect, useState } from 'react'
import DoctorCard from '../../components/doctor/DoctorCard'
import Testimonial from '../../components/testimonial/Testimonial'
import { BASE_URL } from '../../config'
import UseFetchData from '../../hooks/UseFetchData'
import Loader from '../../components/loader/Loading'
import Error from '../../components/error/Error'



const Doctors = () => {
  const [query,setQuery] = useState('')
  const [debounceQuery,setDebounceQuery] = useState("")

  const handleSearch = ()=> { 
    setQuery(query.trim())
    console.log('handle search')
  }

  useEffect(() => {
   const timeout = setTimeout(() => {
    setDebounceQuery(query)
   },700)
   return () => clearTimeout(timeout)
  },[query])
  const {data:doctors,loading,error} = UseFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className='container text-center'>
      <h2 className='heading'>Find a Doctor</h2>
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
        <input 
        type='search'
        className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none 
        cusror-pointer placeholder:text-[#4e545f]'
        placeholder='Search Doctor'
        value={query}
        onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className='bg-[#9771ff] py-4 text-[#fff] cursor-pointer px-5 mt-0 rounded-[0px] rounded-r-md'>
          Search
        </button>
      </div>
      </div>
    </section>
    <section>
     <div className='container'>
     {loading && <Loader/>}
    {error && <Error/>}
    
      {!loading && !error && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {doctors.map((doctor) => <DoctorCard  key={doctor.id} doctor={doctor}/>)}
      </div>}
     </div>
    </section>
    <section>
      <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center font-bold mb-[20px]'>What Our patiant say</h2>
            <p className='text_para text-center'>
              World-class care for everyone Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial/>
        </div>
     </section>
    </>
  )
}

export default Doctors