# SocketReadInt 读取整数数组

读取服务器端发来的逗号分隔字符串，并解析为 **整数（Int）** 数组存储。

## 指令格式
SocketReadInt (SN, DN, ID, DT, RV)
SocketReadInt (socket 名称, 数据个数, 实际读取的数据, 检测时间, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| DN | int | 数据个数（Data num） | |
| ID | IntOneArray 变量 | 实际读取的数据（Int data） | |
| DT | int | 检测时间（Detection time），等待服务器发送数据的等待时间（ms），超时报警。 | |
| RV | INT 变量 | 操作返回值（Return value） | |
---
## 应用示例
```estun
SocketReadInt (Socket0, 5, IntOneArray0, 100, INT0) 
// 在 100ms 内，读取 5 个整数存放到变量 IntOneArray0 中。
```
