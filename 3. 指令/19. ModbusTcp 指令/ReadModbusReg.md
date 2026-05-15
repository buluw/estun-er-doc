# ReadModbusReg 读取Modbus寄存器

该指令用于读取指定 Modbus 寄存器的值。

## 指令格式

ReadModbusReg(RegisterID, RegisterValue)
ReadModbusReg(目标寄存器ID, 目标寄存器值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RegisterID | int | 想要读取的寄存器 ID 号。 | 取值范围为 101~1500 |
| RegisterValue | INT 变量 | 返回读取后的寄存器值。 | |

## 应用示例

```estun
ReadModbusReg(101, INT0) // 读取 101 寄存器的值
```

**逻辑解析**：
读取 ID 为 101 的 Modbus 寄存器的值，并将结果存储到 INT0 变量中。
