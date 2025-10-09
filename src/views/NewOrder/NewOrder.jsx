import { useState } from "react";
import FormNuevoPedido from "../../componentes/FormNuevoPedido";
import OrderList from "../../componentes/OrderList";
import arrayPedidos from "../../arrayPedidos";
import "./NewOrder.css";

export default function NewOrder() {
  const [orders, setOrders] = useState(arrayPedidos());

  const addOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
  };

  return (
    <div className="new-order">
      <h1>📝 Nuevo Pedido</h1>
      <div className="form-section">
        <FormNuevoPedido addOrder={addOrder} />
      </div>
      <div className="orders-section">
        <h2>Pedidos actuales</h2>
        <OrderList orders={orders} />
      </div>
    </div>
  );
}
