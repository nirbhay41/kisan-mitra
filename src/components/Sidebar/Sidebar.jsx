import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { db } from '../../fire';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import './Sidebar.scss';


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        });
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Enter a new channel name: ');
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Discussion Forum</h3>
            </div>

            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <h4>Text Channel</h4>
                    </div>
                    <i onClick={handleAddChannel} className="fas fa-plus-circle sidebar_addChannel"></i>
                </div>
                <div className="sidebar_channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))}
                </div>
            </div>

            <div className="sidebar_profile">
                {user.photo ? <img src={user.photo} /> : <i className="fas fa-user-circle"></i>}
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName ? user.displayName : 'Guest User'}</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
