# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose backend port
EXPOSE 5000

# Run the development command
CMD ["npm", "run", "dev"]
