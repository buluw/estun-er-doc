# UserOffset 用户坐标系偏移

通过对基准用户坐标系进行旋转或偏移，生成新的用户坐标系。

## 指令格式
UserOffset(F1, P, F2)
UserOffset(用户坐标系, 偏移量, 目标用户坐标系参数)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| F1 | USERCOORD | 用户坐标系（Usercoord1），转换前的用户坐标系参数。 | |
| P | DCPOS | 偏移量（offset），新用户坐标系相对于原始用户坐标系的偏移量。 | |
| F2 | USERCOORD | 目标用户坐标系参数（Usercoord2），偏移后获得的新用户坐标系参数。 | |

---
## 应用示例
**示例 1：**
```estun
UserOffset (USERCOORD1, DCPOS1, USERCOORD2)
//根据 USERCOORD1 与偏移量，生成新的 USERCOORD2。
```
