import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link className="home-link" style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link className="home-link" style={{ color: "white" }} to="/create/">
          CreateACrewmate
        </Link>
        <Link className="home-link" style={{ color: "white" }} to="/gallery/">
          CrewmateGallery
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;