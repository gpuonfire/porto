package routes

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/models"
	"my.de/rest-api/utils"
)

func getProjects(context *gin.Context) {
	projects, err := models.GetAllProjects()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Coul not fetch projects"})
		return
	}
	context.JSON(http.StatusOK, projects)
}

func getProject(context *gin.Context) {
	projectId := context.Param("id")
	project, err := models.GetProjectById(projectId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not fetch project"})
		fmt.Println(err)
		return
	}

	context.JSON(http.StatusOK, project)
}

func createProject(context *gin.Context) {
	token := context.Request.Header.Get("Authorized")
	if token == "" {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Not authorized"})
		return
	}
	err := utils.VerifyToken(token)
	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": "Not authorized"})
		return
	}

	var project models.Project
	err = context.ShouldBindJSON(&project) // <- populate project struct with data we received
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data"})
		return
	}

	// err = project.Save()
	// if err != nil {
	// 	context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not create project"})
	// 	return
	// }
	//
	// project.ID = 1
	// project.UserID = 1
	context.JSON(http.StatusCreated, gin.H{"message": "Project created!", "project": project})
}

// func updateProject(context *gin.Context) {
// 	projectId, err := strconv.ParseInt(context.Param("id"), 10, 64)
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse project id"})
// 		return
// 	}
// 	_, err = models.GetProjectById(projectId)
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "No project for this id does exist"})
// 		return
// 	}
//
// 	var updatedProject models.Project
// 	err = context.ShouldBindJSON(&updatedProject) // <- populate project struct with data we received
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse project data"})
// 		return
// 	}
//
// 	updatedProject.ID = projectId
// 	err = updatedProject.Update()
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not update project"})
// 		return
// 	}
//
// 	context.JSON(http.StatusOK, gin.H{"message": "Project updated successfully"})
// }

// func deleteProject(context *gin.Context) {
// 	projectId, err := strconv.ParseInt(context.Param("id"), 10, 64)
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse project id"})
// 		return
// 	}
// 	project, err := models.GetProjectById(projectId)
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "No project for this id does exist"})
// 		return
// 	}
//
// 	err = project.Delete()
// 	if err != nil {
// 		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not delete project"})
// 		return
// 	}
//
// 	context.JSON(http.StatusOK, gin.H{"message": "Project deleted successfully"})
// }
