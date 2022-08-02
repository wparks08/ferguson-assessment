FROM node:16

# Create app directory
WORKDIR /app
RUN mkdir -p /app/client

# Install app dependencies
COPY package*.json .
COPY /client/package*.json ./client
RUN npm install

# Bundle source
COPY . .

# Set PORT to 3000
ENV PORT 3000

# Expose app port
EXPOSE 3000

# Run app
CMD ["npm", "start"]