# MovJ 关节进行点到点
该指令表示机器人各个关节进行点到点的运动（point to point），机器人的末端轨迹为不规则的曲线，并且在该指令运行结束时可进行 IO 指令的操作。

## 指令格式

MovJ(P, [V], [B], [C], [Tool], [Coord], [PayLoad], [O], [CTV], [DO])

MovJ(目标点, [速度], [平滑], [姿态], [工具], [坐标系], [负载], [姿态控制], [连续轨迹速度], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| P | APOS 或 CPOS 变量 | 坐标系下的目标点位置。 | 必填 |
| [V] | SPEED 变量 | 用于指定机器人执行 MovJ 时的速度，包括机器人末端的平移速度、旋转速度以及外部轴的移动速度等。SPEED 变量中的 `per` 分量有效；有外部轴时，`exj_l`、`exj_r` 分量有效。 | 可选，默认 V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式：<br>`FINE`：无过渡。<br>`RELATIVE`：相对过渡。<br>`ABSOLUTE`：绝对过渡。<br>`DEFAULT`：缺省类型。 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡值。 | 可选，默认 C100 |
| [Tool] | TOOL 变量 | 机器人执行该轨迹时使用的工具参数。 | 可选，默认使用当前系统中设置的工具参数 |
| [Coord] | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系。 | 可选，默认使用当前系统中设置的坐标系参数 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的工件负载参数。 | 可选，默认使用当前系统中设置的负载参数 |
| [O] | enum（GOVRON / GOVROFF） | `GOVRON`：本段轨迹受全局速度倍率影响。<br>`GOVROFF`：本段轨迹不受全局速度倍率影响。 | 可选，默认 GOVRON |
| [CTV] | CTV 变量 | 机器人无限旋转轴与无限旋转速度。 | 可选，默认不开启无限旋转 |
| [DO] | string | 机器人执行完该指令后，可触发的 IO 操作：<br>`NULL`：无任何操作。<br>`IO 指令`：执行 IO 操作，目前支持的 IO 指令有 `SetDO`、`SetAO`、`SetSimDO`、`SetSimAO`、`PulseOut`、`PulseSimOut`、`SetDO8421`、`SetSimDO8421`、`SetDIEdge`、`SetSimDIEdge`。 | 可选 |

---

## 应用示例

**示例 1：**

`MovJ (P1, V50, "RELATIVE", C100)`

机器人以 V50 的速度运行到 P1 点，并与下一轨迹存在过渡，过渡值为 C100。

**示例 2：**

`MovJ (P2, V50, "RELATIVE", C0) Do SetDO(DO0,0)`

机器人以 V50 的速度运行到 P2 点，且无过渡，运行至 P2 点时，设置 DO0 变量对应 IO 端口为 0。

**示例 3：**



```estun
MovJ (P1, V50, "RELATIVE", C100, nullTool, World)
MovJ (P2, V50, "RELATIVE", C100, Tool1, UserCoord1)
```

机器人以 50 的速度运动到 P1 点，其后由于 P2 点坐标系与 P1 点不一致，故在运动到 P2 前会先自动将工具参数切换成 Tool1，用户坐标系切换成 UserCoord1，其后运动到 P2。由于自动切换了坐标系，从 P1 运动到 P2 的过程中无过渡效果。

**示例 4：**



```estun
MovJ (P1, V50, "RELATIVE", C100, Tool1, UserCoord1)
MovL (P2, V50, "RELATIVE", C100, Tool1)
```

机器人以 50 的速度运动到 P1 点，其后由于 P2 点坐标系与 P1 点一致，无需切换坐标系，机器人会以过渡的方式运行到 P2。

![](/images/movj-examples.png)
