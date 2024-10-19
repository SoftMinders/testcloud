# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire client directory to the container
COPY . .

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]