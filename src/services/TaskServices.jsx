
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch tasks
export const getTasks = async () => {
  const response = await axios.get(`${API_URL}?_limit=10`);
  return response.data;
};

// Create a task
export const createTask = async (task) => {
  const response = await axios.post(API_URL, {
    title: task.title,
    completed: false,
    userId: 1,
  });

  return response.data;
};

// Update a task
export const updateTask = async (id, updates) => {
  const response = await axios.patch(`${API_URL}/${id}`, updates);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
