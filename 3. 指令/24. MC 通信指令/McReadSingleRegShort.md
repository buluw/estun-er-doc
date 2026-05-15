# McReadSingleRegShort 读取单字寄存器

该指令用于 MC 通信读取单个单字寄存器的值。

## 指令格式

McReadSingleRegShort(addr, McMode, intValue)

McReadSingleRegShort(地址, Mc 模式, int 值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| addr | int | PLC 的寄存器地址 | |
| McMode | enum | Mc 通信模式：3E_ASCII_D（D 寄存器 3E 模式 ASCII 通信）、3E_ASCII_M（M 寄存器 3E 模式 ASCII 通信）、3E_Binary_D（D 寄存器 3E 模式二进制通信）、3E_Binary_M（M 寄存器 3E 模式二进制通信）、1E_ASCII_D（D 寄存器 1E 模式 ASCII 通信）、1E_ASCII_M（M 寄存器 1E 模式 ASCII 通信）| |
| intValue | INT | 读取的 PLC 寄存器的值会放入到该变量中 | |

## 应用示例

```estun
McReadSingleRegShort(5000,"3E_Binary_D",L:INT1)
```

**逻辑解析**：

执行时通过 MC 协议的 D 寄存器 3E 模式二进制读取 PLC 5000 地址的寄存器的值，并把值放入到程序变量 INT1 中。
