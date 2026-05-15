# CalcPosDist 计算空间距离

计算两个笛卡尔空间点位（CPOS）之间的空间距离。

## 指令格式
CalcPosDist(P1, Tool1, Coord1, P2, Tool2, Coord2)
CalcPosDist(位置1, 工具参数1, 坐标系1, 位置2, 工具参数2, 坐标系2)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| P1 / P2 | CPOS | 位置点，待计算距离的两个笛卡尔空间位置点。 | |
| Tool / Coord | TOOL / USERCOORD | 工具及坐标系，各位置点所对应的工具参数及参考坐标系。 | |

---
## 应用示例
**示例 1：**
```estun
CalcPosDist(P1, Tool1, Usercoor1, P2, Tool2, Usercoor2)
//计算 P1 点与 P2 点之间的直线空间距离。
```
