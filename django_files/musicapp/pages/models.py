from django.db import models

# Create your models here.
class Video(models.Model):
    song_title = models.TextField()
    url = models.URLField(max_length=200)
    version_name = models.CharField(max_length=200)
    version_num = models.CharField(max_length=10)
    artist = models.CharField(max_length=200)
    directors = models.CharField(max_length=200)
    release_date_string = models.DateField()
    # vid_source =

    def __str__(self):
        return '{} by {}'.format(self.song_title, self.artist)
