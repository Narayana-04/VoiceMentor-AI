const DashboardCard = ({ title, value, color }) => {
  return (
    <div
      style={{
        background: "#1E293B",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        flex: 1,
        borderLeft: `5px solid ${color}`,
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
};

export default DashboardCard;