import "../views/Dashboard/Dashboard.css";
import OrderItem, { OrderItemType } from "./OrderItem.js";

export interface Order {
  id: number;
  customer: string;
  date?: Date;
  status?: "pending" | "shipped" | "delivered";
  items: OrderItemType[];
}

interface OrderListProps {
  orders: Order[];
}

function OrderList({ orders }: OrderListProps) {
  return (
    <div className="orders-section">
      <h2>Lista de Pedidos</h2>
      {orders.map((order) => ( 
        <OrderItem
          key={order.id}
          id={order.id}
          customer={order.customer}
          date={order.date}
          status={order.status}
          items={order.items}
        />
      ))}
    </div>
  );
}

export default OrderList;
