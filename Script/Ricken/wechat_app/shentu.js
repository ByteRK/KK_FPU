/*
解锁微信小程序 “森图” 会员功能
***************************
QuantumultX:
[rewrite_local]
^https?:\/\/api\.next\.bspapp\.com\/client url script-response-body shentu.js
[mitm]
hostname = api.next.bspapp.com
***************************
Surge4 or Loon:
[Script]
http-response ^https?:\/\/api\.next\.bspapp\.com\/client requires-body=1,max-size=-1,script-path=shentu.js
[MITM]
hostname = api.next.bspapp.com
**************************/

var body = $response.body;
var objc = JSON.parse(body);

if (objc.data) {
  if (objc.data.data) {
    objc.data.data.isVip = true; // 是否会员
    objc.data.data.vip_to_date = 1735660800; // 会员到期时间
  }
  if (objc.data.user) {
    objc.data.user.nickname = "SVIP"; // 昵称
    objc.data.user.vip_to_date = 1735660800; // 会员到期时间
    objc.data.user.isVip = true; // 是否会员
  }
}

body = JSON.stringify(objc);
$done({ body });