from django.urls import path
from . import views

urlpatterns = [
    path('pictures/list/', views.picture_list, name='picture-list'),
    path('pictures/create/', views.picture_create, name='picture-create'),
    path('pictures/delete/<int:id>/', views.picture_delete, name='picture-delete'),
    path('auth/register/', views.register_user, name='register'),
    path('auth/login/', views.login_user, name='login'),
]
