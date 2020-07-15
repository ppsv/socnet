import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostToState} from "../../redux/state";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPostToState={addPostToState}/>
        </div>
    )
}

export default Profile;