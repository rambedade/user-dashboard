# User Management Dashboard
# User Management Dashboard

![User Management Dashboard](https://github.com/user-attachments/assets/ea4ecb6a-7c52-4e14-9756-37fa17045bf3)

Live Demo: [https://user-dashboard-nu-nine.vercel.app/](https://user-dashboard-nu-nine.vercel.app/)

## 📄 Project Overview

The **User Management Dashboard** is a simple yet powerful web application built with React. It allows users to view, add, edit, and delete user details in a visually appealing, user-friendly interface. Designed with responsiveness and ease of use in mind, this application provides seamless user interactions and efficient data management.

## 🚀 Features

- **Add Users**: Create a new user with basic details (First Name, Last Name, Email, and Department).
- **Edit Users**: Modify existing user information with ease.
- **Delete Users**: Remove users from the system.
- **Real-Time Feedback**: Success and error notifications displayed for user actions.
- **Pagination**: Efficiently navigate through a large user list.

## 🛠️ Tech Stack

The following technologies were used to build this project:

- **Frontend**: 
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces
  - [Vite](https://vitejs.dev/) - Fast, lightweight development build tool
  - [Material UI](https://mui.com/) - React component library for creating beautiful UIs

- **Backend**:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Mock REST API used for demonstration purposes

- **Deployment**:
  - [Vercel](https://vercel.com/) - Platform for deploying front-end applications with ease

## 📂 Folder Structure

Here is an overview of the project's folder structure:

```plaintext
USER-BOARD/
├── .vercel/                    # Vercel deployment settings
├── node_modules/               # Node.js modules
├── public/
│   ├── assets/                 # Static assets (e.g., images)
│   └── index.html              # HTML template
├── src/
│   ├── assets/                 # Additional project assets
│   ├── components/             # Reusable React components
│   │   ├── Pagination.jsx      # Pagination component for user list
│   │   ├── UserForm.jsx        # Form component for adding/editing users
│   │   ├── UserItem.jsx        # Individual user item display component
│   │   └── UserList.jsx        # Component for displaying a list of users
│   ├── pages/
│   │   └── UserManagement.jsx  # Main page for managing users
│   ├── services/
│   │   └── api.js              # API service for HTTP requests
│   ├── App.jsx                 # Root component for the application
│   ├── index.jsx               # Entry point for React and Vite
│   ├── main.jsx                # Main rendering file with Vercel deployment
│   ├── theme.js                # Custom Material UI theme
│   └── App.css                 # Global styles
├── .gitignore                  # Files and directories to ignore in Git
├── vite.config.js              # Vite configuration file
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
