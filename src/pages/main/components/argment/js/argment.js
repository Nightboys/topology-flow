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

export default {
  data() {
    return {
      ancTypeList: [{
        label: '无',
        value: 0
      }, {
        label: '数据表',
        value: 1
      }, {
        label: '模型',
        value: 2
      }, {
        label: '非结构化数据',
        value: 3
      }, {
        label: '系统事件',
        value: 4
      }]
    };
  },
  props: {
    argsData: {
      type: Object,
      require: true
    }
  },
  methods: {
    //  参数值更新
    onChange(value) {
      this.$emit("upChange", this.argsData);
    },

    // 新增输入端口
    addIntPort() {
      var that = this;
      that.argsData.data.anchors.in.push({
        ancType: 0,
        title: '输入端口'
      });

      that.onChange();
    },

    // 新增输出端口
    addOutPort() {
      var that = this;
      that.argsData.data.anchors.out.push({
        ancType: 0,
        title: '输出端口'
      });

      that.onChange();
    }
  }
};
