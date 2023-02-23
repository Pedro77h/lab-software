import { ICreateDrink } from './../@types/ICreateDrink.type';
import { bebidas, PrismaClient } from '@prisma/client';
import { ICreateOrder } from '../@types/ICreateOrder.type';

interface GetAllResponse {
  bebidas: bebidas[];
}

interface CreateResponse {
  bebida: bebidas;
}

export class DrinksOrder {
  private prismaService = new PrismaClient();

  async getAll(): Promise<GetAllResponse> {
    const bebidas = await this.prismaService.bebidas.findMany();

    return { bebidas };
  }

  async create({ nome, price }: ICreateDrink): Promise<CreateResponse> {
    const bebida = await this.prismaService.bebidas.create({
      data: {
        nome,
        price
      }
    });

    return {
      bebida
    };
  }

  async findOneOrFail(id: string): Promise<{ bebida: bebidas | null } | undefined> {
    try {
      const bebida = await this.prismaService.bebidas.findUnique({
        where: {
          id
        }
      });

      return {
        bebida
      };
    } catch (err) {
      return {
        bebida: null
      };
    }
  }

  async save(drinkId: string, data: ICreateOrder) {
    try {
      const bebida = await this.prismaService.bebidas.update({
        where: {
          id: drinkId
        },
        data
      });

      return {
        bebida
      };
    } catch (err) {
      return {
        err
      };
    }
  }

  async destroy(drinkId: string) {
    const bebida = await this.findOneOrFail(drinkId);

    await this.prismaService.bebidas.delete({
      where: {
        id: drinkId
      }
    });
  }
}
