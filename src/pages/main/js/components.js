export default {
  square_ud: { //正方形
    text: '正方形',
    rect: {
      width: 90,
      height: 90
    },
    icon: "\ue6ac",
    iconFamily: "iconfont",
    name: "square"
  },
  rectangle_fr: { //矩形(左右布局)
    text: '矩形(左右布局)',
    rect: {
      width: 120,
      height: 90
    },
    icon: "\ue6ac",
    iconFamily: "iconfont",
    name: "rectangle"
  },
  rectangle_ud: { //矩形(上下布局)
    text: '矩形(上下布局)',
    rect: {
      width: 90,
      height: 120
    },
    icon: "\ue6ac",
    iconFamily: "iconfont",
    name: "square"
  },
  rectangle_fr_radius: { //圆角矩形(左右布局)
    text: '圆角矩形(左右布局)',
    rect: {
      width: 120,
      height: 90
    },
    borderRadius: 0.1,
    name: "square"
  },
  circle: { //圆
    text: '圆',
    rect: {
      width: 90,
      height: 90
    },
    name: "circle"
  },
  triangle: {
    text: '三角形',
    rect: {
      width: 90,
      height: 90
    },
    name: 'triangle'
  },
  diamond: {
    text: '菱形',
    rect: {
      width: 90,
      height: 90
    },
    name: 'diamond'
  },
  pentagon: {
    text: '五边形',
    rect: {
      width: 90,
      height: 90
    },
    name: 'pentagon'
  },
  hexagon: {
    text: '六边形',
    rect: {
      width: 90,
      height: 90
    },
    name: 'hexagon'
  },
  pentagram: {
    text: '五角星',
    rect: {
      width: 90,
      height: 90
    },
    name: 'pentagram'
  },
  leftArrow: {
    text: '左箭头',
    rect: {
      width: 200,
      height: 90
    },
    name: 'leftArrow'
  },
  rightArrow: {
    text: '右箭头',
    rect: {
      width: 200,
      height: 90
    },
    name: 'rightArrow'
  },
  twowayArrow: {
    text: '双向箭头',
    rect: {
      width: 200,
      height: 90
    },
    name: 'twowayArrow'
  },
  line: {
    text: '直线',
    rect: {
      width: 90,
      height: 90
    },
    name: 'line'
  },
  cloud: {
    text: '云',
    rect: {
      width: 90,
      height: 90
    },
    name: 'cloud'
  },
  message: {
    text: '消息框',
    rect: {
      width: 90,
      height: 90
    },
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    name: 'message'
  },
  file: {
    text: '文档',
    rect: {
      width: 80,
      height: 90
    },
    name: 'file'
  },
  text: {
    text: '文本',
    rect: {
      width: 160,
      height: 30
    },
    name: 'text'
  },
  image: {
    text: '图片',
    rect: {
      width: 90,
      height: 90
    },
    name: 'image',
    image: '/assets/img/logo.png'
  },
  cube: {
    text: '多维数据集',
    rect: {
      width: 50,
      height: 70
    },
    is3D: true,
    z: 10,
    zRotate: 15,
    fillStyle: '#ddd',
    name: 'cube',
    icon: "\ue6ac",
    iconFamily: "iconfont",
    iconColor: '#777',
    iconSize: 30
  },
  people: {
    text: 'people',
    rect: {
      width: 70,
      height: 90
    },
    name: 'people'
  },
  videoWeb: {
    text: '视频/网页',
    rect: {
      width: 200,
      height: 200
    },
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    // strokeStyle: 'transparent',
    name: 'div'
  },

  /** 流程图  */
  dataStartFlow: {
    text: '开始',
    rect: {
      width: 120,
      height: 40
    },
    borderRadius: 0.5,
    name: 'rectangle'
  },
  dataProgress: {
    text: '流程',
    rect: {
      width: 120,
      height: 40
    },
    name: 'rectangle'
  },
  dataDiamond: {
    text: '判断',
    rect: {
      width: 120,
      height: 60
    },
    name: 'diamond'
  },
  dataFlow: {
    text: '数据',
    rect: {
      width: 120,
      height: 50
    },
    name: 'flowData'
  },
  dataHexagon: {
    text: '准备',
    rect: {
      width: 120,
      height: 50
    },
    name: 'hexagon'
  },
  dataSubprocess: {
    text: '子流程',
    rect: {
      width: 120,
      height: 50
    },
    name: 'flowSubprocess'
  },
  dataFlowDb: {
    text: '数据库',
    rect: {
      width: 80,
      height: 120
    },
    name: 'flowDb'
  },
  dataDocument: {
    text: '文档',
    rect: {
      width: 120,
      height: 90
    },
    name: 'flowDocument'
  },
  dataInterStorage: {
    text: '内部存储',
    rect: {
      width: 120,
      height: 80
    },
    name: 'flowInternalStorage'
  },
  dataOuterStorage: {
    text: '外部存储',
    rect: {
      width: 120,
      height: 80
    },
    name: 'flowExternStorage'
  },
  dataQueue: {
    text: '队列',
    rect: {
      width: 90,
      height: 90
    },
    name: 'flowQueue'
  },
  dataManually: {
    text: '手动输入',
    rect: {
      width: 120,
      height: 80
    },
    name: 'flowManually'
  },
  dataDisplay: {
    text: '展示',
    rect: {
      width: 120,
      height: 80
    },
    name: 'flowDisplay'
  },
  dataParallel: {
    text: '并行模式',
    rect: {
      width: 120,
      height: 50
    },
    name: 'flowParallel'
  },
  dataComment: {
    text: '注释',
    rect: {
      width: 90,
      height: 90
    },
    name: 'flowComment'
  },

  /**活动图**/
  actTransparent: {
    text: 'start',
    rect: {
      width: 30,
      height: 30
    },
    name: 'circle',
    fillStyle: '#555',
    strokeStyle: 'transparent'
  },
  actFinal: {
    text: 'end',
    rect: {
      width: 30,
      height: 30
    },
    name: 'activityFinal'
  },
  actProgress: {
    text: '活动',
    rect: {
      width: 120,
      height: 50
    },
    borderRadius: 0.25,
    name: 'rectangle'
  },
  actDiamond: {
    text: '决策',
    rect: {
      width: 120,
      height: 50
    },
    name: 'diamond'
  },
  actSwimlaneV: {
    text: '垂直泳道',
    rect: {
      width: 200,
      height: 500
    },
    name: 'swimlaneV'
  },
  actSwimlaneH: {
    text: '水平泳道',
    rect: {
      width: 500,
      height: 200
    },
    name: 'swimlaneH'
  },
  actForkV: {
    text: '垂直分岔/汇合',
    rect: {
      width: 10,
      height: 150
    },
    name: 'forkV',
    fillStyle: '#555',
    strokeStyle: 'transparent'
  },
  actForkH: {
    text: '水平分岔/汇合',
    rect: {
      width: 150,
      height: 10
    },
    name: 'forkH',
    fillStyle: '#555',
    strokeStyle: 'transparent'
  },

  /**'时序图和类图 */
  seqLifeline: {
    text: '生命线',
    rect: {
      width: 150,
      height: 400
    },
    name: 'lifeline'
  },
  sequenceFocus: {
    text: '激活',
    rect: {
      width: 12,
      height: 200
    },
    name: 'sequenceFocus'
  },
  seqSimpleClass: {
    text: '简单类',
    rect: {
      width: 270,
      height: 200
    },
    paddingTop: 40,
    font: {
      fontFamily: 'Arial',
      color: '#222',
      fontWeight: 'bold'
    },
    fillStyle: '#ffffba',
    strokeStyle: '#7e1212',
    name: 'simpleClass',
    children: [{
      text: '- name: string\n+ setName(name: string): void',
      name: 'text',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
      rectInParent: {
        x: 0,
        y: 0,
        width: '90%',
        height: '90%',
        rotate: 0
      },
      font: {
        fontFamily: 'Arial',
        color: '#222',
        textAlign: 'left',
        textBaseline: 'top'
      }
    }]
  },
  seqInterfaceClass: {
    text: '类',
    rect: {
      width: 270,
      height: 200
    },
    paddingTop: 40,
    font: {
      fontFamily: 'Arial',
      color: '#222',
      fontWeight: 'bold'
    },
    fillStyle: '#ffffba',
    strokeStyle: '#7e1212',
    name: 'interfaceClass',
    children: [{
        text: '- name: string',
        name: 'text',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        rectInParent: {
          x: 0,
          y: 0,
          width: '90%',
          height: '50%',
          rotate: 0
        },
        font: {
          fontFamily: 'Arial',
          color: '#222',
          textAlign: 'left',
          textBaseline: 'top'
        }
      },
      {
        text: '+ setName(name: string): void',
        name: 'text',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        rectInParent: {
          x: 0,
          y: '50%',
          width: '90%',
          height: '50%',
          rotate: 0
        },
        font: {
          fontFamily: 'Arial',
          color: '#222',
          textAlign: 'left',
          textBaseline: 'top'
        }
      }
    ]
  },

  /**图表控件 */
  echartsLine: {
    text: '折线图',
    rect: {
      width: 300,
      height: 200
    },
    name: 'echarts',
    data: {
      echarts: {
        option: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        }
      }
    }
  },
  echartsPie: {
    text: '饼图',
    rect: {
      width: 300,
      height: 300
    },
    name: 'echarts',
    data: {
      echarts: {
        option: {
          series: [{
            type: 'pie',
            data: [{
                value: 335,
                name: '直接访问'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 234,
                name: '联盟广告'
              },
              {
                value: 135,
                name: '视频广告'
              },
              {
                value: 1548,
                name: '搜索引擎'
              }
            ]
          }]
        }
      }
    }
  },
  echartsBar: {
    text: '柱状图',
    rect: {
      width: 300,
      height: 200
    },
    name: 'echarts',
    data: {
      echarts: {
        option: {
          color: ['#3398DB'],
          xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }]
        }
      }
    }
  },


  /** 用户自定义组件 */
  Fillna: {
    text: '缺失值填充', //节点默认文本
    rect: { //节点大小
      width: 90,
      height: 90
    },
    icon: "\ue6ac", //节点图标
    iconFamily: "iconfont",
    borderRadius: 0.05, //节点边框圆角
    name: 'Fillna', //节点组件名称
    bkType: 0, //0纯色背景,1线性渐变,2径向渐变
    //用户自定义属性
    data: {
      componentType: 0, //节点数据类型
      anchors: {
        in: [{ //输入
          ancType: 0,
          title: '无'
        }, {
          ancType: 1,
          title: '数据表'
        }],
        out: [{
          ancType: 0,
          title: '无'
        }, {
          ancType: 1,
          title: '数据表'
        }, { //输出
          ancType: 2,
          title: '模型'
        }]
      }
    }
  },
  DropDuplicate: {
    text: '去除重复数据',
    rect: {
      width: 90,
      height: 90
    },
    icon: "\ue69e",
    iconFamily: "iconfont",
    borderRadius: 0.05,
    name: 'DropDuplicate',
    //用户自定义属性
    data: {
      componentType: 0, //节点数据类型
      anchors: {
        in: [{ //输入
          ancType: 2,
          title: '模型'
        }, { //输入
          ancType: 1,
          title: '数据表'
        }],
        out: [{ //输出
          ancType: 0,
          title: '无'
        }, {
          ancType: 1,
          title: '数据表'
        }]
      }
    }
  },
  PolynomualFeature: {
    text: '多项式特征',
    rect: {
      width: 90,
      height: 90
    },
    icon: "\ue658",
    iconFamily: "iconfont",
    borderRadius: 0.05,
    name: 'PolynomualFeature',
    //用户自定义属性
    data: {
      componentType: 0, //节点数据类型
      anchors: {
        in: [{ //输入
          ancType: 0,
          title: '无'
        }, {
          ancType: 1,
          title: '数据表'
        }, {
          ancType: 2,
          title: '模型'
        }],
        out: [{ //输出
          ancType: 3,
          title: '非结构化数据'
        }, {
          ancType: 4,
          title: '系统事件'
        }]
      }
    }
  }


}
