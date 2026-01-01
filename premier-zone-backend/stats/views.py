from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Player
from .serializers import PlayerSerializer

@api_view(['GET'])
def get_all_players(request):
    limit = int(request.query_params.get('limit', 50))
    offset = int(request.query_params.get('offset', 0))
    players = Player.objects.all()[offset:offset+limit]
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_all_teams(request):
    teams = Player.objects.values_list('team_name', flat=True).distinct()
    return Response(list(teams))

@api_view(['GET'])
def search_teams(request):
    team_name = request.query_params.get('team_name', '')
    players = Player.objects.filter(team_name__icontains=team_name).order_by('-matches_played')
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_all_positions(request):
    raw_positions = Player.objects.values_list('position', flat=True).distinct()
    unique_positions = set()
    for p in raw_positions:
        for each in p.split(","):
            unique_positions.add(each.strip())
    return Response(sorted(list(unique_positions)))

@api_view(['GET'])
def get_players_by_position(request, position):
    limit = int(request.query_params.get('limit', 50))
    offset = int(request.query_params.get('offset', 0))
    players = Player.objects.filter(position__icontains=position)[offset:offset+limit]
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)



@api_view(['GET'])
def get_all_nations(request):
    nations = Player.objects.values_list('nation', flat=True).distinct()
    return Response(list(nations))

@api_view(['GET'])
def search_nations(request):
    nation_query = request.query_params.get('nation', '')
    limit = int(request.query_params.get('limit', 50))
    offset = int(request.query_params.get('offset', 0))
    
    players = Player.objects.filter(nation__icontains=nation_query)[offset:offset+limit]
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)