# MovLOffset 直线偏移指令

直线偏移指令（MovLOffset）是以**指定的参考点**为基准，相对于用户坐标系或工具坐标系进行位移偏移的直线运动指令。

**与 MovLRel 的区别：**

- **MovLRel**：起点必须是"当前位置"，偏移是基于机器人此时所在的点。
- **MovLOffset**：起点由用户**显式指定一个参考位置（RP）**，机器人会从当前位置出发，直线运动到 `参考点 + 偏移量` 计算出的目标点。

## 指令格式

MovLOffset(RP, TP, T, Tool, Coord, [V], [B], [C], [PayLoad], [O], [DO])

MovLOffset(参考点, 偏移点, 目标点, 工具, 坐标系, [速度], [平滑], [姿态], [负载], [姿态控制], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RP | APOS 或 CPOS 变量 | 坐标系下的基准参考点位置。 | 必填 |
| TP | DCPOS 变量 | 相对于参考位置（RP）的位置增量（dx, dy, dz, da, db, dc）。 | 必填 |
| T | enum（COORD / TOOL） | 设置偏移增量参考的坐标系：<br>`COORD`：参考笛卡尔坐标系（基坐标系或用户坐标系）。<br>`TOOL`：参考工具坐标系。 | 必填 |
| Tool | TOOL 变量 | 机器人执行该轨迹时使用的工具参数。 | 必填 |
| Coord | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系。 | 必填 |
| [V] | SPEED 变量 | 指定直线运动速度。SPEED 变量中的 `tcp`（平移）和 `ori`（旋转）分量有效；有外部轴时，`exj_l`、`exj_r` 有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式（无过渡、相对、绝对、缺省）。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡半径/数值。 | 可选，默认 C100 |
| [PayLoad] | PAYLOAD 变量 | 执行该轨迹时使用的工件负载参数。 | 可选，默认使用当前系统设置 |
| [O] | enum（GOVRON / GOVROFF） | `GOVRON`：受全局速度倍率影响。<br>`GOVROFF`：不受全局速度倍率影响。 | 可选，默认 GOVRON |
| [DO] | string | 指令执行完后触发的 IO 操作（如 `SetDO`、`PulseOut` 等）。目前支持：`SetDO`、`SetAO`、`SetSimDO`、`SetSimAO`、`PulseOut`、`PulseSimOut`、`SetDO8421`、`SetSimDO8421`、`SetDIEdge`、`SetSimDIEdge`。 | 可选 |

---

## 应用示例

**示例 1：**

```estun
MovLOffset(P1, DCPOS0, "COORD", nullTool, World, V50, "RELATIVE", C100)
```

**逻辑解析：**

1. 机器人以 **World** 为坐标系，**nullTool** 为工具。
2. 以点 **P1** 为参考基准。
3. 在笛卡尔坐标系下，计算出 P1 加上 **DCPOS0** 增量后的空间新点位置。
4. 机器人从当前点出发，以直线运动方式、V50 的速度、C100 的过渡参数运动到该新点。
