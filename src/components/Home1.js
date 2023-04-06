import React from 'react'
import { auth } from './firebase';

const Home1 = () => {
  return (
    <div className='hero'>
      <br/><br/><br/><h1 className='text-section'>Welcome to Vezeza</h1>
      <p className='text-section'>Our Team of Experts is Committed to Delivering Top-Quality<br/>
       Software Development Services that align with your Business Goals and objectives.<br/>
       Whether you need a Mobile app, Web Application, or Enterprise Software,<br/>
        We have the Expertise to deliver the Perfect Solution for your Business.<br/> 
        Contact us today to discuss your Project!</p>
        <button type='submit' className='button' onClick={() => auth.signOut}>Read Us</button>
    </div>
  );
}

export default Home1