import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   
    let posts = [
        { message:'Hi!',like:'Like=15',dislike:'Dislike=0'},
        { message:'Hello!', like:'Like=17', dislike:'Dislike=0'},
        {message: 'Hi everyone!', like: 'Like=12', dislike: 'Dislike=0'},
        {message: 'Hi!', like: 'Like=25', dislike: 'Dislike=0'},
        {message: 'Fine!', like: 'Like=19', dislike: 'Dislike=0'},
        {message: 'Cool!', like: 'Like=35', dislike: 'Dislike=0'}
    ]

    let postsElement = posts.map(el => <Post message={el.message} like={el.like} dislike={el.dislike}/>)

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