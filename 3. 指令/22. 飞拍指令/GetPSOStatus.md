# GetPSOStatus 获取PSO状态

该指令用于获取机器人指定伺服轴 PSO 状态字的值。

## 指令格式

GetPSOStatus(AxisID, Val)
GetPSOStatus(轴号, PSO状态值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| AxisID | INTC | 需要操作的机器人轴号。 | |
| Val | INT | PSO 状态字的值。 | |

## 应用示例

```estun
GetPSOStatus(1, INT0)
```

**逻辑解析**：
获取机器人 1 轴的 PSO 状态字的值，结果存入 INT0 变量中。
