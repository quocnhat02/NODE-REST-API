import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It is user routes");
});

export default router;
