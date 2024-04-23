import React, { useState }  from 'react'
import './sent.css'
import io from 'socket.io-client';

const sent = (props) => {
  const socket = io()

  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      // Assuming `socket` is defined elsewhere
      socket.emit('chat message', message);
      console.log(message)
      setMessage('');
    }
  };

  return (
    <div className='sent'>
      {/* <div className="sent-msg">{props.msg}</div> */}
      <div className="sent-msg">{props.msg?props.msg:"hello bro!"}</div>
      <div className="sent-time">
        9:19 pm
      </div>
    </div>
  )
}

export default sent
