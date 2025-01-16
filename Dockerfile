# Step 1: Use the official Node.js image as the base
FROM node:18-alpine AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the React app source code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use an official Nginx image to serve the React app
FROM nginx:alpine

# Step 8: Copy the build files to the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port Nginx will use
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]
