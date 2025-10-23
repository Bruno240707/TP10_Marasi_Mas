import { useState } from "react";
import arrayPedidos from "../../arrayPedidos";
import OrderFilter from "../../componentes/OrderFilter";
import OrderList from "../../componentes/OrderList";
import OrderStats from "../../componentes/OrderStats";
import "./Dashboard.css";

interface Order {
  id: number;
  customer: string;
  items: { productId: number; name: string; quantity: number; price: number; }[];
  status: "pending" | "shipped" | "delivered";
  date: Date;
}

interface DashboardProps {
  pedidos: Order[];
  setPedidos: React.Dispatch<React.SetStateAction<Order[]>>;
}

export default function Dashboard({ pedidos, setPedidos }: DashboardProps) {
  const [filter, setFilter] = useState<"" | "pending" | "shipped" | "delivered">("");

  const filteredOrders = filter ? pedidos.filter(o => o.status === filter) : pedidos;

  const stats = {
    total: pedidos.length,
    pending: pedidos.filter(o => o.status === "pending").length,
    shipped: pedidos.filter(o => o.status === "shipped").length,
    delivered: pedidos.filter(o => o.status === "delivered").length
  };

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <OrderStats {...stats} />
      <OrderFilter filter={filter} setFilter={setFilter} />
      <OrderList orders={filteredOrders} />
    </div>
  );
}
