import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';


export const getAllUsers = async () =>{
    return(
        await axios.get(`${API_URL}/users`).then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })
    )
}

export const getSingleUserDetails = async (userId) =>{
    return(
        await axios.get(`${API_URL}/users/${userId}`).then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })
    )
}