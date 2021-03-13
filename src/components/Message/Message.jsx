import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import "./Message.scss";


function Message({ createdAt, message, user }) {
    const usr = useSelector(selectUser);
    const messageClass = usr.uid === user.uid ? 'sent' : '';
    const avatarClass = messageClass === 'sent' ? 'avatarClass-on' : '';

    return (
        <div className={`message ${messageClass}`}>
            {user.photo ? <Avatar className={avatarClass} src={user.photo}/> : <Avatar className={avatarClass}/>}
            <div className="box-chat">
                <div className="message__info">
                    <h4>
                        {user.displayName ? user.displayName : 'Anonymous'}
                        <span className="message__timestamp">
                            {new Date(createdAt?.toDate()).toUTCString()}
                        </span>
                    </h4>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;
