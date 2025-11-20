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
        
        
# All players data
@app.get("/players")
def get_all_players(db: Session = Depends(get_db)):
    
    players = db.query(database_models.Player).all()
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