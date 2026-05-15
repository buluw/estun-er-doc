# DialogPanelInt 弹窗修改int变量

该指令用于在程序运行过程中通过弹窗输入 int 型数据动态地修改变量值。

## 指令格式

DialogPanelInt(Title, Context, Res)
DialogPanelInt(标题, 文本, 返回值)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| Title | STRINGC | 消息提示弹窗的标题。 | |
| Context | STRINGC | 消息提示弹窗的内容。 | |
| Res | INT | 用于接收消息提示弹窗中输入的 int 数据。 | |

## 应用示例

```estun
DialogPanelInt("title", "context", L:INT0)
```

**逻辑解析**：
将弹窗标题设为 "title"，内容设为 "context"，执行时输入的 int 数据返回给程序变量 INT0。
