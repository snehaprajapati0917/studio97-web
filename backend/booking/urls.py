from django.urls import path
from .views import booking_list, booking_delete, update_status


urlpatterns = [

    path('', booking_list),

    path('delete/<int:pk>/', booking_delete),
    
    path('update-status/<int:pk>/', update_status),

]