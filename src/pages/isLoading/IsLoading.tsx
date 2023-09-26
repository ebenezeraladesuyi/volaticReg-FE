// import React from "react";

import { FallingLines } from "react-loader-spinner";
import logo from "../../assets/volaticAcadLogo.png";

const IsLoading = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">

                <img src={logo} alt="" className="w-[150px]" />

                <FallingLines color="#3F5BF6" width="100" visible={true} />

                <p className="text-[#3F5BF6] text-[17px]">Loading...</p>
            </div>
        </div>
    );
};

export default IsLoading;