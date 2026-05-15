# GOTO 跳转

该指令用于跳转到程序的不同部分。跳转目标通过 LABEL 指令定义。不允许从外部跳转进入 WHILE 循环程序块或者 IF 程序块内部。

## 指令格式
GOTO(LabelName)
GOTO(标签名称)
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| LabelName | label | 由 LABEL 指令定义的跳转目标标签 | 无 |
---
## 应用示例
**示例 1：**
```estun
label1:
MovJ(P0)
GOTO label1
//LABEL 指令设置标签 label1，GOTO 指令执行时，跳转到行"label1："
```
