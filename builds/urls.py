from django.urls import path
from builds import views

app_name = 'builds'

urlpatterns = [
  path('', views.home, name='builds')
]
