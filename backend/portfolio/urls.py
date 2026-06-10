from django.urls import path
from .views import portfolio_list, portfolio_delete

urlpatterns = [

    path('', portfolio_list),

    path(
        'delete/<int:pk>/',
        portfolio_delete
    ),

]