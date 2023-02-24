import { ICreateDrink } from './../@types/ICreateDrink.type';
import { Request, Response } from 'express';
import DrinksModel from '../models/drinks.model';

interface CreateDrinkRequest<T> extends Request {
  body: T;
}

export class DrinkController {
  async findAll(req: Request, res: Response) {
    const { bebidas } = await DrinksModel.getAll();

    return res.status(200).send({
      bebidas
    });
  }

  async create(req: CreateDrinkRequest<ICreateDrink>, res: Response) {
    const { nome, price } = req.body;

    if (!nome || !price) return res.status(400);

    const { bebida } = await DrinksModel.create({
      nome,
      price
    });

    return res.status(201).send({
      bebida
    });
  }
}
