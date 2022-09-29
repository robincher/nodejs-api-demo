#FROM node:10-alpine   
FROM node:current-alpine  


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN echo "Installing Node modules..."
RUN npm install --only=production

# Bundle app source
COPY . .

RUN echo "Starting service at on port 3000.."
EXPOSE 3000
ENV HOSTNAME='host.docker.internal'
ENV MONGO_CONNECTION_STRING='mongodb://host.docker.internal:27017/demo'
ENTRYPOINT ["npm", "start"]