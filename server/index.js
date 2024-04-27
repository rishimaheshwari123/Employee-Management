const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");


connectDB();
const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/v1/employee", require("./routes/employeeRoute"))
app.use("/api/v1/auth", require("./routes/authRoute"))

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`)
})

