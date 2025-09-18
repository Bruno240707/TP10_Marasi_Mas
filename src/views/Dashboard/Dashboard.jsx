import { useState } from "react";
import "./Dashboard.css";
import arrayPedidos from "../../arrayPedidos";

const Dashboard = () => {
  const [filtroEstado, setFiltroEstado] = useState("");
  const pedidos = arrayPedidos();

  const handleClick = (estado) => {
    setFiltroEstado((prev) => (prev === estado ? "" : estado));
  };

  const listaActual = filtroEstado
    ? pedidos.filter((p) => p.status === filtroEstado)
    : pedidos;

  return (
    <div className="dashboard">
      <div className="filtros">
        <button
          className={filtroEstado === "pending" ? "active" : ""}
          onClick={() => handleClick("pending")}
        >
          Pending
        </button>
        <button
          className={filtroEstado === "shipped" ? "active" : ""}
          onClick={() => handleClick("shipped")}
        >
          Shipped
        </button>
        <button
          className={filtroEstado === "delivered" ? "active" : ""}
          onClick={() => handleClick("delivered")}
        >
          Delivered
        </button>
      </div>

      <div className="lista-pedidos">
        {listaActual.map((p) => (
          <div key={p.id} className="pedido">
            <h3>{p.customer}</h3>
            <p>
              <strong>Estado:</strong> {p.status} |{" "}
              <strong>Fecha:</strong> {p.date.toLocaleDateString()}
            </p>

            <ul>
              {p.items.map((item) => (
                <li key={item.productId}>
                  {item.name} - Cantidad: {item.quantity} - Precio unitario: $
                  {item.price.toLocaleString()} - Subtotal: $
                  {(item.quantity * item.price).toLocaleString()}
                </li>
              ))}
            </ul>

            <p className="total">
              <strong>Total pedido:</strong> $
              {p.items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
