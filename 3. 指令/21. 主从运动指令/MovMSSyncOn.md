# MovMSSyncOn 主从协同运动

该指令用于使主从机器人进入到协同状态，并以设定的速度运动到目标位置。与 MovJ 指令类似，在执行完该指令时可以附加进行 IO 操作。

## 指令格式

MovMSSyncOn([MSGroup], SyncId, P, [V], [Tool], [Coord], [PayLoad], [DO])
MovMSSyncOn([主从组], 协同标识, 目标位置, [目标速度], [工具参数], [坐标系参数], [工件负载], [IO操作])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| [MSGroup] | enum | 机器人协同运动时的主从组参数，用于在多机协同过程中区分所启用的机器人协同方式。详见下方 MSGroup 取值说明。 | DEFAULT（仅限从机器人选择） |
| SyncId | SYNCID 变量 | 机器人协同标识 ID 号，用于本机与协同机器人之间进行协同校验，主从机器人 ID 一致时才为有效协同。 | |
| P | APOS 或 CPOS 变量 | 坐标系下的目标点位置。 | |
| [V] | SPEED 变量 | 指定机器人执行 MovMSSyncOn 指令时的速度，包括机器人末端的平移速度、旋转速度以及外部轴的移动速度等。SPEED 变量中的 tcp、ori 分量有效；有外部轴时，exj_l、exj_r 分量有效。 | V4000 |
| [Tool] | TOOL 变量 | 机器人执行该轨迹时使用的工具参数。 | 当前系统中设置的工具参数 |
| [Coord] | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系。 | 当前系统中设置的坐标系参数 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的工件负载参数。 | 当前系统中设置的负载参数 |
| [DO] | string | 机器人执行完该指令后可触发的 IO 操作。支持 SetDO、SetAO、SetSimDO、SetSimAO、PulseOut、PulseSimOut、SetDO8421、SetSimDO8421、SetDIEdge、SetSimDIEdge 等指令。 | NULL（无任何操作） |

> **MSGroup 取值说明**：
> - MSGroup1：第一组主从组参数，仅限主机器人选择
> - MSGroup2：第二组主从组参数，仅限主机器人选择
> - MSGroup3：第三组主从组参数，仅限主机器人选择
> - MSGroup4：第四组主从组参数，仅限主机器人选择
> - MSGroup5：第五组主从组参数，仅限主机器人选择
> - MSGroup6：第六组主从组参数，仅限主机器人选择
> - MSGroup7：第七组主从组参数，仅限主机器人选择
> - DEFAULT：缺省类型，仅限从机器人选择
