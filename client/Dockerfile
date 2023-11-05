# Dockerfile for React client

# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Installing dependencies
RUN npm install --silent

# Bundle your app's source code into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]

