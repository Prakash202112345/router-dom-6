import {useState,useEffect} from 'react'
import { getAllUsers } from '../apiUtils/api'
import UsersCards from '../components/UsersCards'

function User() {
    const [user, setUsers] = useState([]);

    const getAllUsersF = () =>{
         getAllUsers().then(response=>{
            setUsers(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getAllUsersF()
    },[])


  return (
    <div className="container my-5">
        <div className="row">
        {user && user?.map((item,index )=> {
            return (
                <div className="col-md-4 mb-3" key={item.index}>
                <UsersCards {...item} className={`mb-b h-100`}/>
            </div>
            );
          })}
            
        </div>
    </div>
  )
}

export default User