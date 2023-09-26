// import React from 'react'
import cracker from "../../assets/hero-cracker.png"
import { Button } from "../../components/static";
import starWhite from "../../assets/star-white.png";
import starRed from "../../assets/star-red.png"
import { NavLink } from 'react-router-dom';
import lady from "../../assets/ladyLaptop.jpg";


const Hero = () => {

  

  return (
    <div className='w-full h-screen bg-[#150E28] relative font-pop overflow-hidden flex justify-center items-center'>

      <div className="absolute top-[70px] left-[-30px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

      <div className="relative w-[85%] h-full flex flex-col justify-center lg:justify-between items-center lg:flex-row ">

        <div className="flex flex-col justify-center items-center  lg:mt-0 lg:items-start mt-[120px]">

          <img src={starWhite} alt="" className='absolute w-[10px] top-[130px] left-[85px] lg:w-[15px] lg:top-[100px]  lg:left-[65px]' />

          <img src={starRed} alt="" className='hidden lg:block absolute lg:w-[15px] lg:top-[155px]  lg:left-[555px]' />

          <img src={starRed} alt="" className=' hidden lg:block absolute lg:w-[15px] lg:bottom-[185px]  lg:left-[355px]' />

          <h4 className="text-[22px] font-extrabold text-white relative lg:text-[40px] lg:mt-[30px]">BECOME A <span className="text-[#d434fe]">SOFTWARE</span>
          </h4>
          <div className="flex items-center relative">
            <h4 className="text-[22px] font-extrabold w-full text-white lg:text-[40px] text-center lg:text-left">ENGINEER <span className="text-[#d434fe] text-[15px]"><br /> COHORT 1.0</span></h4>
            <img src={cracker} alt="" className="w-[22px] h-[22px] lg:w-[40px] lg:h-[40px]" />
          </div>

          <h5 className="text-center text-[11px] text-white mt-[10px] mb-[20px] w-[280px] lg:text-left lg:text-[14px] lg:w-[400px] lg:mb-[30px]">Break into the Tech Industry by sitting on the shoulders of Gaints..</h5>

          <NavLink to='/register'>
              <Button 
                  buttonContent="Register"
                />
            </NavLink>

        </div>

        <div className='lg:flex lg:justify-center lg:items-center h-full'>

            <img className='w-[290px] lg:w-[550px] rounded-full border-white border-[4px] mt-[40px]' src={lady} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Hero