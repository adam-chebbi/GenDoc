import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { requireAuth, requireAdmin, withAuth } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('GenDoc Backend is running!');
});

app.get('/dashboard', requireAuth, async (req, res) => {
  res.json({ message: `Welcome, user ${req.auth.userId}!`, user: req.user });
});

app.get('/admin', withAuth, requireAdmin, (req, res) => {
  res.json({ message: 'Welcome, admin!', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});