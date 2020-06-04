<template>
  <div class="mainContainer" id="mainDIV">
    <div class="toolbar">
      <ButtonGroup>
        <template>
          <Button
            type="primary"
            icon="ios-pause"
            title="停止"
            @click="stopKnowledgeMap"
            v-if="lockType"
          ></Button>
          <Button
            type="primary"
            icon="md-arrow-dropright-circle"
            title="运行"
            @click="runKnowledgeMap"
            v-else
          ></Button>
        </template>
        <Button
          type="primary"
          icon="md-cloud-done"
          title="保存"
          @click="saveKnowledgeMap"
        ></Button>
      </ButtonGroup>
    </div>
    <Row>
      <Col span="3">
        <!-- <zTree :treeNodes.sync="treeData"></zTree> -->
        <Tree
          :data="treeData"
          :render="renderContent"
          class="demo-tree-render"
        ></Tree>
      </Col>
      <Col span="16">
        <div
          class="canvas"
          id="topo-canvas"
          @contextmenu.prevent="onContextmenu"
        >
          <div id="statusBox"></div>
        </div>

        <!--右键菜单定义-->
        <div class="context-menus" id="canvas_menus" style="display: none;">
          <div class="menu-item">
            <a class="menu">锁定</a>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <a class="menu">删除</a>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <a class="menu">从此处开始运行</a>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <a class="menu">运行到此处</a>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <a class="menu">运行该节点</a>
          </div>
        </div>
      </Col>
      <Col span="5">
        <argment :argsData.sync="propsData" @upChange="onUpdateProps"></argment>
      </Col>
    </Row>
  </div>
</template>

<script>
import $ from "jquery";
import main from "./js/main.js";
import zTree from "./components/zTree/zTree.vue"; //左侧树节点
import argment from "./components/argment/argment.vue"; //右侧参数配置
export default {
  mixins: [main],
  components: { zTree, argment },
};
</script>

<style scoped>
@import url("./fonts/iconfont.css");
@import url("./css/index.css");
#mainDIV >>> .status-icon {
  display: block;
  position: absolute;
  z-index: 999;
  width: 25px;
  height: 25px;
}
</style>
