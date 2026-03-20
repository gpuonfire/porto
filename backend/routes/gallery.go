package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/models"
)

func getAllGalleryImages(context *gin.Context) {
	images, err := models.GetAllImages()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Coul not fetch gallery images"})
		return
	}
	context.JSON(http.StatusOK, images)
}
