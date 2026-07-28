import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#0F172A", minHeight: "100vh" }}>
        <Navbar />

        <div style={{ padding: "30px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;