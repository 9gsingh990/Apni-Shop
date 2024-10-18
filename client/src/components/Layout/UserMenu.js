import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
   <div className="list-group">
   <h3>Dashboard</h3>
  
  <NavLink to="/dashboard/profile" className="list-group-item list-group-item-action">Profile</NavLink>
  <NavLink to="/dashboard/orders" className="list-group-item list-group-item-action">Orders</NavLink>
 
  </div>



    </>
  )
}

export default UserMenu
