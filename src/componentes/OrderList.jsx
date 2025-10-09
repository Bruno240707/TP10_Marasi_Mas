import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import "../views/Dashboard/Dashboard.css";

const OrderList = ({ orders }) => {
  return (
    <div className="orders-section">
      <h2>Lista de Pedidos</h2>
      {orders.map(order => (
        <OrderItem
          key={order.id}
          id={order.id}
          customer={order.customer}
          date={order.date}
          status={order.status}
          items={order.items}
        />
      ))}
    </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderList;
