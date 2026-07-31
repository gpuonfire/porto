package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/models"
)

func getAllImages(context *gin.Context) {
	images, err := models.GetAllImages()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Coul not fetch gallery images"})
		return
	}
	context.JSON(http.StatusOK, images)
}

func getImageByName(context *gin.Context) {
	imageName := context.Param("name")
	image, err := models.GetImageByName(imageName)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch image " + imageName})
		return
	}
	context.JSON(http.StatusOK, image)
}
