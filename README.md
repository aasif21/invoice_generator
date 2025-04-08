# Invoice Generator

A simple and efficient invoice generator built using React.js, with a fully Dockerized environment for easy deployment. The application allows users to create, manage, and download invoices.
![image](https://github.com/user-attachments/assets/98f7421c-638a-4324-b753-9438d8e2c5f3)



## Features

- Create and manage invoices
- Download invoices in PDF format
- Dynamic form fields for adding multiple line items
- Responsive design
- Easy to use and navigate

## Tech Stack

- **Frontend:** React.js, CSS
- **Backend (optional):** Node.js / Express (if you're using an API for the invoice data)
- **PDF Generation:** html2pdf or a similar library
- **Containerization:** Docker

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Running with Docker

### Production Mode

To run the application in production mode:

```bash
# Build and start the container
docker-compose up -d

# Access the application at http://localhost:3000
```

### Development Mode

To run the application in development mode with hot-reloading:

```bash
# Build and start the container
docker-compose -f docker-compose.dev.yml up -d

# Access the application at http://localhost:3000
```

### Building Docker Image Manually

If you prefer to build and run the Docker image manually:

```bash
# Build the image
docker build -t invoice-generator .

# Run the container
docker run -p 3000:3000 invoice-generator
```

For development:

```bash
# Build the development image
docker build -t invoice-generator-dev -f Dockerfile.dev .

# Run the development container
docker run -p 3000:3000 -v $(pwd)/src:/app/src invoice-generator-dev
```

## Running Without Docker

If you prefer to run the application without Docker:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```


