package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/models"
	"my.de/rest-api/utils"
)

func signUp(context *gin.Context) {
	var user models.User
	err := context.ShouldBindJSON(&user) // <- populate event struct with data we received

	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse request data"})
		return
	}

	err = user.Save()
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not create user"})
		return
	}
	context.JSON(http.StatusCreated, gin.H{"message": "User created sucessfully"})
}

func login(context *gin.Context) {
	var user models.User

	err := context.ShouldBindBodyWithJSON(&user)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"message": "Could not parse data"})
		return
	}

	err = user.ValidateCredentials()
	if err != nil {
		context.JSON(http.StatusUnauthorized, gin.H{"message": err.Error()})
		return
	}
	token, err := utils.GenerateToken(user.Email, user.ID)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"message": "Could not authenticate user"})
	}

	context.JSON(http.StatusOK, gin.H{"message": "Login successful!", "token": token})
}
