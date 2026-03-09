package db

import (
	"database/sql"
	_ "embed" // Import is required for embedding

	_ "github.com/mattn/go-sqlite3"
)

//go:embed schema.sql
var schemaSQL string

//
//go:embed initialData.sql
var initialData string

var DB *sql.DB

func InitDB() {
	var err error
	DB, err = sql.Open("sqlite3", "/app/data/api.db?_foreign_keys=on")
	// DB, err = sql.Open("sqlite3", "api.db?_foreign_keys=on")
	if err != nil {
		panic(err)
	}

	_, err = DB.Exec(schemaSQL)
	if err != nil {
		panic("Could not execute embedded schema: " + err.Error())
	}
	_, err = DB.Exec(initialData)
	if err != nil {
		panic("Could not insert intial data: " + err.Error())
	}
}
