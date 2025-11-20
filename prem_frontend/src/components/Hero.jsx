import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <div className="hero-content">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg"
                    alt="Premier League"
                    className="hero-logo"
                />
                <h1 className="hero-title">
                    Welcome to<br />
                    <span className="gradient-text">Premier Zone Fantasy!</span>
                </h1>
                <p className="hero-subtitle">
                    Your home for everything Premier League related!
                </p>
                <button className="hero-button" onClick={() => navigate('/players')}>
                    GET STARTED
                </button>
            </div>
        </div>
    );
};

export default Hero;