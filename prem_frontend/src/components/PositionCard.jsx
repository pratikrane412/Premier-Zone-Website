import '../styles/Cards.css';

const positionImages = {
    'GK': 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=300&fit=crop',
    'DF': 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop',
    'MF': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
    'FW': 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=300&fit=crop',
};

const PositionCard = ({ position }) => {
    return (
        <div className="card position-card">
            <div className="card-image-container">
                <img
                    src={positionImages[position] || positionImages['MF']}
                    alt={position}
                    className="position-image"
                />
            </div>
            <div className="card-content">
                <h3>{position}</h3>
                <p className="position-name">
                    {position === 'GK' && 'Goalkeeper'}
                    {position === 'DF' && 'Defender'}
                    {position === 'MF' && 'Midfielder'}
                    {position === 'FW' && 'Forward'}
                </p>
            </div>
        </div>
    );
};

export default PositionCard;