# DialogPanel 弹窗修改变量值

该指令用于在程序运行过程中通过弹窗按钮动态地修改变量值。

## 指令格式

DialogPanel(Title, Context, [Op1], [Op2], [Op3], [Op4], [Op5], [Op6], [Op7], Res)
DialogPanel(标题, 文本, [选项1], [选项2], [选项3], [选项4], [选项5], [选项6], [选项7], 返回值)

*(备注：带 [] 参数为可选参数。Op1~Op7 中至少有一个按钮不为 default，否则执行时会有报警提示。)*

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Title | STRINGC | 消息提示弹窗的标题。 | |
| Context | STRINGC | 消息提示弹窗的内容。 | |
| [Op1] | STRINGC | 消息提示弹窗中按钮 1 的名称。 | default |
| [Op2] | STRINGC | 消息提示弹窗中按钮 2 的名称。 | default |
| [Op3] | STRINGC | 消息提示弹窗中按钮 3 的名称。 | default |
| [Op4] | STRINGC | 消息提示弹窗中按钮 4 的名称。 | default |
| [Op5] | STRINGC | 消息提示弹窗中按钮 5 的名称。 | default |
| [Op6] | STRINGC | 消息提示弹窗中按钮 6 的名称。 | default |
| [Op7] | STRINGC | 消息提示弹窗中按钮 7 的名称。 | default |
| Res | INT | 用于接收消息提示弹窗中被按下的按钮编号。 | |

## 应用示例

```estun
DialogPanel("title", "context", "btn1", "btn2", L:INT0)
```

**逻辑解析**：
将弹窗标题设为 "title"，内容设为 "context"，Op1 和 Op2 分别命名为 "btn1" 和 "btn2"，其余按钮为默认（不显示）。执行时被按下的按钮编号返回给程序变量 INT0。
