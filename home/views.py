from django.shortcuts import render
# Create your views here.


def home(request):
    title = {'title':'home'}
    return render(
        request,
        'home/index.html',
        title
        )
