# PalletReset 重置垛体信息

重置垛体信息。当码垛作业因故中断时，可使用此指令将工件计数还原到特定状态。

## 指令格式
PalletReset (PalletName, actPart)
PalletReset (码垛名, 垛体已有工件数)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| PalletName | PALLET | 当前垛体信息变量。 |  |
| actPart | int | 设置当前已放置的工件数量。范围：[0, 垛体最大工件数]。 |  |
---
## 应用示例
**示例 1：**
```estun
PalletReset (Pallet0, 8)
// 将 Pallet0 的计数重置为 8，机器人将从第 9 个位置开始后续码放。
```
