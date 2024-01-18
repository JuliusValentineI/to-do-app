from django.urls import include, path
from . import views

urlpatterns = [
    #path('')
    path('hello/', views.hello_html, name='html'),
    path('get_task/', views.get_task, name='tasks return')
]
