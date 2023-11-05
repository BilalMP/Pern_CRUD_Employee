# Use the official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# Install app dependencies
RUN npm install

# Bundle your app's source code into the container
COPY . .

# Generate prisma client 
RUN npx prisma generate

# build the app 
RUN npm run build 

# Expose the port that the app will run on
EXPOSE 5000

# Define the command to run your app
CMD ["npm", "run", "start"]
