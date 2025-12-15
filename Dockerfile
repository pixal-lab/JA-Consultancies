# Use a modern Node.js version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Vite port
EXPOSE 5173

# Start the development server with host binding
CMD ["npm", "run", "dev", "--", "--host"]
