import PropTypes from "prop-types";
import "../../src/views/Dashboard/Dashboard.css";

const OrderStats = ({ total, pending, shipped, delivered }) => {
  return (
    <div className="stats-section">
      <h3>Estadísticas</h3>
      <p>Total: {total}</p>
      <p>Pending: {pending}</p>
      <p>Shipped: {shipped}</p>
      <p>Delivered: {delivered}</p>
    </div>
  );
};

OrderStats.propTypes = {
  total: PropTypes.number.isRequired,
  pending: PropTypes.number.isRequired,
  shipped: PropTypes.number.isRequired,
  delivered: PropTypes.number.isRequired
};

export default OrderStats;
