import React, { useEffect, useRef, useState } from 'react';
import ChatHeader from '../ChatHeader/ChatHeader';
import "./Chat.scss";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from '../../features/appSlice';
import firebase from "firebase";
import { selectUser } from '../../features/userSlice';
import { db, storage } from '../../fire';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loadable from 'react-loadable';

function Loading(props) {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

const Message = Loadable({
    loader: () => import('../Message/Message'),
    loading: Loading,
})

toast.configure();

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null);
    const [type, setType] = useState("");
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
        if (type === 'img') {
            const uploadTask = storage.ref(`/images/${image.name}`).put(image);
            uploadTask.on("state_changed", console.log, console.error, () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setImage(null);
                        db.collection("channels").doc(channelId).collection("message").add({
                            message: input,
                            imageurl: url,
                            user: user,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        })
                    });
            });
        } else {
            if (input) {
                db.collection("channels").doc(channelId).collection("message").add({
                    message: input,
                    user: user,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
            }
        }
        setInput("");
    }

    function openFileDialog(accept, callback) {
        const inputElement = document.createElement("input");
        inputElement.type = "file";
        inputElement.accept = accept;
        inputElement.addEventListener("change", callback)
        inputElement.dispatchEvent(new MouseEvent("click"));
    }

    const handleChange = e => {
        setImage(e.target.files[0]);
        toast(`${e.target.files[0].name} added successfully to send`);
        setType("img");
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
                        imageurl={message.imageurl}
                    />
                ))}
                <span ref={dummy}></span>
            </div>

            <div className="chat__input">
                <i className="fas fa-paperclip fileOpener" onClick={() => openFileDialog('image/*', handleChange)}></i>
                <form>
                    <input disabled={!channelId} value={input} onChange={e => setInput(e.target.value)} placeholder="type a message" />
                    <button type="submit" disabled={!channelId} onClick={sendMessage}><i className="fas fa-paper-plane send" disabled={!channelId}></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chat;
