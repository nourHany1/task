import React from 'react'
import '../style/services.css'
import ai from '../assets/chat-bot.png'
import soft from '../assets/decentralize.png'
import cube from '../assets/cube.png'

const Services = () => {
  return (
    <div className='services'>
      <h4>Our Services</h4>
      <h1>ALTC Has Experts All Disciplines</h1>
      <div className='container'>
        <div className='box'>
          <img src={ai} alt='ai'/>
          <h5>AI</h5>
          <p>Artificial Intelligence technology unlocks limitless possibilities. AI solutions offer intelligent data analysis, enhance customer communication, and guide accurate decision-making.</p>
        </div>
        <div className='box'>
          <img src={soft} alt='ai'/>
          <h5>Software services</h5>
          <p>Websites and apps represent your online presence. Through attractive design and outstanding user experience, you can reach a wide audience and build a strong presence.</p>
        </div>
        <div className='box'>
          <img src={cube} alt='ai'/>
          <h5>E-Commerce</h5>
          <p>E-commerce opens doors to expansion and online customer reach. Simply put, you can sell your products and services globally.</p>
        </div>
      </div>
      <button>See More</button>
    </div>
  )
}

export default Services