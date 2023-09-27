// import React from 'react'
import starWhite from "../../assets/star-white.png";
import starBlue from "../../assets/star-blue.png";
import starRed from "../../assets/star-red.png";
import man from "../../assets/rulesImg.png";
import * as yup from "yup";
// import axios from 'axios';
// import {useFormik} from "formik";
import { useMutation } from '@tanstack/react-query';
import { UseAppDispatch } from '../../hooks/Store';
import { User } from '../../hooks/ReduxState';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import DatasIsaLoading from "../isLoading/DataIsLoading";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../utils/Api";



const Register = () => {

    const validationSchema = yup.object({
        firstName: yup.string().required('Enter your firstname'),
        surname : yup.string().required('Enter your last name'),
        email: yup.string().required('enter a valid email'),
        phoneNumber: yup.string().required(),
        educationalQualification : yup.string().required(),
        computerExperience : yup.string().required(),
        address: yup.string().required(),
        emergencyContactName: yup.string().required('Enter en emergency contact'),
        emergencyContactRelationship: yup.string().required('What is your relationship with this person'),
        emergencyContactNumber: yup.string().required('Enter he/she phone number'),
      });

      const navigate = useNavigate()

    type formData =  yup.InferType<typeof validationSchema>

    const dispatch = UseAppDispatch();

    const posting = useMutation({
        mutationKey: ["volatic"],
        mutationFn: registerUser,

        onSuccess: (data: any) => {

            dispatch(User(data.data))

            // console.log(data)

            if (data.data) {
                Swal.fire({
                  title: "Registration Successful",
                  text: "Thank You for registering. We will reach out to you via email or call.",
                  icon: "success",
                });
                navigate("/");
              }
        }
    });

    const {
        handleSubmit,
        formState: {errors},
        register
    } = useForm<formData>({
        resolver: yupResolver(validationSchema)
    });

    const Submit = handleSubmit(async (data) => {
        // e.preventDefault()
        posting.mutate(data)

        // console.log(data)
    })

  return (
    <div className='w-full bg-[#150E28] relative font-pop overflow-hidden lg:h-screen flex justify-center items-center pb-[20px]'>

        <div className="absolute top-[70px] left-[-30px] w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] bg-[#3e0a75] rounded-full blur-2xl" ></div>

        <form className="relative w-[85%] h-full flex flex-col justify-center items-center lg:flex-row lg:justify-between" onSubmit={Submit} >
    
<img src={starBlue} alt="" className="absolute w-[10px] lg:w-[13px]  bottom-[60px] left-[35px] lg:bottom-[90px] lg:left-[50px]" />

<img src={starWhite} alt="" className="absolute w-[10px] lg:w-[15px]  top-[75px] left-[20px] lg:top-[120px]" />

<img src={starRed} alt="" className="absolute w-[10px] lg:w-[15px] top-[170px] right-[0px] lg:right-[-30px]" />

            <div className="relative lg:mt-[70px]">
                <img src={man} alt="" className="w-[200px] lg:w-[500px] mt-[100px] lg:mt-0 " />

<img src={starBlue} alt="" className="absolute w-[15px] bottom-[60px] lg:bottom-[90px] lg:right-[-50px]" />
            </div>

            <div className="lg:w-[50%] rounded lg:bg-[#1b142d] lg:p-[20px] lg:mt-[90px] lg:pl-[60px] lg:pr-[60px] lg:border-[#d434fe] lg:border-[1px] text-white">

                <h4 className="text-white text-[18px] mb-[15px]">REGISTER</h4>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">First Name</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] " type="text" placeholder="Enter your first name" 
                        {...register('firstName')}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.firstName && errors?.firstName.message}</p>
                    </div>

                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Last Name</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your surname"
                        {...register('surname')}
                        />    
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.surname && errors?.surname.message}</p>
                    </div>
                </div>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Email</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your email" 
                        {...register('email')}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.email && errors.email.message}</p>
                        
                    </div>

                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Phone Number</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your phone number" 
                        {...register('phoneNumber')}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.phoneNumber && errors.phoneNumber.message}</p>
                        {/* {7 */}
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="w-[47%] lg:w-[48%]">
                        <h5 className="text-white text-[12px]">Computer Literate</h5>
                        <select className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] text-white"
                        {...register('computerExperience')}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.computerExperience && errors.computerExperience.message}</p>
                    </div>
                    
                    <div className="w-[47%] lg:w-[48%]">
                        <h5 className="text-white text-[12px]">Education Status</h5>
                        <select className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px] text-white"
                        {...register('educationalQualification')}
                        >
                            <option value="">Select</option>
                            <option value="BSc">BSc</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="HND">HND</option>
                            <option value="ND">ND</option>
                            <option value="SSCE">SSCE</option>
                            <option value="Others">Others</option>
                        </select>
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.educationalQualification && errors.educationalQualification.message}</p>
                    </div>

                </div>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Address</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter your address"
                        {...register("address")} 
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.address && errors.address.message}</p>
                    </div>

                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Emergency Contact Name</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter an emergency contact name" 
                        {...register("emergencyContactName")}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactName && errors.emergencyContactName.message}</p>
                    </div>
                </div>

                <div className="flex flex-wrap lg:justify-between w-full items-center">
                    <div className="w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Emergency Contact Relationship</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="i.e Sister, Brother, Gaurdian etc." 
                        {...register("emergencyContactRelationship")}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactRelationship && errors.emergencyContactRelationship.message}</p>
                    </div>

                    <div className=" w-full lg:w-[48%] ">
                        <h5 className="text-white text-[12px]">Emergency Contact Number</h5>
                        <input className="bg-[#1b142d] border-white border-[1px] pl-[7px] w-full h-[40px] rounded text-[12px] mb-[15px]" type="text" placeholder="Enter the person's contact number" 
                        {...register("emergencyContactNumber")}
                        />
                        <p className="text-[8px] mt-[-10px] mb-[5px]">{errors?.emergencyContactNumber && errors.emergencyContactNumber.message}</p>
                    </div>
                </div>

                <h6 className="text-[10px] text-center lg:text-left text-[#d434fe] mb-[10px]">Please review your registration details before submitting</h6>

                <div className="flex items-center mb-[15px]">
                    <input type="checkbox" className="w-[13px] h-[13px] mr-[10px]" 
                        />
                    <h5 className="text-white text-[11px]">
                        I agreed with the organization's terms and conditions.
                    </h5>
                </div>

            {
                posting.isLoading ?
                (<>
                    <DatasIsaLoading />
                </>)
                :
                (
                    <div className="flex justify-center items-center mb-[10px] ">
                        <button className="flex justify-center items-center lg:w-full lg:border-[1px] rounded bg-gradient-to-r from-[#fe34b9] to-[#903aff] cursor-pointer text-white text-[13px] h-[40px] hover:border-white" type="submit" >
                            Register Now
                        </button>
                    </div>
                )
            }
                
            </div>

        </form>


    </div>
  )
}

export default Register