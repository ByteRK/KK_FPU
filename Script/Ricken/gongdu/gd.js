/*
脚本功能：共读APP每日签到
脚本作者：Ricken
作者电报：http://t.me/HackRicken
更新时间：2022-03-07
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************


*************************
【 QX 】 :
*************************
[rewrite_local]

# > 共读获取UID
^https:\/\/api\.aoodog\.com\/core\/into\/user\.php url script-request-body https://raw.githubusercontent.com/HackRicken/KK_FPU/main/Script/Ricken/gongdu/gd.js

[task_local]

# > 共读每日签到
0 0 4 * * * https://raw.githubusercontent.com/HackRicken/KK_FPU/main/Script/Ricken/gongdu/gd.js, tag=共读每日签到， img-url=https://raw.githubusercontent.com/HackRicken/KK_FPU/main/Icon/yuio/app/gongdu.png,  enable=true

[mitm] 
hostname = api.aoodog.com

*************************
【 Surge, Loon 说明  】 :
*************************
自行根据QX格式修改

*/
var appName = '共读'
var Ricken = init()
var UID = Ricken.getdata("GongDu")

let isGetCookie = typeof $request !== 'undefined'

if (isGetCookie) {
    getcookie()
} else {
    main()
}

function getcookie() {
    var body = JSON.parse($response.body);
    uid = body["uid"];
    if (uid) {
        var UIDKey = "GongDu";
        var UIDValue = uid;
        if (UID != (undefined || null)) {
            if (UID != UIDValue) {
                var re = Ricken.setdata(UIDValue, UIDKey);
                if (!re) {
                    Ricken.msg("🥤更新" + appName + "UID失败💔", "", "");
                    Ricken.log("更新" + appName + "UID失败", "", "");
                } else {
                    Ricken.msg("🥤更新" + appName + "UID成功", "", "");
                    Ricken.log("更新" + appName + "UID成功", "", "");
                }
            } else {
                Ricken.msg(appName + "🥤UID未变化❗️", "", "");
                Ricken.log(appName + "UID未变化❗️", "", "");
            }
        } else {
            var re = Ricken.setdata(UIDValue, UIDKey);
            if (!re) {
                Ricken.msg("🥤首次写入" + appName + "UID失败💔", "", "");
                Ricken.log("首次写入" + appName + "UID失败", "", "");
            } else {
                Ricken.msg("🥤首次写入" + appName + "UID成功", "", "");
                Ricken.log("首次写入" + appName + "UID成功", "", "");
            }
        }
    } else {
        Ricken.msg("🥤写入" + appName + "UID失败‼️", "", "配置错误, 无法读取UID");
        Ricken.log("写入" + appName + "UID失败‼️", "", "配置错误, 无法读取UID");
    }
    Ricken.done()
}

function main() {
    let URL = 'https://api.aoodog.com/core/up/udate.php?uid=' + UID + '&points=1&tbName=gongdu';
    let HEADERS =  {
        'User-Agent' : `gong du/7.62 (iPhone; iOS 14.6; Scale/3.00)`,
        'Host' : `api.aoodog.com`,
        'Connection' : `keep-alive`,
        'Accept-Language' : `zh-Hans-CN;q=1, zh-Hant-CN;q=0.9, en-CN;q=0.8`,
        'Accept-Encoding' : `gzip, deflate, br`,
        'Accept' : `*/*`
        };
    const url = { url: URL, headers: HEADERS }
    Ricken.get(url, (error, response, data) => {
        Ricken.log(`${appName}, data: ${data}`)
        const title = `🥤${appName}`
        let subTitle = ''
        let detail = ''
        const obj = JSON.parse(data)
        if (obj.mes == "签到成功") {
            detail = `签到结果: 成功✨`
        } else if (obj.mes == "今天已签到") {
            detail = `签到结果: 重复签到💔`
        } else {
            detail = `签到结果: 失败💔`
        }
        Ricken.msg(title, subTitle, detail)
        Ricken.done()
    })
}

function init() {
    isSurge = () => {
        return undefined === this.$httpClient ? false : true
    }
    isQuanX = () => {
        return undefined === this.$task ? false : true
    }
    getdata = (key) => {
        if (isSurge()) return $persistentStore.read(key)
        if (isQuanX()) return $prefs.valueForKey(key)
    }
    setdata = (val, key) => {
        if (isSurge()) return $persistentStore.write(val, key)
        if (isQuanX()) return $prefs.setValueForKey(val, key)
    }
    msg = (title, subtitle, body) => {
        if (isSurge()) $notification.post(title, subtitle, body)
        if (isQuanX()) $notify(title, subtitle, body)
    }
    log = (message) => console.log(message)
    get = (url, cb) => {
        if (isSurge()) {
            $httpClient.get(url, cb)
        }
        if (isQuanX()) {
            url.method = 'GET'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    post = (url, cb) => {
        if (isSurge()) {
            $httpClient.post(url, cb)
        }
        if (isQuanX()) {
            url.method = 'POST'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    put = (url, cb) => {
        if (isSurge()) {
            $httpClient.put(url, cb)
        }
        if (isQuanX()) {
            url.method = 'PUT'
            $task.fetch(url).then((resp) => cb(null, {}, resp.body))
        }
    }
    done = (value = {}) => {
        $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, put, done }
}