# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Install TypeScript and ts-node globally for development
RUN npm install -g typescript ts-node

# Expose the port
EXPOSE 5000

# Start the application with nodemon using ts-node
CMD ["npx", "nodemon", "--watch", "src", "--ext", "ts,json", "--exec", "ts-node", "src/index.ts"]
