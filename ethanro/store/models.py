from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Product(models.Model):
  imageUrl = models.CharField(max_length=1200)
  title = models.CharField(max_length=64)
  discription = models.CharField(max_length=250)
  price = models.FloatField(max_length=8)
  def __str__(self):
      return f"{self.title}"

class Cart(models.Model):
   cartItem = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True, related_name="product")
