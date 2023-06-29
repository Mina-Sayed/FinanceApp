from rest_framework import serializers
from .models import User, SavingGoal

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SavingGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavingGoal
        fields = '__all__'
