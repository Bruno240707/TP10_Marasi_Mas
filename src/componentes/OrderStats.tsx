import "../../src/views/Dashboard/Dashboard.css";

interface OrderStatsProps {
  total: number;
  pending: number;
  shipped: number;
  delivered: number;
}

function OrderStats({ total, pending, shipped, delivered }: OrderStatsProps) {
  return (
    <div className="stats-section">
      <h3>Estadísticas</h3>
      <p>Total: {total}</p>
      <p>Pending: {pending}</p>
      <p>Shipped: {shipped}</p>
      <p>Delivered: {delivered}</p>
    </div>
  );
}

export default OrderStats;
