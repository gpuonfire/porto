package main

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"my.de/rest-api/db"
	"my.de/rest-api/routes"
	"my.de/rest-api/utils"
)

func main() {
	db.InitDB()
	server := gin.Default()
	utils.Debug("Starting server in debug mode")
	server.Use(CORSMiddleware())
	server.Static("/images", "/app/data/images")

	routes.RegisterRoutes(server)

	server.Run(":8080") // localhost
}

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		gin.LoggerWithFormatter(func(param gin.LogFormatterParams) string {
			// Custom format
			return fmt.Sprintf("[GIN] %s - [%s] \"%s %s %s %d %s \"%s\" %s\"\n",
				param.TimeStamp.Format(time.RFC1123),
				param.ClientIP,
				param.Method,
				param.Path,
				param.Request.Proto,
				param.StatusCode,
				param.Latency,
				param.Request.UserAgent(),
				param.ErrorMessage,
			)
		})
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
