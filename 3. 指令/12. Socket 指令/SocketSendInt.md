# SocketSendInt 发送整数数组

向已经建立连接的服务器端发送 int 数组。

## 指令格式
SocketSendInt (SN, IA, RV)
SocketSendInt (socket 名称, 发送的 int 数组, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| IA | int 数组 | 发送的 int 数组数据（Int array） | |
| RV | INT 变量 | 操作返回值（Return value） | |
---
## 应用示例
```estun
SocketSendInt (Socket0, IntOneArray0, INT0) 
// 发送 int 数组 IntOneArray0 到服务器。
```
