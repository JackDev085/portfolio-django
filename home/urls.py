from django.urls import path

from . import views

app_name ='home'

#Urls of app home
urlpatterns = [
  #path  -- view to render
    path('', views.home,name='home')
]