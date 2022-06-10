import React from 'react';
import './profile.css'
import pImage from '../../../assets/images/typing.jpg';
import resume from '../../../assets/YEASIN.pdf'
import { Chrono } from 'react-chrono';
import fb from '../../../assets/icons/facebook.svg'
import github from '../../../assets/icons/github.svg'
import location from '../../../assets/icons/pin.svg'

const Profile = () => {
    // const items = [{
    //     title: "May 1940"
    // }];
    // const handleEmailMe = () => {
    //     window.open("mailto:kmyeasin29@gmail.com")
    // }
    return (
        <div className='profile-container'>
            <h2 className='p-name'>Mohammad <span>Yeasin</span></h2>
            <p className='p-title'>FRONT END WEB DEVELOPER</p>
            <img className='p-image' src={pImage} alt="" />
            <a href="">
                <div className="social-icon-container">
                    <img className='download-icon' src="" alt="" />
                </div>
            </a>
            <div className='social-icon'>
                <a href="https://www.facebook.com/fbYeasin/"><img className='icon-item' src={fb} alt="" /></a>
                <a href="https://github.com/kmyeasin29"><img className='icon-item' src={github} alt="" /></a>
            </div>
            <div className="contact-info">
                <p className="contact-item"><img className='location' src={location} alt="" />Chittagong, Bangladesh</p>
                <p className="contact-item">kmyeasin29@gmail.com</p>
                <p className="contact-item">(+880)1743924303</p>
            </div>

            {/* <ul class="profile-information">
                <li><p><span>Name:</span> Chris Johnson</p></li>
                <li><p><span>Birthday:</span> 06 December 1987</p></li>
                <li><p><span>Job:</span> Freelancer</p></li>
                <li><p><span>Email:</span> henry@domain.com</p></li>
                <li><p><span>Skype:</span> henryrooney85</p></li>
            </ul> */}

            <a className='resume-button' href={resume} download="YEASIN.pdf">download Resume</a>

            {/* <div style={{ width: "500px", height: "400px" }}>
                <Chrono
                    items={items} />
            </div> */}
            {/* <a className="sidebar__item sidebar__email"  href='' onClick={handleEmailMe}>email me</a> */}
        </div>
    );
};

export default Profile;