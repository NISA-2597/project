import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';


function Header() {
  return (
    <div>
        <div>

          <nav>
                <ul>
                    <Link to="/About"><li><a href="#">ABOUTUS</a></li></Link>
                    <Link to="/Home"><li><a href="#">PREPRIMARY</a></li></Link>
                    <Link to="/Carrers"><li><a href ="#">PRIMARY</a></li></Link>
                    <Link to="/Testimonals"><li><a href ="#">HIGHSCHOOL</a></li></Link>      {/*The side  code is used for a nav bar with components of Home,About,Contact,Sign-Up */}
                    <Link to="/Contact"><li><a href="#">STUDENTLIFE</a></li></Link>
                    <Link to="/EnquireNow"><li><a href='#'>ACHIEVEMENTS</a></li></Link>
                    <Link to="/Services"><li><a href ="#">SERVICES</a></li></Link>
                    <Link to="/Services"><li><a href ="#">UNIFORMS</a></li></Link>
                    <Link to="/Services"><li><a href ="#">GALLERY</a></li></Link>
                    <Link to="/Services"><li><a href ="#">CARRERS</a></li></Link> 
                </ul>
            </nav>
        </div>

    </div>
  );
}

export default Header;