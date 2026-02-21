package main

import (
	"github.com/gin-gonic/gin"
	"my.de/rest-api/db"
	"my.de/rest-api/routes"
)

func main() {
	db.InitDB()
	server := gin.Default()

	routes.RegisterRoutes(server)

	server.Run(":8080") //localhost
}
