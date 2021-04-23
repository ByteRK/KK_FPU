# Rules And Scripts

## 前言

各平台的分流规则、复写规则及自动化脚本。

## 特别声明

1. 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。
2. 编写本项目主要目的为学习和研究ES6，无法保证项目内容的合法性、准确性、完整性和有效性。
3. 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
4. 本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
5. 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
6. 所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
7. 所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
8. 本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。

## 规则

**我们并不生产规则，我们只是开源规则的搬运工。**

分流规则

https://github.com/blackmatrix7/ios_rule_script/tree/master/rule

复写规则

https://github.com/blackmatrix7/ios_rule_script/tree/master/rewrite

所有规则数据都来自互联网，感谢开源规则项目作者的辛勤付出。

## 脚本

### 支持情况

自动化脚本在不同平台支持情况：

|          | Surge       | Quantumult X | Loon        | Shadowrocket | Node.js          |
| -------- | ----------- | ------------ | ----------- | ------------ | ---------------- |
| 需要硬件 | iPhone/iPad | iPhone/iPad  | iPhone/iPad | iPhone/iPad  | 可长期运行的电脑 |
| 脚本更新 | 自动更新    | 自动更新     | 自动更新    | 自动更新     | 手动更新         |
| 推送通知 | 手机推送    | 手机推送     | 手机推送    | 手机推送     | 无               |
| 使用成本 | 付费App     | 付费App      | 付费App     | 付费App      | 免费             |
| 支持情况 | 优先支持    | 兼容支持     | 兼容支持    | 部分支持     | 部分支持         |

优先支持：优先确保运行正常，出现异常优先解决

兼容支持：代码层面做兼容，会做测试

随缘支持：代码层面做兼容，偶尔做测试

部分支持：代码层面做兼容，部分功能可用，不做测试

支持优先级：Surge > Quantumult X > Loon > Shadowrocket ≥  Node.js

### 脚本说明

| 脚本                                                         | 介绍                                                         | 维护状态 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------- |
| [知乎助手](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/zhihu) | 使用纯净版知乎是一种怎么样的体验？                           | 正常     |
| ~~[哔哩哔哩](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/bilibili)~~ | ~~没有广告的哔哩哔哩更值得干杯~~                             | 停止     |
| [什么值得买](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/smzdm) | 什么值得买签到和去广告脚本                                   | 正常     |
| [百度贴吧](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/tieba) | 带重试功能的贴吧签到，提高签到成功率                         | 正常     |
| [中国联通](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/10010) | 每日自动签到、美团外卖30-3优惠券、4次抽奖、话费流量语音情况推送 | 正常     |
| [联享家](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/lxj) | 去广告、拦截检测更新                                         | 正常     |
| [开屏去广告](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/startup) | 通过脚本去除缓存到本地的APP开屏广告                          | 正常     |
| [嘀嗒出行](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/didachuxing) | 每日自动签到                                                 | 正常     |
| [滴滴出行](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/didichuxing) | 每日自动签到、福利金抽奖、天天有奖签到                       | 正常     |
| [家长帮](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/jiazhangbang) | 每日自动签到                                                 | 正常     |
| [慢慢买](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/manmanbuy) | 每日自动签到                                                 | 正常     |
| [~~小米有品~~](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/youpin) | ~~每日自动签到~~                                             | 停止     |
| [叮咚买菜](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/dingdong) | 每日自动签到                                                 | 正常     |
| [万达电影](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/wanda) | 每日自动签到，月末将剩余能量抽奖                             | 正常     |
| [饿了么](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/eleme) | 每日自动领取会员任务                                         | 正常     |
| [Fa米家](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/famijia) | 每日自动签到                                                 | 正常     |
| [Luka](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/luka) | 每日自动签到                                                 | 正常     |
| [美团买菜](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/meituan) | 每日自动签到                                                 | 正常     |

#### Quantumult X Gallery

部分脚本已配置为Quantumult X Gallery。

地址： https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/gallery.json

#### BoxJS

感谢 [@chouchoui](https://github.com/chouchoui) 为本项目添加BoxJS的订阅。

地址：https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/boxjs.json

### 外部资源

项目中资源来自互联网上其他开源项目（具体以不同目录的说明为准），这里主要进行一些整合和备份。对于此类资源，无法对使用过程中出现的任何问题进行解答，您需要联系原作者。

地址：https://github.com/blackmatrix7/ios_rule_script/tree/master/external

# 感谢

以下排名不分先后

[@BaileyZyp](https://github.com/BaileyZyp)   [@Mazeorz](https://github.com/Mazeorz)   [@LuzMasonj](https://github.com/LuzMasonj)  [@chouchoui](https://github.com/chouchoui)  [@ypannnn](https://github.com/ypannnn)  [@echizenryoma](https://github.com/echizenryoma)  [@zirawell](https://github.com/zirawell)  [@urzz](https://github.com/urzz)  [@ASD-max](https://github.com/ASD-max)

