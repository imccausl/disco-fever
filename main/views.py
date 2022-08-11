from django.contrib.auth.views import LoginView
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    print (request.user)
    return render(request, "index.html")


class CustomLogin(LoginView):
    template_name = 'login.html'

    def form_invalid(self, form):
        print ('here')
        """Form validation (including authentication check) failed"""
        return HttpResponse('Bad login', status=401)
