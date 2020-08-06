require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const docs = require("./routes/docs");
const user = require("./routes/user");
const follower = require("./routes/follower");
const tweet = require("./routes/tweet");
const feed = require("./routes/feed");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/", docs);
app.use("/user", user);
app.use("/follow", follower);
app.use("/tweet", tweet);
app.use("/feed", feed);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
