# MovLOffsetC 直线偏移指令（常量版）

直线偏移运动指令（常量版）。该指令的功能与 `MovLOffset` 一致，唯一的区别在于：`MovLOffset` 使用 `DCPOS` 类型变量作为增量，而 **MovLOffsetC** 直接使用 **X、Y、Z、A 四个实数（real）常量**作为位置增量。这使得开发者可以直接在指令中输入具体的数值，而无需预先定义位置变量。

## 指令格式

MovLOffsetC(RP, TPX, TPY, TPZ, TPA, T, Tool, Coord, [V], [B], [C], [PayLoad], O, [DO])

MovLOffsetC(参考点, X偏移点, Y偏移点, Z偏移点, A偏移点, 目标点, 工具, 坐标系, [速度], [平滑], [姿态], [负载], 姿态控制, [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RP | APOS 或 CPOS 变量 | 坐标系下的基准参考点位置。 | 必填 |
| TPX / TPY / TPZ / TPA | real 常量 | 执行指令时机器人在对应方向（X、Y、Z、A）上要移动的位置偏移数值。 | 必填 |
| T | enum（COORD / TOOL） | `COORD`：参考用户坐标系进行偏移。<br>`TOOL`：参考工具坐标系进行偏移。 | 必填 |
| Tool | TOOL 变量 | 机器人执行该轨迹时使用的工具参数。 | 必填 |
| Coord | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系。 | 必填 |
| [V] | SPEED 变量 | 指定机器人执行时的速度。在偏移指令中，通常 SPEED 变量中的 `per` 分量有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式（无过渡、相对、绝对、缺省）。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡半径或数值。 | 可选，默认 C100 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的负载参数。 | 可选，默认使用当前系统中设置的负载 |
| O | enum（GOVRON / GOVROFF） | 设置当前指令轨迹是否受全局速度倍率（Override）影响。 | 可选，默认 GOVRON |
| [DO] | string | 指令执行完后触发的 IO 操作（如 `SetDO`、`PulseOut` 等）。目前支持：`SetDO`、`SetAO`、`SetSimDO`、`SetSimAO`、`PulseOut`、`PulseSimOut`、`SetDO8421`、`SetSimDO8421`、`SetDIEdge`、`SetSimDIEdge`。 | 可选 |
