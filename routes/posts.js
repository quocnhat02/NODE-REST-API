import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Post page");
});

export default router;
