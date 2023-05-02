import { RowDataPacket } from 'mysql2';
import connection from './connection';
import Order from '../interfaces/order.interface';

const getOrders = async (): Promise<Order[]> => {
  const [orders] = await connection.query<RowDataPacket[]>(
    `SELECT 
        id,
        user_id AS userId,
        (
          SELECT JSON_ARRAYAGG(p.id)
          FROM Trybesmith.products AS p
          WHERE o.id = p.order_id
        ) AS productsIds
      FROM Trybesmith.orders AS o`,
  );
  return orders as Order[];
};

const orderModel = {
  getOrders,
};

export default orderModel;