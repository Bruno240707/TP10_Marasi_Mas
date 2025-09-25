import { useState } from "react";

const FormNuevoPedido = ({ addOrder }) => {
  const [customer, setCustomer] = useState("");
  const [itemsText, setItemsText] = useState(""); // ejemplo: "Mouse,2,3500;Teclado,1,12500"
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Transformar itemsText a array de objetos
    const items = itemsText.split(";").map((itemStr, idx) => {
      const [name, quantity, price] = itemStr.split(",");
      return { productId: Date.now() + idx, name, quantity: Number(quantity), price: Number(price) };
    });

    addOrder({
      id: Date.now(),
      customer,
      date: new Date(),
      status,
      items
    });

    setCustomer("");
    setItemsText("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Cliente: </label>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={customer}
          onChange={e => setCustomer(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Productos (nombre,cantidad,precio; ...): </label>
        <input
          type="text"
          placeholder="Mouse,2,3500;Teclado,1,12500"
          value={itemsText}
          onChange={e => setItemsText(e.target.value)}
          required
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Estado: </label>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>
      <button type="submit">Agregar Pedido</button>
    </form>
  );
};

export default FormNuevoPedido;
