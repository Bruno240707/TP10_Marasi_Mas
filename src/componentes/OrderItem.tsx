import "../views/Dashboard/Dashboard.css";

export interface OrderItemType {
  productId: number;
  name: string;
  quantity: number;
  price: number;
}

interface OrderItemProps {
  id: number;
  customer: string;
  date?: Date;
  status?: "pending" | "shipped" | "delivered";
  items: OrderItemType[];
}

function OrderItem({
  id,
  customer,
  date = new Date(),
  status = "pending",
  items,
}: OrderItemProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-item">
      <h3>
        Pedido #{id} - {customer}
      </h3>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>
        Estado: <span className={`status ${status}`}>{status}</span>
      </p>
      <ul>
        {items.map((prod) => (
          <li key={prod.productId}>
            {prod.name} (x{prod.quantity}) - ${prod.price}
          </li>
        ))}
      </ul>
      <p className="total">Total: ${total}</p>
    </div>
  );
}

export default OrderItem;
