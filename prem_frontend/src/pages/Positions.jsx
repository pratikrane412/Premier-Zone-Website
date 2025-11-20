import { useState, useEffect } from 'react';
import { getPositions } from '../services/api';
import PositionCard from '../components/PositionCard';
import '../styles/Cards.css';
// ...existing code...

const Positions = () => {
    const [positions, setPositions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPositions();
                setPositions(response.data);
            } catch (error) {
                console.error('Error fetching positions:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const filteredPositions = positions.filter(item => {
        const text = typeof item === 'string' ? item : (item?.name ?? item?.position ?? '');
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (loading) return <div className="loading">Loading positions...</div>;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Positions</h1>
                <input
                    type="text"
                    placeholder="Search for positions"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="cards-grid">
                {filteredPositions.map((pos, idx) => (
                    <PositionCard key={idx} position={pos} />
                ))}
            </div>
        </div>
    );
};

export default Positions;
// ...existing code...