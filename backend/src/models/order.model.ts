import { ICreateOrder } from './../@types/ICreateOrder';
import { PrismaClient, orders } from '@prisma/client';

interface getAllResponse {
  orders: orders[];
}

export class OrderModel {
  private PrismaService = new PrismaClient();

  async getAll(): Promise<getAllResponse> {
    const orders = await this.PrismaService.orders.findMany();

    return { orders };
  }

  async create({ bebidas, comidas, costumerName }: ICreateOrder) {}
}
