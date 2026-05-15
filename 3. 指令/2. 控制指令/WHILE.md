# WHILE 条件循环

该指令用于在满足条件时循环执行子语句块。该指令必须以关键字 **ENDWHILE** 作为循环控制结束。

## 指令格式
WHILE(condition) DO ... ENDWHILE
WHILE(条件表达式) DO ... ENDWHILE
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| condition | bool 表达式 | 循环执行的条件判断表达式 | 无 |
---
## 应用示例
**示例 1：**
```estun
WHILE X < Y DO
    MovJ(P1)
    MovJ(P2)
    X=X+1
ENDWHILE
```

满足 WHILE 条件表达式，执行内部指令行，直到 ENDWHILE 指令行，此指令行触发跳回到 WHILE 指令行，再次判断 WHILE 条件表达式，如此循环，直到 WHILE 条件表达式不满足，跳转到 ENDWHILE 指令下一行执行。
