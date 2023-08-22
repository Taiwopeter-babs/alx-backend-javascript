const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

const port = 1245;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
