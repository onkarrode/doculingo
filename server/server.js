const express = require("express");
const cors = require("cors");

const translationRoutes = require("./routes/translationRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "DocTranslate backend is running!",
  });
});

// Translation routes
app.use("/api/translate", translationRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});