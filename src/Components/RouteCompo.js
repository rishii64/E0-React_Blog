import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from '../Routes/Home'
import Hollywood from '../Routes/Hollywood'
import Bollywood from '../Routes/Bollywood'
import Technology from '../Routes/Technology'
import Food from '../Routes/Food'
import Fitness from '../Routes/Fitness'
import StoreCompo from '../Store/StoreCompo'
import ReadBlogCompo from '../Routes/ReadBlogCompo'
import Footer from './Footer'

export default function RouteCompo() {
    return (
        <div>
            <h1 className='blogTitle'><p><code>The</code></p> Siren</h1>
            <BrowserRouter>
                <nav>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/'>Home</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/bollywood'>Bollywood</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/technology'>Technology</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/hollywood'>Hollywood</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/fitness'>Fitness</NavLink>
                    <NavLink style={({ isActive }) => ({ color: isActive ? "black" : "grey" })} to='/food'>Food</NavLink>
                </nav>
                <StoreCompo>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/bollywood' element={<Bollywood />} />
                        <Route path='/technology' element={<Technology />} />
                        <Route path='/hollywood' element={<Hollywood />} />
                        <Route path='/fitness' element={<Fitness />} />
                        <Route path='/food' element={<Food />} />
                        <Route path='/blog/:id' element={<ReadBlogCompo/>} />
                    </Routes>
                </StoreCompo>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
