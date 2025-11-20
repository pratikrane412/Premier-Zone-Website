import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" alt="Premier League" />
                    <span>PremierZone</span>
                </Link>

                <div className="navbar-menu">
                    <Link
                        to="/"
                        className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        <span className="icon">🏠</span>
                        Home
                    </Link>
                    <Link
                        to="/teams"
                        className={`navbar-item ${location.pathname === '/teams' ? 'active' : ''}`}
                    >
                        <span className="icon">👥</span>
                        Teams
                    </Link>
                    <Link
                        to="/nations"
                        className={`navbar-item ${location.pathname === '/nations' ? 'active' : ''}`}
                    >
                        <span className="icon">🚩</span>
                        Nations
                    </Link>
                    <Link
                        to="/positions"
                        className={`navbar-item ${location.pathname === '/positions' ? 'active' : ''}`}
                    >
                        <span className="icon">👕</span>
                        Positions
                    </Link>
                    <Link
                        to="/players"
                        className={`navbar-item ${location.pathname === '/players' ? 'active' : ''}`}
                    >
                        <span className="icon">🔍</span>
                        All Players
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;