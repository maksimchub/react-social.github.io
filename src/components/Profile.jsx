import React from 'react';

const Profile = () => {
    return (
        <div className="main-content">
            <div className="photo"><img src="https://look.com.ua/pic/201210/1920x1080/look.com.ua-60526.jpg" alt=""/></div>
            <div>
                <div className="icon-profile">
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png" alt=""/>
                </div>
                <div className="descript">
                    <strong className="name-profile">Dmitry K.</strong>
                    <p>Date of Birth: <span>2 january</span></p>
                    <p>City: <span>Kharkov</span></p>
                    <p>Education: <span>BSU 11'</span></p>
                    <p>Web site: <span>www.piggy.com</span></p>
                </div>
            </div>
            <div className="my-posts">
                <h3>My posts</h3>
                <textarea className="news" id="" rows="5" placeholder="your news"></textarea>
                <button type="button" className="button">SEND</button>
            </div>
            <div>
                <p>hey world</p>
                <p>hey world 2</p>
            </div>
        </div>
    )
}

export default Profile;