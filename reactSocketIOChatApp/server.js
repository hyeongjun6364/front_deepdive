import {Server} from 'socket.io';
import express from "express";
import * as http from 'http';
import ViteExpress from 'vite-express'

//서버를 만듬
const app = express();
const server = http.createServer(app);
//socket.io를 만듬, cors오류 해결 => 어떤 url이든지 다 허용
const io = new Server(server,{
    cors:{
        origin:"*"
    }
});
//서버가 듣기 때문에 io.listen은 없어도 됨
//io.listen(3000)

io.on('connection',(client)=>{
    const connetedClientUsername = client.handshake.query.username;
    console.log(`사용자가 들어왔습니다! ${connetedClientUsername}`)
    //new message로 구분하여 클라이언트에게 광범위하게 메세지를 보낸다
    client.broadcast.emit('connection',{username:'관리자',message:`[${connetedClientUsername}]님이 방에 들어왔습니다!`})
    //클라이언트가 담고있는 정보들
    //유용하게 볼만한 것 query살펴보기
    //예를 들어 handshake.query로 데이터를 집어넣을 예정
    console.log(client.handshake.query)
    //new message라는 이름으로 이벤트가 나간다
    client.on('new message',(msg)=>{
        console.log('사용자이름:',connetedClientUsername)

        //사용자가 보낸것을 오픈채팅마냥 모두가 볼 수 있게하기
        io.emit('new message',{username:connetedClientUsername,message:msg.message})

        console.log(msg)
    })
    //클라이언트로 이벤트를 다시걸어 사용자가 나가는것을 판단,disconnet하면 이 이벤트가 들어옴
    client.on('disconnect',()=>{
        console.log(`사용자가 나갔습니다... ${connetedClientUsername}`)
        //이미 disconnect가 되었기에 client가 아닌 io로 emit을 한다
        io.emit('new message',{username:'관리자',message:`[${connetedClientUsername}]님이 방에 나갔습니다..`})
    })
});



server.listen(3000,()=>{
    console.log('서버에서 듣고있습니다.. 3000')
})
//app에 메세지가 들어오면 hello from express를 보내준다
app.get("/message",(_, res)=> res.send("hello from express!"))

app.get("/api",(_, res)=> {
    res.send("hello from api!")
})

ViteExpress.bind(app,server)