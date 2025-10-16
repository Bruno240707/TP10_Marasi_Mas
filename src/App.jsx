import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import arrayPedidos from "./arrayPedidos";

// Layout
import MainLayout from "./layouts/mainLayout";

// Views
import Dashboard from "./views/Dashboard/Dashboard";
import NewOrder from "./views/NewOrder/NewOrder";

function App() {
  const [pedidos, setPedidos] = useState(arrayPedidos());

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
