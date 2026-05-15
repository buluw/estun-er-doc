# GetMatrix 获取矩阵点值

该指令取 SetMatrix 指令执行后对应行列的该点的值，赋值给目标点。如 SetMatrix 中所述点的姿态和附加轴角度值保持与原点一致。

## 指令格式

GetMatrix(Row, Column, TarPos)
GetMatrix(行号, 列号, 目标点)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Row | INT 型变量 | 所要取点在矩阵中的行号。 | |
| Column | INT 型变量 | 所要取点在矩阵中的列号。 | |
| TarPos | CPOS 变量 | 用于保存取到的点值。 | |
