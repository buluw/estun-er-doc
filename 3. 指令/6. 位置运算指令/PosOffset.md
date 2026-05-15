# PosOffset 批量更新附加轴坐标

对程序域中所有点位变量的指定附加轴坐标进行批量更新或互换。

## 指令格式
PosOffset(Mode, DestAxis, Pos, [SrcAxis])
PosOffset(操作模式, 目标轴号, 目标坐标值, [基准轴号])
*(备注：带 [] 参数为可选参数)*

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Mode | enum (UpdateSingleAxisPos / ExchangeAxisPos) | 操作模式（Operate Mode），Update 为单轴更新，Exchange 为双轴互换。 | |
| DestAxis | int | 目标轴号（Target Axis number），需要进行偏移的附加轴号。 | |
| Pos | real | 目标坐标值（Target position），Update 模式下设置的目标值。 | |
| SrcAxis | int | 基准轴号（Src Axis number），Exchange 模式下的基准轴号。 | 可选参数 |

---
## 应用示例
**示例 1：**
```estun
PosOffset ("UpdateSingleAxisPos", 7, 10)
//将程序文件中所有点位的第 7 轴坐标强制设置为 10。
```
