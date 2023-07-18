const express = require('express');
const nodemailer = require('nodemailer');

// Create an Express app
const app = express();


// Serve static files (CSS, JS, images, etc.) if needed
app.use(express.static('public'));

// Parse JSON-encoded request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Outlook, etc.
    auth: {
      user: 'khulyso.dev@gmail.com', // Replace with your email address
      pass: 'khuljohn-studio' // Replace with your email password
    }
  });

  // Configure email details
  const mailOptions = {
    from: Gmail,
    to: 'khulyso.dev@mail.com', // Replace with your email address where you want to receive the form submissions
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent successfully');
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
