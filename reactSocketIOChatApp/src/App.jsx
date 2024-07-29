import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {io} from "socket.io-client"
//import { response } from 'express'
function App() {
  const [count, setCount] = useState(0)
  const [socket,setSocket] = useState(null)
  const [username,setUserName] = useState()

  const [messages,setMessages] = useState([])

  const [userInput,setUserInput] = useState()

  const [isConnect,setIsConnect] = useState(false);
  //서버 연결
  const connectToChatServer=()=>{
    console.log('connectToChatServer');
    const _socket = io('http://localhost:3000',{
      autoConnect:false,
      query:{
        username:username,
      }
    },)
    _socket.connect()
    setSocket(_socket)
  }
  //서버 연결 끊기
  const disConnectToChatServer=()=>{
    console.log('disConnectToChatServer');
    socket?.disconnect()
  }

  const onConnected=()=>{
    console.log('프론트 - onConnected');
    setIsConnect(true)
  }

  const offConnected=()=>{
    console.log('프론트 - offConnected');
    setIsConnect(false)
  }

  const onMessageReceived=(msg)=>{
    console.log('프론트 - onMessageReceived');
    console.log(msg)

    setMessages(prev=>[...prev,msg])
  }
  //데이터 보내기
  const sendMessageToChatServer=()=>{
    console.log(`프론트 - sendMessageToChatServer input:${userInput}`);
    //메세지이름, 보내고자 하는 데이터 순으로 입력
    // socket?.emit("new message", userInput, (response)=>{
    //   console.log(response)
    // })
    //Json형식으로 보내기
    socket?.emit("new message", {message:userInput,username:username}, (response)=>{
      console.log(response)
    })
  }
  useEffect(()=>{
    //connect라는 이벤트가 들어오면 onConnected함수를 호출한다는 뜻
    socket?.on('connect',onConnected)
    socket?.on('disconnect',offConnected)
    
    socket?.on('new message',onMessageReceived)


    return ()=>{
      console.log('useEffect clean up function called!')
      //위에서 이벤트(onConnected) 달았던 것을 해제시키기
      socket?.on('disconnect',offConnected)
      socket?.off('connect',onConnected)
      socket?.off('new message',onMessageReceived)

    }
  },[socket])
  const messageList = messages.map((aMsg,index)=>(
    <li key={index}>{aMsg.username}:{aMsg.message}</li>
  ))
  useEffect(()=>{
    console.log('useEffect 스크롤 올리기!')
    window.scrollTo({
      top:document.body.scrollHeight,
      left:0,
      behavior:"smooth"
    })
  },[messages])
  return (
    <>
      <h1>{username}</h1>
      <h2>현재접속상태: {isConnect ? "접속" : "미접속"}</h2>

      <div className='card'>
        <input value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <button onClick={() => connectToChatServer()}>
          접속
        </button>
        <button onClick={() => disConnectToChatServer()}>
          접속종료
        </button>
      </div>

      <div className='card'>
        <input value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
        <button onClick={() => sendMessageToChatServer()}>
          보내기
        </button>
        
      </div>
     <ul>
      {messageList}
     </ul>
    </>
  )
}

export default App
