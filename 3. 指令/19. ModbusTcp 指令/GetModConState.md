# GetModConState 获取连接状态

该指令用于获取机器人与外界使用 modbus 通讯的连接状态。

## 指令格式

GetModConState(IsConnected)
GetModConState(连接状态)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| IsConnected | BOOL 变量 | 返回当前的连接状态。 | |

## 应用示例

```estun
GetModConState(BOOL0)
```

**逻辑解析**：
获取当前 Modbus 通讯连接状态，结果保存至 BOOL0 变量中。
