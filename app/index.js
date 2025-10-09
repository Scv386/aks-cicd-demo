const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (_, res) => res.send("Hello from AKS via GitHub Actions!"));
app.listen(port, () => console.log(`Listening on ${port}`));
