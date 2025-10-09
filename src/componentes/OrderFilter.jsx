import PropTypes from "prop-types";
import "../views/Dashboard/Dashboard.css";

const OrderFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter-section">
      <label>Filtrar por estado: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">Todos</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
};

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(["", "pending", "shipped", "delivered"]),
  setFilter: PropTypes.func.isRequired
};

export default OrderFilter;
