https://www.yuque.com/alsmile/topology/installation

https://juejin.im/post/5dd73e85518825731c34b2ca

// 1. 导入绘画引擎
import {
  Topology
} from 'topology-core';
// 图形库
import {
  registerNode
} from 'topology-core/middles';
import {
  loadJS
} from 'topology-core/utils';
import {
  register as registerFlow
} from 'topology-flow-diagram';
import {
  register as registerActivity
} from 'topology-activity-diagram';
import {
  register as registerClass
} from 'topology-class-diagram';
import {
  register as registerSequence
} from 'topology-sequence-diagram';
// import {
//   register as registerChart
// } from 'topology-chart-diagram/topology-chart-diagram';

// 注册图形库
registerFlow();
registerActivity();
registerClass();
registerSequence();
// registerChart();

export default {
  Topology,
  registerFlow,
  registerActivity,
  registerActivity,
  registerClass,
  registerSequence
}

// 2. 创建画布
// 其中，第一个参数'topo-canvas'表示canvas所在的父dom元素id;
// 第二个参数{}表示画布选项，这里表示全部使用默认值。具体选项请参考后面的api文档。
var canvas = new tp.Topology("topo-canvas", {});

// 3. 渲染图形
// 空白数据图形数据，可以来自于官网下载的json
const json = {
    nodes: [],
    lines: []
};
canvas.open(Data);

// 4. 如果json发送变化，重绘
canvas.render();

// 常用画布方法
// 获取画布数据
// const data = this.canvas.data;

// 保存为图片blob
// toImage函数参数：type, quality, callback
this.canvas.toImage(null, null, blob => {
   // Do sth.
});

// 下载为图片
saveAsImage函数参数：filename, type, quality
this.canvas.saveAsImage('canvas.png');

// 编辑相关操作
this.canvas.cut();
this.canvas.copy();
this.canvas.parse();
this.canvas.undo();
this.canvas.redo();