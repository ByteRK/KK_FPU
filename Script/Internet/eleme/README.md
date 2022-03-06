# 饿了么

饿了么每日自动领取会员任务，及自动领取吃货豆功能。

领取会员任务，限饿了么会员使用，解决忘记领取会员任务再下单的问题。

自动领取吃货豆，非会员可能能用，我没有非会员账号，无法验证，有兴趣可以自己试试。

## 最近更新

1. 拆分领取吃货豆和领取会员任务的脚本
2. 支持最新多选一任务
3. 适配饿了么最新的吃货豆活动
4. 增加自动领取吃货豆功能

## 特别说明

目前已将领取吃货豆和领取会员任务的脚本拆分，请按需部署脚本。

如果使用现成的Surge模块或Loon插件，则会在0点10分领取吃货豆，在早上10点领取任务列表中第一个可以领取的任务。

### 领取吃货豆

脚本自动领取APP中未领取的吃货豆。

### 多选一任务

对于最新更新的多选一任务，脚本会依次尝试领取所有任务。但因为多选一的关系，通常只会有第一个任务能成功领取。

## 配置说明

### Surge

使用模块

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.sgmodule

### Loon

使用远程脚本配置

```ini
[Remote Script]
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.lnscript, tag=饿了么_领取吃货豆及任务, enabled=true
```

### Quantumult X

配置文件

```ini
[rewrite_remote]
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.qxrewrite, tag=饿了么_获取Cookie, enabled=true

[task_local]
10 00 * * * https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js, tag=饿了么_领取吃货豆, enabled=true
00 10 * * * https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_mission.js, tag=饿了么_领取会员任务, enabled=true
```

## 获取Cookie

饿了么APP - 我的 - 超级吃货卡

## 统一推送

MagicJS利用Bark，实现了跨设备的统一推送能力，将多个iOS设备的脚本执行结果，统一推送到一个设备上。

执行效果图，以饿了么为例：

![](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/images/bark.jpg)

### 开启统一推送

你需要安装Bark这个APP，打开后可以得到类似这样的链接：

```http
https://api.day.app/VXTWvaQ18N29bsQAg7DgkT
```

在Surge、Loon、QuantumultX中执行以下代码，将链接写入(如何执行代码请自己动手解决)。

**Surge、Loon**

```javascript
# 开启所有脚本统一推送
$persistentStore.write("https://api.day.app/VXTWvaQ18N29bsQAg7DgkT", "magicjs_unified_push_url");
```

**Quantumult X**

```javascript
# 开启所有脚本统一推送
$prefs.setValueForKey("https://api.day.app/VXTWvaQ18N29bsQAg7DgkT", "magicjs_unified_push_url");
```

### 关闭统一推送

**Surge、Loon**

```javascript
# 关闭所有脚本统一推送
$persistentStore.write("", "magicjs_unified_push_url");
```

**Quantumult X**

```javascript
# 关闭所有脚本统一推送
$prefs.setValueForKey("", "magicjs_unified_push_url");
```

### 其他

1. 统一推送能力仅对支持的脚本有效。
2. 开启统一推送后，所有支持统一推送的脚本，都会把通知推送到目标设备上。
3. 限于Bark的功能，统一推送中的多媒体和链接不可用。
4. 统一推送需要使用Bark的服务器，推送成功与否，与Bark服务器的可用性有关。
5. 统一推送不会关闭APP的本地推送，即两个iOS设备都会有推送。
6. 如有隐私考虑，可以参考Bark的服务端文档，自建服务端。