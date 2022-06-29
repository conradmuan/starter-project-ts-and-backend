import "module-alias/register";
import express from "express";

const app = express();
// FE will run in 3000
const port = 4000;

app.get("/", (_req, res) => {
  res.json({
    msg: "Backend up and running!",
  });
});

app.listen(port, () => {
  console.log("Backend up and running 🤝");
});
