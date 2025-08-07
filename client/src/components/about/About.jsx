import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] items-center lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardImg} alt=''/>
                </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading font-semibold'>Proud to be one of the nations best</h2>
                <p className='mt-[30px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat dignissimos, temporibus quos animi soluta eum ipsa expedita eius iure obcaecati id deserunt, nemo inventore ratione voluptates praesentium! Perferendis, accusamus.</p>
                <p className='mt-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat dignissimos, temporibus quos animi soluta eum ipsa expedita eius iure obcaecati id deserunt, nemo inventore ratione voluptates praesentium! Perferendis, accusamus.</p>
                
                <Link to="/"><button className='bg-[#0067ff] py-2 mt-[30px] px-3 rounded-3xl text-white cursor-pointer'>Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About