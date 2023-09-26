import React from 'react'

interface buttonProp {
    buttonContent: string
}

const Button:React.FC<buttonProp> = ({buttonContent}) => {
  return (
    <button className="bg-gradient-to-r from-[#fe34b9] to-[#903aff] p-[10px] pr-[40px] pl-[40px] rounded text-white text-[14px] cursor-pointer hover:border-white">{buttonContent}</button>
  )
}

export default Button;