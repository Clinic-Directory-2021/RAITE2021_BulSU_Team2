from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')
def list_of_crews(request):
    return render(request,'list_of_crews.html')
def manage_crews(request):
    return render(request,'manage_crew.html')
