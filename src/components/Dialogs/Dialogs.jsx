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

    let messageData = [
        {message: 'Hi! ', likes: 15},
        {message: 'Hello!', likes: 15},
        {message: 'How are you? ', likes: 15},
        {message: 'Hi!', likes: 15},
        {message: 'Fine', likes: 15},
        {message: 'Cool', likes: 15}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} Likes={messageData[0].likes}/>
                <Message message={messageData[1].message} Likes={messageData[1].likes}/>


            </div>
        </div>
    )
}

export default Dialogs;