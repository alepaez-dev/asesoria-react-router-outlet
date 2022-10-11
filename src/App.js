import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    // Navbar
    <>
      <div className="navbar-container">
        <span>Logo</span>
        <span>Navbar</span>
        <button>Iniciar sesion</button>
        {/* Todo lo que pasa con mis hijos */}
      </div>
      <Outlet />
    </>

  );
}

export default App;
