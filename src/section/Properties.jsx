import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkmodeContext'
import { property } from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle,FaPlus, FaMapMarkedAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Properties  () {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section id='propertyies' className='lg-w[90%] w-full m-auto py-20 px:6 lg:px-20 flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>PROPERTIES</h1>
          <h1 data-aos="zoom-in" className='text-black text-4xl font-semibold'>Explore the latest</h1>
        </div>
         
         {/*Properties Gride start from here*/}

        <div id='grid-box' className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full justify-center items-center'>
        {
          property.map((item, index) => (
            <div data-aos="zoom-in" data-aso-delay="200" key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>

              <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end' style={{ backgroundImage: `url(${item.images})` }}>

                <div id='top' className='flex justify-between items-end w-full'>
                  <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Featured</button></div>
                  <div className='flex justify-between items-center gap-3'>
                    <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Sales</button>
                    <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Active</button>

                  </div>
                </div>
                <div></div>
                </div>  
            </div> 

        ))
        }
         </div> 
      </section>
      
       </div>
  )
}

export default Properties