# Porto

## Tech Stack

- **Frontend:** React 19 + TypeScript + Vite + SCSS
- **Backend:** Go + Gin
- **Database:** SQLite

## Getting Started

### Frontend

```bash
cd frontend
npm install
npm run dev        # development server on port 8080
npm run build      # production build (tsc -b + vite build)
npm run lint       # ESLint
```

### Backend

```bash
cd backend
go run main.go     # Gin server on port 8080
go build -o main .
go fmt ./...
```

## Docker

```bash
./docker-build-production.sh          # production build
docker-compose -f compose-development.yml up   # development
```

## Notes

- Both frontend and backend run on port 8080
- SQLite database stored in `backend/data/`
- API routes registered in `backend/routes/`
- Work in progress
