from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float

Base = declarative_base()

class Player(Base):
    
    __tablename__ = "player_statistics"

    id = Column(Integer, primary_key=True, index=True)
    player_name = Column(String)
    nation = Column(String)
    position = Column(String)
    age = Column(Integer)
    matches_played = Column(Integer)
    starts = Column(Integer)
    minutes_played = Column(Float)
    goals = Column(Float)
    assists = Column(Float)
    penalties_scored = Column(Float)
    yellow_cards = Column(Float)
    red_cards = Column(Float)
    expected_goals = Column(Float)
    expected_assists = Column(Float)
    team_name = Column(String)