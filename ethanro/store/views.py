from django.shortcuts import render
from django.contrib.auth import authenticate
from django.db import IntegrityError
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404

from .models import Product, Cart

# Create your views here.

def index(request):
  products = Product.objects.all()
  return render(request, "store/index.html",{"products":products})

def product(request, item):
  product = get_object_or_404(Product, title=item)
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
  
def addToCart(request):
  if request.method == "POST":
    item = request.POST["item"]
    itemToAdd = Product.objects.get(id=item)
    newCartItem = Cart.objects.create(cartItem=itemToAdd)
    newCartItem.save()
    cartItems = Cart.objects.all()
    return render(request, "store/cart.html", {"cartItems":cartItems}) 

def cart(request):
  items = Cart.objects.all()
  cartItems = []
  for item in items:
    if item.cartItem:
      cartItems.append({
        'title' : item.cartItem.title,
        'price' : item.cartItem.price,
        'imageUrl': item.cartItem.imageUrl
      })
  return render(request, "store/cart.html", {"cartItems":cartItems}) 