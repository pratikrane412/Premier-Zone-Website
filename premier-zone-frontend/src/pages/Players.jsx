import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Players.css';

export default function Players() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const teamName = query.get('team');

    useEffect(() => {
        const fetchSquad = async () => {
            try {
                setLoading(true);
                
                const url = teamName 
                    ? `http://127.0.0.1:8000/teams/search?team_name=${teamName}`
                    : `http://127.0.0.1:8000/players?limit=100`;

                const res = await axios.get(url);
                setPlayers(res.data);
            } catch (err) {
                console.error("Error fetching squad:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSquad();
    }, [teamName]);

    if (loading) return <div className="loader">Gathering Squad Data...</div>;

    return (
        <div className="players-page">
            <header className="players-header">
                <Link to="/teams" className="back-btn">← Back to Clubs</Link>
                <div className="header-content">
                    {/* Displaying the team logo again for brand consistency */}
                    {teamName && <img src={`/teams/${teamName}.png`} alt="logo" className="header-logo" />}
                    <div>
                        <h1 className="hero-title">
                            {teamName ? teamName.replace(/-/g, ' ') : "All Players"}
                        </h1>
                        <p className="hero-subtitle">Squad Statistics • Season 2024/25</p>
                    </div>
                </div>
            </header>

            <div className="stats-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Nation</th>
                            <th>Pos</th>
                            <th>Age</th>
                            <th>MP</th>
                            <th className="highlight-th">Gls</th>
                            <th className="highlight-th">Ast</th>
                            <th>xG</th>
                            <th>xAG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((p, index) => (
                            <tr key={index}>
                                <td className="player-name-cell">{p.player_name}</td>
                                <td className="nation-cell">
                                    {/* Splits "br BRA" into "BRA" */}
                                    <span className="flag-text">{p.nation?.split(' ')[1]}</span>
                                </td>
                                <td><span className="pos-badge">{p.position}</span></td>
                                <td>{p.age}</td>
                                <td>{p.matches_played}</td>
                                <td className="stat-important">{p.goals}</td>
                                <td className="stat-important">{p.assists}</td>
                                <td className="stat-muted">{p.expected_goals}</td>
                                <td className="stat-muted">{p.expected_assists}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}