# ISignalDI 输入口中断

该指令为输入口中断指令，用于将中断检测方式设为 DI 边沿信号检测的方式，即实时监控 DI 的上升沿/下降沿信号来处理机器人相应的中断程序。

## 指令格式

ISignalDI(Interrupt, IO, EdgeType, [DeduplicationTime])

ISignalDI(中断标识, 端口变量, 触发边沿类型, [去重时间])

*(备注：带 [] 参数为可选参数)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Interrupt | INTERRUPT 变量 | 中断唯一索引号 | 必填 |
| IO | DI | 需要监控的 DI 端口号 | 必填 |
| EdgeType | enum(RiseEdge/DownEdge) | 需要监控的 DI 边沿信号类型：RiseEdge 为上升沿信号，DownEdge 为下降沿信号 | 必填 |
| [DeduplicationTime] | INTC 变量 | 指定上一次有效信号后屏蔽信号检测的时间，为 DEFAULT 时，默认去重时间为 0 | 可选 |
