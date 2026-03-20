## Backend
To use the debugger:

comment out the first line to use the Debugger tool for Golang

```go
 DB, err = sql.Open("sqlite3", "/app/data/api.db?_foreign_keys=on")
 // DB, err = sql.Open("sqlite3", "api.db?_foreign_keys=on")
```

change the working direktory to `/backend`
