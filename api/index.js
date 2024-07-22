const express = require('express');

const app = express();
const port = 3040;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require('../routes/index'));

app.get('/', (req, res) => {
  res.json({ message: 'server is running' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;