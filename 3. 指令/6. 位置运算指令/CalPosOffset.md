# CalPosOffset 计算偏移后位置

以原位置和相对偏移量为基础，计算出偏移后的位置。

## 指令格式
CalPosOffset(OP, RP, T, Tool, Coord, TP)
CalPosOffset(原位置, 相对偏移量, 参考坐标系类型, 目标工具参数, 目标坐标系, 目标位置)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| OP | APOS/CPOS | 原位置（original position），偏移运动的起点。 | |
| RP | DCPOS | 相对偏移量（Rel position），相对原位置所要移动的位置增量。 | |
| T | enum (COORD/TOOL) | 参考坐标系（RefSys），COORD 为用户坐标系，TOOL 为工具坐标系。 | |
| Tool | TOOL | 目标工具参数。 | |
| Coord | USERCOORD | 目标坐标系。 | |
| TP | CPOS | 目标位置（target position），目标笛卡尔空间位置。 | |

---
## 应用示例
**示例 1：**
```estun
CalPosOffset(P0, DCPOS0, "COORD", TOOL1, USERCOORD1, P1)
//计算得出相对于用户坐标系偏移后的目标点 P1。
```
