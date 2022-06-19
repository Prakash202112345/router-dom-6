import {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import { getSingleUserDetails } from '../apiUtils/api';

function UserDetails() {
    const [userDetails, setUserDetails] = useState([])

    const {userId} = useParams()

    useEffect(() => {
        getSingleUserDetailsF()
    },[])

    const getSingleUserDetailsF = ()=>{
        getSingleUserDetails(userId).then((response)=>{
            setUserDetails(response.data)
        })
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h1 className="mb-4">User Details</h1>
            </div>
            <div className="col-md-12">
               Name : {userDetails.name}
            </div>
            <div className="col-md-12">
            username : {userDetails.username}
            </div>
            <div className="col-md-12">
            email : {userDetails.email}
            </div>
            <div className="col-md-12">
            phone : {userDetails.phone}
            </div>
            <div className="col-md-12">
            website : {userDetails.website}
            </div>
        </div>
    </div>
  )
}

export default UserDetails