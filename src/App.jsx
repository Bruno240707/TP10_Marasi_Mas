import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import arrayPedidos from "./arrayPedidos";
import MainLayout from "./layouts/mainLayout";

// VIEWS
import Dashboard from "./views/Dashboard/Dashboard";
import FormNuevoPedido from "./views/FormNuevoPedido/FormNuevoPedido";
import OrderFilter from "./views/OrderFilter/OrderFilter";
import OrderList from "./views/OrderList/OrderList";
import OrderItem from "./views/OrderItem/OrderItem";

function App() {
  const [pedidos, setPedidos] = useState(arrayPedidos);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard pedidos={pedidos} />} />
        <Route path="/QuienesSomos" element={<OrderFilter />} />
        <Route path="/Contacto" element={<OrderList />} />
        <Route path="/Productos/:Categoria" element={<OrderItem />} />
        <Route path="/ProductoDetalle/:idProducto" element={<FormNuevoPedido />} />
      </Route>
    </Routes>
  );
}

export default App;
