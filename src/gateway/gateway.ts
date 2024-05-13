import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "dgram";
import { Server } from "socket.io";
@WebSocketGateway(3001)

export class MyGateway implements OnModuleInit {
   @WebSocketServer()
    server: Server;

    onModuleInit() {
        this.server.on('connection',(socket) =>{
            console.log(socket.id)
            console.log('connected')
        })
    }
@SubscribeMessage ('new message')
onNewMessage(@MessageBody() body:any){
    console.log(body);
    this.server.emit('onMessage',{
        msg: 'New Message',
        content: body,
    })
}
}