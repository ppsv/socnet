import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addPostToState from './redux/state';



export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostToState={addPostToState}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
