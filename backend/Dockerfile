# syntax=docker/dockerfile:1

FROM golang:1.25.7 as builder

WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -o main main.go

# Start a new stage for a smaller image
FROM debian:buster-slim

WORKDIR /app

# Copy the binary from the builder
COPY --from=builder /app/main .

ENTRYPOINT ["./main"]

