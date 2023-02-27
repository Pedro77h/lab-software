import { ICreateGarcom } from '../@types/ICreateGarcom.type';
import { PrismaClient } from '@prisma/client';
export class GarçomModel {
  private prismaService = new PrismaClient();

  async getAll() {
    const garcoms = await this.prismaService.garcom.findMany();

    return { garcoms };
  }

  async create({ nome, senha }: ICreateGarcom) {
    const garcom = await this.prismaService.garcom.create({
      data: {
        nome,
        senha
      }
    });

    return {
      garcom
    };
  }

  async findOneOrFail(id: string) {
    try {
      const garcom = await this.prismaService.garcom.findUnique({
        where: {
          id
        }
      });

      return {
        garcom
      };
    } catch (error) {
      console.log(error);

      return null;
    }
  }

  async destroy(id: string) {
    await this.prismaService.garcom.delete({
      where: {
        id
      }
    });
  }
}
