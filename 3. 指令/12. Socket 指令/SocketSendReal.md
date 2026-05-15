# SocketSendReal 发送实数数组

向已经建立连接的服务器端发送 real 数组。

## 指令格式
SocketSendReal (SN, RA, RV)
SocketSendReal (socket 名称, 发送的 real 数组, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| RA | real 数组 | 发送的 real 数组数据（Real array） | |
| RV | INT 变量 | 操作返回值（Return value） | |
---
## 应用示例
```estun
SocketSendReal (Socket0, RealOneArray0, INT0) 
// 发送 real 数组 RealOneArray0 到服务器。
```
