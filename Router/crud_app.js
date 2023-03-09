const express = require("express");
const router = express.Router();

let message = "";
let error = "";

router.get("/", (req, res) => {
  res.status(200).json({
    message: message,
    data: "data",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: message,
    data: "data",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: message,
    data: "data",
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: message,
    data: "data",
  });
});

module.exports = router;
