from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Portfolio
from .serializers import PortfolioSerializer
from rest_framework.parsers import (
    MultiPartParser,
    FormParser
)

@api_view(['GET', 'POST'])
def portfolio_list(request):

    if request.method == 'GET':

        portfolios = Portfolio.objects.all()

        serializer = PortfolioSerializer(
            portfolios,
            many=True
        )

        return Response(serializer.data)

    if request.method == 'POST':

        serializer = PortfolioSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        ) 
@api_view(['DELETE'])
def portfolio_delete(request, pk):

    try:

        portfolio = Portfolio.objects.get(id=pk)

    except Portfolio.DoesNotExist:

        return Response(
            {"error": "Image not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    portfolio.delete()

    return Response(
        {"message": "Image Deleted Successfully"}
    )