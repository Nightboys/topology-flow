<template>
  <div id="flex_props_home">
    <!-- 选中为空 -->
    <div class="canvas-tips">
      <div class="welcome">欢迎使用苏畅数据智能平台</div>
      <div class="canvas-content">
        <div class="title">小提示</div>
        <ul class="group">
          <li>方向键：控制节点移动5个像素</li>
          <li>Ctrl + 方向键：控制节点移动1个像素</li>
          <li>Ctrl + 鼠标移动：移动整个画布</li>
          <li>Ctrl + 鼠标滚轮：缩放</li>
          <li>添加或选中节点，右侧属性支持上传各种图片哦</li>
        </ul>
      </div>
    </div>
    <!-- 选中节点 -->
    <div class="canvas-props" v-if="argsData">
      <div class="node-content">
        <div class="title">节点名称</div>
        <div class="canvas-content">
          <Input v-model="argsData.text" placeholder="Enter something..." @on-change="onChange" />
        </div>
      </div>

      <div class="rect-content">
        <div class="title">位置和大小</div>
        <div class="canvas-content">
          <Row>
            <Col span="12">
              <div>X（px）</div>
            </Col>
            <Col span="12">
              <div>Y（px）</div>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <InputNumber v-model="argsData.rect.x" @on-change="onChange"></InputNumber>
            </Col>
            <Col span="12">
              <InputNumber v-model="argsData.rect.y" @on-change="onChange"></InputNumber>
            </Col>
          </Row>

          <Row>
            <Col span="12">
              <div>宽（px）</div>
            </Col>
            <Col span="12">
              <div>高（px）</div>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <InputNumber v-model="argsData.rect.width" @on-change="onChange"></InputNumber>
            </Col>
            <Col span="12">
              <InputNumber v-model="argsData.rect.height" @on-change="onChange"></InputNumber>
            </Col>
          </Row>
        </div>
      </div>

      <div class="port-content" v-if="argsData.data.anchors.in">
        <div class="title">
          输入端口
          <Icon class="addIcon" type="md-add-circle" @click="addIntPort" />
        </div>
        <div class="canvas-content">
          <Collapse>
            <Panel v-for="(item, index) in argsData.data.anchors.in" :key="index">
              端口{{ index + 1 }}
              <div slot="content">
                <Row>
                  <Col span="8">
                    <div class="label">提示文本：</div>
                  </Col>
                  <Col span="16">
                    <Input
                      v-model="item.title"
                      placeholder="Enter something..."
                      @on-change="onChange"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span="8">
                    <div class="label">输入类型：</div>
                  </Col>
                  <Col span="16">
                    <Select v-model="item.ancType" @on-change="onChange">
                      <Option
                        v-for="opt in ancTypeList"
                        :value="opt.value"
                        :key="opt.value"
                      >{{ opt.label }}</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>

      <div class="port-content" v-if="argsData.data.anchors.out">
        <div class="title">
          输出端口
          <Icon class="addIcon" type="md-add-circle" @click="addOutPort" />
        </div>
        <div class="canvas-content">
          <Collapse>
            <Panel v-for="(item, index) in argsData.data.anchors.out" :key="index">
              端口{{ index + 1 }}
              <div slot="content">
                <Row>
                  <Col span="8">
                    <div class="label">提示文本：</div>
                  </Col>
                  <Col span="16">
                    <Input
                      v-model="item.title"
                      placeholder="Enter something..."
                      @on-change="onChange"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span="8">
                    <div class="label">输出类型：</div>
                  </Col>
                  <Col span="16">
                    <Select v-model="item.ancType" @on-change="onChange">
                      <Option
                        v-for="opt in ancTypeList"
                        :value="opt.value"
                        :key="opt.value"
                      >{{ opt.label }}</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import argment from "./js/argment.js"; //右侧参数配置
export default {
  mixins: [argment]
};
</script>
<style scoped>
@import url("../../fonts/iconfont.css");
@import url("./css/argment.css");
</style>
