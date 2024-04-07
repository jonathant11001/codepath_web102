import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link className="home-link" style={{ color: "white" }} to="/">
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;