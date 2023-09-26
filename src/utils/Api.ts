import axios from "axios";
import { user } from "../types/interface";


const url = "https://volatic-reg-be.onrender.com/volatic"


 


// register
export const registerTeam = async (data : user) => {
    return await axios.post(`${url}/register`, data)
    .then((res) => {
        return res.data
    })
    .catch((err) => {
        return err
    })
}

