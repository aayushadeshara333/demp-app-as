import { useEffect, useState } from "react";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      // setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const handleHamburgerMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div class="nav-left">
          <h1>Hello, Dr. John</h1>
        </div>
        <div className="nav-right">
          {isOpen && <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>}
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} size="xl" onClick={handleHamburgerMenu} />
      </div>
    </div>
  );
}

export default Navbar;