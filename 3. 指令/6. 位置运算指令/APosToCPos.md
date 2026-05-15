# APosToCPos 关节位置转笛卡尔

根据给定的关节位置、工具参数及坐标系，将其转换为笛卡尔空间位置。

## 指令格式
APosToCPos(OP, TP, Tool, Coord)
APosToCPos(原位置, 目标位置, 目标工具参数, 目标坐标系)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| OP | APOS | 原位置（original position），转换前关节位置。 | |
| TP | CPOS | 目标位置（target position），目标笛卡尔空间位置。 | |
| Tool | TOOL | 目标工具参数（target tool param）。 | |
| Coord | USERCOORD、EXTTCP、POSITIONER | 目标坐标系（target usercoord），参考坐标系。 | |

---
## 应用示例
**示例 1：**
```estun
APosToCPos (P1, P2, TOOL1, USERCOORD1)
//根据 P1、TOOL1、USERCOORD1，可以得到目标点 P2。
```
