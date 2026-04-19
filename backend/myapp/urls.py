from django.urls import path, include
from . import views

urlpatterns = [
    path("complains/", views.ComplainListCreate.as_view(), name="complain-list-create"),
    path("complains/delete/<int:pk>/", views.ComplainDelete.as_view(), name="complain-delete"),
]