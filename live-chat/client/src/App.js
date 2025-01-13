
import './App.css';
import io from 'socket.io-client';
import { useState } from "react"
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")
socket.on("connection_error", (err) => {
  console.log(err)
})

function App() {
  const [userName, setUserName] = useState("")
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if(userName !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  return (
    <div className="App">
      {!showChat ? (
      <div className='joinChatContainer'>
      <h3>Join A Chat</h3>
      <input type="text" placeholder="" onChange={(e) => {setUserName(e.target.value)}}/>
      <input type="text" placeholder="Room Id" onChange={(e) => {setRoom(e.target.value)}}/>
      <button onClick={joinRoom}>Join A Room</button>
      </div> )
      :
      (<Chat socket={socket} userName={userName} room={room}/>)
      }
    </div>
  );
}

export default App;
