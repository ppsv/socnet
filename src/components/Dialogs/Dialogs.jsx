import React from "react";
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => (<DialogItem name={d.name} id={d.id}/>));
    let messageElements = props.state.messageData.map(m => <Message message={m.message} Likes={m.likes}/>);

    let newPostEl = React.createRef();

    let addPost =() => {
        let text =newPostEl.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={newPostEl}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;