import express, { Application } from 'express';

class Server {
  private app: Application = express();

  constructor(private readonly port: number = 4000) {
    this.getApp();
  }

  private getApp() {
    this.app.listen(this.port, () => {
      console.log(`server is online on port ${this.port}`);
    });
  }
}

new Server();
