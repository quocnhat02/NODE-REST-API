import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("It is auth routes");
});

export default router;
