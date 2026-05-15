# SocketCreate 创建客户端连接

创建 Socket 客户端，根据传入的服务器参数建立连接。

## 指令格式
SocketCreate (SN, IP, P, RV)
SocketCreate (socket 名称, IP 地址, 端口号, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| IP | string | IP 地址（IP address），需要连接的服务器 IP 地址。 | |
| P | int | 端口号（Port），需要连接的服务器端口号。 | |
| RV | INT 变量 | 操作返回值（Return value），返回值为 **0** 表示成功，**1** 表示失败。 | |
---
## 应用示例
```estun
SocketCreate (Socket0, "192.168.1.1", 8888, INT0) 
// 创建 Socket0 并连接至 192.168.1.1:8888，结果存入 INT0
```
