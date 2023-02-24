import { IUpdateDrink } from './../@types/IUpdateDrink.type';
import { ICreateDrink } from './../@types/ICreateDrink.type';
import { Request, Response } from 'express';
import DrinksModel from '../models/drinks.model';

interface CreateDrinkRequest<T> extends Request {
  body: T;
}

interface UpdateDrinkRequest<T> extends Request {
  body: T;
}
class DrinkController {
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

  async find(req: Request, res: Response) {
    const { bebida } = await DrinksModel.findOneOrFail(req.params.id);

    if (!bebida) return res.status(404);

    return res.status(200).send({
      bebida
    });
  }

  async update(req: UpdateDrinkRequest<IUpdateDrink>, res: Response) {
    const { nome, price } = req.body;

    if (!DrinksModel.findOneOrFail(req.params.id)) {
      console.log('aa');

      return res.status(404);
    }

    await DrinksModel.save(req.params.id, {
      nome,
      price
    });

    return res.status(204).send();
  }

  async destroy(req: Request, res: Response) {
    if (!DrinksModel.findOneOrFail(req.params.id)) res.status(404);

    await DrinksModel.destroy(req.params.id);

    return res.status(202).send();
  }
}

export default new DrinkController();
