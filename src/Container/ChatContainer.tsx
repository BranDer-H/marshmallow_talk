import React, { useState } from 'react';
import ChatScreen from '../Presenter/ChatScreen'

import { Message } from '../interface/types'

const ChatContainer = () => {
    const [msgHistory, setMsgHistory] = useState<Message[]>([]);
    const [message, setMessage] = useState('');

    return (
        <ChatScreen
            msgHistory = {msgHistory}
            message = {message}
            setMessage = {setMessage}
        />
    )
}

export default ChatContainer;