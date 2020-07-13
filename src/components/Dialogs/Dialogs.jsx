import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Petya'},
        {name: 'Pasha', id: 1},
        {name: 'Olga', id: 1},
        {name: 'Vika', id: 1},
        {name: 'Nikita', id: 1},
        {name: 'Sasha', id: 1}
    ]

    let dialogsElements = dialogsData
        .map(el => (<DialogItem name={el.name} id={el.id}/>));

    let messageData = [
        {message: 'Hi! ', likes: 15},
        {message: 'Hello!', likes: 15},
        {message: 'How are you? ', likes: 15},
        {message: 'Hi!', likes: 15},
        {message: 'Fine', likes: 15},
        {message: 'Cool', likes: 15}
    ]

    let messageElements = messageData
        .map(el => <Message message={el.message} Likes={el.likes}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;