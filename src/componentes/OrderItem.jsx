import PropTypes from "prop-types";

const OrderItem = ({ id, customer, date, status, items }) => {
  return (
    <div className="order-item" style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>Pedido #{id} - {customer}</h3>
      <p>Fecha: {date.toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <ul>
        {items.map(prod => (
          <li key={prod.productId}>
            {prod.name} (x{prod.quantity}) - ${prod.price}
          </li>
        ))}
      </ul>
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
