import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route example
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js backend!' });
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'dist')));

// Anything that doesn't match the API routes will be handled by React
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
