from django.urls import path
from .views import UserCreateView, SavingGoalListView, SavingGoalDetailView

urlpatterns = [
    path('users/', UserCreateView.as_view(), name='user-create'),
    path('saving-goals/', SavingGoalListView.as_view(), name='saving-goal-list'),
    path('saving-goals/<int:pk>/', SavingGoalDetailView.as_view(), name='saving-goal-detail'),
]
