import React from 'react';

import "./ChatHeader.scss";

function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">
            <h3>
                <span className="chatHeader__hash">#</span>
                {channelName}
            </h3>
        </div>
    )
}

export default ChatHeader
