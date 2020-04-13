import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.photo}><img src="https://look.com.ua/pic/201210/1920x1080/look.com.ua-60526.jpg" alt=""/></div>
            <div>
                <div className={s.iconprofile}>
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" alt=""/>
                </div>
                <div className={s.descript}>
                    <strong className={s.nameprofile}>Dmitry K.</strong>
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