# PalletFromPut 码垛放料离开

该指令用于放置工件完成后，机器人从放置位置离开。其运动轨迹通常为放置点的逆向过程。

## 指令格式
PalletFromPut (PalletName, [V], [B], [C])
PalletFromPut (码垛名, [目标速度], [过渡类型], [过渡值])
*(备注：带 [] 参数为可选参数)*
---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| PalletName | PALLET | 当前垛体信息变量。 |  |
| [V] | SPEED | 用于指定机器人执行指令时的末端平移、旋转及外轴速度。 | V4000 |
| [B] | enum（FINE / RELATIVE / ABSOLUTE / DEFAULT） | 机器人逼近终点时的过渡方式。 | FINE |
| [C] | ZONE | 机器人逼近终点时的过渡半径或数值。 | C100 |
---
## 应用示例
**示例 1：**
```estun
PalletFromPut (PALLET1, V2000)
// 机器人以 2000mm/s 的速度从 PALLET1 的当前放置位离开
```

---

## 运动逻辑与路径建议

该指令是放置工件（PalletToPut）的相反动作，从放置好的工件位置离开。

放置后离开的路径：

![](/images/pallet-fromput.png)

在调用 PalletFromPut 指令时，执行了以下运动指令：

1. **移动至后点位置（Post-point）**：从放置点垂直或按设定方向退出的第一个中间点（可选）。
2. **移动至进入位置（Entry-point）**：退出码垛区域的安全起始点（可选）。

如果跺体的**后点**和**进入位置**都没有被设置，执行 PalletFromPut 指令时，机器人保持当前的姿态不变。
