# TranStrToInt 分割转整型数组

TranStrToInt 为整数型字符串数组获取指令，根据传入的分割符将字符串分割，并将分割后的值转换到整型一维数组中，同时返回有效分割数量。

## 指令格式

TranStrToInt(str, delimiter, intArray)

TranStrToInt(待分割字符串, 分割符, 整型数组)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| str | string | 待分割的字符串变量或常量 | — |
| delimiter | string | 分割符变量或常量 | — |
| intArray | IntOneArray | 以数组形式存储分割后的整型变量 | — |

**函数返回值**：成功分割并保存到数组中的个数，int 型变量。
