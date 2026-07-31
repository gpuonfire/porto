# Porto
<img width="1741" height="926" alt="Preview_Porto" src="https://github.com/user-attachments/assets/6b0d33aa-a673-4e11-80f3-b5e769b79f52" />

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
- Work in progress<img width="1741" height="926" alt="Preview_Porto" src="https://github.com/user-attachments/assets/7e068795-24c0-4e0e-92d9-4f738886abbc" />
