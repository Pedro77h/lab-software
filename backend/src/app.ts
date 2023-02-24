import express, { Application } from 'express';
import cors from 'cors';
import orderRouter from './routes/order.route';
import drinkRouter from './routes/drink.route';

class Server {
  private app: Application = express();

  constructor(private readonly port: number = 4000) {
    this.getApp();
    this.setup();
    this.routes();
  }

  private getApp(): void {
    this.app.listen(this.port, () => {
      console.log(`[server]:server is online on port ${this.port}`);
    });
  }

  private setup(): void {
    this.app.use(express.json());
    this.app.use(cors());
    console.log(['[express]: the Express setup is loaded successfully']);
  }

  private routes() {
    this.app.use('/pedidos', orderRouter);
    this.app.use('/bebidas', drinkRouter);
  }
}

new Server();
