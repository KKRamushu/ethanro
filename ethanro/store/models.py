from django.db import models

# Create your models here.

class Product(models.Model):
  imageUrl = models.CharField(max_length=1200)
  title = models.CharField(max_length=64)
  discription = models.CharField(max_length=250)
  price = models.FloatField(max_length=8)
  def __str__(self):
      return f"{self.title}"