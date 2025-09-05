const fs = require("fs");
const path = require("path");

// JSON 파일 경로
const gumiFile = path.join(__dirname, "..", "data", "gumi.json");

// GET /api/gumi
const getGumi = (req, res) => {
  try {
    const rawData = fs.readFileSync(gumiFile, "utf-8");
    const gumiData = JSON.parse(rawData);
    res.json(gumiData);
  } catch (error) {
    console.error("❌ gumi.json 읽기 실패:", error.message);
    res.status(500).json({ error: "데이터를 불러오지 못했습니다." });
  }
};

module.exports = { getGumi };
