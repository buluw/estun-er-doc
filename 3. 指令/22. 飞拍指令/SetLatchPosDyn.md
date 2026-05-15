# SetLatchPosDyn 动态设置比较点

该指令用于动态设置 PSO 比较点。

## 指令格式

SetLatchPosDyn(InitPos, TrigInterval, StartPosId)
SetLatchPosDyn(起始位置, 触发间距, 拍照开始点序号)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| InitPos | real | 起始位置。 | |
| TrigInterval | real | 触发间距。 | |
| StartPosId | int | 拍照开始点的序号。 | |

## 应用示例

```estun
SetLatchPosDyn(0, 1, 1)
```

**逻辑解析**：
设置机器人起始位置为 0，触发间距为 1，从 1 号点开始拍照。
