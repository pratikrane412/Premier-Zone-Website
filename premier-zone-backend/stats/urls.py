from django.urls import path
from . import views

urlpatterns = [
    path('players', views.get_all_players),
    path('teams', views.get_all_teams),
    path('teams/search', views.search_teams),
    path('positions', views.get_all_positions),
    path('players/position/<str:position>', views.get_players_by_position),
    path('nations', views.get_all_nations),
    path('nations/search', views.search_nations),
]