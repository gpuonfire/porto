# Dockerfile.dev
FROM golang:1.25

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN mkdir -p data

EXPOSE 8080

ENV GIN_MODE=debug

CMD ["air"]

