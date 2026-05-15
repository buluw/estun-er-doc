# MovLSyncQuit 退出同步直线运动

该指令为退出传送带同步直线运动指令，通过该指令可以使机器人 TCP 点以设定的速度退出与传送带的同步运动，并使用直线运动的方式运动到目标位置。若运动的起止姿态不同，则运行过程中姿态随位置同步地旋转到终点的姿态。与 MovJ 相同，在执行完该指令时可以附加进行 IO 操作。

## 指令格式

MovLSyncQuit(P, [V], [B], [C], [Tool], Coord, [PayLoad], [QuitEnable], [DO])

MovLSyncQuit(目标点, [速度], [过渡类型], [过渡值], [工具], 坐标系, [负载], [退出使能], [端口输出])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| P | APOS / CPOS 变量 | 坐标系下的目标点位置 | 必填 |
| [V] | SPEED 变量 | 指定机器人末端的平移速度、旋转速度以及外部轴的移动速度。SPEED 变量中的 tcp、ori 分量有效，有外部轴时 exj_l、exj_r 分量有效 | 可选，默认 V4000 |
| [B] | enum | 机器人逼近终点时的过渡方式：<br>FINE—无过渡<br>RELATIVE—相对过渡<br>ABSOLUTE—绝对过渡<br>DEFAULT—缺省类型 | 可选，默认 FINE |
| [C] | ZONE 变量 | 机器人逼近终点时的过渡值 | 可选，默认 C100 |
| [Tool] | TOOL 变量 | 机器人执行该轨迹时使用的工具参数 | 可选，默认当前系统工具参数 |
| Coord | USERCOOR 变量 | 机器人执行该轨迹时使用的用户坐标系 | 必填 |
| [PayLoad] | PAYLOAD 变量 | 机器人执行该轨迹时使用的工件负载参数 | 可选，默认当前系统负载参数 |
| [QuitEnable] | enum | 执行完本次跟随轨迹后是否退出跟随：<br>ENABLE—退出跟随<br>DISENABLE—不退出跟随，直接参与下一次的跟随运动<br>DEFAULT—缺省类型 | 可选，默认 DISENABLE |
| [DO] | string | 运动完成后触发的 IO 操作。支持：SetDO、SetAO、SetSimDO、SetSimAO、PulseOut、PulseSimOut、SetDO8421、SetSimDO8421、SetDIEdge、SetSimDIEdge | 可选，默认 NULL（无操作）|
