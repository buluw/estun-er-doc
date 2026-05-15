# McReadMultiRegDWord 读取多双字寄存器

该指令用于 MC 通信读取多个双字寄存器的值。

## 指令格式

McReadMultiRegDWord(addr, len, McMode, intArray)

McReadMultiRegDWord(地址, 长度, Mc 模式, int 数组)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| addr | int | PLC 的寄存器地址 | |
| len | int | 读 PLC 的寄存器的个数 | |
| McMode | enum | Mc 通信模式：3E_ASCII_D（D 寄存器 3E 模式 ASCII 通信）、3E_Binary_D（D 寄存器 3E 模式二进制通信）、1E_ASCII_D（D 寄存器 1E 模式 ASCII 通信）| |
| intArray | IntOneArray | 读取的多个 PLC 寄存器的值会放入到该数组变量中 | |

## 应用示例

```estun
McReadMultiRegDWord(5000,9,"3E_Binary_D",G:IntOneArray0)
```

**逻辑解析**：

执行时通过 MC 协议的 D 寄存器 3E 模式二进制读取 PLC 5000 地址开始的 9 个双字寄存器的值，并把值放入到全局变量 IntOneArray0 中。
