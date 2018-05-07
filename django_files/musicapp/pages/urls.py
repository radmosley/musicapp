from django.urls import path
from . import views
from .models import Video

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('products/', views.products, name='products'),
    path('store/', views.store, name='store'),
]
