import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusCode from '../statusCode';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  return res.status(statusCode.CREATED).json(newProduct);
};

const productController = {
  create,
};

export default productController;