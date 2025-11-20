import { useState, useEffect } from 'react';
import { getTeams } from '../services/api';
import TeamCard from '../components/TeamCard';
import '../styles/Cards.css';
// ...existing code...

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const response = await getTeams();
                setTeams(response.data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const filteredTeams = teams.filter(team => {
        const text = typeof team === 'string'
            ? team
            : (team?.name ?? team?.team ?? '');
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (loading) {
        return <div className="loading">Loading teams...</div>;
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Teams</h1>
                <input
                    type="text"
                    placeholder="Search for teams"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="cards-grid">
                {filteredTeams.map((team, index) => (
                    <TeamCard key={index} team={team} />
                ))}
            </div>
        </div>
    );
};

export default Teams;
// ...existing code...