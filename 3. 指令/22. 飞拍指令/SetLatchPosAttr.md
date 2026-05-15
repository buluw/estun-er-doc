# SetLatchPosAttr 设置比较点属性

该指令用于设置机器人指定轴的指定 PSO 比较点的属性，决定正常触发还是跳过该比较点。

## 指令格式

SetLatchPosAttr(AxisID, ComparePointID, Attribute)
SetLatchPosAttr(轴号, 比较点编号, 属性)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| AxisID | INTC | 需要操作的机器人轴号。 | |
| ComparePointID | INTC | 比较点的编号。 | |
| Attribute | enum | 比较点正常触发还是跳过。NORMAL：正常触发；SKIP：跳过该比较点。 | |

## 应用示例

```estun
SetLatchPosAttr(1, 1, "NORMAL")
```

**逻辑解析**：
设置机器人 1 轴的第 1 个 PSO 比较点为正常触发。
