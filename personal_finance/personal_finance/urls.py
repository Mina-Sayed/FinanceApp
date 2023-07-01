from django.urls import path
from .views import SavingGoalListCreateView, SavingGoalRetrieveUpdateDeleteView, UserRegistrationView, UserLoginView

urlpatterns = [
    path('api/saving-goals/', SavingGoalListCreateView.as_view(),
         name='saving_goal_list_create'),
    path('api/saving-goals/<int:pk>/', SavingGoalRetrieveUpdateDeleteView.as_view(),
         name='saving_goal_retrieve_update_delete'),
    path('api/register/', UserRegistrationView.as_view(), name='user_registration'),
    path('api/login/', UserLoginView.as_view(), name='user_login'),
]
