# AREA

存储标准区域信息的值。该变量仅支持在全局用域中创建，删除，修改等操作。

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| `id` | int | 标准区域变量的编号。 | — |
| `activate` | bool | 是否激活此区域以及此区域是否在激活状态。 | — |
| `isInArea` | bool | 是否在区域内。 | — |
| `initActivate` | bool | 区域自动激活标识。 | — |
| `areaType` | int | 区域类型。 | — |
| `areaShape` | int | 区域形状。 | — |
| `refSysScope` | int | 参考坐标系域。 | — |
| `refSysName` | string | 参考坐标系名字。 | — |
| `enInPut` | bool | 使能输入。 | — |
| `enInHigh` | bool | 输入高有效。 | — |
| `enOutPut` | bool | 使能输出。 | — |
| `enOutHigh` | bool | 输出高有效。 | — |
| `diType` | int | DI 类型。 | — |
| `InputActStatePort` | int | 输入实际状态。 | — |
| `doType` | int | DO 类型，。 | — |
| `OutputActStatePort` | int | 输出实际状态。 | — |
| `StartPointX` | real | 区域起点的坐标 x。 | — |
| `StartPointY` | real | 区域起点的坐标 y。 | — |
| `StartPointZ` | real | 区域起点的坐标 z。 | — |
| `lenXR` | real | 矩形区域的长度或者圆柱形区域的半径。 | — |
| `lenYH` | real | 矩形区域的宽度或者圆柱形区域的高度。 | — |
| `lenZ` | real | 矩形区域的高度。 | — |
| `isFlangeEnd` | int | 监控端参数，在区域监控中用于监控 TCP 或法兰端。 | — |
| `res` | real 型数组 | 区域形状为单轴或多轴时，存储对应轴的限位信息以及使能信息。 | — |
| `note` | string | 变量注释。 | — |
