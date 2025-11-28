import "../styles/home.css";
import logo from "../assets/logo.png"; 

export default function Home() {
    return (
        <section className="hero-section">

            <div className="hero-container">

                <div className="hero-left">
                    <h1 className="hero-title">Welcome to Premier Zone!</h1>
                    <p className="hero-subtitle">
                        Your home for everything Premier League — stats, players, clubs and more.
                    </p>

                    <button className="hero-btn">Get Started</button>
                </div>

                <div className="hero-right">
                    <img className="hero-logo" src={logo} alt="Premier League Logo" />
                </div>

            </div>

        </section>
    );
}
