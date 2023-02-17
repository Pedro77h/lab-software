import { ICreateOrder } from './../@types/ICreateOrder.type';
import { PrismaClient, orders, bebidas, pratos } from '@prisma/client';

interface getAllResponse {
  orders: orders[];
}

interface createOrderResponse {
  order: orders & {
    bebidas: bebidas[];
    pratos: pratos[];
  };
}

export class OrderModel {
  private PrismaService = new PrismaClient();

  async getAll(): Promise<getAllResponse> {
    const orders = await this.PrismaService.orders.findMany();

    return { orders };
  }

  //Todo - type this parameters
  async create({ bebidas, pratos, costumerName }: ICreateOrder): Promise<createOrderResponse> {
    const order = await this.PrismaService.orders.create({
      data: {
        costumerName,
        bebidas,
        pratos
      },
      include: {
        bebidas: true,
        pratos: true
      }
    });

    return {
      order
    };
  }

  async findOneOrFail(orderId: string) {
    try {
      const order = await this.PrismaService.orders.findUnique({
        where: {
          id: orderId
        },
        include: {
          bebidas: true,
          pratos: true
        }
      });

      return {
        order
      };
    } catch (error) {
      return {
        error
      };
    }
  }

  async finish(orderId: string): Promise<void> {
    await this.PrismaService.orders.update({
      where: {
        id: orderId
      },
      data: {
        isDelivered: 1
      }
    });
  }
}

export default new OrderModel