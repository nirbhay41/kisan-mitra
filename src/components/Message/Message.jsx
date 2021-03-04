import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Message.scss";

function Message({createdAt,message,user}) {
    return (
        <div className="message">
            {user.photo ? <Avatar src={user.photo} /> : <Avatar />}
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">
                    {new Date(createdAt?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;
