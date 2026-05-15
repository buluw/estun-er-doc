# AxisLock 锁定单轴坐标

对单个轴进行锁定，锁定后该轴坐标在后续运动中保持不变。

## 指令格式
AxisLock(DestAxis, EnableSts)
AxisLock(目标轴号, 使能状态)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| DestAxis | int | 目标轴号（Target Axis number），需要锁定的附加轴号。 | |
| EnableSts | enum (ON/OFF) | 使能状态（Enable Status），ON 锁定，OFF 解锁。 | |

---
## 应用示例
**示例 1：**
```estun
AxisLock (7, "ON")
//将第 7 轴进行锁定状态。
```
