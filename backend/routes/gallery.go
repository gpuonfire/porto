package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/models"
)

func getAllGalleryImages(context *gin.Context) {
	projects, err := models.GetAllProjects()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Coul not fetch projects"})
		return
	}
	context.JSON(http.StatusOK, projects)
}
