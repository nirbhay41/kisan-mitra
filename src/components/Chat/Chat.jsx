import { AddCircleOutline, SendOutlined } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import Message from '../Message/Message';
import "./Chat.scss";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import firebase from "firebase";
import { selectUser } from '../../features/userSlice';
import { db } from '../../fire';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const dummy = useRef();

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("message")
                .orderBy("createdAt")
                .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [channelId]);

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = e => {
        e.preventDefault();
        if (input) {
            db.collection("channels").doc(channelId).collection("message").add({
                message: input,
                user: user,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        }
        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map((message) => (

                    <Message key={message.createdAt}
                        createdAt={message.createdAt}
                        message={message.message}
                        user={message.user}
                    />
                ))}
                <span ref={dummy}></span>
            </div>

            <div className="chat__input">
                <AddCircleOutline fontSize="large" />
                <form>
                    <input disabled={!channelId} value={input} onChange={e => setInput(e.target.value)} placeholder="type a message" />
                    <button type="submit" disabled={!channelId} onClick={sendMessage}><SendOutlined /></button>
                </form>
            </div>
        </div>
    )
}

export default Chat;
