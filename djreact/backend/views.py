from django.http import JsonResponse
from .models import Customer
from . serializers import CustomerSerializer

def customers(request):
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({'Customer': serializer.data})