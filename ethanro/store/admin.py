from django.contrib import admin
from .models import Product, Cart, Specials

# Register your models here.
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(Specials)