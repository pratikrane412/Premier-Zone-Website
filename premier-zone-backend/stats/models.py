from django.db import models

class Player(models.Model):
    player_name = models.CharField(max_length=255)
    nation = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    age = models.IntegerField()
    matches_played = models.IntegerField()
    starts = models.IntegerField()
    minutes_played = models.FloatField(null=True, blank=True)
    goals = models.FloatField(default=0.0)
    assists = models.FloatField(default=0.0)
    penalties_scored = models.FloatField(default=0.0)
    yellow_cards = models.FloatField(default=0.0)
    red_cards = models.FloatField(default=0.0)
    expected_goals = models.FloatField(default=0.0)
    expected_assists = models.FloatField(default=0.0)
    team_name = models.CharField(max_length=255)

    class Meta:
        db_table = 'player_statistics' # Keeps your current table name

    def __str__(self):
        return self.player_name