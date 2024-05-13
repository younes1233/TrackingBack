// src/gps-data.gateway.ts

import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GpsDataService } from './gps-data.service';

@WebSocketGateway()
export class GpsDataGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gpsDataService: GpsDataService) {}

  async handleConnection(client: any, ...args: any[]) {
    // Handle client connection
    console.log('Client connected');
  }

  async handleDisconnect(client: any) {
    // Handle client disconnection
    console.log('Client disconnected');
  }

  async handleGpsDataChange() {
    // Listen for GPS data changes and emit updated data to connected clients
    const gpsData = await this.gpsDataService.findAll();
    console.log(gpsData);
    this.server.emit('gpsData', gpsData);
  }
}
