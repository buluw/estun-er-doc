# SocketSendStr 发送字符串

向已经建立连接的服务器端发送字符串。

## 指令格式
SocketSendStr (SN, SD, RV)
SocketSendStr (socket 名称, 发送的数据, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称 | |
| SD | string 常量 或 STRING 变量 | 发送的数据（Send data） | |
| RV | INT 变量 | 操作返回值（Return value） | |
---
## 应用示例
```estun
SocketSendStr (Socket0, "test string", INT0) 
// 发送字符串 "test string" 到服务器
```
