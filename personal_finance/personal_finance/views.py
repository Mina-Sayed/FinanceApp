from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import SavingGoal
from .serializers import SavingGoalSerializer, UserSerializer


class SavingGoalListCreateView(generics.ListCreateAPIView):
    queryset = SavingGoal.objects.all()
    serializer_class = SavingGoalSerializer


class SavingGoalRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SavingGoal.objects.all()
    serializer_class = SavingGoalSerializer


class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class UserLoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')

        user = User.objects.filter(username=username).first()

        if user is None or not user.check_password(password):
            return Response({'message': 'Invalid username or password'}, status=400)

        # Perform login/authentication logic here if needed

        return Response({'message': 'Login successful'})
