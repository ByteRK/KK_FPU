// 此脚本对应URL
// http://ip-api.com/json?lang=zh-CN
// 定义Emoji组以及旗帜表
const emojis = ['🆘', '🈲', '⚠️', '🔞', '📵', '🚦', '🏖', '🖥', '📺', '🐧', '🐬', '🦉', '🍄', '⛳️', '🚴', '🤑', '👽', '🤖', '🎃', '👺', '👁', '🐶', '🐼', '🐌', '👥']
var flags = new Map([["AC", "🇦🇨"], ["AF", "🇦🇫"], ["AI", "🇦🇮"], ["AL", "🇦🇱"], ["AM", "🇦🇲"], ["AQ", "🇦🇶"], ["AR", "🇦🇷"], ["AS", "🇦🇸"], ["AT", "🇦🇹"], ["AU", "🇦🇺"], ["AW", "🇦🇼"], ["AX", "🇦🇽"], ["AZ", "🇦🇿"], ["BB", "🇧🇧"], ["BD", "🇧🇩"], ["BE", "🇧🇪"], ["BF", "🇧🇫"], ["BG", "🇧🇬"], ["BH", "🇧🇭"], ["BI", "🇧🇮"], ["BJ", "🇧🇯"], ["BM", "🇧🇲"], ["BN", "🇧🇳"], ["BO", "🇧🇴"], ["BR", "🇧🇷"], ["BS", "🇧🇸"], ["BT", "🇧🇹"], ["BV", "🇧🇻"], ["BW", "🇧🇼"], ["BY", "🇧🇾"], ["BZ", "🇧🇿"], ["CA", "🇨🇦"], ["CF", "🇨🇫"], ["CH", "🇨🇭"], ["CK", "🇨🇰"], ["CL", "🇨🇱"], ["CM", "🇨🇲"], ["CN", "🇨🇳"], ["CO", "🇨🇴"], ["CP", "🇨🇵"], ["CR", "🇨🇷"], ["CU", "🇨🇺"], ["CV", "🇨🇻"], ["CW", "🇨🇼"], ["CX", "🇨🇽"], ["CY", "🇨🇾"], ["CZ", "🇨🇿"], ["DE", "🇩🇪"], ["DG", "🇩🇬"], ["DJ", "🇩🇯"], ["DK", "🇩🇰"], ["DM", "🇩🇲"], ["DO", "🇩🇴"], ["DZ", "🇩🇿"], ["EA", "🇪🇦"], ["EC", "🇪🇨"], ["EE", "🇪🇪"], ["EG", "🇪🇬"], ["EH", "🇪🇭"], ["ER", "🇪🇷"], ["ES", "🇪🇸"], ["ET", "🇪🇹"], ["EU", "🇪🇺"], ["FI", "🇫🇮"], ["FJ", "🇫🇯"], ["FK", "🇫🇰"], ["FM", "🇫🇲"], ["FO", "🇫🇴"], ["FR", "🇫🇷"], ["GA", "🇬🇦"], ["GB", "🇬🇧"], ["HK", "🇭🇰"], ["HU", "🇭🇺"], ["ID", "🇮🇩"], ["IE", "🇮🇪"], ["IL", "🇮🇱"], ["IM", "🇮🇲"], ["IN", "🇮🇳"], ["IS", "🇮🇸"], ["IT", "🇮🇹"], ["JP", "🇯🇵"], ["KR", "🇰🇷"], ["LU", "🇱🇺"], ["MO", "🇲🇴"], ["MX", "🇲🇽"], ["MY", "🇲🇾"], ["NL", "🇳🇱"], ["PH", "🇵🇭"], ["RO", "🇷🇴"], ["RS", "🇷🇸"], ["RU", "🇷🇺"], ["RW", "🇷🇼"], ["SA", "🇸🇦"], ["SB", "🇸🇧"], ["SC", "🇸🇨"], ["SD", "🇸🇩"], ["SE", "🇸🇪"], ["SG", "🇸🇬"], ["TH", "🇹🇭"], ["TN", "🇹🇳"], ["TO", "🇹🇴"], ["TR", "🇹🇷"], ["TV", "🇹🇻"], ["TW", "🇨🇳"], ["UK", "🇬🇧"], ["UM", "🇺🇲"], ["US", "🇺🇸"], ["UY", "🇺🇾"], ["UZ", "🇺🇿"], ["VA", "🇻🇦"], ["VE", "🇻🇪"], ["VG", "🇻🇬"], ["VI", "🇻🇮"], ["VN", "🇻🇳"], ["ZA", "🇿🇦"]])
// 定义默认值
var city0 = "💫";
var isp0 = "🙈";
var org0 = "🕊";
// 获取随机数
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// 城市判断
function City_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return city0
        //emojis[getRandomInt(emojis.length)]
    }
}
// ISP判断
function ISP_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return isp0
        //emojis[getRandomInt(emojis.length)]
    }
}
// org判断
function ORG_ValidCheck(para) {
    if (para) {
        return para
    } else {
        return org0
        //emojis[getRandomInt(emojis.length)]
    }
}
// 地区数据纠正
function Area_check(para) {
    if (para == "中华民国" || para == "台湾") {
        return "中国台湾"
    } else {
        return para
    }
}
if ($response.statusCode != 200) {
    $done(null);
}
var body = $response.body;
var obj = JSON.parse(body);

var title = flags.get(obj['countryCode']) + ' ' + City_ValidCheck(obj['city']) + ' 🏖';
var subtitle = "🌸 " + ORG_ValidCheck(obj['org']) + " ➠ " + Area_check(obj['country']);
var ip = obj['query'];
var description = 'IP:' + obj['query'] + '\n' + 'AREA:' + Area_check(obj['country']) + '\n' + 'ISP:' + obj['isp'] + '\n' + 'ORG:' + obj['org'] + '\n' + 'CITY:' + City_ValidCheck(obj['regionName']) + '\n' + 'TZ:' + obj['timezone'] + '\n' + 'LON:' + obj['lon'] + '\n' + 'LAT:' + obj['lat'] + '\n\n' + '‍🧑🏻‍ 想喝可乐的KK🥤';
$done({ title, subtitle, ip, description }); 