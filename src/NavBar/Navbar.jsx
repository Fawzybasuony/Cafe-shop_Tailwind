import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import   "./navbar.css";
export default function Navbar() {
  return (
    < >
            <nav>
          <Router>
            <div className="navbar bg-slate-100">
              <div className="container nav-container">
                <input className="checkbox" type="checkbox" />
                <div className="hamburger-lines">
                  <span className="line line1" />
                  <span className="line line2" />
                  <span className="line line3" />
                </div>
                <div className="logo">
                  <img
                    src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Flogo.png&w=128&q=75"
                    alt=""
                  />
                  <FontAwesomeIcon
                    className=" w-5 h-5 ms-5 hover:scale-125 transition duration-300  rounded-full bg-white p-2 border-solid border-2 border-gray-300  "
                    icon={faShopify}
                  />
                  <FontAwesomeIcon
                    className="ps-3 hover:scale-125 transition duration-300"
                    icon={faMagnifyingGlass}
                  />
                </div>
                <div className="menu-items">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">about</Link>
                  </li>
                  <li>
                    <Link to="#">blogs</Link>
                  </li>
                  <li>
                    <Link to="#">portfolio</Link>
                  </li>
                  <li>
                    <Link to="#">contact</Link>
                  </li>
                </div>
              </div>
            </div>
          </Router>
        </nav>

    </>
  )
}
