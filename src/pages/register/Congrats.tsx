// import React from 'react'

import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import happyMan from "../../assets/congrats-img.png"
import { NavLink } from "react-router-dom";


const Congrats = () => {
  return (
    <div className='w-full h-full bg-[#150e28f0] relative font-pop overflow-hidden flex justify-center items-center transition-all 350ms ease-in-out'>

        <div className="relative w-[85%] h-[60%] lg:h-[75%] lg:w-[50%] flex flex-col justify-center items-center border-[1px] border-[#d434fe] rounded-md">

    
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />

<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />


            <div>
                <img src={happyMan} alt="" className="w-[200px] lg:w-[300px] mt-[px] lg:mt-0 " />
            </div>

            <h5 className="text-white text-[17px] text-center w-[85%] mb-[20px] mt-[20px] lg:w-[40%]">
              Thank you for registering.
            </h5>

            <h5 className="text-white text-[13px] text-center w-[85%] mb-[20px] lg:w-[40%]">
              Yes, it was easy and you did it! We will reach out to you via mail or call.
            </h5>

            <NavLink to='/' className="flex justify-center items-center mb-[10px] w-full">
              <div className="flex justify-center items-center mb-[10px] w-[85%] lg:w-[70%]">
                <button className="flex justify-center items-center w-full lg:border-[1px] rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff] cursor-pointer text-white text-[13px] h-[40px] hover:border-white"
                 >
                        Back to Home
                </button>
            </div>
            </NavLink>

        </div>

    </div>
  )
}

export default Congrats