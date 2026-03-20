package utils

import (
	"log"
	"os"
)

var DebugMode = os.Getenv("GIN_MODE") == "debug"

func Debug(format string, v ...interface{}) {
	if DebugMode {
		log.Printf("[### DEBUG] "+format, v...)
	}
}
