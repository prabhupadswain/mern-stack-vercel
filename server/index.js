const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.status(200).json({
    message: 'OK from Server',
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
