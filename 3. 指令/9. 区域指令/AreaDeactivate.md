# AreaDeactivate 冻结标准区域

冻结标准区域，使指定的标准区域监控失效。

## 指令格式
AreaDeactivate (Area)
AreaDeactivate (标准区域变量)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Area | AREA | 需要冻结的标准区域变量。 |  |
---
## 应用示例
**示例 1：**
```estun
AreaDeactivate (AREA0)
//冻结标准区域监控，使 AREA0 失效。
```
