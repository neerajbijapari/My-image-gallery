from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Picture
from .serializers import PictureSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, AllowAny

# ------------------ PICTURE VIEWS ------------------

# GET all pictures
@api_view(['GET'])
def picture_list(request):
    pictures = Picture.objects.all()
    serializer = PictureSerializer(pictures, many=True)
    return Response(serializer.data)

# POST a new picture (authenticated users only)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def picture_create(request):
    serializer = PictureSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)  # attach logged-in user
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# DELETE a picture (authenticated users only)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def picture_delete(request, id):
    try:
        picture = Picture.objects.get(id=id)
    except Picture.DoesNotExist:
        return Response({"error": "Picture not found"}, status=status.HTTP_404_NOT_FOUND)

    if picture.user != request.user:
        return Response({"error": "You can only delete your own pictures"}, status=status.HTTP_403_FORBIDDEN)

    picture.delete()
    return Response({"message": "Picture deleted successfully"}, status=status.HTTP_200_OK)

# ------------------ USER AUTH ------------------

# REGISTER
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if not username or not email or not password:
        return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)

# LOGIN
@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "username": user.username
            }
        }, status=status.HTTP_200_OK)
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
