# McWriteMultiRegDWord 写入多双字寄存器

该指令用于 MC 通信写入多个双字寄存器的值。

## 指令格式

McWriteMultiRegDWord(addr, len, McMode, intArray)
McWriteMultiRegDWord(地址, 长度, Mc模式, int数组)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| addr | int | PLC 的寄存器地址 | |
| len | int | 写入 PLC 的寄存器的个数 | |
| McMode | enum | Mc通信模式：3E_ASCII_D（D寄存器3E模式ASCII通信）、3E_Binary_D（D寄存器3E模式二进制通信）、1E_ASCII_D（D寄存器1E模式ASCII通信） | |
| intArray | IntOneArray | 写入的多个 PLC 寄存器的值会放入到该数组变量中 | |

## 应用示例

```estun
McWriteMultiRegDWord(5000,9,"3E_Binary_D",G:IntOneArray0)
```

**逻辑解析**：
执行时通过 MC 协议的 D 寄存器 3E 模式二进制，把全局变量 IntOneArray0 中的值写入 PLC 5000 地址开始的 9 个双字寄存器中。
