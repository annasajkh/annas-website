import { Link, useLocation } from "react-router-dom";
import Selector from "./Selector";
import "./Navbar.css";

export default function Navbar() {
    const location = useLocation()

    const getSelectedIndex = () => {
        if (location.pathname.toLowerCase().includes("blog")) {
            return 2;
        }
        
        switch (location.pathname.toLowerCase()) {
            case "/":
                return 0;
            case "/projects":
                return 1;
            case "/blogs":
                return 2;
            case "/contact":
                return 3;
            default:
                return 0;
        }
    };

    const selectedIndex = getSelectedIndex();

    return (
        <header className="navbar">
            <Link className="selector-link" to="/">
                <Selector text="Home" isSelected={selectedIndex === 0} />
            </Link>

            <Link className="selector-link" to="/blogs">
                <Selector text="Blogs" isSelected={selectedIndex === 2} />
            </Link>

            <Link className="selector-link" to="/contact">
                <Selector text="Contact" isSelected={selectedIndex === 3} />
            </Link>
        </header>
    );
}
