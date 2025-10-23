import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import arrayPedidos from "./arrayPedidos";

// Layout
import MainLayout from "./layouts/mainLayout";

// Views
import Dashboard from "./views/Dashboard/Dashboard";
import NewOrder from "./views/NewOrder/NewOrder";

interface Order {
  id: number;
  customer: string;
  items: { productId: number; name: string; quantity: number; price: number; }[];
  status: "pending" | "shipped" | "delivered";
  date: Date;
}

function App() {
  const [pedidos, setPedidos] = useState<Order[]>(arrayPedidos());

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard pedidos={pedidos} setPedidos={setPedidos} />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
