package db

import (
	"database/sql"
	_ "embed" // Import is required for embedding

	_ "github.com/mattn/go-sqlite3"
)

//go:embed scheme.sql
var schemaSQL string

var DB *sql.DB

func InitDB() {
	var err error
	DB, err = sql.Open("sqlite3", "api.db?_foreign_keys=on")
	if err != nil {
		panic(err)
	}

	// Use the embedded string directly
	_, err = DB.Exec(schemaSQL)
	if err != nil {
		panic("Could not execute embedded schema: " + err.Error())
	}
}
