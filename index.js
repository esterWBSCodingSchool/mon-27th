const express = require('express');
const cors = require('cors');
const usersRouter = require('./api/routes/usersRouter');

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/users`);
});