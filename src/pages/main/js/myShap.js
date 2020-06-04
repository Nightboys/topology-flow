import {
  Node
} from 'topology-core/models/node.js'; //节点
import {
  Rect
} from 'topology-core/models/rect.js'; //矩形区域位置信息
import {
  Point
} from 'topology-core/models/point.js'; //点
import {
  Direction
} from 'topology-core/models/direction.js'; //锚点
import {
  AnchorMode
} from 'topology-core/models/status.js'; //锚点属性

// 绘制形状--正方形
export function mySequence(ctx = 'CanvasRenderingContext2D', node = Node) {
  // 建立一个新绘画路径，避免干扰其他图形绘画。【必须】
  const wr = node.rect.width * node.borderRadius;
  const hr = node.rect.height * node.borderRadius;
  let r = wr < hr ? wr : hr;
  if (node.rect.width < 2 * r) {
    r = node.rect.width / 2;
  }
  if (node.rect.height < 2 * r) {
    r = node.rect.height / 2;
  }
  ctx.beginPath();
  ctx.moveTo(node.rect.x + r, node.rect.y);
  ctx.arcTo(
    node.rect.x + node.rect.width,
    node.rect.y,
    node.rect.x + node.rect.width,
    node.rect.y + node.rect.height,
    r
  );
  ctx.arcTo(
    node.rect.x + node.rect.width,
    node.rect.y + node.rect.height,
    node.rect.x,
    node.rect.y + node.rect.height,
    r
  );
  ctx.arcTo(node.rect.x, node.rect.y + node.rect.height, node.rect.x, node.rect.y, r);
  ctx.arcTo(node.rect.x, node.rect.y, node.rect.x + node.rect.width, node.rect.y, r);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // 方向：Direction--1上、2右、3下、4左
  let anchors = node.anchors;
  anchors.map(v => {
    if (v.direction == 1) { //上
      ctx.fillStyle = "#fa541c";
      ctx.fillRect(v.x - 3, v.y - 6, 6, 6);
    } else if (v.direction == 2) { //右--输出端
      ctx.fillStyle = "#999";
      ctx.fillRect(v.x, v.y - 3, 6, 6);
    } else if (v.direction == 3) { //下
      ctx.fillStyle = "yellow";
      ctx.fillRect(v.x - 3, v.y, 6, 6);
    } else if (v.direction == 4) { //左--输入端
      ctx.fillStyle = "#1890ff";
      ctx.fillRect(v.x - 6, v.y - 3, 6, 6);
    }
  })
}

// 计算图标/图片位置, 可省略，用默认位置。默认上面2/3为图片区域，下面1/3为文字区域。
export function myIconRect(node = Node) {
  // iconRect - 有文字存在时的区域
  node.iconRect = new Rect(node.rect.x, node.rect.y + 10, node.rect.width, (node.rect.height * 2) / 3 - 20);
  // fullIconRect - 没有文字时的区域
  node.fullIconRect = node.rect;
}


// 文字位置, 可省略，用默认位置。默认为节点底部1/3的区域。
export function myTextRect(node = Node) {
  // textRect有图片存在时的区域
  node.textRect = new Rect(
    node.rect.x + 10,
    node.rect.y + (node.rect.height * 3) / 5,
    node.rect.width - 20,
    node.rect.height / 3 - 5
  );
  // fullTextRect- 没有图片时的区域
  node.fullTextRect = node.rect;
}

// 计算锚点, 可省略，用默认锚点，上下左右4个点。
export function myAnchors(node = Node) {
  // 方向：Direction--1上、2右、3下、4左
  // node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height / 2, Direction.Left));
  // node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  // node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height / 2, Direction.Right));
  // node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));

  // 锚点节点只允许in（作为终点）；上面锚点只允许out

  let anchors = node.data.anchors;
  let inLen = anchors['in'].length || 0; //输入口

  anchors['in'].map((v, i) => {
    node.anchors.push(new Point(node.rect.x, node.rect.y + node.rect.height * (i + 1) / (inLen + 1), Direction.Left, i));
    node.anchors[i].mode = AnchorMode.In;
    node.anchors[i].props = JSON.parse(JSON.stringify(v)); //端口类型参数
  });

  let outLen = anchors['out'].length || 0; //输出口
  anchors['out'].map((v, i) => {
    node.anchors.push(new Point(node.rect.x + node.rect.width, node.rect.y + node.rect.height * (i + 1) / (outLen + 1), Direction.Right, i + 100));
    node.anchors[inLen + i].mode = AnchorMode.Out;
    node.anchors[inLen + i].props = JSON.parse(JSON.stringify(v)); //端口类型参数
  });
}
