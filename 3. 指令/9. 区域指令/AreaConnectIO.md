# AreaConnectIO 区域绑定输入端口

为选定标准区域绑定一个输入端口，用于控制机器人的启动与停止。

## 指令格式
AreaConnectIO (Area, IoType, IoPort, IoPol)
AreaConnectIO (标准区域变量, IO类型, IO端口号, IO极性)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Area | AREA | 标准区域变量。 |  |
| IoType | enum (DI / SIMDI) | IO 类型。DI 为实际输入，SIMDI 为虚拟输入。 |  |
| IoPort | int | IO 端口号。 |  |
| IoPol | enum (HIGH / LOW) | IO 极性。HIGH 为高电平有效，LOW 为低电平有效。 |  |
---
## 应用示例
No example provided.
