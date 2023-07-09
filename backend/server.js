import express from 'express';
import projects from './data/projects.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB Database

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/projects/', (req, res) => {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(
    p => p._id === req.params.id
  );
  res.json(project);
});

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
