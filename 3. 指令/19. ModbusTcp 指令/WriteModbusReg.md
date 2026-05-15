# WriteModbusReg 设置Modbus寄存器

该指令用于设置指定 Modbus 寄存器的值。

## 指令格式

WriteModbusReg(RegisterID, RegisterValue)
WriteModbusReg(目标寄存器ID, 目标寄存器值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RegisterID | int | 想要修改的寄存器 ID 号。 | 取值范围为 101~1500 |
| RegisterValue | INT 变量 | 想要修改的寄存器值。 | |

## 应用示例

```estun
INT0.value = 100
WriteModbusReg(101, INT0) // 将 101 寄存器的值改为 100
```

**逻辑解析**：
先将 INT0 的值设置为 100，再将 INT0 的值写入 ID 为 101 的 Modbus 寄存器中。
