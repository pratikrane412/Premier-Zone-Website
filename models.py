from pydantic import BaseModel

class Player(BaseModel):
    player_name: str
    nation: str
    position: str
    age: int
    matches_played: int
    starts: int
    minutes_played: float
    goals: float
    assists: float
    penalties_scored: float
    yellow_cards: float
    red_cards: float
    expected_goals: float
    expected_assists: float
    team_name: str