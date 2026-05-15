# SoftFloatStart 开启软浮动

该指令使机器人由**刚性状态**转变为**柔顺状态**。指令开启后，机器人末端可以顺应外力，沿指定方向进行**直线运动**。

## 指令格式
SoftFloatStart (Type, Coordinate, [Tool], [User], Direction, Sensitivity)
SoftFloatStart (软浮动类型, 参考坐标系, [工具坐标系号], [用户坐标系号], 软浮动方向, 软浮动灵敏度)
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Type | enum ("CART") | 软浮动类型 (SoftType)，指定软浮动的运动形式。**目前仅支持直线软浮动**（"CART"：直线类型）。 | |
| Coordinate | enum ("WORLD", "TOOL", "USER") | 参考坐标系 (Coordinate)，软浮动参考的坐标系统。"WORLD"：世界坐标系，"TOOL"：工具坐标系，"USER"：用户坐标系。 | |
| [Tool] | TOOL 变量 | 坐标系号 (SoftTool)，工具参数变量。**仅当参考坐标系为 "TOOL" 时有效**；若为其他坐标系则该参数无效。 | |
| [User] | USERCOORD 变量 | 坐标系号 (SoftUser)，用户坐标系变量。**仅当参考坐标系为 "USER" 时有效**；若为其他坐标系则该参数无效。 | |
| Direction | enum ("X", "Y", "Z") | 软浮动方向 (SoftDirection)，指所选参考坐标系或坐标系号的 **X、Y 或 Z 方向**。 | |
| Sensitivity | enum ("HIGH", "MidHigh", "MID", "MidLow", "LOW") | 软浮动灵敏度 (SoftSensitivity)，软浮动柔顺度等级。等级：`"HIGH"` (最柔顺) > `"MidHigh(还算柔顺)"` > `"MID(一般般柔顺)"` > `"MidLow(硬中带柔)"` > `"LOW"` (最僵硬)。 | |
---
## 应用示例
```estun
SoftFloatStart("CART", "TOOL", tool1, , "Y", "MID")
// 开启直线软浮动，参考 tool1 工具坐标系，沿 Y 方向保持中等灵敏度。
```
