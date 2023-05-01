import Product from '../interfaces/product.interface';
import productModel from '../models/product.model';

const create = async (product: Product): Promise<Product> => {
  const newProduct = await productModel.productCreate(product);
  return newProduct;
};

const getAllProducts = async (): Promise<Product[]> => {
  const products = await productModel.getAllProducts();
  return products;
};

const productService = {
  create,
  getAllProducts,
};

export default productService;