import React from 'react'

import {RiMenu4Line} from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { Button } from "../../static";
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/volaticAcadLogo.png";

const Header = () => {

  const [dropDown, setDropDown] = React.useState(false)

  const showDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <div 
    className="w-full h-[70px] bg-white  fixed flex justify-center items-center font-pop z-40  border-b-gray-500 border-b-[1px]"
    >

      <div className="w-[85%] flex justify-between items-center">

        <img src={logo} alt="" className='w-[115px] b ' />


        { dropDown ? 
          <div className="text-[#150E28] text-[17px] cursor-pointer lg:hidden" onClick={showDropDown}>
          <CgClose />
          </div>
        : 
          <div className="text-[#150E28] text-[20px] cursor-pointer lg:hidden" onClick={showDropDown}>
            <RiMenu4Line />
          </div>
        }


        <div className="hidden lg:flex justify-between items-center w-[20%]">
          <div className="flex w-full justify-between items-center">

          <NavLink to='/'>
              <h5 className="text-[#150E28] cursor-pointer text-[15px] font-semibold">Home</h5>
          </NavLink>

          <NavLink to='/register'>
            <Button 
              buttonContent="Register"
              />
          </NavLink>
        </div>
      </div>

      { dropDown ? 
            <div className="absolute  w-full h-screen top-[70px] left-0  z-40 lg:hidden transition-all 350ms ease-in-out" onClick={showDropDown}>
              <div className="bg-[#150E28] h-[245px] w-full pl-[25px] pt-[20px] shadow-md">
                <div className="">

                  <NavLink to='/'>
                    <h5 className="text-white cursor-pointer text-[14px] mt-[15px] mb-[20px]">Home</h5>
                  </NavLink>
                </div>

                <NavLink to='/register'><Button 
                    buttonContent="Register"
                    /></NavLink>
              </div>
            </div>
        : null
        } 

    </div>
  </div>
  )
}

export default Header