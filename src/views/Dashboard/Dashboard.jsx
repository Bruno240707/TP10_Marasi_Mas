import { useState } from "react";
import arrayPedidos from "../../arrayPedidos";
import OrderFilter from "../../componentes/OrderFilter";
import OrderList from "../../componentes/OrderList";
import OrderStats from "../../componentes/OrderStats";

export default function Dashboard() {
  const [orders, setOrders] = useState(arrayPedidos());
  const [filter, setFilter] = useState("");

  const filteredOrders = filter ? orders.filter(o => o.status === filter) : orders;

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === "pending").length,
    shipped: orders.filter(o => o.status === "shipped").length,
    delivered: orders.filter(o => o.status === "delivered").length
  };

  return (
    <div style={{ padding: "20px" }}>x
      <h1>📊 Dashboard</h1>
      <OrderStats {...stats} />
      <OrderFilter filter={filter} setFilter={setFilter} />
      <OrderList orders={filteredOrders} />
    </div>
  );
}
