// 1. 导入绘画引擎
import {
  Topology
} from 'topology-core';
// 图形库
import {
  register as registerFlow
} from 'topology-flow-diagram'; //流程图
import {
  register as registerActivity
} from 'topology-activity-diagram'; //活动图
import {
  register as registerClass
} from 'topology-class-diagram'; //类图
import {
  register as registerSequence
} from 'topology-sequence-diagram'; //时序图
import {
  register as registerChart
} from 'topology-chart-diagram/topology-chart-diagram/index.js'; //echarts的图形库

// 导入画布的注册函数
import {
  registerNode
} from 'topology-core/middles';

// 注册图形库
registerFlow();
registerActivity();
registerClass();
registerSequence();
registerChart();

// 把rectangle的锚点函数覆盖为自己定义的锚点函数。后面两个参数为null，表示使用缺省方法
// import { rectangle } from 'topology-core/nodes/rectangle';
// registerNode('rectangle', Topology.rectangle, myAnchors, null, null);

// 导入自己的图形库函数
import {
  mySequence, // 形状
  myIconRect, // 图片
  myTextRect, //文字
  myAnchors //锚点
} from './myShap';

// 注册自己的图形到画布-registerNode('唯一的图形名', myShape, null, null, null);
registerNode('Fillna', mySequence, myAnchors, null, null); //缺失值填充
registerNode('DropDuplicate', mySequence, myAnchors, null, null); //去除重复数据
registerNode('PolynomualFeature', mySequence, myAnchors, null, null); //多项式特征


export default {
  Topology

  /*
  // 官方文档：https://www.yuque.com/alsmile/topology/about
  // 2. 创建画布
  // 其中，第一个参数'topo-canvas'表示canvas所在的父dom元素id，通常为<div class="canvas" id="topo-canvas"></div>；
  // 第二个参数{}表示画布选项，这里表示全部使用默认值。具体选项请参考后面的api文档。
  var canvas = new tp.Topology('topo-canvas', {
      // disableEmptyLine: true, //是否禁止连线终点为空（未连接到节点）
      on: (event,data)=>{ //接收画布消息的回调函数。

      }
  });

  // 3. 渲染图形
  // 空白数据图形数据，可以来自于官网下载的json
  const json = {nodes:[], lines:[]};
  canvas.open(DataJson);

  // 获取画布数据
  const data = this.canvas.data;

  //拖曳事件
  this.canvas.ondrop = (event)=>{
      //允许接收一个拖曳事件，通过event.dataTransfer.getData('Text')获取一个表示节点数据的json字符串。
      event.preventDefault();
      const node = JSON.parse(event.dataTransfer.getData('Text'));
      node.rect.x = event.offsetX - ((node.width / 2) << 0);
      node.rect.y = event.offsetY - ((node.height / 2) << 0);
      this.addNode(new Node(node), true); //添加一个节点，返回是否成功
  };

  // 保存为图片blob
  // toImage函数参数：type图片类型, quality图片质量, callback图片url
  this.canvas.toImage(null, null, blob => {
      // Do sth.
  });

  // 下载为图片
  // saveAsImage函数参数：filename, type, quality
  this.canvas.saveAsImage('canvas.png');

  // 编辑相关操作
  this.canvas.cut();  //剪切选中节点
  this.canvas.copy(); //复制选中节点
  this.canvas.paste(); //粘贴节点
  this.canvas.delete(); //删除选中元素
  this.canvas.undo(); //撤消操作
  this.canvas.redo(); //重做
  this.canvas.getRect();//获取图形大小，画布四周空白不计算在内
  this.canvas.updateProps(); //通知有数据属性更新
  this.canvas.translate(x: number, y: number); //平移画布
  this.canvas.scale(scale: number);   //scale缩放画布(1 - 不缩放,> 1 - 放大,< 1 - 缩小),例如canvas.scaleTo(.5);
  this.canvas.scaleTo(scale: number); //在原始视图基础上，缩放到指定比例
  this.canvas.destory();  //清理画布申请创建的资源


  */
}
