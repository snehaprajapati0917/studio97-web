from rest_framework import serializers
from .models import Booking

# class BookingSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Booking
#         fields = "__all__"
#         from rest_framework import serializers
# from .models import Booking

class BookingSerializer(serializers.ModelSerializer):

    def validate_phone(self, value):
        if len(value) != 10 or not value.isdigit():
            raise serializers.ValidationError(
                "Phone number must be exactly 10 digits."
            )
        return value

    class Meta:
        model = Booking
        fields = "__all__"