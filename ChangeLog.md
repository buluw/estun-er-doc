### 2025.5.26 - V1.19

1. 新增消息提示指令列表。
2. 新增消息提示指令 DialogPanel、DialogPanelInt、DialogPanelReal。
3. 新增 CTV 类型变量，以及在 MovJ、MovL、MovC 中增加 CTV 参数。
4. 在 IO 指令列表里新增 GetSimAIToInt 指令。
5. 在位置运算指令列表里新增 CalcPosDist 指令。
6. 在飞拍指令中新增了 RecordLatchPos 指令，SetLatchPos 指令新增了记录点索引参数，默认缺省。
7. 在设置指令列表中新增 GetAxisTorque 指令。
8. 在“6.15 阵列指令”章节中新增“SetMatrixFourPoint”、“GetMatrixFourPoint”指令。
9. 新增“3.24 Mc 通讯指令”。

---

### 2025.1.9 - V1.18

1. 中断指令列表中新增 ISleep 和 IWatch 指令，以及新增 ISignalDI 和 ISignalSimDI 指令的去重时间参数。
2. 修改 SetMatrix 指令的行数和列数参数类型。
3. 飞拍指令列表中新增 SetLatchPosAttr 和 SetLatchPosDyn 指令。

---

### 2024.7.1 - V1.17

1. 修正中断指令中 ExitCycle 的指令描述。
2. 新增飞拍指令列表。
3. 修改字符串指令列表中对 fmod、floor 函数的描述。

---

### 2024.1.31 - V1.16

1. 在系统数据类型中新增 VIBRATIONPARAM、SYNCID 变量。
2. 在基本数据类型中新增 StringOneArray 变量。
3. 在变量数据类型中，为除 RealOneArray、IntOneArray、BoolOneArray、StringOneArray、SPEED、ZONE、APOSARRAY、CPOSARRAY 以外的所有变量新增变量注释参数。
4. 在摆动数据类型中更新 WEAVE 变量的参数说明。
5. 新增主从运动指令列表。
6. 在设置指令列表中删除 RefRobotAxis 指令。
7. 在传送带跟随指令列表中更新 WaitWObj 指令、MovJSyncQuit 指令、MovLSyncQuit 指令、ResetWObjBuf 指令的参数说明。
8. 在运动指令列表中更新 MovArch 指令、MovLArch 指令的参数说明，新增 MovJOffsetC 指令、MovLOffsetC 指令的参数说明。
9. 在字符串指令列表中新增 TranStrToStr 指令，同时补充 sub、removeStr 的指令说明。
10. 在 IO 指令列表和设置指令列表中，相关指令的参数值支持常量和变量。
11. 在设置指令列表中更新 SetMotionMode 指令的参数说明，新增 SetVibrationParam 指令、AutoTune 指令的参数说明。
12. 除点位数组变量外，其余变量支持变量复制和粘贴操作。

---

### 2023.8.14 - V1.15

1. 在运动指令列表中新增了 MovJHand 指令。
2. 在中断指令列表中更新了 ExitCycle 指令说明。

---

### 2023.7.14 - V1.14

1. 修改了 SetRtInfo、SetRtToErr、SetRtWarning 的信息与编号参数说明。
2. 将原 SetOriMode 变更为 SetCircMode，更新其参数说明。同时对新的 SetOriMode 进行描述。
3. 在位置运算指令列表中新增了 PosOffset、AxisLock 指令。
4. 修改了区域变量的参数说明。
5. 在控制指令列表中新增了 SWITCH、CASE、BREAK、DEFAULT 指令。
6. 在设置指令列表中新增 SetSCARAMode 指令。

---

### 2023.3.16 - V1.13

1. 新增 APOSARRAY、CPOSARRAY、INTERRUPT。
2. 修改了 OnDistance 指令中的距离与时间参数说明。
3. 修改了 OnParameter 指令中的时间参数说明。
4. 修改了 MovJSearch、MovLSearch 指令中的返回值参数说明，同时新增了 SearchP、Goto 参数。
5. 在运动指令列表中新增 MovJOffset、MovLArch 指令。
6. 在设置指令列表中新增 SetOriMode、GetRobotIsMoving、SetColliAutoTune、SetColliParam 指令。
7. 在位置运算指令列表中新增 CalPosOffset 指令。
8. 在区域指令列表中新增 AreaConnectIO、AreaDisConnectIO、PolyhedronAreaConnectIO、PolyhedronAreaDisConnectIO 指令。
9. 新增中断指令列表。
10. 新增负载在线辨识指令列表。
11. 在系统变量中新增 INTERRUPT、COLLIPARAM 参数。

---

### 2022.10.28 - V1.12

1. 修改了 SocketReadReal、SocketReadInt 指令中接收数据的格式说明，以及 SocketSendStr 指令中的参数说明。
2. 在 Socket 指令集中新增了 SocketResetBuf 指令。
3. 在 AREA 变量中新增了 isFlangeEnd 参数。
4. 修正了 RUN 指令的说明。
5. 修正了 WaitDI8421、WaitSimDI8421 指令参数说明顺序。

---

### 2022.7.18 - V1.11

1. 在 MovArch 指令中新增 H2 参数，并修改了部分指令参数说明。
2. 传送带跟随指令中新增 SimConveyorOn、SimConveyorOff、ReceiveWObj、ResetWObjBuf 指令。

---

### 2022.4.13 - V1.10

1. 在位置运算指令列表中新增 ToolOffset、UserOffset 指令。

---

### 2022.1.6 - V1.9

1. 修改 Wait、WaitCondition、WaitDI、WaitDI8421、WaitAI、WaitSimDI、WaitSimDI8421、WaitSimAI 等指令中时间参数的类型说明，修改 SetOverride 指令中速度倍率参数的类型说明。
2. 新建字符串指令列表，将赋值指令与流程控制指令中的字符串函数移至其中，并新增 findEnd、format、getAt、left、right、reverse、strcmp、trimLeft、trimRight、IToStr、RToStr、StrToI、StrToR、APosToStr、CPosToStr、TranStrToInt、TranStrToReal、TranStrToApos、TranStrToCpos 指令。同时移除赋值指令与流程控制指令中的字符串函数。
3. 在传送带跟随指令列表中新增 WaitConvDis 指令。
4. 在设置指令列表中新增 SetRestorePC、SetAxisVibraBLevel 指令。
5. 将 WEAVE 变量中的 Amp 属性变更为 Amp_L、Amp_R，StopTime 属性变更为 StopTime_L、StopTime_C、StopTime_R。
6. 在运动指令列表中增加 MovCircle、MovCircleW 指令。
7. 在 PLC 数据类型中新增 PLCBOOL、PLCINT、PLCDINT 变量。
8. 新增 ModbusTcp 指令列表。

---

### 2021.10.15 - V1.8

1. 完善系统关键字 (词)。
2. 新增区域数据类型的多边体区域变量。
3. 修改指令 MovL、MovC、MovLRel、MovLW、MovCW 指令中的坐标系参数。
4. 新增 PolyhedronAreaActivate、PolyhedronAreaDeactivate 指令。

---

### 2021.7.26 - V1.7

1. MovL、MovC、MovLRel、MovLW、MovCW 指令新增参数：是否受全局速度倍率影响。
2. 新增 MovLOffset、SetSingularPass、SetColliEnable、SetAxisColliParam、SetMatrix、GetMatrix、SocketSendReal、SocketSendInt、SetPositioner、SetBlendParam 指令。
3. 修改指令名 GetOverRide 为 GetCurOverRide。

---

### 2021.5.24 - V1.6

1. 在 MovLSync 指令中新增了两个 Goto 属性变量以及抬升高度。
2. 新增 LsScale、LsThresh 变量。
3. 在设置指令中新增 AutoGainEnable、AutoGainDisable 指令。

---

### 2021.2.8 - V1.5

1. 新增 MovLSync、MovJSyncQuit、MovLSyncQuit、WaitWObj、SetTargetPos 指令，并新建一个传送带跟随指令列表来存储。
2. 新增 SYNCOORD 变量。
3. 在 WaitCondition、WaitDI、WaitDI8421、WaitAI、WaitSimDI、WaitSimDI8421、WaitSimAI 这些时间等待指令中新增了 Goto 属性变量。
4. 在区域变量中新增 initActivate，enInPut，enInHigh 三个属性。
5. 新增 ELSIF 指令。

---

### 2020.7.13 - V1.4

1. 新增 SetExternalTCP 指令。
2. 修改 MovL、MovC 指令中 Coord 属性说明。
3. WAVE 变量新增 Type 属性。
4. 新增 EXTTCP 变量类型。
5. 其他修改。

---

### 2019.12.31 - V1.3

1. 移除 EMovL, EMovC 指令说明。
2. 除了 MovJRel，MovLRel 两条指令添加了 PAYLOAD 属性外，其他所有的运动指令中均添加了 TOOL, USERCOOR,PAYLOAD 属性变量，对这些添加的属性变量进行说明。
3. 修改 SetPayload 指令说明。
4. 新增 SetRtInfo, SetRtWarning 指令说明。
5. 新增 PAYLOAD 变量说明。
6. 其他修改。

---

### 2019.07.22 - V1.2

1. 新增 SetMotionMode 与 GetCurOverRide 指令说明。
2. 修改码垛指令参数说明。

---

### 2019.04.22 - V1.1

1. 修正版本。

---

### 2019.04.17 - V1.0

1. 初次发布。