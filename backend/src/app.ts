import express, { Application } from 'express';
import cors from 'cors';

class Server {
  private app: Application = express();

  constructor(private readonly port: number = 4000) {
    this.getApp();
    this.setup();
  }

  private getApp():void {
    this.app.listen(this.port, () => {
      console.log(`server is online on port ${this.port}`);
    });
  }

  private setup():void {
    this.app.use(express.json());
    this.app.use(cors());
  }
}

new Server();
