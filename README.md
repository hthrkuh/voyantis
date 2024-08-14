# Queue Management Application

This is a Queue Management application built with Node.js and React. It provides a backend server for managing queues of messages and a frontend interface for interacting with the queues. 

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend (Node.js)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/queue-management-app.git
   cd queue-management-app


Navigate to the Backend Directory:

bash
Copy code
cd server
Install Dependencies:

bash
Copy code
npm install
Create a .env File:

Create a .env file in the server directory with the following content:

env
Copy code
PORT=4000

Run the Backend Server:

bash
Copy code
npm start
The backend server will start and listen on http://localhost:4000.

Frontend (React)
Navigate to the Frontend Directory:

bash
Copy code
cd ../client
Install Dependencies:

bash
Copy code
npm install
Run the Frontend Application:

bash
Copy code
npm start
The frontend application will start and be accessible at http://localhost:3000.

Running the Application
Ensure the Backend Server is Running:

Follow the steps in the Backend section to start the backend server.

Ensure the Frontend Application is Running:

Follow the steps in the Frontend section to start the frontend application.

Open the Frontend Application:

Open your browser and navigate to http://localhost:3000 to use the Queue Management application.

API Endpoints
POST /api/{queue_name}
Description: Adds a new message to the specified queue.
Request Body: JSON object representing the message.
json
Copy code
{
  "text": "Your message here"
}
GET /api/{queue_name}?timeout={ms}
Description: Gets the next message from the specified queue. Returns 204 if no message is found within the timeout period.
Query Parameter:
timeout: Optional. Time in milliseconds to wait for a message. Defaults to 10000 ms (10 seconds).
GET /api/queues
Description: Retrieves all available queues and their message counts.
Frontend
The frontend is built with React and provides a user interface to interact with the backend API.

Components
QueueList: Displays all available queues and allows users to select a queue to fetch the next message or add new messages.
QueueItem: Displays details of a queue and provides options to fetch the next message or add a new message.
AddQueueForm: Allows users to add a new queue with an optional initial message.
Styling
The application uses CSS for styling. The styles can be found in the client/src/styles directory. Key styles include:

.queue-list - Styles for the list of queues.
.queue-item - Styles for individual queue items.
.add-queue-form - Styles for the form to add new queues.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

markdown
Copy code

### Summary

- **Installation**: Instructions for setting up the backend and frontend.
- **Running the Application**: Steps to start both backend and frontend servers.
- **API Endpoints**: Details of the available API endpoints.
- **Frontend**: Overview of the frontend components.
- **Styling**: Information about styling and CSS.
- **Contributing**: Guidelines for contributing to the project.
- **License**: License information.

Feel free to adjust the content according to your project's specifics and any additional details you might need.





