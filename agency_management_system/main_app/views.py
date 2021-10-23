from django.shortcuts import render
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import pyrebase

config = {
  "apiKey": "AIzaSyBfTREYKsWAkC33OVbCALbsxNXI48AF1_Y",
  "authDomain": "bulsutwo.firebaseapp.com",
  "databaseURL": "https://bulsutwo-default-rtdb.firebaseio.com/",
  "storageBucket": "gs://bulsutwo.appspot.com"
}

cred = credentials.Certificate('main_app/serviceAccountKey.json')
firebase_admin.initialize_app(cred)

firebase = pyrebase.initialize_app(config)

db = firestore.client()
storage = firebase.storage()
# Create your views here.
def index(request):
    return render(request,'index.html')
def list_of_crews(request):
    return render(request,'list_of_crews.html')
def manage_crews(request):
    return render(request,'manage_crew.html')
def add_crews(request):
    return render(request,'add_crew.html')
def edit_crew(request):
    return render(request,'edit_crew.html')
