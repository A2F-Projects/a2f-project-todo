const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require("axios");

const cors = require("cors");

const app = express();
app.use(cors({ credentials: true }));

// import your models
require("./models/quote");

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routes
require("./routes/quoteRoute.js")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get(
      "https://hog.simplify.jobs/decide/?v=3&ip=1&_=1689097031833&ver=1.57.2",
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*", // Set the appropriate origin
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    res.header("Access-Control-Allow-Origin", "*"); // Set the appropriate origin
    res.header("Access-Control-Allow-Credentials", true);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred during proxy request");
  }
});

// Accessing the path module
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
