const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

const naverApi = require("../../config/naver-api.json");

// 앞에 자동으로 naver가 붙음(서버에서 만들어 놓은 라우터 경로)
// 제품 검색
router.post("/", (req, res) => {
  const type = req.query.type;
  if (type === "result") {
    const url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURI(
      req.body.search
    )}`;
    request.get(
      {
        url,
        headers: {
          "X-Naver-Client-Id": naverApi.id,
          "X-Naver-Client-Secret": naverApi.secret,
          "Content-Type": "application/json",
        },
      },
      function (error, response, body) {
        if (error) {
          return console.log("Error: ", error);
        }
        res.send(body);
      }
    );
  }
});

module.exports = router;
