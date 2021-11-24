const express = require('express');

const app = express();

app.use((req, res) => {
  res.sendFile('/home/dev/repos/react-todoMVC-example/react/');
});

app.listen(3000, () => {
  console.log(`express server listening on port 3000`);
});
