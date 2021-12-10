const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

const naverApi = require("../config/naver-api.json");
const request = require("request");

// 키워드 검색
router.get("/", (req, res) => {
  // 타입에는 클라이언트에서 던져준 글씨가 들어온다.
  // body에는 내가 원하는 정보가 담겨있다. response에는 모든 정보가 다 담겨있다.
  const type = req.query.type;

  if ("search" === type) {
    const url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURI(
      req.body.query
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
          return console.log("Error:", error);
        }
        res.send(body);
      }
    );
    // 키워드 검색 시 자동 완성
  } else if ("keyword" === type) {
    const url = `https://mac.search.naver.com/mobile/ac?_q_enc=UTF-8&st=1&r_format=json&q=${encodeURI(
      req.body.query
    )}`;
    request.get(
      {
        url,
      },
      function (error, response, body) {
        if (error) {
          return console.log("Error:", error);
        }
        res.send(body);
      }
    );
  }
});

module.exports = router;
