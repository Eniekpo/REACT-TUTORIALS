from django.shortcuts import render
from . import serializers
from . models import DetailsModel
from . serializers import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


def index(request):
    return render(request, 'apiapp/index.html')


class DetailsTable(APIView):
    def get(self, request):
        detailsObj = DetailsModel.objects.all()
        dlserializeObj = DetailsSerializer(detailsObj, many=True)
        return Response(dlserializeObj.data)

    def post(self, request):
        serializeObj = DetailsSerializer(data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(2000)
        return Response(serializeObj.errors)


class DetailsUpdate(APIView):
    def post(self, request, pk):
        try:
            detailsObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Not found in database")

        serializeObj = DetailsSerializer(detailsObj, data=request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response(2000)
        return Response(serializeObj.errors)


class DetailsDelete(APIView):
    def post(self, request, pk):
        try:
            detailObj = DetailsModel.objects.get(pk=pk)
        except:
            return Response("Not found in database")
        detailObj.delete()
        return Response(2000)
