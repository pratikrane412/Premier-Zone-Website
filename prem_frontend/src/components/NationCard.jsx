import '../styles/Cards.css';

const countryFlags = {
    'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    'Brazil': '🇧🇷',
    'Argentina': '🇦🇷',
    'France': '🇫🇷',
    'Germany': '🇩🇪',
    'Spain': '🇪🇸',
    'Portugal': '🇵🇹',
    'Netherlands': '🇳🇱',
    'Belgium': '🇧🇪',
    'Italy': '🇮🇹',
};

const NationCard = ({ nation }) => {
    return (
        <div className="card nation-card">
            <div className="flag-container">
                <span className="flag-emoji">{countryFlags[nation] || '🌍'}</span>
            </div>
            <div className="card-content">
                <h3>{nation}</h3>
            </div>
        </div>
    );
};

export default NationCard;