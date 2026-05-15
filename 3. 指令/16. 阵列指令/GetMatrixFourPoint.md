# GetMatrixFourPoint 获取四角矩阵值

该指令取 SetMatrixFourPoint 指令执行后对应行列的该点的值，赋值给目标点。如 SetMatrixFourPoint 中所述点的姿态和附加轴角度值保持与原点一致。

## 指令格式

GetMatrixFourPoint(Row, Column, TarPos)
GetMatrixFourPoint(行号, 列号, 目标点)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Row | int | 所要取点在矩阵中的行号。 | |
| Column | int | 所要取点在矩阵中的列号。 | |
| TarPos | CPOS 变量 | 用于保存取到的点值。 | |
