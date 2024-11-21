const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File upload setup
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.file.filename);

  exec(python3 ../comparison/compare.py ${filePath}, (err, stdout, stderr) => {
    if (err || stderr) {
      return res.status(500).send("Error processing document");
    }
    res.send(stdout);
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));