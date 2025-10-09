import PropTypes from "prop-types";
import "../views/Dashboard/Dashboard.css";

const OrderItem = ({ id, customer, date, status, items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-item">
      <h3>Pedido #{id} - {customer}</h3>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>Estado: <span className={`status ${status}`}>{status}</span></p>
      <ul>
        {items.map(prod => (
          <li key={prod.productId}>
            {prod.name} (x{prod.quantity}) - ${prod.price}
          </li>
        ))}
      </ul>
      <p className="total">Total: ${total}</p>
    </div>
  );
};

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  status: PropTypes.oneOf(["pending", "shipped", "delivered"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: (props, propName, componentName) => {
        if (props[propName] <= 0) {
          return new Error(`${componentName}: La cantidad debe ser mayor a 0`);
        }
      },
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

OrderItem.defaultProps = {
  date: new Date(),
  status: "pending",
};

export default OrderItem;
