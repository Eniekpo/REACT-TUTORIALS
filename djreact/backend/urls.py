from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/customers', views.customers, name='customers'),
    path('api/customer/<int:id>', views.customer, name='customer'),
]
