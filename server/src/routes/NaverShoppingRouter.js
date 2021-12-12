const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

const naverApi = require("../../config/naver-api.json");
const database = require("../service/dbconnect_module");

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
    // 연관 검색어
  } else if (type === "keyword") {
    const url = `https://mac.search.naver.com/mobile/ac?_q_enc=UTF-8&st=1&r_format=json&q=${encodeURI(
      req.body.keyword
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
    // 제품 구매
  } else if (type === "buy") {
    req.body.mapper = "NaverMapper";
    req.body.crud = "insert";
    req.body.mapper_id = "buyItem";

    router.use("/", database);
    next("route");

    // 구매 리스트
  } else if (type === "buylist") {
    req.body.mapper = "NaverMapper";
    req.body.crud = "select";
    req.body.mapper_id = "allBuyItem";

    router.use("/", database);
    next("route");
  }
});

module.exports = router;
