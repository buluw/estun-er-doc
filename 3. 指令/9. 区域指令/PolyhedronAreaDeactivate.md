# PolyhedronAreaDeactivate 冻结多边体区域

冻结多边体区域，使指定的多边体区域监控失效。

## 指令格式
PolyhedronAreaDeactivate (Polyhedron)
PolyhedronAreaDeactivate (多边体区域变量)

---
## 参数详细说明
| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Polyhedron | POLYHEDRON | 需要冻结的多边体区域变量。 |  |
---
## 应用示例
**示例 1：**
```estun
PolyhedronAreaDeactivate (POLYHEDRON0)
//冻结多边体区域监控，使 POLYHEDRON0 失效。
```
