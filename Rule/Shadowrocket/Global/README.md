# Global

## 前言

本项目的Global规则由《规则生成器》自动整合与去重。

分流规则是互联网公共服务的域名和IP地址汇总，所有数据均收集自开源项目，仅为解决引用过多外部资源引起的规则重复问题，不代表我们支持或使用这些服务。

请通过我国(中华人民共和国)合法的互联网出入口信道访问规则中的地址，并确保在使用过程中符合相关法律法规。

## 规则统计

总计规则：25758 条。

各类型规则统计：

| 类型 | 数量(条) |
| ---- | ---- |
| DOMAIN-SUFFIX | 25527 |
| USER-AGENT | 44 |
| DOMAIN | 32 |
| DOMAIN-KEYWORD | 45 |
| IP-CIDR | 110 |
## 配置说明

实时版：程序定时更新，更新频率高，能尽快同步数据源变化，适合希望尝鲜的人。

稳定版：不定时手动更新，更新频率低，适合不希望规则频繁变化的人。

### Shadowrocket 
实时版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Global/Global.list

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Global/Global_Domain.list

稳定版：

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Shadowrocket/Global/Global.list

https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/release/rule/Shadowrocket/Global/Global_Domain.list



如果稳定版无法访问 ，可能是尚未从实时版的分支合并，建议您先使用实时版，或等待下次稳定版分支合并。

### 特别说明

Global.list 请使用RULE-SET。

Global_Domain.list 请使用DOMAIN-SET。

两者必须同时使用。

## 子规则/排除规则

当前分流规则，已包含以下子规则：

- Proxy

除非特殊需求，否则不建议重复引用。

当前分流规则，已排除以下规则：

- AdvertisingLite

- China

## 数据来源

本项目的Global复写规则的数据来自以下链接，通常已涵盖所有数据来源的复写规则。

如果你正在使用这些复写规则，建议不要与本项目的Global复写规则混合使用，以免造成规则重复。

- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list
- https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyLite.list
- https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/Global.list
- https://raw.githubusercontent.com/ConnersHua/Profiles/master/Surge/Ruleset/GlobalMedia.list
- https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list
- https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Global.list
- https://raw.githubusercontent.com/GeQ1an/Rules/master/QuantumultX/Filter/Outside.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/Basic/Apple-proxy.list
- https://raw.githubusercontent.com/Hackl0us/SS-Rule-Snippet/master/Rulesets/Surge/Basic/foreign.list
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/gfw.txt
- https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/greatfire.txt
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/gfw.txt
- https://raw.githubusercontent.com/Loyalsoldier/surge-rules/release/ruleset/greatfire.txt
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/BlackList/BlackList.list
- https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/source/rule/Proxy/Proxy.list
- https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Global.list
- https://raw.githubusercontent.com/eHpo1/Rules/master/Surge4/Ruleset/Sub/AppleGlobal.list
- https://raw.githubusercontent.com/lhie1/Rules/master/Surge/Surge%203/Provider/Proxy.list
- https://raw.githubusercontent.com/sve1r/Rules-For-Quantumult-X/develop/Rules/Region/Global.list


感谢以上复写规则作者的辛勤付出（排名不分先后）。

## 最后

### 感谢

[@fiiir](https://github.com/fiiir) [@Tartarus2014](https://github.com/Tartarus2014) [@zjcfynn](https://github.com/zjcfynn) [@chenyiping1995](https://github.com/chenyiping1995) 

提供规则数据源及改进建议。

### 其他

请不要对外宣传本项目。