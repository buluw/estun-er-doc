# McConnect MC连接PLC

该指令用于 Mc通信连接 PLC。

## 指令格式

McConnect(IpAddr, PortNum)
McConnect(IP地址, 端口号)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| IpAddr | STRINGC | MC 通信 PLC 的 IP 地址 | |
| PortNum | int | MC 通信的 PLC 的端口号 | |

## 应用示例

```estun
McConnect("192.168.6.200",5000)
```

**逻辑解析**：
连接 PLC，PLC 的 IP 地址是 "192.168.6.200"，端口号是 5000。
