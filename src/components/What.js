import React from 'react'
import '../style/what.css'
import what from '../assets/what.svg'
import highLight from '../assets/Highlight_05.svg'


const What = () => {
  return (
    <div className='what'>
      <div className='container'>
        <div className='what-info'>
          <h4>What We Do</h4>
          <h1>We create experiences that put people in Primarily<img src={highLight} alt='highlight'/></h1>
          <p>Experiences are only as good as their weakest points. It's about more than just creating shiny things. It is all about the quality of your brand</p>
        </div>
        <div className='what-image'>
          <img src={what} alt='photo'/>
        </div>
      </div>
    </div>
  )
}

export default What