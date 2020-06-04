export default {
  data() {
    return {
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
      curTab: 0, //0任务管理,1任务模版
      runType: '0', //0全部,1运行中,2未运行
    };
  },

  created() {

  },

  mounted() {

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
    }
  }
}
