# Use the official Node.js image to build the frontend
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend app
RUN npm run build

# Expose port 3000 for the frontend
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
