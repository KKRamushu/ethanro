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

def search(request):
  if request.method == 'POST':
    toFind = request.POST["search"].upper()
    products = Product.objects.all()
    searchResults = []
    for product in products:
       
      searchResults.append({
        "title": product.title,
        'description': product.discription,
        'imageUrl': product.imageUrl,
        'price':product.price
      })
    
    search = [product for product in searchResults if toFind in product['title'].upper()]
    
    return render(request, "store/search.html",{"products":search})