from fastapi import FastAPI, Depends
from database import session
import database_models
from sqlalchemy.orm import Session

app = FastAPI()

# Main page
@app.get("/")
def greet():
    return "Welcome to Premier Zone Website"

# Getting the database
def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()
        
        
# All players data with pagination
@app.get("/players")
def get_all_players(limit: int = 50, offset: int = 0, db: Session = Depends(get_db)):
    
    players = db.query(database_models.Player).limit(limit).offset(offset).all()
    return players

# All teams
@app.get("/teams")
def get_all_teams(db: Session = Depends(get_db)):
    
    teams = db.query(database_models.Player.team_name).distinct().all()
    return [team[0] for team in teams]

# All nations
@app.get("/nations")
def get_all_nations(db: Session = Depends(get_db)):
    
    nations = db.query(database_models.Player.nation).distinct().all()
    return [nation[0] for nation in nations]

# All positions
@app.get("/positions")
def get_all_positions(db: Session = Depends(get_db)):
    
    positions = db.query(database_models.Player.position).distinct().all()
    # Extract strings (remove tuple)
    raw_positions = [pos[0] for pos in positions]

    # Split combined positions
    unique_positions = set()
    for p in raw_positions:
        for each in p.split(","):
            unique_positions.add(each.strip())

    return sorted(unique_positions)

# Search players with players names
@app.get("/players/search")
def search_players(player_name: str, db: Session = Depends(get_db)):
    
    players = db.query(database_models.Player).filter(database_models.Player.player_name.ilike(f"%{player_name}%")).all()
    return players

# Search players with team names
@app.get("/teams/search")
def search_teams(team_name: str, db: Session = Depends(get_db)):
    
    teams = db.query(database_models.Player).filter(database_models.Player.team_name.ilike(f"%{team_name}%")).all()
    return teams

# Search players by nation names
@app.get("/nations/search")
def search_nations(nation: str, db: Session = Depends(get_db)):
    
    nations = db.query(database_models.Player).filter(database_models.Player.nation.ilike(f"%{nation}%")).all()
    return nations

# Search players by position names
@app.get("/players/position/{position}")
def get_players_by_position(position: str, db: Session = Depends(get_db)):
    
    players = db.query(database_models.Player).filter(database_models.Player.position.ilike(f"%{position}%")).all()
    return players