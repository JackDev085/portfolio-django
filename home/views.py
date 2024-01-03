from django.shortcuts import render
# Create your views here.


def home(request):
    title = {'title':'Página inicial'}
    return render(
        request,
        'home/index.html',
        title
        )
