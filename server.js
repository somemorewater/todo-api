const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const router = require('./routes/addTodo')

dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/addtodo', router);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})

