const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
