import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01  from '../assets/images/icon01.png'
import icon02  from '../assets/images/icon02.png'
import icon03  from '../assets/images/icon03.png'
import featureImg  from '../assets/images/feature-img.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import About from '../components/about/About'
import videoIcon from '../assets/images/video-icon.png'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import ServicesList from '../components/services/ServicesList'
import DoctorList from '../components/doctor/DoctorList'
import faqImg from  '../assets/images/faq-img.png'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <section className='hero-section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
             <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[50px] text-headingColor font-[800] md:text-[60px]'>We help petiets live a healthy, longer life.</h1>
                <p className='my-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magnam! Nobis assumenda eos tenetur iusto, dicta accusantium itaque, am assumenda eos tenetur iusto, dicta accusantium itaque, am</p>
                <button className='bg-blue-500 rounded-3xl px-4 py-2 cursor-pointer text-white text-center'>Request an Appointment</button>
              </div>
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700]'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='py-5 text-gray-500'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700]'>15+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='py-5 text-gray-500'>Clinic Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[50px] lg:text-[44px] lg:leading-[54px] font-[700]'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='py-5 text-gray-500'>Patient Satisfaction</p>
                </div>
              </div>
             </div>
             <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <img src={heroImg02} alt="" className='w-full mb-[30px]'/>
                <img src={heroImg03} alt="" className='w-full'/>

              </div>
             </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center font-bold'>Providing the best medical services</h2>
            <p className='text_para py-3 text-gray-500'>World-class for everyone. Our health System effers unmatched exppert health care.</p>
          </div> 

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
          lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-6 text-[#393939]  font-[700] text-center'>Find a Doctor</h2>
                <p className='leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class everyone. Our health System offers unmatched health care. From the lab to the clinic
                </p>
                <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#1b1a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067ff] hover:border-none'>
                <BsArrowRight className='group-hover:text-white  w-6 h-5 '/>
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-6 text-[#393939]  font-[700] text-center'>Find a Location</h2>
                <p className='leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class everyone. Our health System offers unmatched health care. From the lab to the clinic
                </p>
                <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#1b1a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067ff] hover:border-none'>
                <BsArrowRight className='group-hover:text-white  w-6 h-5 '/>
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt=''/>
              </div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-6 text-[#393939]  font-[700] text-center'>Book Appointment</h2>
                <p className='leading-7 text-textColor font-[400] mt-4 text-center'>
                  World-class everyone. Our health System offers unmatched health care. From the lab to the clinic
                </p>
                <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#1b1a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#0067ff] hover:border-none'>
                <BsArrowRight className='group-hover:text-white  w-6 h-5 '/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center font-semibold'>Our medical services</h2>
            <p className='text-center mt-[20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit suscipit repudiandae.
            </p>
          </div>
          <ServicesList/>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading font-semibold'>
                Get virtual treatment <br/> anytime
              </h2>
              <ul className='pl-4 '>
                <li className='text_para mt-[20px]'>
                  1. Schedule the appointment directly2
                </li>
                <li className='text_para mt-[20px]'>
                  2. Search for your physician here, and contact their office.
                </li>
                <li className='text_para mt-[20px]'>
                  3. View our physicians who are accepting new patents, use the online schesuking tool to select an appointemnt time.
                </li>
              </ul>
              <Link to="/">
                <button className='bg-[#0067ff] px-3 py-2 rounded-3xl mt-[20px] cursor-pointer text-white'>Learn More</button>
                </Link>
            </div>
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt=""/>
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-25 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>

                <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[6px] lg:gap-3'>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-[#393939] font-[600]'>
                    Tue, 24
                  </p>
                  <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-[#4e545f] font-[400]'>
                    10:00AM
                  </p>
                </div>
                <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-[#feb60d] rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                  <img src={videoIcon} alt=''/>
                </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
                leading-[8px] lg:text-[12px] lg:leading-4 text-[#181a1e] font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>
                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} alt=""/>
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]'>
                    Wayne Collins
                  </h4>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center font-bold mb-[20px]'>Our Great doctors</h2>
            <p className='text_para text-center'>
              World-class care for everyone Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList/>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
            <img src={faqImg} alt=''/>
            </div>
            <div className='w-full md:w-1/2'>
            <h2 className='heading'>
              Most Question by our beloved patients
            </h2>
            <FaqList/>
            </div>
          </div>
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

export default Home