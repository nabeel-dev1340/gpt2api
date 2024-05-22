const express = require("express");
const sampleRoutes = require("./routes//sampleRoutes");
const middleware = require("./middleware/middleware");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(middleware);

//Routes
app.use("/api", sampleRoutes);

app.get("/ping", (req, res) => {
  res.status(200).send("Hello");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
