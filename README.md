
# Task Management Dashboard

A responsive task management web application built with React, Vite, Tailwind CSS, and Axios. It helps users view, organize, search, and manage their daily tasks through a clean dashboard.

## Features

- **Dashboard:** Overview of tasks and task statistics.
- **Task Management:** Add, view, complete, and delete tasks.
- **Search and Filters:** Find tasks and filter them by status.
- **Profile Page:** Edit and save personal information.
- **Dark Mode:** Switch between light and dark themes.
- **Responsive UI:** Sidebar and layout designed for different screen sizes.
- **API Integration:** Fetch and manage demo tasks using Axios and JSONPlaceholder.
- **React Router:** Navigate between Dashboard, Tasks, and Profile.

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React
- HTML5 and CSS3

## Project Structure

```text
task-management-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskForm.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Tasks.jsx
│   │   └── Profile.jsx
│   ├── services/
│   │   └── TaskServices.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/task-management-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## API Integration

This project uses the JSONPlaceholder demo API:

`https://jsonplaceholder.typicode.com/todos`

Axios is used to fetch tasks and send create, update, and delete requests.

**Note:** JSONPlaceholder simulates write operations. Added, updated, and deleted tasks are not permanently stored on the server.

## Learning Outcomes

- Building reusable React components.
- Managing state with React Hooks.
- Implementing navigation with React Router.
- Integrating REST APIs using Axios.
- Styling responsive interfaces with Tailwind CSS.
- Implementing theme switching with React Context.
- Managing code with Git and GitHub.

## Future Improvements

- Connect a backend and database for persistent task storage.
- Add user authentication and authorization.
- Implement task priorities and due dates.
- Add more detailed dashboard analytics.
- Deploy the application for public access.

## Author

**Ekta Bhotmange**

Computer Engineering Student | Aspiring Software Developer

---

*Built as a React development project to practice frontend development, API integration, and task management.*
