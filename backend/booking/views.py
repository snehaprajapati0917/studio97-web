from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Booking
from .serializers import BookingSerializer


@api_view(['GET', 'POST'])
def booking_list(request):

    if request.method == 'GET':
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = BookingSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def booking_delete(request, pk):

    try:
        booking = Booking.objects.get(id=pk)

    except Booking.DoesNotExist:
        return Response(
            {"error": "Booking not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    booking.delete()

    return Response(
        {"message": "Booking deleted successfully"},
        status=status.HTTP_200_OK
    )

@api_view(['PUT'])
def update_status(request, pk):

    print(request.data)   # ADD THIS

    try:
        booking = Booking.objects.get(id=pk)

    except Booking.DoesNotExist:
        return Response(
            {"error": "Booking not found"},
            status=status.HTTP_404_NOT_FOUND
        )

    booking.status = request.data.get("status")
    booking.save()

    return Response(
        {"message": "Status Updated Successfully"}
    )