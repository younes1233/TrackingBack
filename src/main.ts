import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for all routes
  app.use(cors());
  app.useWebSocketAdapter(new IoAdapter()); // Use IoAdapter for WebSocket connections
  await app.listen(3000);
}
bootstrap();
