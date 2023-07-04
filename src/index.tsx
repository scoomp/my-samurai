import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
             updateNewMessageText={updateNewMessageText} addMessage={addMessage}
        />,
        document.getElementById('root'))
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
