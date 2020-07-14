import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {message: 'Hi!', like: 'Like=15', dislike: 'Dislike=0'},
    {message: 'Hello!', like: 'Like=17', dislike: 'Dislike=0'},
    {message: 'Hi everyone!', like: 'Like=12', dislike: 'Dislike=0'},
    {message: 'Hi!', like: 'Like=25', dislike: 'Dislike=0'},
    {message: 'Fine!', like: 'Like=19', dislike: 'Dislike=0'},
    {message: 'Cool!', like: 'Like=35', dislike: 'Dislike=0'}
]
let dialogsData = [
    {id: 1, name: 'Petya'},
    {name: 'Pasha', id: 1},
    {name: 'Olga', id: 1},
    {name: 'Vika', id: 1},
    {name: 'Nikita', id: 1},
    {name: 'Sasha', id: 1}
]
let messageData = [
    {message: 'Hi! ', likes: 15},
    {message: 'Hello!', likes: 15},
    {message: 'How are you? ', likes: 15},
    {message: 'Hi!', likes: 15},
    {message: 'Fine', likes: 15},
    {message: 'Cool', likes: 15}
]


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
