from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, "index.html")

from django.contrib.auth.views import LoginView

class AdminLogin(LoginView):
    template_name = 'login.html'

    def form_invalid(self, form):
        print ('here')
        """Form validation (including authentication check) failed"""
        return HttpResponse('bad bad bad', status=401)
