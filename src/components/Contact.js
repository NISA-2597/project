import React from 'react'
const Contact = () => {

  return (
<div>
      <h1>Please feel free to Contact Us  </h1>
      <iframe className='imgcontactus' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.84491306990606!2d78.429335!3d17.423335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d567585b71%3A0x1dabd669240c32a9!2sFK%20CONSTRUCTIONS%20BUILDERS%20AND%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1678857099368!5m2!1sen!2sin"></iframe>
      <p>
Our Address
FK Group of Companies ,Plot no:27,Rao & Raju Colony,Opp Park Hayath Hotel Lane,<br/>
Venkat Nagar,Road no:2 Banjara Hills,Hyderabad,Telangana-500034</p>
 <div className='imgform'>
  <form>
    <h2>Vezeza's Support Form</h2>
    <label>First Name </label><br/>
    <input type='text' name='First name' placeholder='Enter'/><br/>
    <label> Last Name </label><br/>
    <input type='text' name='Last name' placeholder='Enter'/><br/>
    <label>Email Id </label><br/>
    <input type='email' name='email' placeholder='Enter' /><br/>
    <label>Password </label><br/>
    <input type='Password' name='Password'  placeholder='Enter'/><br/>
    <label>Contact Number </label><br/>
    <input type='text'  placeholder='Enter'/><br/><br/>
    <div className='sidebtn'>
     <button className='contactbtn' >Sign In</button>
     <button className='contactbtn' >Sign Up</button> &nbsp;
    </div>

    
    
  </form>
 </div>
</div>
    
  )
}

export default Contact
