# SocketClose 关闭客户端

关闭之前创建过的 Socket 客户端。

## 指令格式
SocketClose (SN, RV)
SocketClose (socket 名称, 操作返回值)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name） | |
| RV | INT 变量 | 操作返回值（Return value），返回值为 **0** 表示成功，**1** 表示失败。 | |
---
## 应用示例
```estun
SocketClose (Socket0, INT0) 
// 关闭 Socket0 通讯
```
