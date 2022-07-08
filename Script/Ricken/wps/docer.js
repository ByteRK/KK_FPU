/*******************************

[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/HackRicken/KK_FPU/main/Script/Ricken/wps/docer.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/HackRicken/KK_FPU/main/Script/Ricken/wps/docer.js

[mitm]
hostname = *.docer.wps.cn, vipapi.wps.cn, account.wps.cn

*******************************/

var body = $response.body;
var objc = JSON.parse(body);

objc.vips = [
    {
        "memberid": 40,
        "expire_time": 1946256142,
        "name": "超级会员",
        "has_ad": 0,
        "enabled": null
    }
];

body = JSON.stringify(objc);
$done({
    body
});