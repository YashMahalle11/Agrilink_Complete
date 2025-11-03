import express from "express";
import axios from "axios";

const router = express.Router();

// POST route to get crop price prediction
router.post("/predict", async (req, res) => {
  try {
    const { crop } = req.body;

    const response = await axios.post("http://127.0.0.1:5000/predict", { crop });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching crop price prediction:", error.message);
    res.status(500).json({ error: "Failed to get crop price prediction" });
  }
});

export default router;
