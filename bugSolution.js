const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Improved error handling using isNaN and a try-catch block
  if (isNaN(userId) || parseInt(userId) <=0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  try {
    const user = users.find(user => user.id === parseInt(userId));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});