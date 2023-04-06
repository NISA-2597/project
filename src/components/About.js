import React from 'react'
import Container from 'react-bootstrap/Container';



const About = () => {
  return (
<div>
  <div className='head-text'>
    <div className='head-image'>
      <img className='flexiable' src='AboutUs.jpg' alt="Freedom Blog"/>
    </div>
      <div className='text-on-image'>
        <h1>ABOUT US</h1>
      </div>
      <ul className='text-under-image'>
        <li className='who'>WHO WE ARE</li>
        <li className='vision'>VISION & MISSION</li>
        <li className='management'>MANAGEMENT</li>
        <li className='our'>OUR JOURNEY</li>
        <li className='diversity'>DIVERSITY</li>
      </ul>
  </div>
    <div>
      <div className='list'>
        <img src='who are we.jpg'/>
        </div>
        <div className='list'>
          <h2>WHO WE ARE</h2>
          <p>The world today is a global village and people are its citizens. As boundaries of location, people and<br/>
               time cease to exist, it is of utmost importance that we move with the times. At TuitionWorld, we have<br/>created a unique blend of world-class curricula, contemporary teaching methodologies, and equal<br/>focus on intellectual, physical and personality development, resulting future leaders who are ready to<br/>take on the world. Today, we stand as the force behind creating countless world-class doctors,<br/>engineers, IAS officers, chartered accountants, and so much more..</p>
        </div>
    </div>
    <div className='vision-mission'>

      <div className='background-vision '>
        <img className='vision-image' src='vision.jpg'/>
        <h4 className='text-vision'>VISION</h4>
        <p className='text-vision-para'>We endeavour to be the right mentor for IIT-JEE aspirants, <br/>while also helping them develop a global perspective, with a <br/>keen interest in community life. We prepare students for<br/> competitive exams by providing in-depth knowledge of <br/>various subjects at an intermediate level.</p>
      </div>

      <div className='mission-vission'>
        <div className='background-mission'>
          <img className='mission-image' src='mission.jpg'/>
          <h4 className='text-vision'>MISSION</h4>
          <p className='text-vision-para'>Our goal is to focus on the holistic development of each child, and to give them a competitive edge with the help of an extensive curriculum and dynamic teaching methodologies.

                   Morals : The ability to discriminate between right and wrong
                   Values : The unique beliefs and feelings of an individual
                   Ethics : The principles that define everyday behaviour
                   Problem-solving Techniques : The skill to resolve difficult issues
                   Positive Attitude : The highest indicator of a healthy personality</p>
        </div>
      </div>
    </div>
    <div className='background-management'>
    <div className='list'>
      <h4 className='text-management'>MANAGEMENT</h4>
      <p >Our management’s futuristic vision, determination and leadership has enabled them to set new <br/>benchmarks, ultimately resulting in a world-class education system. Taking our<br/> founders’ vision further, our team of young, dynamic, determined leaders continue to groom our community of global learners, through<br/> methodologies that are an extraordinary blend of conventional and contemporary</p>
    </div>
    <div className='list'>
      <img src='managment.jpg'/>
    </div>
  </div>
  
    <div>
      <div className='list-journey'>
        <img src='our journey.jpg'/>
      </div>
      <div>
        <h4 className='text-our'>OUR JOURNEY</h4>
        <p className='list-journey'>Sri Chaitanya first surfaced on the academic horizon in the year 1986 and within a span of 25 years<br/> went on to become Asia's largest educational group. The past two and a half decades witnessed Sri<br/> Chaitanya introducing novel academic programmes that have helped students enter the nation's <br/>premier engineering and medical colleges. The manner in which the Group has transformed the<br/> outlook towards education has been nothing short of exemplary.</p>
      </div>
  </div>
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
  )
}

export default About
