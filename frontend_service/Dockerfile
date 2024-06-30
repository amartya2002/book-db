# Stage 1: Install dependencies and build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]

# # Stage 2: Serve the application using a lightweight image
# FROM node:18-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the build output and dependencies from the builder stage
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the Next.js application
# CMD ["npm", "start"]

