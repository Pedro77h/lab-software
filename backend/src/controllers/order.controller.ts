import { OrderModel } from './../models/order.model';
import { Request, Response } from 'express';

interface CreateOrderProps {
  costumerName: string;
  pratos: object[];
  bebidas: object[];
}

interface CreateOrderRequest<T> extends Request {
  body: T;
}

export class OrderController {
  private orderModel = new OrderModel();

  async create(req: CreateOrderRequest<CreateOrderProps>, res: Response): Promise<Response> {
    const { bebidas, costumerName, pratos } = req.body;

    if (!bebidas || !costumerName || !pratos) return res.status(400);

    const { order } = await this.orderModel.create({
      bebidas,
      pratos,
      costumerName
    });

    return res.status(201).send({
      order
    });
  }

  async findOrders(req: Request, res: Response): Promise<Response> {
    const { orders } = await this.orderModel.getAll();

    return res.status(200).send({
      orders
    });
  }

  async find(req: Request, res: Response) {
    const { orderId } = req.params;

    const { order } = await this.orderModel.findOneOrFail(orderId);

    if (!order) return res.status(404);

    return res.status(200).send({
      order
    });
  }

  async finish(req: Request, res: Response) {
    const { orderId } = req.params;

    const { order } = await this.orderModel.findOneOrFail(orderId);

    if (!order) return res.status(404);

    await this.orderModel.finish(orderId);

    return res.status(200);
  }
}
