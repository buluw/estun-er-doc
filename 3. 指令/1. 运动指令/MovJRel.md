# MovJRel 关节插补相对偏移

MovJRel 为关节插补相对偏移指令。该指令以**当前机器人位置**或**上一步运动指令的目标位置**为起点，按指定的增量进行相对位移移动。

## 注意事项

与 `MovJ` 指令不同，`MovJRel` 的目标值无法通过示教直接获取。用户需事先在变量列表中新建**关节相对位置类型（DAPOS）**的变量。

## 指令格式

MovJRel(P, [V], [B], [C], [PayLoad], [DO])

MovJRel(相对增量点, [速度], [平滑], [姿态], [负载], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| P | DAPOS 变量 | 执行该指令时机器人要移动的位置增量（各关节轴的偏移值）。 | 必填 |
| [V] | SPEED 变量 | 用于指定机器人执行时的速度。SPEED 变量中的 `per` 分量有效；有外部轴时，`exj_l`、`exj_r` 分量有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式：<br>`FINE`：无过渡。<br>`RELATIVE`：相对过渡。<br>`ABSOLUTE`：绝对过渡。<br>`DEFAULT`：缺省类型。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡值。 | 可选，默认 C100 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的工件负载参数。 | 可选，默认使用当前系统中设置的负载参数 |
| [DO] | string | 机器人执行完该指令后，可触发的 IO 操作（如 `SetDO`、`PulseOut` 等）。目前支持的 IO 指令包括：`SetDO`、`SetAO`、`SetSimDO`、`SetSimAO`、`PulseOut`、`PulseSimOut`、`SetDO8421`、`SetSimDO8421`、`SetDIEdge`、`SetSimDIEdge`。 | 可选 |

---

## 应用示例

**示例 1：**



```estun
MovJ (P1, V50, "RELATIVE", C100)
MovJRel (DAPOS0, V50, "RELATIVE", C100)
```

机器人以 50 的速度运动到 P1 点，随后在 P1 点的基础上，使用 C100 中的过渡参数相对运动 `DAPOS0` 中的位移量，到达目标点。

**示例 2：**



```estun
MovJRel (DAPOS0, V50, "RELATIVE", C100)
```

机器人以 50 的速度，从**当前所在点**直接相对运动 `DAPOS0` 中的位移量。
