# CalcDynMdl 计算负载辨识结果

该指令用于对之前采集的机器人负载信息进行辨识计算，并将计算后的结果存储到对应的变量中。

## 指令格式

CalcDynMdl(mdlType, Tool, PayLoad, dataStepPer, validEnable)
CalcDynMdl(辨识模型类型, 工具变量, 工件负载变量, 数据间隔长度, 是否模型验证)

---

## 参数详细说明

| 参数 | 类型 | 说明 | 默认值/备注 |
|------|------|------|------------|
| mdlType | enum(TypeTool/TypePayload) | 辨识的模型类型。 | TypeTool：用于辨识工具参数；TypePayload：用于辨识负载参数 |
| Tool | TOOL 变量 | 用于保存辨识结果。当辨识的模型类型选择 TypeTool 时，本参数才有效。 | |
| PayLoad | PAYLOAD 变量 | 用于保存辨识结果。当辨识的模型类型选择 TypePayload 时，本参数才有效。 | |
| dataStepPer | int | 从原始数据中抽取有效辨识数据的间隔参数，该值越大则辨识所用数据量越少，负载辨识结果准确度也就越低。 | 取值范围 0~100 |
| validEnable | enum(Enable/Disable) | 设置负载辨识时进行模型验证的使能。 | Enable：开启模型验证功能；Disable：关闭模型验证功能 |

## 应用示例

```estun
StartMdlLog(WithLoad)
MovJ(P0)
MovJ(P1)
MovJ(P2)
StopMdlLog()

/*负载辨识结束，结果将存于用户指定的负载/工具变量中*/
CalcDynMdl(TypePayload, _, t_g.idenPayload, 1, Disable)
```

**逻辑解析**：
采集安装负载后的运动数据后，对负载信息进行辨识计算。mdlType 选择 TypePayload，即辨识负载参数，辨识结果存入 t_g.idenPayload 变量中，数据间隔长度为 1，关闭模型验证功能。
