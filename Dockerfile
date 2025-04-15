# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
FROM node:lts-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --ignore-scripts

# Copy the rest of the application
COPY . .

# Expose port if needed (optional, as MCP servers might not require it)
# EXPOSE 3000

# Run the MCP server
CMD ["node", "server.js"]
