import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const prato = await prisma.bebidas.create({
    data: {
      nome: 'John Doe',
      id: '1',
      price: 15
    }
  });

  const bebida = await prisma.pratos.create({
    data: {
      nome: 'John Doe',
      price: 15,
      id: '1'
    }
  });

  await prisma.orders.create({
    data: {
      costumerName: 'John Doe',
      bebidas: {
        connect: [
          {
            id: bebida.id
          }
        ]
      },
      pratos: {
        connect: {
          id: prato.id
        }
      }
    }
  });
}

main()