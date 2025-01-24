// index.js
const express = require('express')
const app = express()
app.use(express.json())

// In-memory data store
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
]

// Get user by id (provided)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})



// Update an exisiting user
app.put('/api/user/:id', (req, res) => {
  const userId = parseInt(req.params.id,);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found'});
  }
  Object.assign(user, req.body);
  res.json(user);
});


//Delete a user
app.delet('/api/usrs/:id', (req, res) => {
  const userId = parseInt(req.params.id,);
  const userIndex = user.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found'});
  }
  user.splice(userIndex, 1);
  res.status(204).end();
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});