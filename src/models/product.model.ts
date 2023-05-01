import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product.interface';
import connection from './connection';

const productCreate = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.query<ResultSetHeader>({
    sql: 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    values: [name, amount],
  });
  return { id: result.insertId, ...product };
};

const getAllProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  
  const [products] = await connection.query(query);
  
  return products as Product[];
};

const productModel = {
  productCreate,
  getAllProducts,
};

export default productModel;