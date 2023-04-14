import React, { useState } from 'react';
import { chatEmoji, chatSend, logo } from '../../../assets';
import './Messages.css';
import { Height } from '@mui/icons-material';
import zIndex from '@mui/material/styles/zIndex';

type Message = {
  id: number;
  text: string;
  isSender: boolean;
};

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const frequentlyUsedMessages = ['Schedule a pickup', 'FAQ', 'Complaints', 'How to pay', 'Drop-off address', 'Subscribe to package'];

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage: Message = {
        id: Date.now(),
        text: messageInput.trim(),
        isSender: true,
      };
      setMessages([...messages, newMessage].reverse());
      setMessageInput('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleFrequentlyUsedMessageClick = (message: string) => {
    setMessageInput(message);
  };

  return (
    <>
      <>
        <div className="messages-header" style={{ boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.1)' }}>
          <nav className='d-flex align-items-center ps-4'
            style={{ height: '86px', backgroundColor: '#fff', borderRadius: '10px 10px 0px 0px' }}>
            <div>
              <img src={logo} alt='' />
            </div>
          </nav>
        </div>
        <div style={{ backgroundColor: '#F6F6F6', height: '470px', overflowY: 'scroll' }}>
          <div className='messages-area'>
            {messages.map((message) => (
              <div key={message.id} className={`message-item ${message.isSender ? 'outgoing' : 'incoming'}`}>
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className='frequently-used-messages-container' style={{ overflowX: 'scroll', whiteSpace: 'nowrap', backgroundColor: '#F6F6F6', }}>
          {frequentlyUsedMessages.map((message) => (
            <button key={message} onClick={() => handleFrequentlyUsedMessageClick(message)} style={{ margin: '5px' }}>
              {message}
            </button>
          ))}
        </div>
        <div>
        </div>
        <div className='type-message' style={{ position: 'relative', bottom: 0, left: 0, width: '100%' }}>
          <div style={{ backgroundColor: '#E6E6E6', height: '86px', display: 'flex', alignItems: 'center', borderRadius: '0px 0px 10px 10px' }}>
            <form className='d-flex align-items-center justify-content-between w-100 px-5' onSubmit={(event) => event.preventDefault()}>
              <button className='border-0 bg-transparent'>
                <img src={chatEmoji} alt="" />
              </button>
              <input
                type='text'
                value={messageInput}
                onChange={(event) => setMessageInput(event.target.value)}
                onKeyDown={handleKeyDown}
                style={{ width: '80%', height: '52px' }}
                placeholder='Enter your text here'
              />
              <button
                type='submit'
                onClick={handleSendMessage}
                style={{ float: 'right', marginTop: '5px' }}
                className='border-0 bg-transparent'
              >
                <img src={chatSend} alt="" />
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Messages;




