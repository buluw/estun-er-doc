# MovJHand 关节左右手运动

关节左右手运动指令。该运动指令用于以指定的左右手系进行关节运动（point to point）到终点位置，**仅适用于 SCARA 机型**。

## 与 Hand 指令的区别

- **Hand 指令**：属于**设置指令**。运行后，后续所有运动指令（如 `MovJ`）均以其设置的手系运动。
- **MovJHand 指令**：属于**运动指令**。仅在该条指令执行时以指定的手系进行 PTP 运动。
- **优先级**：若 `Hand(Lefty)` 指令后紧跟 `MovJHand(P1, Righty)`，则该条 `MovJHand` 将以**右手系**运动。

## 指令格式

MovJHand(P, Scope, [V], [B], [C], [Tool], [Coord], [PayLoad], [DO])

MovJHand(目标点, 作用域, [速度], [平滑], [姿态], [工具], [坐标系], [负载], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| P | APOS 或 CPOS 变量 | 坐标系下的目标点位置。 | 必填 |
| Scope | enum（Lefty / Righty / Change） | 设置机器人的左右手类型：<br>`Lefty`：左手设置。<br>`Righty`：右手设置。<br>`Change`：与点位 `mode` 手系相反。 | 必填 |
| [V] | SPEED 变量 | 用于指定机器人执行时的速度。包括末端平移、旋转及外部轴速度。SPEED 变量中的 `per` 分量有效；有外部轴时，`exj_l`、`exj_r` 分量有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式（无过渡、相对、绝对或缺省）。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡值。 | 可选，默认 C100 |
| [PayLoad] | PAYLOAD 变量 | 执行该轨迹时使用的工件负载参数。 | 可选，默认使用当前系统中设置的负载参数 |
| [DO] | string | 指令执行完后触发的 IO 操作（如 `SetDO`、`PulseOut` 等）。 | 可选 |

---

## 应用示例

**示例 1：**

```estun
MovJHand(P1, "Lefty")
```

机器人以左手系运动到 P1 点。
