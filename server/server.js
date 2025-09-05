const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 기존 user 라우트
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

// ✅ 새로 추가한 gumi 라우트
const gumiRoutes = require("./routes/gumi");
app.use("/api/gumi", gumiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
