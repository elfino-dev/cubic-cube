# Use Node.js LTS as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port (for adapter-node or custom server)
EXPOSE 3500

# Start the application
CMD ["sh", "-c", "PORT=3500 node build"]