package routes

import (
	"github.com/gin-gonic/gin"
)

func RegisterRoutes(server *gin.Engine) {

	server.GET("/projects", getProjects)
	server.GET("/projects/:id", getProject)
	server.POST("/projects", createProject)
	server.PUT("/projects/:id", updateProject)
	server.DELETE("/projects/:id", deleteProject)
}
