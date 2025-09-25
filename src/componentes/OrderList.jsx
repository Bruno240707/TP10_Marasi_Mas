import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
  return (
    <div>
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
