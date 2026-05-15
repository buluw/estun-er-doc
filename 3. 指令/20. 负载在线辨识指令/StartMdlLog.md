# StartMdlLog 采集负载辨识数据

该指令用于采集机器人负载辨识所需的机器人运动数据。

## 指令格式

StartMdlLog(dataType)
StartMdlLog(数据保存类型)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| dataType | enum(Robot/WithLoad/ValidData) | 数据保存类型。 | Robot：采集机器人本体即未安装负载时的运动数据；WithLoad：采集机器人法兰端安装有负载时的运动数据；ValidData：用于需要验证模型准确度，采集机器人装有负载的运动数据。 |

**备注**：
1. "WithLoad"类型数据为必须采集，"Robot"、"ValidData"类型数据可以选择性采集。
2. 使用"Robot"类型数据进行辨识，有助于改善负载辨识的准确度，但该项会延长辨识计算用时。
3. 使用"ValidData"类型数据，可以在辨识计算的同时验证辨识的模型准确度，但该项会延长辨识计算用时。
4. 负载辨识数据采集，选择保存数据类型"Robot"、"WithLoad"时，辨识轨迹所用运动指令需为 MovJ，而类型"ValidData"验证轨迹运动指令可使用 MovJ、MovL、MovC 等组合指令。

## 应用示例

```estun
StartMdlLog(WithLoad)
MovJ(P0)
MovJ(P1)
MovJ(P2)
StopMdlLog()
```

**逻辑解析**：
开始采集安装负载后的机器人运动数据，执行三段 MovJ 运动后结束数据采集并自动保存。
