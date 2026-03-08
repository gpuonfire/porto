# AGENTS.md - Porto Project

This is a full-stack portfolio project with a **React/TypeScript frontend** and **Go backend**.

## Project Structure

```
/frontend     - React + TypeScript + Vite + SCSS
/backend      - Go with Gin framework
```

---

## Build / Lint / Test Commands

### Frontend (React + TypeScript)

```bash
# Install dependencies
cd frontend && npm install

# Development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Run linter with auto-fix
npm run lint -- --fix
```

**TypeScript Compilation:** `tsc -b` is run as part of the build command.

### Backend (Go)

```bash
cd backend

# Build
go build -o main .

# Run
go run main.go

# Run tests (none currently exist)
go test ./...

# Lint (install golangci-lint first)
golangci-lint run

# Format code
go fmt ./...
```

---

## Code Style Guidelines

### General

- **Language:** English for all code and comments
- **Formatting:** Use editor auto-formatting (Vite/Go fmt)
- **No TODO comments** - either fix or create an issue

### Frontend (React + TypeScript)

**Imports:**
- Use path alias `@/` for src-relative imports (e.g., `@/components/Icon`)
- Order: external → alias → relative
- Group by: React/Router → components → pages → styles/utilities

```typescript
// Good
import { useState } from "react";
import { useNavigate } from "react-router";
import Icon from "@/components/Icon";
import styles from "./Component.module.scss";
```

**Types & Interfaces:**
- Use `type` for simple types, `interface` for object shapes
- Name with PascalCase (e.g., `IconProps`, `Project`)
- Export inline types when possible

```typescript
// Good
type IconProps = {
  iconName: string;
  width?: number;
  className?: string;
};

interface Project {
  id: string;
  title: string;
}
```

**Components:**
- Use function declarations, not arrow functions (except for HOCs)
- Name files with PascalCase (e.g., `Icon.tsx`, `ProjectsPage.tsx`)
- Co-locate styles: `Component.tsx` + `Component.module.scss`
- Default export the component

**Styling:**
- Use SCSS modules (`.module.scss` files)
- Import as `import styles from "./Component.module.scss"`
- Use classes with `styles.className`

**React Patterns:**
- Use functional components with hooks
- Follow react-hooks rules (enforced by ESLint)
- Use `console.warn` for unexpected states (not `console.error`)

### Backend (Go)

**Naming:**
- Use snake_case for file names
- Use PascalCase for exported names
- Use camelCase for variables and parameters

**Structure:**
- Package: `main` for entry point, descriptive packages for modules
- Group imports: standard library → external → project

```go
import (
    "fmt"
    "net/http"

    "github.com/gin-gonic/gin"
    "my.de/rest-api/db"
)
```

**Error Handling:**
- Return errors with descriptive messages
- Use proper HTTP status codes
- Handle database errors gracefully

**Types:**
- Use structs for request/response bodies
- Add JSON tags for API responses

---

## Testing

- **No tests currently exist** - add tests when implementing new features
- Frontend: Use Vitest or React Testing Library
- Backend: Use standard Go testing package

---

## Docker

```bash
# Build production
./docker-build-production.yml

# Development with docker-compose
docker-compose -f compose-development.yml up
```

---

## Notes

- Frontend runs on port 8080 (Vite config)
- Backend runs on port 8080 (Gin default)
- Database: SQLite (in `backend/data/`)
- API routes registered in `backend/routes/`
- No CI/CD currently configured
