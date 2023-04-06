import React from 'react'


const Service = () => {
  return (
    <div>
      <img className='flexiable' src='facilies.jpg'/>
      <div className='services-container'>
        <p>WE CONTINUALLY STRIVE TO PROVIDE THE BEST FACILITIES TO OUR<br/> STUDENTS. WITH OUR ROBUST OFFERINGS, WE COVER ALL ASPECTS THAT<br/> CAN HELP MAKE STUDENT'S LIFE COMFORTABLE AND PRODUCTIVE.</p>
        <ul className='text-under-image'>
          <li className='trasportation'>TRASPORTATION</li>
          <li className='trasportation'>LIBRARY</li>
          <li className='trasportation'>SPORTS</li>
          <li className='trasportation'>LABS</li>
          <li className='trasportation'>HOSTELS</li>
          <li className='trasportation'>DIGITAL LABS</li>
        </ul>
        <p className='service-tex-color'>We pay close attention to the travel safety of our students. With a fleet of buses with 40 seats each, we ensure every student gets <br/>comfortable seating during their journey. Our buses meet all the required government regulation standards and have well-trained <br/>drivers who take care of pick-ups and drops on the assigned routes. We also have bus attenders who look after the students <br/>and take care of seating arrangements.</p>
        <img src='facility-transportation.jpg'/>
        <div>
          <div className='card'>
            <img src='vezeza logo.jpg'/>
            <h4><br/>VEZEZA SOFTWARE</h4>
            <p className='text-container'>Plot No: 27, Raju Colony,<br/>Oppp.Park Hyatt Hotel Lane,<br/>Banjara Hills<br/>HYDERABAD,<br/>Telangana - 500034<br/>For Admissions: 733 732 6804 - 806/807<br/>Web/App Support: 770 228 8603</p>

          </div>
        <iframe className='imgcontactus' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.84491306990606!2d78.429335!3d17.423335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d567585b71%3A0x1dabd669240c32a9!2sFK%20CONSTRUCTIONS%20BUILDERS%20AND%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1678857099368!5m2!1sen!2sin"></iframe>
        </div>
        <footer>
          <nav className='footer'>
            <ul>
              <li>Terms & Conditions</li>
              <li>Copyrights Vezeza-2023</li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
    
  )
}

export default Service