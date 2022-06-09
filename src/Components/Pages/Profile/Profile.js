import React from 'react';
import './profile.css'
import pImage from '../../../assets/images/typing.jpg';
import { Chrono } from 'react-chrono';

const Profile = () => {
    // const items = [{
    //     title: "May 1940"
    // }];
    return (
        <div>
            <h2 className='p-name'>Mohammad <span>Yeasin</span></h2>
            <p className='p-title'>FRONT END WEB DEVELOPER</p>
            <img className='p-image' src={pImage} alt="" />

            <ul class="profile-information">
                <li><p><span>Name:</span> Chris Johnson</p></li>
                <li><p><span>Birthday:</span> 06 December 1987</p></li>
                <li><p><span>Job:</span> Freelancer</p></li>
                <li><p><span>Email:</span> henry@domain.com</p></li>
                <li><p><span>Skype:</span> henryrooney85</p></li>
            </ul>

            {/* <div style={{ width: "500px", height: "400px" }}>
                <Chrono
                    items={items} />
            </div> */}
        </div>
    );
};

export default Profile;