# Dockerized Express.js Application
This is my first experience with Docker, and I've created a simple Express.js application to test it.

## Prerequisites
Before you begin, make sure you have the following installed on your machine:

Docker

## Getting Started
### Clone the Repository:

git clone https://github.com/Babajide-olawoye/myDocker.git

### Build the Docker Image:

Navigate to the project directory and build the Docker image: 
cd your-express-docker-app
docker build -t username/node-app .
Replace "username" and "node-app" with your Docker Hub username and the name you want for your Docker image.

### Start a Docker container using the built image:

docker run -p 3000:3000 username/node-app
Replace "username" and "node-app" with your Docker Hub username and the name you gave your Docker image.

### Access the Application:

Open your web browser and visit http://localhost:3000. You should see the message "Testing Docker for the first time."

Additional Notes
The Express.js application listens on port 3000 inside the container, and this port is mapped to port 3000 on your host machine.
If you make changes to your application code, you'll need to rebuild the Docker image and restart the container.
