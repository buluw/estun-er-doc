# MovJOffsetC 关节空间偏移运动指令（常量版）

关节空间偏移运动指令（常量版）。该指令的功能与 `MovJOffset` 一致，唯一的区别在于：`MovJOffset` 使用 `DCPOS` 类型变量作为增量，而 **MovJOffsetC** 直接使用 **X、Y、Z、A 四个实数（real）常量** 作为位置增量，方便在程序中直接指定具体的偏移数值。

## 指令格式

MovJOffsetC(RP, TPX, TPY, TPZ, TPA, T, Tool, Coord, [V], [B], [C], [PayLoad], [DO])

MovJOffsetC(参考点, X偏移点, Y偏移点, Z偏移点, A偏移点, 目标点, 工具, 坐标系, [速度], [平滑], [姿态], [负载], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RP | APOS 或 CPOS 变量 | 坐标系下的参考基准点位置。 | 必填 |
| TPX / TPY / TPZ / TPA | real 常量 | 执行指令时机器人在对应方向（X、Y、Z、A）上要移动的位置增量数值。 | 必填 |
| T | enum（COORD / TOOL） | `COORD`：参考用户坐标系。<br>`TOOL`：参考工具坐标系。 | 必填 |
| Tool | TOOL 变量 | 机器人执行该轨迹时使用的工具参数。 | 必填 |
| Coord | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系。 | 必填 |
| [V] | SPEED 变量 | 指定机器人执行时的速度。在关节空间偏移指令中，仅 SPEED 变量中的 `per` 分量有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式（无过渡、相对、绝对、缺省）。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡值。 | 可选，默认 C100 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的工件负载参数。 | 可选，默认使用当前系统中设置的负载参数 |
| [DO] | string | 机器人执行完该指令后可触发的 IO 操作（如 `SetDO`、`PulseOut` 等）。目前支持：`SetDO`、`SetAO`、`SetSimDO`、`SetSimAO`、`PulseOut`、`PulseSimOut`、`SetDO8421`、`SetSimDO8421`、`SetDIEdge`、`SetSimDIEdge`。 | 可选 |

## 应用示例

**示例 1：**



```estun
MovJOffsetC(P1, P2, P3, P4, P5, P6, 1, 0, 50, 0, 1, 1, DO1)
```

系统综合分析 **P2~P5** 相对 **P1** 的各维度偏差，计算出最终坐标赋予 **P6**，并以 50% 的关节速度移动至 **P6**。
