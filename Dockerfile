FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Build the app for production
RUN npm run build

# Install serve to run the production build
RUN npm install -g serve

EXPOSE 3000

# Start the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]