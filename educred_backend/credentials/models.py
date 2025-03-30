from django.db import models

class Credential(models.Model):
    student_name = models.CharField(max_length=255)
    university = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    issued_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_name} - {self.degree}"
