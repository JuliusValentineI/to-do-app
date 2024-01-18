from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from .models import Task

def hello_html(request):
    html_content = "<html><body><h1>Hello from Django!</h1></body></html>"
    return HttpResponse(html_content)



### Task setup
def serialize_task(task_instance):
    serialized_data = serialize('json', [task_instance])
    return serialized_data;

def get_task (request):
    tasks = Task.objects.all()
    serialized_tasks = [serialize_task(task) for task in tasks]
    return JsonResponse(serialized_tasks, safe=False)
