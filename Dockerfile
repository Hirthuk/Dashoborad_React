# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Debug: Check if package.json is copied correctly
RUN ls -l

# Install all dependencies (including devDependencies)
RUN npm install --include=dev

# Debug: Check if node_modules is created
RUN ls -l node_modules

# Debug: Check if vite is installed
RUN npm list vite

# Copy the rest of the application code
COPY . .

# Build the React app (Vite generates files in the 'dist' folder)
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the built app from the build stage to the Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
