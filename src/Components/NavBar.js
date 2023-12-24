import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const handleClick = (() => {
        let nav = document.querySelector('.navbar')
        nav.classList.toggle('hide')
        nav.classList.remove('active')
    })
    return (
        <div >
            <button id='navBtn' onClick={handleClick}><i className="fa-solid fa-bars" /></button>
            <nav className='navbar hide active'>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/'>Home</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/bollywood'>Bollywood</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/technology'>Technology</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/hollywood'>Hollywood</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/fitness'>Fitness</NavLink></p>
                <p><NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/food'>Food</NavLink></p>
            </nav>
        </div>
    )
}
