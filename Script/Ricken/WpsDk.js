var body = JSON.parse($response.body);
var obj = {
    "msg" : "times all used",
    "data" : {
      "now" : body.data.now,
      "times" : 0,
      "expire_time" : 1946256142
    },
    "result" : "ok"
  };
  
  $done({ body: JSON.stringify(obj) });