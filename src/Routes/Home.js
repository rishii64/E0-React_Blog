import React, { useContext } from 'react'
import { store } from '../Store/StoreCompo'
import { Link } from 'react-router-dom'

export default function Home() {
  const { data } = useContext(store)
  return (
    <div>
      <div className='poster'>
        <div className='img1'>
          <img src='https://c4.wallpaperflare.com/wallpaper/153/453/233/anime-crazy-face-art-wallpaper-preview.jpg' alt='not found' />
        </div>
        <div className='img2'>
          <img src='https://c4.wallpaperflare.com/wallpaper/644/788/886/anime-mask-covering-disguise-wallpaper-preview.jpg' alt='not found' />
        </div>
        <div className='img3'>
          <img src='https://c4.wallpaperflare.com/wallpaper/189/240/835/cover-naruto-anime-cover-wallpaper-preview.jpg' alt='not found' />
        </div>
      </div>

      <h2 className='latestHead'>The Latest</h2>
      <div className='theLatest'>
        <div className='left section1'>
          <img className='homeLatest' src={data[2].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[2].id}`}>{data[2].title}</Link></h3>
            <p className='des'>{data[2].desc.slice(0, 80)}....</p>
            <p className='stamp'>Bollywood : 17-10-23</p>
          </div>
        </div>
        <div className='left section1'>
          <img className='homeLatest' src={data[22].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[22].id}`}>{data[22].title}</Link></h3>
            <p className='des'>{data[22].desc.slice(0, 80)}....</p>
            <p className='stamp'>Bollywood : 17-10-23</p>
          </div>
        </div>
        <div className='left section1'>
          <img className='homeLatest' src={data[44].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[44].id}`}>{data[44].title}</Link></h3>
            <p className='des'>{data[44].desc.slice(0, 80)}....</p>
            <p className='stamp'>Technology : 17-10-23</p>
          </div>
        </div>
      </div>

      <h2 className='latestHead'>The Latest Articles</h2>
      <div className='latestArticles'>
        <div className='homeLeft'>
          <div className='blogLeft'>
            <img className='homeArticles' src={data[5].img} alt='not found' />
            <div className='info'>
              <h3><Link to={`/Blog/${data[5].id}`}>{data[5].title}</Link></h3>
              <p className='des'>{data[5].desc.slice(0, 140)}....</p>
              <p className='stamp'>Bollywood : 17-10-23</p>
            </div>
          </div>
          <div className='blogLeft'>
            <img className='homeArticles' src={data[16].img} alt='not found' />
            <div className='info'>
              <h3><Link to={`/Blog/${data[16].id}`}>{data[16].title}</Link></h3>
              <p className='des'>{data[16].desc.slice(0, 130)}....</p>
              <p className='stamp'>Fitness : 17-10-23</p>
            </div>
          </div>
          <div className='blogLeft'>
            <img className='homeArticles' src={data[22].img} alt='not found' />
            <div className='info'>
              <h3><Link to={`/Blog/${data[22].id}`}>{data[22].title}</Link></h3>
              <p className='des'>{data[22].desc.slice(0, 120)}....</p>
              <p className='stamp'>Food : 17-10-23</p>
            </div>
          </div>
          <div className='blogLeft'>
            <img className='homeArticles' src={data[33].img} alt='not found' />
            <div className='info'>
              <h3><Link to={`/Blog/${data[33].id}`}>{data[33].title}</Link></h3>
              <p className='des'>{data[33].desc.slice(0, 130)}....</p>
              <p className='stamp'>Hollywood : 17-10-23</p>
            </div>
          </div>
        </div>

        <div className='homeRight'>
          <img className='mainAdd' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKliO2NiPDAHPNgm_Q2iB1dBS4hTTrX6yGLIJPZWGQ7aOcGGgJIxjfC03OPsFz7PhnK6g&usqp=CAU' alt='not found'></img>
          <h1 className='mainTopPost'>Top Post</h1>
          <div className='home blogTop'>
            <img src={data[14].img} alt='not found' />
            <div className='info'>
              <h3><Link to={`/Blog/${data[14].id}`}>{data[14].title}</Link></h3>
              <p className='des'>{data[14].desc.slice(0, 60)}....</p>
              <p className='ref'>Bollywood : 17-10-23</p>
            </div>
          </div>
        </div>

      </div>

      <h2 className='latestHead'>Latest Stories</h2>
      <div className='theLatest'>
        <div className='left section1'>
          <img className='homeLatest' src={data[12].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[12].id}`}>{data[12].title}</Link></h3>
            <p className='des'>{data[12].desc.slice(0, 80)}....</p>
            <p className='ref'>Bollywood : 17-10-23</p>
          </div>
        </div>
        <div className='left section1'>
          <img className='homeLatest' src={data[24].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[24].id}`}>{data[24].title}</Link></h3>
            <p className='des'>{data[24].desc.slice(0, 80)}....</p>
            <p className='ref'>Bollywood : 17-10-23</p>
          </div>
        </div>
        <div className='left section1'>
          <img className='homeLatest' src={data[36].img} alt='not found' />
          <div className='info'>
            <h3><Link to={`/Blog/${data[36].id}`}>{data[36].title}</Link></h3>
            <p className='des'>{data[36].desc.slice(0, 80)}....</p>
            <p className='ref'>Hollywood : 17-10-23</p>
          </div>
        </div>
      </div>


    </div>
  )
}
