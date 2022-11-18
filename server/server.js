const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// set up routes
// app.use(require("./routes/"));

const root = path.join(__dirname, '../client', 'build');
app.use(express.static(root));

app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });