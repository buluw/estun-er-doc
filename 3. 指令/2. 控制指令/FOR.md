# FOR 循环

该指令用于在满足条件时循环执行子语句块。必须以关键字 **ENDFOR** 作为循环控制结束。

## 指令格式
FOR(init, condition, increment) DO ... ENDFOR
FOR(初始化, 条件, 增量) DO ... ENDFOR
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| init | 赋值表达式 | 循环变量的初始值设定 | 无 |
| condition | bool 表达式 | 循环继续执行的条件判断 | 无 |
| increment | 赋值表达式 | 每次循环结束时执行的增量运算 | 无 |
---
## 应用示例
**示例 1：**
```estun
FOR INT0.value = 0, INT0.value < 5, INT0.value = INT0.value + 1 DO
    MovJ(P1)
    MovJ(P2)
ENDFOR
```

执行 FOR 指令时，INT0.value 初始化值为 0，当 INT0.value<5 时，条件满足，执行 MovJ(P1)、MovJ(P2)，执行到 ENDFOR 时，执行 INT0.value = INT0.value + 1。再次进行 INT0.value<5 的判断，重复上述操作。待 INT0.value<5 不满足条件时，跳转到 ENDFOR 指令下一行执行。
