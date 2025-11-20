import { useState, useEffect } from 'react';
import { getPlayers } from '../services/api';
import PlayerTable from '../components/PlayerTable';
import '../styles/Cards.css';
// ...existing code...

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await getPlayers();
                setPlayers(response.data);
            } catch (error) {
                console.error('Error fetching players:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const filteredPlayers = players.filter(p => {
        const text = typeof p === 'string' ? p : (p?.name ?? p?.player ?? '');
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (loading) return <div className="loading">Loading players...</div>;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Players</h1>
                <input
                    type="text"
                    placeholder="Search for players"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="cards-grid">
                {filteredPlayers.map((player, idx) => (
                    <PlayerTable key={idx} player={player} />
                ))}
            </div>
        </div>
    );
};

export default Player;
// ...existing code...