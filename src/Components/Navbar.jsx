import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import Avatar from '../Assets/avatar.svg'
const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className='nav_items'>
            <ul>
        <li>
            <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? "#FF9800" : "#000000",
          })}>Resume Scan</NavLink>
          </li>
          <li>
            <NavLink to="/job-recommendation" style={({ isActive }) => ({
            color: isActive ? "#FF9800" : "#000000",
          })}>Job Recommendation</NavLink>
          </li>
          <li>
            <NavLink to="/resume-keywords" style={({ isActive }) => ({
            color: isActive ? "#FF9800" : "#000000",
          })}>Resume Keywords</NavLink>
          </li>
          <li>
            <NavLink to="/services" style={({ isActive }) => ({
            color: isActive ? "#FF9800" : "#000000",
          })}>Resume Services</NavLink>
          </li>
          <li>
            <NavLink to="/career-blogs" style={({ isActive }) => ({
            color: isActive ? "#FF9800" : "#000000",
          })} >Career Blogs</NavLink>
          </li>
          </ul>
          <div className='avatar'>
          <img src={Avatar} alt=''></img>
          <span> Divyanshu</span>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar