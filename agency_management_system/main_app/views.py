from django.shortcuts import render
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

import pyrebase

from django.http import HttpResponse

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
auth = firebase.auth()

# Create your views here.
def index(request):
    return render(request,'index.html')
def list_of_crews(request):
    ship_crews = db.collection('ship_crews').get()

    crew_data = []

    for crew in ship_crews:
        value = crew.to_dict()
        crew_data.append(value)

        data = {
            'ship_crews': crew_data, 
        }
    return render(request,'list_of_crews.html',data)
def manage_crews(request):
    return render(request,'manage_crew.html')
def add_crews(request):
    return render(request,'add_crew.html')

def add_crews_firebase(request):
    if request.method == 'POST':

        first_name = request.POST.get('firstName')
        middle_name = request.POST.get('middleName')
        gender = request.POST.get('gender')
        age = request.POST.get('age')
        birthdate = request.POST.get('birthdate')
        rank = request.POST.get('rank')

        fileName = request.POST.get('fileName')
        crewImage = request.FILES['crewImage']

        

        # register default crew and password to firebase auth
        user = auth.create_user_with_email_and_password(first_name+'@gmail.com', 'password')

        img_file_directory = user['localId']+"/crew_images/"+ fileName

        #upload product image
        storage.child(img_file_directory).put(crewImage)

        doc_ref = db.collection('ship_crews').document(user['localId'])

        # doc_ref_limitation = db.collection('ship_crew_limitation').document('aAYLxdGLmHVs3Yoo12au')


        # limitations = db.collection('ship_crew_limitation').get()

        # for limitation in limitations:
        #     value = limitation.to_dict()
        #     if rank == 'master_captain':
        #         if value['master_captain'] != '0':
        #             return HttpResponse('Sorry Master Position Has already have A crew')


        doc_ref.set({
            'crew_img_url' : storage.child(img_file_directory).get_url(user['localId']),
            'crew_img_directory' : img_file_directory,
            'first_name': first_name,
            'middle_name': middle_name,
            'gender': gender,
            'age': age,
            'birthdate': birthdate,
            'rank': rank,
            'crew_id': user['localId'],
            })

        # doc_ref_limitation.update({rank: firestore.Increment(1)})
        return HttpResponse('Success')

def edit_crew(request):
    return render(request,'edit_crew.html')
def list_of_ship(request):
    return render(request,'list_of_ship.html')
def manage_ship(request):
    return render(request,'manage_ship.html')
def add_ship(request):
    return render(request,'add_ship.html')
def edit_ship(request):
    return render(request,'edit_ship.html')
