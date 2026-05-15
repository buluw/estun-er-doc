# CPosToCPos 转换坐标系工具

将一个笛卡尔点从原坐标系/工具转换到另一个坐标系/工具下的笛卡尔点。

## 指令格式
CPosToCPos(OP, OTool, OCoord, TP, TTool, TCoord)
CPosToCPos(原位置, 原工具参数, 原坐标系, 目标位置, 目标工具参数, 目标坐标系)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| OP | CPOS | 原位置（original position），转换前的笛卡尔空间位置。 | |
| OTool / OCoord | TOOL / USERCOORD 等 | 原参数，转换前的工具及参考坐标系参数。 | |
| TP | CPOS | 目标位置（target position），目标笛卡尔空间位置。 | |
| TTool / TCoord | TOOL / USERCOORD 等 | 目标参数，目标工具及参考坐标系参数。 | |

---
## 应用示例
**示例 1：**
```estun
CPosToCPos (P1, TOOL1, USERCOORD1, P2, TOOL2, USERCOORD2)
//根据原参数及目标参数，计算得出目标点 P2。
```
