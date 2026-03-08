#!/bin/bash

# Load environment variables from .env file
if [ ! -f .env ]; then
    echo "Error: .env file not found in the current directory"
    exit 1
fi

set -a
source .env
set +a

echo "====================================="
echo "Building Production Docker Images"
echo "====================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track build status
FAILED_BUILDS=()

# Build Frontend
echo -e "${YELLOW}Building Frontend...${NC}"
docker build \
  --tag "${IMAGE_TAG}_production_frontend" \
  --file frontend/Dockerfile.production \
  --build-arg PORT="${FRONTEND_PORT}" \
  --build-arg FRONTEND_HOST="${FRONTEND_HOST_PRODUCTION}" \
  --build-arg BACKEND_HOST="${FRONTEND_BACKEND_HOST_PRODUCTION}" \
  ./frontend

if [ $? -ne 0 ]; then
    FAILED_BUILDS+=("Frontend")
    echo -e "${RED}✗ Frontend build failed${NC}"
else
    echo -e "${GREEN}✓ Frontend build successful${NC}"
fi
echo ""

# Build Backend
echo -e "${YELLOW}Building Backend...${NC}"
docker build \
  --tag "${IMAGE_TAG}_production_backend" \
  --file backend/Dockerfile.production \
  --build-arg PORT="${BACKEND_CONTAINER_PORT}" \
  --build-arg MODE=production \
  --build-arg PG_USER="${WEB_USER}" \
  --build-arg PG_PASSWORD="${WEB_PASSWORD_PRODUCTION}" \
  --build-arg PG_DATABASE="${APP_DATABASE}" \
  --build-arg PG_HOST="${IMAGE_TAG}_production_database" \
  --build-arg PG_PORT="${PG_PORT}" \
  ./backend

if [ $? -ne 0 ]; then
    FAILED_BUILDS+=("Backend")
    echo -e "${RED}✗ Backend build failed${NC}"
else
    echo -e "${GREEN}✓ Backend build successful${NC}"
fi
echo ""

# Build Database
echo -e "${YELLOW}Building Database...${NC}"
docker build \
  --tag "${IMAGE_TAG}_production_database" \
  --file database/Dockerfile.production \
  --build-arg POSTGRES_USER="${POSTGRES_USER}" \
  --build-arg POSTGRES_PASSWORD="${POSTGRES_PASSWORD_PRODUCTION}" \
  --build-arg POSTGRES_DATABASE="${POSTGRES_DATABASE}" \
  --build-arg APP_USER="${APP_USER}" \
  --build-arg APP_PASSWORD="${APP_PASSWORD_PRODUCTION}" \
  --build-arg APP_DATABASE="${APP_DATABASE}" \
  --build-arg WEB_USER="${WEB_USER}" \
  --build-arg WEB_PASSWORD="${WEB_PASSWORD_PRODUCTION}" \
  ./database

if [ $? -ne 0 ]; then
    FAILED_BUILDS+=("Database")
    echo -e "${RED}✗ Database build failed${NC}"
else
    echo -e "${GREEN}✓ Database build successful${NC}"
fi
echo ""

# Summary
echo "====================================="
echo "Build Summary"
echo "====================================="
if [ ${#FAILED_BUILDS[@]} -eq 0 ]; then
    echo -e "${GREEN}All builds completed successfully!${NC}"
    exit 0
else
    echo -e "${RED}Failed builds:${NC}"
    for build in "${FAILED_BUILDS[@]}"; do
        echo "  - $build"
    done
    exit 1
fi
