# GetSimDIToVar 读取虚拟数字量至变量

该指令用于读取指定的**虚拟数字量输入（SimDI）**端口状态，并将其当前的逻辑值（True/False 或 1/0）映射并存储到一个布尔型变量中。这在编写复杂的逻辑判断程序时非常有用，可以将端口状态暂存到变量中以便后续多次调用。

## 指令格式

`GetSimDIToVar (SIMDIN, VAR)`

`GetSimDIToVar(虚拟输入端口, 目标变量)`

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| SIMDIN | SimDI | 指定要读取的目标虚拟数字量输入端口 | 必填 |
| VAR | BOOL | 用于接收并存储端口状态的布尔变量（TRUE/FALSE） | 必填 |

---

## 应用示例

**示例 1：**

```estun
GetSimDIToVar (SimDI9, BOOL1)
```

**逻辑解析：**

系统实时获取与变量 **SimDI9** 绑定的虚拟数字量输入端口的状态值，并将该逻辑状态赋予 **BOOL1** 变量。

---

### **💡 应用场景：状态暂存与条件分支**

```estun
/* 逻辑示例：当 SimDI10 为高电平时，执行特定任务 */
GetSimDIToVar (SimDI10, BOOL_Ready)

IF BOOL_Ready == TRUE THEN
    SetDO (DO1, 1)
ELSE
    SetDO (DO1, 0)
ENDIF
```
