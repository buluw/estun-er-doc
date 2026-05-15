# SWITCH 分支选择

该指令用于多分支选择控制。SWITCH 语句以 **ENDSWITCH** 为结尾，与 CASE、BREAK、DEFAULT 等语句配合使用。SWITCH 后面的变量与 CASE 值进行比较，执行与之匹配的 CASE 语句块，如果没有匹配的 CASE，则执行 DEFAULT 语句块。

## 指令格式
SWITCH(Var) ... CASE Value: ... BREAK ... DEFAULT: ... ENDSWITCH
SWITCH(变量) ... CASE(常量): ... BREAK ... DEFAULT: ... ENDSWITCH
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Var | int / string | 用于与 CASE 值比较的变量 | 无 |
| CASE Value | int / string 常量 | 与 SWITCH 变量比较的常量值，类型必须一致 | 无 |
| BREAK | - | 跳出 SWITCH 语句，执行 ENDSWITCH 下一行 | 可选 |
| DEFAULT | - | 当所有 CASE 均不匹配时执行的默认语句块 | 可选，位于 SWITCH 最下方 |
---
## 应用示例
**示例 1：**
```estun
SWITCH Var
    CASE 1:
        MovJ{P=t_l.P0}
        BREAK
    CASE 2:
        MovJ{P=t_l.P0}
        BREAK
    DEFAULT:
        MovJ{P=t_l.P0}
        BREAK
ENDSWITCH
```

**说明：**
- SWITCH 后面变量支持 int 和 string 类型
- 如果满足条件的 CASE 后面没有 BREAK，将会执行后续的 CASE 语句且不会判断 CASE 的值，直到遇到 BREAK 或者 ENDSWITCH 结束运行
- DEFAULT 指令必须位于所有 CASE 语句之后
