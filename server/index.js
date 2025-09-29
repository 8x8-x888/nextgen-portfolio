// Simple Express API for contact form submissions
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body || {};
  if (!email || !message) {
    return res.status(422).json({ error: 'Email and message are required.' });
  }
  console.log('Contact form submission received:', req.body);
  res.json({ status: 'ok', message: 'Thanks for reaching out! I will respond soon.' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});