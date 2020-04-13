import React from 'react';
import pc from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={pc.maincontent}>
            <div className={pc.photo}><img src="https://look.com.ua/pic/201210/1920x1080/look.com.ua-60526.jpg" alt=""/></div>
            <div>
                <div className={pc.iconprofile}>
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" alt=""/>
                </div>
                <div className={pc.descript}>
                    <strong className={pc.nameprofile}>Dmitry K.</strong>
                    <p>Date of Birth: <span>2 january</span></p>
                    <p>City: <span>Kharkov</span></p>
                    <p>Education: <span>BSU 11'</span></p>
                    <p>Web site: <span>www.piggy.com</span></p>
                </div>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;