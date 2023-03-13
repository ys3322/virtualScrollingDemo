// 3.2 设备越限
import { doPost } from "@utils/http.util";

// 设备越限 kssj  jssj
export function getSbyxCount(data) {
  return doPost({
    url: "/info/getSbyxCount",
    data: data,
  });
}
// 越限情况详情展示
/* 
kssj：（yyyy-mm-dd） 
jssj：（yyyy-mm-dd）
kind：类型描述，1表示主变，2表示线路
voltageName：电压等级描述，目前有35kV,110kV，220kV
*/

const list = [
  {
    dateTime: "2021-02-05",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "413.36",
    highRate: "78.73%",
    overloadTime: "2021-02-05 22:03:00.0",
    overloadTimeInterval: "47",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-03",
    deviceName: "110kV.2号主变-高",
    ratingValue: "40.00",
    realValue: "29.55",
    highRate: "73.88%",
    overloadTime: "2021-03-03 10:51:00.0",
    overloadTimeInterval: "105",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.界牌变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-20",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "549.16",
    highRate: "79.94%",
    overloadTime: "2021-02-20 23:42:00.0",
    overloadTimeInterval: "116",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-03",
    deviceName: "110kV.2号主变-高",
    ratingValue: "31.50",
    realValue: "23.95",
    highRate: "76.03%",
    overloadTime: "2021-03-03 14:00:00.0",
    overloadTimeInterval: "383",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.后巷变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.1号主变-高",
    ratingValue: "31.50",
    realValue: "24.10",
    highRate: "76.50%",
    overloadTime: "2021-03-06 07:27:00.0",
    overloadTimeInterval: "62",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.吕城变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-03",
    deviceName: "110kV.1号主变-高",
    ratingValue: "31.50",
    realValue: "25.82",
    highRate: "81.97%",
    overloadTime: "2021-03-03 09:07:00.0",
    overloadTimeInterval: "15",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.后巷变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-03",
    deviceName: "110kV.1号主变-高",
    ratingValue: "31.50",
    realValue: "25.20",
    highRate: "79.99%",
    overloadTime: "2021-03-03 09:30:00.0",
    overloadTimeInterval: "131",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.后巷变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-20",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "437.93",
    highRate: "83.42%",
    overloadTime: "2021-02-20 01:49:00.0",
    overloadTimeInterval: "2",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-02-26",
    deviceName: "110kV.2号主变-高",
    ratingValue: "31.50",
    realValue: "22.25",
    highRate: "70.65%",
    overloadTime: "2021-02-26 10:06:00.0",
    overloadTimeInterval: "4",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.后巷变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-20",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "415.61",
    highRate: "79.16%",
    overloadTime: "2021-02-20 01:57:00.0",
    overloadTimeInterval: "106",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-26",
    deviceName: "110kV.1号主变-高",
    ratingValue: "31.50",
    realValue: "22.77",
    highRate: "72.28%",
    overloadTime: "2021-02-26 10:54:00.0",
    overloadTimeInterval: "32",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.后巷变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.2号主变-高",
    ratingValue: "50.00",
    realValue: "35.23",
    highRate: "70.45%",
    overloadTime: "2021-03-06 10:45:00.0",
    overloadTimeInterval: "6",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.齐梁变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-10",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "431.27",
    highRate: "82.15%",
    overloadTime: "2021-02-10 00:32:00.0",
    overloadTimeInterval: "1",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-02-03",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "479.26",
    highRate: "91.29%",
    overloadTime: "2021-02-03 00:30:00.0",
    overloadTimeInterval: "2",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "90%~100%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "419.70",
    highRate: "79.94%",
    overloadTime: "2021-03-06 04:31:00.0",
    overloadTimeInterval: "244",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "465.51",
    highRate: "88.67%",
    overloadTime: "2021-03-06 00:02:00.0",
    overloadTimeInterval: "80",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "483.68",
    highRate: "92.13%",
    overloadTime: "2021-03-06 00:18:00.0",
    overloadTimeInterval: "1",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "90%~100%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "577.99",
    highRate: "84.13%",
    overloadTime: "2021-03-02 19:28:00.0",
    overloadTimeInterval: "15",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.鸿泰Ⅰ871线",
    ratingValue: "687.00",
    realValue: "598.38",
    highRate: "87.10%",
    overloadTime: "2021-03-06 23:58:00.0",
    overloadTimeInterval: "6",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-09",
    deviceName: "110kV.鸿泰Ⅰ871线",
    ratingValue: "687.00",
    realValue: "547.05",
    highRate: "79.63%",
    overloadTime: "2021-03-09 05:05:00.0",
    overloadTimeInterval: "466",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-06",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "578.69",
    highRate: "84.23%",
    overloadTime: "2021-03-06 05:09:00.0",
    overloadTimeInterval: "34",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "548.45",
    highRate: "79.83%",
    overloadTime: "2021-03-02 18:47:00.0",
    overloadTimeInterval: "509",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.鸿泰Ⅰ871线",
    ratingValue: "687.00",
    realValue: "563.22",
    highRate: "81.98%",
    overloadTime: "2021-03-02 16:33:00.0",
    overloadTimeInterval: "1",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.鸿泰Ⅰ871线",
    ratingValue: "687.00",
    realValue: "544.94",
    highRate: "79.32%",
    overloadTime: "2021-03-02 17:38:00.0",
    overloadTimeInterval: "384",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-25",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "572.36",
    highRate: "83.31%",
    overloadTime: "2021-02-25 23:00:00.0",
    overloadTimeInterval: "10",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-02-19",
    deviceName: "110kV.镇江.天工Ⅱ819线",
    ratingValue: "490.00",
    realValue: "351.31",
    highRate: "71.70%",
    overloadTime: "2021-02-19 00:50:00.0",
    overloadTimeInterval: "1",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.镇江.天工Ⅱ819线",
    ratingValue: "490.00",
    realValue: "360.74",
    highRate: "73.62%",
    overloadTime: "2021-03-02 02:14:00.0",
    overloadTimeInterval: "1",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "453.63",
    highRate: "86.40%",
    overloadTime: "2021-03-02 02:45:00.0",
    overloadTimeInterval: "23",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-02-25",
    deviceName: "110kV.鸿泰Ⅱ872线",
    ratingValue: "687.00",
    realValue: "549.16",
    highRate: "79.94%",
    overloadTime: "2021-02-25 00:21:00.0",
    overloadTimeInterval: "391",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.雩横变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "419.91",
    highRate: "79.98%",
    overloadTime: "2021-03-02 02:05:00.0",
    overloadTimeInterval: "157",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-09",
    deviceName: "110kV.2号主变-高",
    ratingValue: "40.00",
    realValue: "30.45",
    highRate: "76.13%",
    overloadTime: "2021-03-09 10:47:00.0",
    overloadTimeInterval: "390",
    kindName: "zb",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.界牌变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-25",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "439.31",
    highRate: "83.68%",
    overloadTime: "2021-02-25 02:49:00.0",
    overloadTimeInterval: "23",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "80%~90%",
  },
  {
    dateTime: "2021-02-19",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "408.75",
    highRate: "77.86%",
    overloadTime: "2021-02-19 23:24:00.0",
    overloadTimeInterval: "45",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-02-10",
    deviceName: "110kV.镇江.天工Ⅰ815线",
    ratingValue: "525.00",
    realValue: "419.55",
    highRate: "79.91%",
    overloadTime: "2021-02-10 00:22:00.0",
    overloadTimeInterval: "35",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.金桥812线",
    ratingValue: "490.00",
    realValue: "347.80",
    highRate: "70.98%",
    overloadTime: "2021-03-02 08:51:00.0",
    overloadTimeInterval: "24",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "丹阳",
    stationName: "镇江.新桥变",
    intervalName: "70%~80%",
  },
  {
    dateTime: "2021-03-02",
    deviceName: "110kV.金桥812线",
    ratingValue: "490.00",
    realValue: "349.94",
    highRate: "71.42%",
    overloadTime: "2021-03-02 09:14:00.0",
    overloadTimeInterval: "27",
    kindName: "xl",
    voltageName: "110kV",
    areaName: "镇江直属",
    stationName: "江苏.金凤变",
    intervalName: "70%~80%",
  },
];
export function getSbyxData(data) {
  // return Promise.resolve(list);
  return doPost({
    url: "/info/getSbyxData",
    data: data,
  });
}
