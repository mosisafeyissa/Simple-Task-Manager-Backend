# Task Manager API

A simple task manager API built with Node.js and Express. This API allows users to manage tasks with functionalities such as creating, updating, deleting tasks based on their completion status.

## Features

- **Create Tasks**: Add new tasks with a title.
- **Get Tasks**: Retrieve all tasks with options to filter by completion status (completed vs. pending).
- **Update Tasks**: Mark tasks as completed.
- **Delete Tasks**: Remove tasks from the list.
- **Validation**: Input validation for task titles.

## Technologies Used

- Node.js
- Express.js
- Body-Parser
- File System (fs) for data storage

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mosisafeyissa/Simple-Task-Manager-Backend.git
   cd backend
   ```
2. Install dependencies:
    ```bash
   npm install
   ```
3. Start the server:
    ```bash
   npm run dev
   ```

## API Endpoints
1. Get All Tasks
Endpoint: GET /api/tasks
Response: List of tasks.

2. Create a New Task
Endpoint: POST /api/tasks
Request Body:
    ``bash
   {
        "title": "Task Title"
    }
   ``
3. Mark Task as Completed
Endpoint: PUT /api/tasks/:id
Response: Updated task with success message.

4. Delete a Task
Endpoint: DELETE /api/tasks/:id
Response: Success message on deletion.

