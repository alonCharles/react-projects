import './App.css';
import { useState } from "react"
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")

function App() {
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true);
    }

  }
  return (
    <div className="App">
      {!showChat ? (
        <div className='joinChatContainer'>
        <h3>Join A Chat</h3>
        <input type="text" placeholder="User" onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder="Room ID" onChange={(e) => setRoom(e.target.value)}/>
        <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={userName} room={room}/>
      )}
      
        
      
    </div>
  );
}

export default App;
