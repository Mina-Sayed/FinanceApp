from rest_framework import generics, permissions
from .models import User, SavingGoal
from .serializers import UserSerializer, SavingGoalSerializer

class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

class SavingGoalListView(generics.ListCreateAPIView):
    queryset = SavingGoal.objects.all()
    serializer_class = SavingGoalSerializer
    permission_classes = (permissions.IsAuthenticated,)

class SavingGoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SavingGoal.objects.all()
    serializer_class = SavingGoalSerializer
    permission_classes = (permissions.IsAuthenticated,)
