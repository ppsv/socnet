import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar}
                 src='https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;