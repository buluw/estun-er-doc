# McIsConnect 获取MC连接状态

该指令用于获得当前 MC 通信的连接状态。

## 指令格式

McIsConnect(IsCon)
McIsConnect(是否连接)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| IsCon | INT | 如果连接存在 IsCon 变量为 1，如果连接断开 IsCon 变量为 0 | |

## 应用示例

```estun
McIsConnect(L:INT0)
```

**逻辑解析**：
执行时，如果 MC 通信连接存在，程序变量 INT0 被设置为 1；否则程序变量 INT0 被设置为 0。
