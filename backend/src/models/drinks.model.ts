import { IUpdateDrink } from './../@types/IUpdateDrink.type';
import { ICreateDrink } from './../@types/ICreateDrink.type';
import { bebidas, PrismaClient } from '@prisma/client';

interface GetAllResponse {
  bebidas: bebidas[];
}

interface CreateResponse {
  bebida: bebidas;
}

export class DrinksModel {
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

  async findOneOrFail(drinkId: string) {
    try {
      const bebida = await this.prismaService.bebidas.findUnique({
        where: {
          id: drinkId
        }
      });
      return {
        bebida
      };
    } catch (error) {
      return {
        error
      };
    }
  }
  async save(drinkId: string, data: IUpdateDrink) {
    const bebida = await this.prismaService.bebidas.update({
      where: {
        id: drinkId
      },
      data
    });

    return {
      bebida
    };
  }

  async destroy(drinkId: string) {
    await this.prismaService.bebidas.delete({
      where: {
        id: drinkId
      }
    });
  }
}

export default new DrinksModel();
