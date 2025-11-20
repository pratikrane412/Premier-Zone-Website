import { useState, useEffect } from 'react';
import { getNations } from '../services/api';
import NationCard from '../components/NationCard';
import '../styles/Cards.css';
// ...existing code...

const Nations = () => {
    const [nations, setNations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await getNations();
                setNations(response.data);
            } catch (error) {
                console.error('Error fetching nations:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const filteredNations = nations.filter(item => {
        const text = typeof item === 'string' ? item : (item?.name ?? item?.nation ?? '');
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (loading) return <div className="loading">Loading nations...</div>;

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Nations</h1>
                <input
                    type="text"
                    placeholder="Search for nations"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="cards-grid">
                {filteredNations.map((nation, idx) => (
                    <NationCard key={idx} nation={nation} />
                ))}
            </div>
        </div>
    );
};

export default Nations;
// ...existing code...