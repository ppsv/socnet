import {rerenderEntireTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {message: 'Hi!', like: 'Like=15', dislike: 'Dislike=0'},
            {message: 'Hello!', like: 'Like=17', dislike: 'Dislike=0'},
            {message: 'Hi everyone!', like: 'Like=12', dislike: 'Dislike=0'},
            {message: 'Hi!', like: 'Like=25', dislike: 'Dislike=0'},
            {message: 'Fine!', like: 'Like=19', dislike: 'Dislike=0'},
            {message: 'Cool!', like: 'Like=35', dislike: 'Dislike=0'}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Petya'},
            {name: 'Pasha', id: 1},
            {name: 'Olga', id: 1},
            {name: 'Vika', id: 1},
            {name: 'Nikita', id: 1},
            {name: 'Sasha', id: 1}
        ],
        messageData: [
            {message: 'Hi! ', likes: 15},
            {message: 'Hello!', likes: 15},
            {message: 'How are you? ', likes: 15},
            {message: 'Hi!', likes: 15},
            {message: 'Fine', likes: 15},
            {message: 'Cool', likes: 15}
        ]
    }

}

export let addPostToState = (postMessage) => {
    let newPost = {
        id: 5, message: postMessage, like: 'Like=15', dislike: 'Dislike=0'
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;