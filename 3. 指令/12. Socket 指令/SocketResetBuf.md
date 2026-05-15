# SocketResetBuf 复位缓存

复位本地缓存的字符串。在执行读取指令前执行，避免读取错位或获取旧数据。

## 指令格式
SocketResetBuf (SN)
SocketResetBuf (socket 名称)
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SN | Socket 变量 | socket 名称（Socket name），`SocketCreate` 创建的 Socket。 | |
---
## 应用示例
```estun
SocketResetBuf (Socket0) 
// 复位 Socket0 中缓存的通讯数据。
```
