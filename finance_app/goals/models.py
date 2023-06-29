from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group, Permission
from django.db import models


class CustomGroup(models.Model):
    group = models.OneToOneField(Group, on_delete=models.CASCADE, primary_key=True)

    class Meta:
        verbose_name = 'Group'
        verbose_name_plural = 'Groups'

    def __str__(self):
        return self.group.name


class CustomPermission(models.Model):
    permission = models.OneToOneField(Permission, on_delete=models.CASCADE, primary_key=True)

    class Meta:
        verbose_name = 'Permission'
        verbose_name_plural = 'Permissions'

    def __str__(self):
        return self.permission.name


class User(AbstractUser):
    groups = models.ManyToManyField(
        CustomGroup,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name='user_set',
        related_query_name='user'
    )
    user_permissions = models.ManyToManyField(
        CustomPermission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='user_set',
        related_query_name='user'
    )

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username


class SavingGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    target_date = models.DateField()

    class Meta:
        verbose_name = 'Saving Goal'
        verbose_name_plural = 'Saving Goals'

    def __str__(self):
        return self.name
