import OrderController from './../controllers/order.controller';
import { Router } from 'express';

const orderRouter = Router();

orderRouter.post('/', OrderController.create);

orderRouter.get('/', OrderController.findOrders);

orderRouter.get('/:orderId', OrderController.find);

orderRouter.post('/:orderId' , OrderController.finish)

export default orderRouter;
