import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusCode from '../statusCode';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  return res.status(statusCode.CREATED).json(newProduct);
};

async function productsList(eq:Request, res:Response) {
  const list = await productService.getAllProducts();
  res.status(200).json(list);
}

const productController = {
  create,
  productsList,
};

export default productController;