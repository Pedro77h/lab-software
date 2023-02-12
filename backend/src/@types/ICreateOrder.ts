interface orderRelation {
  id: string;
}

export interface ICreateOrder {
  comidas: orderRelation;
  bebidas: orderRelation;
  costumerName: string;
}
