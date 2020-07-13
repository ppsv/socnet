import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Petya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Olga</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi!
                </div>
                <div className={s.dialog}>
                    Hello!
                </div>
                <div className={s.dialog}>
                    How are you?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;