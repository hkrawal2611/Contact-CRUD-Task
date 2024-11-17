# Use the official Node.js image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript and ts-node globally
RUN npm install -g typescript ts-node nodemon

# Copy the entire project
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application with nodemon and ts-node
CMD ["npx", "nodemon", "--watch", "src", "--ext", "ts,json", "--exec", "npx ts-node src/index.ts"]
