# Step 1: Use Node.js image to build the React app
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app (Vite generates files in the 'dist' folder)
RUN npm run build

# Step 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build files from the 'dist' folder to Nginx's HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
