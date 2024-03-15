import React from 'react'
import '../style/projects.css'
import img1 from '../assets/Rectangle 26.png'
import img2 from '../assets/Rectangle 27.png'
import img3 from '../assets/Rectangle 28.png'
import img4 from '../assets/Rectangle 29.png'

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container'>
        <div className='pro-info'>
          <h4>Projects</h4>
          <h1>Our completed wonderful projects</h1>
          <p>There is no limit to creativity. With a strong presence in the Kingdom of Saudi Arabia, we are proud to expand our reach with a new branch in Egypt. Our expertise lies in driving improvement and innovation through the latest technology trends.</p>
          <button>Latest Projects</button>
        </div>
        <div className='pro-img'>
          <div className='box-1'>
            <div className='box1'>
              <img src={img1}/>
            </div>
            <div className='box2'>
              <img src={img2}/>
            </div>
          </div>
          <div className='box-2'>
            <div className='box3'>
              <img src={img3}/>
            </div>
            <div className='box4'>
              <img src={img4}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects