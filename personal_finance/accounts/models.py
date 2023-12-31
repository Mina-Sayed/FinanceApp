from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    groups = models.ManyToManyField(
        Group, related_name='accounts_users', blank=True)
    user_permissions = models.ManyToManyField(
        Permission, related_name='accounts_users', blank=True
    )
