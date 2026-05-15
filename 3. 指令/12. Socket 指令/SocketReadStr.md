# SocketReadStr 读取字符串

读取服务器端发来的原始字符串，并以 string 变量的形式存储。

## 指令格式
SocketReadStr (SN, SD, DT, RV)
SocketReadStr (socket 名称, 实际读取的数据, 检测时间, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| SD | STRING 变量 | 实际读取的数据（String data） | |
| DT | int | 检测时间（Detection time），等待数据接收的等待时间（ms），超时报警。 | |
| RV | INT 变量 | 操作返回值（Return value） | |
---
## 应用示例
```estun
SocketReadStr (Socket0, STRING0, 100, INT0) 
// 在 100ms 内读取字符串放到变量 STRING0 中。
```
