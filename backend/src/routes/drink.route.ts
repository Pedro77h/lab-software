import { Router } from 'express';
import DrinkController from '../controllers/drink.controller';

const drinkRouter = Router();

drinkRouter.post('/', DrinkController.create);

drinkRouter.get('/', DrinkController.findAll);

drinkRouter.get('/:id', DrinkController.find);

drinkRouter.patch('/:id', DrinkController.update);

drinkRouter.delete('/:id', DrinkController.destroy);

export default drinkRouter;
