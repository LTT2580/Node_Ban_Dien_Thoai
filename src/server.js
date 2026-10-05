const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware cơ bản
app.use(helmet());
app.use(cors());
app.use(express.json()); // Giúp server đọc được dữ liệu dạng JSON từ client gửi lên

// Route kiểm tra server hoạt động
app.get('/', (req, res) => {
  res.json({ message: 'API hệ thống bán điện thoại đang hoạt động tốt!' });
});

// Khởi động Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng http://localhost:${PORT}`);
});