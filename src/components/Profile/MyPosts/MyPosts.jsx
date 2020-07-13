import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h2>MyPosts</h2>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>


        </div>
        <div className={s.posts}>
            <Post message='Hi!' like='Like=15' dislike='Dislike=0'/>
            <Post message='Hello!' like='Like=14' dislike='Dislike=0'/>
            <Post message='Hi everyone!' like='Like=16' dislike='Dislike=0'/>
        </div>

    </div>
}

export default MyPosts;