import { RiCloseLargeFill } from "react-icons/ri";
import { FaBook, FaPlus, FaPaintBrush, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu({ toggleSidebar }) {
  return (
    <div className="menu">
      <button className="menu-btn" onClick={toggleSidebar}>
        <RiCloseLargeFill />
      </button>

      <h1 className="logo">LOGO</h1>

      <nav className="bnts-menu">
        <Link to="/" className="menu-item">
          <FaBook className="menu-icon" />
          <span>Show Book List</span>
        </Link>

        <Link to="/create-book" className="menu-item destaque">
          <FaPlus className="menu-icon" />
          <span> Add New Book </span>
        </Link>

        <Link to="#" className="menu-item">
          <FaPaintBrush className="menu-icon" />
          <span>Novo Link 1</span>
        </Link>

        <Link to="#" className="menu-item">
          <FaCheck className="menu-icon" />
          <span>Novo Link 2</span>
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
