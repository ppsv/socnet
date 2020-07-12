import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className ={s.content}>
        <img src='https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg'/>
        <div>ava+description</div>
        <div>My Posts
            <div>New Post</div>
            <div>Post1</div>
            <div>Post2</div>
        </div>
        
    </div>
}

export default Profile;