import tp from "./topology.js"; //导入绘图js
import myComponent from './components.js'; //导入自定义组件数据
import single from "./single.js";

import imgSuccess from '@/pages/main/images/success.png'; //成功
import imgFail from '@/pages/main/images/error.png'; //失败
import imgLoad from '@/pages/main/images/success.png'; //运行中

export default {
  data() {
    return {
      wsURL: 'ws://localhost:8088/socket', //链接socket服务器
      canvasData: { //绘图数据
        "pens": [],
        "lineName": "polyline", //默认连线（名称）类型,curve:贝塞尔曲线,polyline:折线,line:直线
        "fromArrowType": "circleSolid", //连线起点默认箭头
        "toArrowType": "circle", //连线终点默认箭头
        "scale": 1, // 画布缩放大小
        "locked": 0, //画布锁定状态;0未锁定,可任意编辑;1只读模式，允许选中;2禁止鼠标交互，无法做任何操作。纯静态画面模式。
        "bkImage": "", //画布的背景图片
        "bkColor": "" //画布的背景色
      },
      treeData: [{
        title: '全部',
        expand: true,
        children: [{
            title: '我的组件',
            expand: false,
            children: [{
              title: '缺失值填充',
              componentName: 'Fillna'
            }, {
              title: '去除重复数据',
              componentName: 'DropDuplicate'
            }, {
              title: '多项式特征',
              componentName: 'PolynomualFeature'
            }]
          },
          {
            title: '基本形状',
            expand: false,
            children: [{
                title: '正方形',
                componentName: 'square_ud'
              }, {
                title: '矩形(左右布局)',
                componentName: 'rectangle_fr'
              },
              {
                title: '矩形(上下布局)',
                componentName: 'rectangle_ud'
              },
              {
                title: '圆角矩形(左右布局)',
                componentName: 'rectangle_fr_radius'
              },
              {
                title: '圆',
                componentName: 'circle'
              },
              {
                title: '三角形',
                componentName: 'triangle'
              },
              {
                title: '菱形',
                componentName: 'diamond'
              },
              {
                title: '五边形',
                componentName: 'pentagon'
              },
              {
                title: '六边形',
                componentName: 'hexagon'
              },
              {
                title: '五角星',
                componentName: 'pentagram'
              },
              {
                title: '左箭头',
                componentName: 'leftArrow'
              },
              {
                title: '右箭头',
                componentName: 'rightArrow'
              },
              {
                title: '双向箭头',
                componentName: 'twowayArrow'
              },
              {
                title: '直线',
                componentName: 'line'
              },
              {
                title: '云',
                componentName: 'cloud'
              },
              {
                title: '消息框',
                componentName: 'message'
              },
              {
                title: '文档',
                componentName: 'file'
              },
              {
                title: '文本',
                componentName: 'text'
              },
              {
                title: '图片',
                componentName: 'image'
              },
              {
                title: '多维数据集',
                componentName: 'cube'
              },
              {
                title: '人',
                componentName: 'people'
              }, ,
              {
                title: '视频/网页',
                componentName: 'videoWeb'
              }
            ]
          },
          {
            title: '流程图',
            expand: false,
            children: [{
                title: '开始',
                componentName: 'dataStartFlow'
              },
              {
                title: '流程',
                componentName: 'dataProgress'
              },
              {
                title: '判断',
                componentName: 'dataDiamond'
              },
              {
                title: '数据',
                componentName: 'dataFlow'
              },
              {
                title: '准备',
                componentName: 'dataHexagon'
              },
              {
                title: '子流程',
                componentName: 'dataSubprocess'
              },
              {
                title: '数据库',
                componentName: 'dataFlowDb'
              },
              {
                title: '文档',
                componentName: 'dataDocument'
              },
              {
                title: '内部存储',
                componentName: 'dataInterStorage'
              },
              {
                title: '外部存储',
                componentName: 'dataOuterStorage'
              },
              {
                title: '队列',
                componentName: 'dataQueue'
              },
              {
                title: '手动输入',
                componentName: 'dataManually'
              },
              {
                title: '展示',
                componentName: 'dataDisplay'
              },
              {
                title: '并行模式',
                componentName: 'dataParallel'
              },
              {
                title: '注释',
                componentName: 'dataComment'
              }
            ]
          },
          {
            title: '活动图',
            expand: false,
            children: [{
                title: '开始',
                componentName: 'actTransparent'
              },
              {
                title: '结束',
                componentName: 'actFinal'
              },
              {
                title: '活动',
                componentName: 'actProgress'
              },
              {
                title: '决策',
                componentName: 'actDiamond'
              },
              {
                title: '垂直泳道',
                componentName: 'actSwimlaneV'
              },
              {
                title: '水平泳道',
                componentName: 'actSwimlaneH'
              },
              {
                title: '垂直分岔/汇合',
                componentName: 'actForkV'
              },
              {
                title: '水平分岔/汇合',
                componentName: 'actForkH'
              }
            ]
          },
          {
            title: '时序图和类图',
            expand: false,
            children: [{
                title: '生命线',
                componentName: 'seqLifeline'
              },
              {
                title: '激活',
                componentName: 'sequenceFocus'
              },
              {
                title: '简单类',
                componentName: 'seqSimpleClass'
              },
              {
                title: '类',
                componentName: 'seqInterfaceClass'
              }
            ]
          },
          {
            title: '图表控件',
            expand: false,
            children: [{
                title: '折线图',
                componentName: 'echartsLine'
              },
              {
                title: '饼图',
                componentName: 'echartsPie'
              },
              {
                title: '柱状图',
                componentName: 'echartsBar'
              }
            ]
          }
        ]
      }], //左侧树节点
      propsData: null, //当前选中节点，右侧参数配置
      lockType: false, //当前画布是否锁定
    };
  },

  created() {

  },

  mounted() {
    var that = this;
    // 2. 创建画布
    // 其中，第一个参数'topo-canvas'表示canvas所在的父dom元素id;
    // 第二个参数{}表示画布选项，这里表示全部使用默认值。具体选项请参考后面的api文档。
    that.canvas = new tp.Topology("topo-canvas", {
      color: '#aaa', //画布默认节点、连线颜色
      font: { //画布默认字体
        color: '#666',
        fontSize: 12
      },
      fromArrowType: 'circle', //连线起点默认箭头
      toArrowType: 'triangleSolid', //连线终点默认箭头

      nodeIconColor: '#709AE1', //节点图标色
      nodeFillStyle: '#fff', //节点背景色
      nodeIconSize: 40, //节点图标大小

      // hoverColor: 'blue',  //锚点颜色
      hideHoverAnchor: true, //是否隐藏节点锚点--自定义

      hideInput: true, //是否禁止双击节点文字，出现文字输入框
      hideSizeCP: true, //是否隐藏节点大小控制点
      hideRotateCP: true, //是否隐藏节点旋转控制点
      disableScale: false, //是否禁止默认的Ctrl + 鼠标滚轮缩放
      disableEmptyLine: true, //是否禁止连线终点为空（未连接到节点）
      on: (event, data) => {
        // console.log('当前选中节点====', event);
        switch (event) {
          case 'node':
            that.propsData = data; //当前选中节点
            // console.log('当前选中节点===', data);
            if (that.lockType) {
              that.$Message.warning({
                background: true,
                content: '当前画布处于运行状态，请停止运行后编辑！'
              });
            }
            break;
          case 'addNode': //添加节点事件
            that.propsData = data; //当前选中节点
            break;
            // case 'addLine': //添加连线事件
            //   break;
          case 'moveOutLine': //鼠标选中了一条连线
            if (!data.from.id || !data.to.id) {
              that.canvas.delete(); //连线起始终点缺失，删除当前连线
              return;
            }

            if (data.to.id) {
              if (data.from.props && data.to.props) {
                let fromType = data.from.props.ancType;
                let toType = data.to.props.ancType;
                if (fromType != toType) {
                  that.$Message.warning({
                    background: true,
                    content: '数据类型不匹配',
                    onClose: () => {
                      // that.canvas.delete(); //端口类型不匹配，删除连线
                      that.canvas.data.pens.pop();
                      that.canvas.render();
                    }
                  });
                }
              }
            }

            break;
          case 'space':
            // 点击空白区域，隐藏右键菜单
            $("#canvas_menus").hide();
            break;
          default:
            break;
        }
      }
    });

    // console.log('canvas=====', that.canvas);

    // 3. 渲染图形
    // that.canvas.open(single);

    that.canvas.open(that.canvasData);

    that.canvas.scaleTo(0.8); //缩放画布


    // 隐藏显示
    // $("body").click(function (event) {
    //   $("#canvas_menus").hide();
    // });
  },

  methods: {
    // 渲染树节点
    renderContent(h, {
      root,
      node,
      data
    }) {
      var self = this;
      // console.log('当前节点数据==', data);
      let iconType = 'ios-paper-outline';
      if (data.children) {
        iconType = 'ios-folder-outline';
      }
      return h('div', {
        style: {
          display: 'inline-block',
          width: '100%',
          cursor: 'pointer'
        },
        class: [data.children ? 'file-parent' : 'file-child']
      }, [
        h('div', {
          attrs: {
            draggable: !data.children //子节点拖拽
          },
          on: {
            click: () => { //点击树节点
              data.expand = !data.expand; //打开、关闭节点
            },
            dragstart: (event) => {
              // 创建拖拽节点
              let nodeAdd = JSON.parse(JSON.stringify(myComponent[data.componentName]));
              let pensData = self.canvas.data.pens;
              let num = 0;
              pensData.map(res => {
                if (res.type != 1) { //type:0节点,1连线
                  if (res.name == data.componentName) {
                    num++;
                  }
                }
              });

              if (num) {
                nodeAdd.text += num;
              }
              nodeAdd.iconColor = nodeAdd.iconColor || self.canvas.options.nodeIconColor; //节点图标色
              nodeAdd.fillStyle = nodeAdd.fillStyle || self.canvas.options.nodeFillStyle; //节点背景色
              nodeAdd.iconSize = nodeAdd.iconSize || self.canvas.options.nodeIconSize; //节点图标大小

              event.dataTransfer.setData('Text', JSON.stringify(nodeAdd));
            }
          }
        }, [
          h('Icon', {
            props: {
              type: iconType
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ])
      ]);
    },

    // 画布右键属性
    onContextmenu(e) {
      var that = this;
      //设置右键菜单
      if (that.propsData != null) {

      }
      //显示右键菜单
      $("#canvas_menus").css({
        "left": e.clientX,
        "top": e.clientY
      }).show();
    },

    // 更新节点数据
    onUpdateProps(node) {
      // 如果是node属性改变，需要传入node，重新计算node相关属性值
      // 如果是line属性改变，无需传参
      this.canvas.updateProps(true, [node]);
    },

    //链接socket服务器
    connectWebSocket: function () {
      var that = this;
      if (window.WebSocket) {
        let socket = new WebSocket(that.wsURL);
        socket.onmessage = function (event) {
          console.log("收到新消息!", event);
        };
        socket.onopen = function (event) {
          console.log("打开WebSoket 服务正常，浏览器支持WebSoket!");
        };
        socket.onclose = function (event) {
          console.log("WebSocket 关闭");
        };
        window.socket = socket;
      } else {
        console.log("您的浏览器不支持WebSocket协议！");
      }
    },

    // 运行流程图
    runKnowledgeMap() {
      var self = this;
      self.canvas.lock(1); //锁定画布
      self.lockType = true; //当前画布是否锁定

      let loadMsg = self.$Message.loading({
        background: true,
        content: 'Loading...',
      });


      setTimeout(function () {
        self.$Message.destroy();

        self.canvas.data.pens.map(v => {
          if (v.type == 0) {
            var rect = v.rect;
            var src = '<img id="' + v.id + '" src="' + imgSuccess + '" alt class="status-icon" style="left:' + rect.center.x + 'px;top:' + rect.center.y + 'px"/>';

            // 判断当前节点是否已添加图标
            if (!!document.getElementById(v.id)) {
              $('#' + v.id).src = imgFail;
            } else {
              $('#statusBox').append(src);
            }
          }
        })
      }, 3000);

      /* $.ajax({
        url: '/rest/doDispatch',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
          json: JSON.stringify(self.canvas.data)
        },
        success: function (res) {
          if (res.code == 0) {
            self.connectWebSocket(); //链接socket服务器
          } else {
            self.$Message.error({
              background: true,
              content: res.message
            });
          }
        }
      }); */
    },

    // 停止运行流程图
    stopKnowledgeMap(e) {
      var self = this;
      self.canvas.lock(0); //锁定画布
      self.lockType = false; //当前画布是否锁定
      $('#statusBox').empty();

      if (window.socket) {
        window.socket.close(); //关闭websocket连接
      }
    },

    // 保存画布数据
    saveKnowledgeMap: function (id) {
      var self = this;
      // console.log("保存画布数据==", JSON.stringify(self.canvas.data));
      console.log("保存画布数据==", self.canvas.data);
    },

    // 绑定键盘事件
    bindKeyEvent: function () {
      var self = this;
      // 监听键盘快捷键
      $(document).keydown(function (e) {
        //撤销 ctrl+z
        if (e.ctrlKey && e.which === 90) {
          self.canvas.undo();
        }
        //恢复 ctrl+shift+z
        if (e.ctrlKey && e.shiftKey === 90 && e.which === 90) {
          self.canvas.redo();
        }
        //剪切 ctrl+x
        if (e.ctrlKey && e.which === 88) {
          self.canvas.cut();
        }
        //复制 ctrl+c
        if (e.ctrlKey && e.which === 67) {
          self.canvas.copy();
        }
        //粘贴 ctrl+v
        if (e.ctrlKey && e.which === 86) {
          self.canvas.parse();
        }
      });

    }
  },

  destroyed() {
    if (window.socket) {
      window.socket.close(); //关闭websocket连接
    }
  }
};
