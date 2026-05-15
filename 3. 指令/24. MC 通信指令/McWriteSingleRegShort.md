# McWriteSingleRegShort 写入单字寄存器

该指令用于 MC 通信写入单个单字寄存器的值。

## 指令格式

McWriteSingleRegShort(addr, McMode, intValue)
McWriteSingleRegShort(地址, Mc模式, int值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| addr | int | PLC 的寄存器地址 | |
| McMode | enum | Mc通信模式：3E_ASCII_D（D寄存器3E模式ASCII通信）、3E_ASCII_M（M寄存器3E模式ASCII通信）、3E_Binary_D（D寄存器3E模式二进制通信）、3E_Binary_M（M寄存器3E模式二进制通信）、1E_ASCII_D（D寄存器1E模式ASCII通信）、1E_ASCII_M（M寄存器1E模式ASCII通信） | |
| intValue | INT | 写入的 PLC 寄存器的值会放入到该变量中 | |

## 应用示例

```estun
McWriteSingleRegShort(5000,"3E_Binary_D",L:INT1)
```

**逻辑解析**：
执行时通过 MC 协议的 D 寄存器 3E 模式二进制，把程序变量 INT1 中的值写入 PLC 5000 地址的寄存器。
