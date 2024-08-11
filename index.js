const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const videosRouts = require("./routes/videos");

app.use(cors());
app.use(express.json());

app.use("/", videosRouts);

app.use("/images", express.static("./public/images"));

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
app.get('/test', (req, res) => {
    res.send("please work");
});