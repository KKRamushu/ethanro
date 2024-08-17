from django.shortcuts import render
from django.db import IntegrityError
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect

from .models import Product

# Create your views here.

def index(request):
  products = Product.objects.all()
  return render(request, "store/index.html",{"products":products})

def product(request, item):
  product = Product.objects.get(title=item)
  return render(request, "store/product.html",{"product": product})