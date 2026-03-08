# Use the latest LTS version of Node.js
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

ARG MODE
ARG FRONTEND_BACKEND_HOST

ENV MODE=$MODE
ENV VITE_BACKEND_HOST=$FRONTEND_BACKEND_HOST

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["npm", "run", "dev"]
