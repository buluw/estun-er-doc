# SetSimDOByVar 按变量设置虚拟数字量输出

该指令用于将某个布尔型变量（BOOL）的值映射到一个虚拟数字量输出（SimDO）端口上。它是 `GetSimDIToVar` 的反向操作，常用于将程序内部计算逻辑的结果通过虚拟端口输出，以便其他监控程序或后台逻辑读取。

## 指令格式

`SetSimDOByVar (SIMDOUT, VAR)`

`SetSimDOByVar (虚拟数字量输出口, 变量)`

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SIMDOUT | SimDO | 将获取到的变量值在该变量绑定的 SimDO 端口进行状态输出 | 必填 |
| VAR | BOOL | 获取该布尔变量的值（TRUE 或 FALSE），并输出给指定的虚拟数字量输出端口 | 必填 |

---

## 应用示例

**示例 1：**

```estun
SetSimDOByVar (SimDO9, BOOL1)
```

将变量 **BOOL1** 的状态在虚拟数字量变量 **SimDO9** 对应端口输出。若 `BOOL1` 为 TRUE，则 `SimDO9` 状态变为 1；若为 FALSE，则状态变为 0。
