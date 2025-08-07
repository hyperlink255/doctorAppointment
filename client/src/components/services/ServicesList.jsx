import React from 'react'
import {services} from '../../assets/data/services'
import ServicesCard from './ServicesCard'

const ServicesList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {
        services.map((item,i) => <ServicesCard item={item} index={i} key={i}/>)
      }

    </div>
  )
}

export default ServicesList