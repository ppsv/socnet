import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElement = props.posts.map(el => <Post message={el.message} like={el.like} dislike={el.dislike}/>)

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
            {postsElement}

        </div>

    </div>
}

export default MyPosts;