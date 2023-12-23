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
          <h1>Hollywood</h1>
          {data.filter((item) => item.cat === "hollywood").map(blogDataLeft)}
        </div>


        <div className='blogRightCont'>
          <h1>Top Post</h1>
          {data.filter((item) => item.cat === "hollywood").map(blogDataTop)}
          {data.filter((item) => item.cat === 'hollywood').map(blogDataRight)}
          <img src='data:image/jpeg;base64,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' className='add' alt='not found'></img>
        </div>

      </div>
    </>
  )
}
