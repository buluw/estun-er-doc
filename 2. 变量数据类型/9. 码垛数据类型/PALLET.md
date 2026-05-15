# PALLET

存储垛体信息。该变量可支持用户自主创建以及修改。该变量支持在全局，工程变量作用域中创建，删除，修改，复制，粘贴等操作（其中复制、粘贴操作不能跨域和跨工程）。

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| `actParts` | int | 垛体中实际工件数。 | — |
| `maxParts` | int | 垛体中最大工件数。 | — |
| `isEmpty` | bool | 垛体是否为空。 | — |
| `isFull` | bool | 垛体是否为满。 | — |
| `xNum` | int | 垛体 $\mathbf { X }$ 方向上工件数。 | — |
| `yNum` | int | 垛体 y 方向上工件数。 | — |
| `zNum` | int | 垛体 z 方向上工件数。 | — |
| `xdistOfPart` | real | 垛体 $\mathbf { X }$ 方向上单个工件长度。 | — |
| `ydistOfPart` | real | 垛体 y 方向上单个工件长度。 | — |
| `zdistOfPart` | real | 垛体 z 方向上单个工件长度。 | — |
| `refSysScope` | intl | 垛体参数所参考坐标系域。 | — |
| `refSysName` | string | 垛体参数所参考坐标系名称。 | — |
| `palletDir` | int | 码垛或拆垛方向。 | — |
| `palletOrder` | int | 码垛或拆垛顺序。 | — |
| `firstPartScope` | int | 第一个工件位置变量作用域。 | — |
| `firstPartPos` | string | 第一个工件位置变量名称。 | — |
| `isEntryPosUsed` | bool | 是否行至码垛入口点。 | — |
| `palletEntryScope` | int | 码垛入口点位置变量作用域。 | — |
| `palletEntryPos` | string | 码垛入口点位置点名称。 | — |
| `preplaceOptions` | PLACEOPTIONS | 前置点信息。 | — |
| `postplaceOptions` | PLACEOPTIONS | 后置点信息。 | — |
| `note` | string | 变量注释。 | — |
