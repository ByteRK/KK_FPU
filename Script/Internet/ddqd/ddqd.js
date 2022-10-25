/* 

[rewrite_local]
# > 滴答清单解锁会员
^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/ByteRK/KK_FPU/main/Script/Ricken/wps/docer.js

[mitm]
hostname = ticktick.com, dida365.com

*/

var body = $response["body"];
var obj = JSON.parse(body);

obj["proEndDate"] = "2032-01-01T00:00:00.000+0000";
obj["needSubscribe"] = false;
obj["pro"] = true;

body = JSON.stringify(obj);
$done(body)