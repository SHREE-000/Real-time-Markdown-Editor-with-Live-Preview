# Real-time Markdown Editor

This project is a real-time Markdown editor built with React for the frontend and Node.js for the backend. The editor allows users to type Markdown syntax and instantly see the converted HTML in a live preview pane.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Usage](#usage)
- [License](#license)

## Features

- Real-time conversion of Markdown to HTML.
- Live preview pane for HTML rendering.
- Responsive design with media queries.
- Debounced input handling to optimize API calls.

## Project Structure

```plaintext
markdown-editor/
│
├── backend/               # Node.js server code
│   ├── server.js          # Main server file
│   └── package.json       # Dependencies and scripts for backend
│
├── frontend/              # React application
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # Entry point for React
│   │   ├── MarkdownEditor.js # Markdown editor component
│   │   └── ...            # Other React components and files
│   ├── public/
│   └── package.json       # Dependencies and scripts for frontend
│
├── package.json           # Root package.json to manage both frontend and backend
└── README.md              # Instructions for setting up and running the project


# Getting Started
Prerequisites
Ensure you have the following installed on your machine:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/markdown-editor.git
cd markdown-editor
Running the Application
Running the Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Install the required dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
npm start
The backend server will run on http://localhost:5000

Running the Frontend
Open a new terminal and navigate to the frontend directory:

bash
Copy code
cd frontend
Install the required dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The React app will run on http://localhost:3000