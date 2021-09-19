/*
WPS Office 解锁部分功能

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

[mitm]
hostname = account.wps.cn

***************************
Surge4 or Loon:

[Script]
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

[MITM]
hostname = account.wps.cn

**************************/

var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 1946256142 },
    { spid: "ocr", times: 0, expire_time: 1946256142 },
    { spid: "pdf2doc", times: 0, expire_time: 1946256142 },
    { spid: "pdf2excel", times: 0, expire_time: 1946256142 },
    { spid: "pdf_merge", times: 0, expire_time: 1946256142 },
    { spid: "pdf_sign", times: 0, expire_time: 1946256142 },
    { spid: "pdf_split", times: 0, expire_time: 1946256142 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 1946256142,
    enabled: [
      { memberid: 51, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 50, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 49, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 48, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 47, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 46, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 45, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 44, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 43, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 42, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 41, name: "精品课会员", expire_time: 1946256142 },
      { memberid: 40, name: "超级会员", expire_time: 1946256142 },
      { memberid: 20, name: "WPS会员", expire_time: 1946256142 },
      { memberid: 12, name: "稻壳会员", expire_time: 1946256142 }
    ]
  },
  wealth: 0,
  expire_time: 1946256142
};

$done({ body: JSON.stringify(obj) });