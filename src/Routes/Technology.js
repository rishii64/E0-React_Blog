import React, { useContext } from 'react'
import { store } from '../Store/StoreCompo'
import { NavLink } from 'react-router-dom'

export default function Bollywood() {
  const { data } = useContext(store)

  const blogDataLeft = (item, index) => {
    if (index < 7) {
      return (
        <div className='blogLeft'>
          <img className='blogImgLeft' src={item.img} alt='not found' />
          <div className='info'>
            <h2><NavLink to={`/blog/${item.id}`}>{item.title}</NavLink></h2>
            <p className='blogDesc'>{item.desc.slice(0, 200)}</p>
            <p className='stamp'><b>Bollywood:</b> 18-12-2023</p>
          </div>
        </div>
      )
    }
  }

  const blogDataTop = (item, index) => {
    if (index === 7) {
      return (
        <div className='blogTop'>
          <img className='blogImgTop' src={item.img} alt='not found' />
          <div className='info'>
            <h3><NavLink to={`/blog/${item.id}`}>{item.title}</NavLink></h3>
            <p className='blogDesc'>{item.desc.slice(0, 300)}</p>
            <p className='stamp'><b>Bollywood:</b> 18-12-2023</p>
          </div>
        </div>
      )
    }
  }

  const blogDataRight = (item, index) => {
    if (index > 7) {
      return (
        <div className='blogRight'>
          <img className='blogImgRight' src={item.img} alt='not found' />
          <div className='info'>
            <h4><NavLink to={`/blog/${item.id}`}>{item.title}</NavLink></h4>
            <p className='stamp'><b>Bollywood:</b> 18-12-2023</p>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <div className='main'>

        <div className='blogLeftCont'>
          <h1>Technology</h1>
          {data.filter((item) => item.cat === "technology").map(blogDataLeft)}
        </div>


        <div className='blogRightCont'>
          <h1>Top Post</h1>
          {data.filter((item) => item.cat === "technology").map(blogDataTop)}
          {data.filter((item) => item.cat === 'technology').map(blogDataRight)}
          <img className='add' src='https://images.pexels.com/photos/18690123/pexels-photo-18690123/free-photo-of-portrait-of-pregnant-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='not found'></img>
        </div>

      </div>
    </>
  )
}
