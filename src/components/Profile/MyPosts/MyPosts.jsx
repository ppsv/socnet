import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div clssName={s.item}>
        MyPost
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <Post message='Hi!' like='Like=15' dislike='Dislike=0'/>
            <Post message='Hello!' like='Like=14' dislike='Dislike=0'/>
            <Post message='Hi everyone!' like='Like=16' dislike='Dislike=0'/>
        </div>

    </div>
}

export default MyPosts;