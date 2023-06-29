from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('goals.urls')),
    # Add the following line for the empty path
    path('', include('goals.urls')),
    # path('api/csrf-cookie/', csrf_cookie_view, name='csrf-cookie'),

]
