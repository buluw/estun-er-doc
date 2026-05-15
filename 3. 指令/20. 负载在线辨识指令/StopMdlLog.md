# StopMdlLog 结束采集并保存

该指令用于结束机器人负载辨识运动数据的采集，并自动保存数据。

**备注**：该指令必须与 StartMdlLog 搭配使用。

## 指令格式

StopMdlLog()
StopMdlLog()

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| 无 | | | |

## 应用示例

```estun
StartMdlLog(WithLoad)
MovJ(P0)
MovJ(P1)
MovJ(P2)
StopMdlLog()
```

**逻辑解析**：
与 StartMdlLog 搭配使用，结束数据采集并自动保存已采集的运动数据。
