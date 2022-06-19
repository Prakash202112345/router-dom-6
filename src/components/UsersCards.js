import React from 'react'
import {Link} from 'react-router-dom'

function UsersCards(props) {
  return (
    <div className={`card ${props.className}`}>
  <div className="card-body">
    <h5 className="card-title">Name : {props.name}</h5>
    <p className="card-text mb-0">Username : {props.username}</p>
    <p className="card-text">Email : {props.email}</p>
    
    <Link to={`/users/${props.id}`} className="btn btn-primary">View Details</Link>
  </div>
</div>
  )
}

export default UsersCards