import React from 'react'
import '../style/recommend.css'
import quote from '../assets/quote.svg'
import star from '../assets/Stars.svg'
import e1 from '../assets/Ellipse 74.png'
import e2 from '../assets/e2.png'
import e3 from '../assets/e3.png'

const Recommend = () => {
  return (
    <div className='recommend'>
      <h4> Clients Recommendations </h4>
      <h1>Our Clients Success Stories</h1>
      <div className='container'>
        <div className='box'>
          <div className='quotes'>
            <img className='quote' src={quote} alt='quote'/>
            <p>ALTC is a truly pioneering company in the field of technology, and we cooperated with them a year ago to do a CRM system for my company, and we have achieved great success, and the company has a very distinguished team in all fields.</p>
            <div className='images'>
            <img className='star' src={star} alt='star'/>
            <img className='e' src={e1} alt='e'/>
            </div>
          </div>
          <h5>Marawan Ahmed</h5>
          <p className='p'>Entrepreneur</p>
        </div>
        <div className='box'>
          <div className='quotes'>
            <img className='quote' src={quote} alt='quote'/>
            <p>ALTC is a truly pioneering company in the field of technology, and we cooperated with them a year ago to do a CRM system for my company, and we have achieved great success, and the company has a very distinguished team in all fields.</p>
            <div className='images'>
            <img className='star' src={star} alt='star'/>
            <img className='e' src={e2} alt='e'/>
            </div>
          </div>
          <h5>Eng/Ahmed Mohamed</h5>
          <p className='p'>Entrepreneur</p>
        </div>
        <div className='box'>
          <div className='quotes'>
            <img className='quote' src={quote} alt='quote'/>
            <p>ALTC is a truly pioneering company in the field of technology, and we cooperated with them a year ago to do a CRM system for my company, and we have achieved great success, and the company has a very distinguished team in all fields.</p>
            <div className='images'>
            <img className='star' src={star} alt='star'/>
            <img className='e' src={e3} alt='e'/>
            </div>
          </div>
          <h5>Eng/Sara Ahmed</h5>
          <p className='p'>Entrepreneur</p>
        </div>
      </div>
    </div>
  )
}


export default Recommend