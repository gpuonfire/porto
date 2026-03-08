package routes

import (
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine) {
	{
		api := server.Group("/api")
		{
			api.GET("/projects", getProjects)
			api.GET("/projects/:id", getProject)
			api.GET("/projects/:id/sections", getProjectSections)
			// api.POST("/projects", createProject)
			// api.PUT("/projects/:id", updateProject)
			// api.DELETE("/projects/:id", deleteProject)
			api.GET("/gallery", getAllGalleryImages)
		}
	}
}
