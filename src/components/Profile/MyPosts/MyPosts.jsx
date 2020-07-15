import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(el => <Post message={el.message} like={el.like} dislike={el.dislike}/>)

    let newPostEl = React.createRef();

    let addPost =() => {
        let text =newPostEl.current.value;
        alert(text);
    }

    return <div className={s.postsBlock}>
        <h2>MyPosts</h2>
        <div>
            <div>
                <textarea ref={newPostEl}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>


        </div>
        <div className={s.posts}>
            {postsElement}

        </div>

    </div>
}

export default MyPosts;