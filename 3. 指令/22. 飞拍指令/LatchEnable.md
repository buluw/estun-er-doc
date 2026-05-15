# LatchEnable PSO使能控制

该指令用于设置机器人指定伺服轴 PSO 控制字的使能与禁能。当设置某一轴使能时，伺服才会检测 PSO 比较点。

## 指令格式

LatchEnable(AxisID, EnableSts)
LatchEnable(轴号, 使能状态)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| AxisID | INTC | 需要操作的机器人轴号。 | |
| EnableSts | enum | 需要设置的 PSO 控制字的使能状态。ON：使能；OFF：禁能。 | |

## 应用示例

```estun
LatchEnable(1, "ON")
```

**逻辑解析**：
将机器人 1 轴的 PSO 控制字设置为使能状态。
