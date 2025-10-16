import "../views/Dashboard/Dashboard.css";

interface OrderFilterProps {
  filter: "" | "pending" | "shipped" | "delivered";
  setFilter: (value: "" | "pending" | "shipped" | "delivered") => void;
}

function OrderFilter({ filter, setFilter }: OrderFilterProps) {
  return (
    <div className="filter-section">
      <label>Filtrar por estado: </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value as "" | "pending" | "shipped" | "delivered")}
      >
        <option value="">Todos</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}

export default OrderFilter;
