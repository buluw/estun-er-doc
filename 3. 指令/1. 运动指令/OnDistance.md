# OnDistance 距离触发

距离触发指令（OnDistance）用于在机器人执行直线（MovL）或圆弧（MovC/MovCircle）轨迹运动时，在**不打断过渡（Blend）**的前提下，根据相对于起点或终点的移动距离来触发特定的操作（如 IO 输出、变量赋值等）。

## 指令格式

OnDistance(Type, Dist, TimeMs, DO, [Action])

OnDistance(触发类型, 距离值, 时间偏移, 端口号, [动作])

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Type | enum（FromBegin / FromEnd） | 设置距离参考的基准点：<br>`FromBegin`：从当前轨迹的**起点**处开始计算距离。<br>`FromEnd`：从当前轨迹的**终点**处反向计算距离。 | 必填 |
| Dist | real 常量 或 REAL 变量 | 触发动作执行所需的相对位移距离（单位：mm）。 | 必填 |
| TimeMs | int 常量 或 INT 变量 | 满足距离条件后的延迟执行时间（单位：ms）。可为**负数**，负数表示在到达触发位置之前提前执行。 | 必填 |
| DO / [Action] | string / 指令内容 | 满足触发距离和延时条件后，控制器执行的动作。支持的操作包括：**IO 指令**（如 `SetDO`、`SetAO`、`PulseOut` 等）和**赋值指令**（对变量进行数值更新）。 | 必填 |

---

## 工作原理

1. **FromBegin 模式**：机器人从轨迹起点出发，运行距离达到 `Dist` 后，进入时间等待阶段，经过 `TimeMs` 时间后执行 `DO` 操作。
2. **FromEnd 模式**：控制器预测机器人距离轨迹终点还剩 `Dist` 距离时，进入时间等待阶段，经过 `TimeMs` 时间后执行 `DO` 操作。

---

## 应用示例

**示例 1：距起点触发**

在从 P1 运动到 P2 的轨迹上，当距离 P1 点 200mm 时，延时 100ms 将 0 号数字输出口置为高电平。

```estun
MovL (P1, V50, "RELATIVE", C0)
OnDistance("FromBegin", 200, 100) DO SetDO(DO0, 1);
MovL (P2, V50, "RELATIVE", C0)
```

**示例 2：距终点触发**

在从 P1 运动到 P2 的轨迹上，当距离终点 P2 还有 200mm 时，延时 100ms 执行 IO 操作。

```estun
MovL (P1, V50, "RELATIVE", C0)
OnDistance ("FromEnd", 200, 100) DO SetDO(DO0, 1);
MovL (P2, V50, "RELATIVE", C0)
```

![](/images/ondistance-trigger.png)
