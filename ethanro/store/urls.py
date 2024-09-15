from django.urls import path
from . import views

urlpatterns =[
  path("", views.index, name="index"),
  path("<str:item>", views.product, name="product"),
  path("store/", views.search, name="search"),
  path("", views.addToCart, name="addToCart"),
  path("cart/", views.cart, name="cart")
]