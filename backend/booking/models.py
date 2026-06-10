from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    email = models.EmailField()

    package = models.CharField(max_length=100)

    from_date = models.DateField()
    to_date = models.DateField()

    location = models.CharField(max_length=200)

    people = models.IntegerField(default=0)

    requirements = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    status = models.CharField(
    max_length=20,
    default="Pending"
)

    def __str__(self):
        return self.name