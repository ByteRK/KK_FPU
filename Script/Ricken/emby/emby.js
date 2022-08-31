var appName = 'Emby自动登陆'
var Ricken = init()
var UID = Ricken.getdata("GongDu")

let isgetdata = typeof $request !== 'undefined'

if (isgetdata) {
    getdata()
} else {
    checkin()
}


function getdata(){

}

function checkin(){

}

const url = `http://cu.poloemby.xyz:8088/emby/Users/authenticatebyname?X-Emby-Client=Emby%20Web&X-Emby-Device-Name=Safari%20iOS&X-Emby-Device-Id=3269fb29-648c-4efb-8e15-c00a784506ec&X-Emby-Client-Version=4.7.3.0`;
const method = `POST`;
const headers = {
    'Origin': `http://cu.poloemby.xyz:8088`,
    'Accept-Encoding': `gzip, deflate`,
    'Connection': `keep-alive`,
    'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
    'Accept': `application/json`,
    'Host': `cu.poloemby.xyz:8088`,
    'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1`,
    'Referer': `http://cu.poloemby.xyz:8088/web/index.html`,
    'Accept-Language': `zh-CN,zh-Hans;q=0.9`
};
const body = `Username=Ricken&Pw=crkemby`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});


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