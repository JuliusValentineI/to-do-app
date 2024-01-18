from django.db import models
import uuid 

class Task(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    date = models.DateField()
    description = models.TextField()
    state = models.CharField(max_length=50)
    priority = models.CharField(max_length=50)
    
    def __str__(self):
        return f"Nombre: {self.name}\nFecha: {self.date}\nDescripción: {self.description}\nEstado: {self.state}\nPrioridad: {self.priority}, Id: {self.id}"

