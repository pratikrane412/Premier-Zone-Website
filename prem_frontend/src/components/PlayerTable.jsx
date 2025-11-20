import '../styles/Table.css';

const PlayerTable = ({ players }) => {
    return (
        <div className="table-container">
            <table className="player-table">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Nation</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>MP</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>xG</th>
                        <th>xA</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player.id || index}>
                            <td className="player-name">{player.player_name}</td>
                            <td>{player.team_name}</td>
                            <td>{player.nation}</td>
                            <td>{player.position}</td>
                            <td>{player.age}</td>
                            <td>{player.matches_played}</td>
                            <td className="stat-highlight">{player.goals}</td>
                            <td className="stat-highlight">{player.assists}</td>
                            <td>{player.expected_goals?.toFixed(2)}</td>
                            <td>{player.expected_assists?.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerTable;