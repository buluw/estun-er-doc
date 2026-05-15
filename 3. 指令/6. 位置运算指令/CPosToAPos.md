# CPosToAPos 笛卡尔位置转关节

根据给定的笛卡尔空间位置、工具参数及坐标系，将其转换为关节位置。

## 指令格式
CPosToAPos(OP, Tool, Coord, TP)
CPosToAPos(原位置, 原工具参数, 原坐标系, 目标位置)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| OP | CPOS | 原位置（original position），转换前的笛卡尔空间位置。 | |
| Tool | TOOL | 原工具参数（original tool param），转换前的工具参数。 | |
| Coord | USERCOORD、EXTTCP、POSITIONER | 原坐标系（original usercoord），转换前的参考坐标系参数。 | |
| TP | APOS | 目标位置（target position），转换后的关节位置。 | |

---
## 应用示例
**示例 1：**
```estun
CPosToAPos (P1, TOOL1, USERCOORD1, P2)
//根据 P1、TOOL1、USERCOORD1，可以得到目标点 P2。
```
