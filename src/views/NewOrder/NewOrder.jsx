import { useState } from "react";
import FormNuevoPedido from "../../componentes/FormNuevoPedido";
import OrderList from "../../componentes/OrderList";
import arrayPedidos from "../../arrayPedidos";

export default function NewOrder() {
  const [orders, setOrders] = useState(arrayPedidos());

  const addOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Nuevo Pedido</h1>
      <FormNuevoPedido addOrder={addOrder} />
      <h2 style={{ marginTop: "20px" }}>Pedidos actuales</h2>
      <OrderList orders={orders} />
    </div>
  );
}
