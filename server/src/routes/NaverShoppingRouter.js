const express = require("express");
const router = express.Router();

// 앞에 자동으로 naver가 붙음(서버에서 만들어 놓은 라우터 경로)
router.get("/", (req, res, next) => {
  return res.send("hello");
});

module.exports = router;
