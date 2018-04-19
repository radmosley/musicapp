from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'pages/index.html')

def about(request):
    return render(request, 'pages/about.html')

def products(request):
    return render(request, 'pages/products.html')

def store(request):
    return render(request, 'pages/store.html')