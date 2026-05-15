# RecordLatchPos 设置记录点序号

该指令用于设置下一段运动在过渡段上的记录点序号，调试时配合 SetLatchPos 指令一起使用，可以设置运动过渡段上的点作为触发点。

## 指令格式

RecordLatchPos(RecordLatchID)
RecordLatchPos(记录点编号)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| RecordLatchID | INTC | 需要设置的下一段运动在过渡段上的记录点序号。 | |

## 应用示例

```estun
RecordLatchPos(1)
```

**逻辑解析**：
设置下一段运动在过渡段上的记录点序号为 1。
