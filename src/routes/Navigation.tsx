import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

function Navigation() {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            }
            alt="React Logo"
            style={{ width: "100%" }}
          />
          <ul>
            <li>
              <NavLink end to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink end to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink end to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="users" element={<h1>Users Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />
          
          {/* para redirecionar la pagina  */}
          <Route path="/" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
