import "./../styles/navbar.css";
import logo from "../assets/logo.png"; // You can replace with your logo

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                <div className="nav-logo">
                    <img src={logo} alt="Logo" />
                    PremierZone
                </div>

                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="/teams">Teams</a>
                    <a href="/nations">Nations</a>
                    <a href="/positions">Positions</a>
                </div>

            </div>
        </nav>
    );
}
