import express from "express";

const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Working on port ${PORT}`);
});