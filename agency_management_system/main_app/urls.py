"""agency_management_system URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name="index"),
    path('list_of_crews/', views.list_of_crews,name="list_of_crews"),
    path('manage_crews/', views.manage_crews,name="manage_crews"),
    path('add_crew/', views.add_crews,name="add_crew"),
    path('edit_crew/', views.edit_crew,name="edit_crew"),
    path('list_of_ship/', views.list_of_ship,name="list_of_ship"),
    path('manage_ship/', views.manage_ship,name="manage_ship"),
    path('add_ship/', views.add_ship,name="add_ship"),
    path('edit_ship/', views.edit_ship,name="edit_ship"),
    path('add_crews_firebase/', views.add_crews_firebase,name="add_crews_firebase"),
    path('editCrewPage/', views.editCrewPage,name="editCrewPage"),
]
