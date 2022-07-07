from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GolfCourseSerializer


class GolfCourseViews(APIView):
    def post(self, request):
        serializer = GolfCourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success", "data": serializer.data},
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {"status": "error", "data": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )
