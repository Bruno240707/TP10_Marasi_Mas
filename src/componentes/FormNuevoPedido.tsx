import { useState } from "react";

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  customer: string;
  date: Date;
  status: "pending" | "shipped" | "delivered";
  items: (OrderItem & { productId: number })[];
}

interface FormNuevoPedidoProps {
  addOrder: (order: Order) => void;
}

function FormNuevoPedido({ addOrder }: FormNuevoPedidoProps) {
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState<OrderItem[]>([{ name: "", quantity: 1, price: 0 }]);
  const [status, setStatus] = useState<"pending" | "shipped" | "delivered">("pending");
  const [errors, setErrors] = useState<{ customer?: string; items?: string }>({});

  const validateForm = () => {
    const newErrors: { customer?: string; items?: string } = {};
    if (customer.trim().length < 3) {
      newErrors.customer = "El nombre del cliente debe tener al menos 3 caracteres.";
    }
    if (items.some((item) => !item.name || item.quantity <= 0 || item.price <= 0)) {
      newErrors.items = "Todos los productos deben tener nombre, cantidad > 0 y precio > 0.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!validateForm()) return;

    const newItems = items.map((item, idx) => ({
      productId: Date.now() + idx,
      ...item,
    }));

    addOrder({
      id: Date.now(),
      customer,
      date: new Date(),
      status,
      items: newItems,
    });

    setCustomer("");
    setItems([{ name: "", quantity: 1, price: 0 }]);
    setStatus("pending");
    setErrors({});
  };

  const addItem = () => setItems([...items, { name: "", quantity: 1, price: 0 }]);
  const removeItem = (index: number) => setItems(items.filter((_, i) => i !== index));

  const updateItem = (index: number, field: keyof OrderItem, value: string | number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: field === "name" ? String(value) : Number(value),
            }
          : item
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Cliente:</label>
        <input
          type="text"
          placeholder="Nombre del cliente (mín. 3 caracteres)"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
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
              onChange={(e) => updateItem(index, "name", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Cantidad"
              value={item.quantity}
              onChange={(e) => updateItem(index, "quantity", e.target.value)}
              min={1}
              required
            />
            <input
              type="number"
              placeholder="Precio"
              value={item.price}
              onChange={(e) => updateItem(index, "price", e.target.value)}
              min={0}
              step={0.01}
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
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "pending" | "shipped" | "delivered")
          }
        >
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <button type="submit">Agregar Pedido</button>
    </form>
  );
}

export default FormNuevoPedido;
