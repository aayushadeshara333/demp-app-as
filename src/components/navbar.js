import { useEffect, useState } from "react";
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    const { innerWidth } = getWindowSize();
    if (innerWidth > 648) {
      setIsOpen(true);
      setIsResponsive(false);
    } else {
      setIsOpen(false);
      setIsResponsive(true);
    }
    window.addEventListener("resize", () => {
      const { innerWidth } = getWindowSize();
      if (innerWidth > 648) {
        setIsOpen(true);
        setIsResponsive(false);
      } else {
        setIsOpen(false);
        setIsResponsive(true);
      }
    });
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
            {isResponsive && <div>
              <li>Patient Profile </li>
              <li>Clinical Need</li>
              <li>Lifestyle</li>
              <li>Surgery / Medical Conditions</li>
              <li>Medication</li>
              <li>Vaccines</li>
              <li>Labwork</li>
              <li>Diabetes Specific</li>
              <li>Source of information</li>
              <li>Review type</li>
              <li>Review and Sign</li>
            </div>}
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