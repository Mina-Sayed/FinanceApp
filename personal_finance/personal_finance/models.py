import datetime
from decimal import Decimal
from django.db import models
from django.contrib.auth.models import AbstractUser

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField(
        'auth.Group', related_name='personal_finance_users', blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission', related_name='personal_finance_users', blank=True
    )


class SavingGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    date_to_reach_goal = models.DateField()
    monthly_deposit = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        months_left = (self.date_to_reach_goal.year - datetime.now().year) * 12
        months_left += self.date_to_reach_goal.month - datetime.now().month
        self.monthly_deposit = Decimal(self.total_amount) / months_left
        super().save(*args, **kwargs)
