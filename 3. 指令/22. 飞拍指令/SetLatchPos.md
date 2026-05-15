# SetLatchPos 设置PSO比较点

该指令用于设置机器人指定轴的指定 PSO 比较点，成功时返回机器人当前关节坐标。当机器人停在某一位置时执行该条指令，伺服会记录下当前指定轴的位置作为一个比较点，后续机器人运动到该位置时，伺服则会触发拍照信号。

## 指令格式

SetLatchPos(AxisID, ComparePointID, [RecordLatchID], Ret, P)
SetLatchPos(轴号, 比较点编号, [过渡段记录点索引], 有效性, 关节位置)

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| AxisID | INTC | 需要操作的机器人轴号。 | |
| ComparePointID | INTC | 比较点的编号。 | |
| [RecordLatchID] | enum | 过渡段记录点索引，对应 RecordLatchPos 指令所设置的 ID 号。取值：LATCH_1 ~ LATCH_20。 | 不使用过渡段记录点 |
| Ret | INT | 有效性返回值。 | |
| P | APOS | 返回的机器人当前关节坐标。 | |

## 应用示例

```estun
SetLatchPos(1, 1, INT0, P0)
```

**逻辑解析**：
设置机器人 1 轴的第 1 个 PSO 比较点，伺服记录当前机器人 1 轴的位置，成功时返回机器人当前关节坐标。

```estun
SetLatchPos(1, 1, "LATCH_1", INT0, P0)
```

**逻辑解析**：
设置机器人 1 轴的第 1 个 PSO 比较点，使用 RecordLatchPos 所设置的过渡段上的比较点作为触发点，LATCH_1 对应 RecordLatchPos(1)。
