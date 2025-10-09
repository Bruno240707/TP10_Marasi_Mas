import { useState } from "react";
import PropTypes from "prop-types";

const FormNuevoPedido = ({ addOrder }) => {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [status, setStatus] = useState("pending");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (customer.length < 3) {
      newErrors.customer = "El nombre del cliente debe tener al menos 3 caracteres.";
    }
    if (items.length === 0 || items.some(item => !item.name || item.quantity <= 0 || item.price <= 0)) {
      newErrors.items = "Todos los productos deben tener nombre, cantidad > 0 y precio > 0.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newItems = items.map((item, idx) => ({
      productId: Date.now() + idx,
      name: item.name,
      quantity: Number(item.quantity),
      price: Number(item.price)
    }));

    addOrder({
      id: Date.now(),
      customer,
      date: new Date(),
      status,
      items: newItems
    });

    // Reset form
    setCustomer("");
    setItems([{ name: "", quantity: 1, price: 0 }]);
    setStatus("pending");
    setErrors({});
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cliente:</label>
        <input
          type="text"
          placeholder="Nombre del cliente (mín. 3 caracteres)"
          value={customer}
          onChange={e => setCustomer(e.target.value)}
          required
        />
        {errors.customer && <p style={{ color: "red" }}>{errors.customer}</p>}
      </div>

      <div>
        <label>Productos:</label>
        {items.map((item, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Nombre del producto"
              value={item.name}
              onChange={e => updateItem(index, "name", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Cantidad"
              value={item.quantity}
              onChange={e => updateItem(index, "quantity", Number(e.target.value))}
              min="1"
              required
            />
            <input
              type="number"
              placeholder="Precio"
              value={item.price}
              onChange={e => updateItem(index, "price", Number(e.target.value))}
              min="0"
              step="0.01"
              required
            />
            {items.length > 1 && (
              <button type="button" onClick={() => removeItem(index)} style={{ backgroundColor: "#dc3545", color: "white" }}>
                Eliminar
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addItem} style={{ backgroundColor: "#28a745", color: "white" }}>
          Agregar Producto
        </button>
        {errors.items && <p style={{ color: "red" }}>{errors.items}</p>}
      </div>

      <div>
        <label>Estado:</label>
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

FormNuevoPedido.propTypes = {
  addOrder: PropTypes.func.isRequired
};

export default FormNuevoPedido;
