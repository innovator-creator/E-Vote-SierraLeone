const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Demo in-memory "voter database"
const voters = {
  "123456789": { name: "Test Citizen", age: 22, verified: true },
  "987654321": { name: "Youth Example", age: 16, verified: false }
};

// Simple verification endpoint
app.get("/api/verify", (req, res) => {
  const nin = req.query.nin;
  if (!nin) return res.json({ message: "No NIN provided" });

  const record = voters[nin];
  if (!record) return res.json({ message: "NIN not found" });

  if (record.age < 18) return res.json({ message: "Underage voter detected!" });

  return res.json({ message: "Voter verified successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
