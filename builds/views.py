from django.shortcuts import render
# Create your views here.


def home(request):
    title = {'title':'contact'}
    return render(
        request,
        'builds/builds.html',
        title
        )
