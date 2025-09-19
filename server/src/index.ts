import express from "express";

const app = express();

app.use(express.json());
const PORT = 8000;

app.get("/", (req, res) => {
  return res.json("Teste");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})