<template>
  <div id="manageDiv">
    <Row :gutter="16">
      <Col span="5">
        <div class="lfnr">
          <Tree :data="treeData" :render="renderContent"></Tree>
        </div>
      </Col>
      <Col span="19">
        <div class="rtnr">
          <div class="tab-tabbar">
            <span :class="[curTab==0?'current':'']" @click="curTab=0">任务管理</span>
            <span :class="[curTab==1?'current':'']" @click="curTab=1">任务模版</span>
          </div>
          <div class="tab-listBox">
            <div class="tab-top">
              <RadioGroup v-model="runType" type="button">
                <Radio label="0">全 部</Radio>
                <Radio label="1">运行中</Radio>
                <Radio label="2">未运行</Radio>
              </RadioGroup>
              <div class="tab-top-search">
                <Input search placeholder="请输入搜索关键字" />
              </div>
            </div>
            <div class="tab-content">
              <Row :gutter="16">
                <Col span="6">
                  <div class="tab-list-item tab-add-item">
                    <div class="add-task">
                      <Icon type="md-add" />
                      <p>新建任务</p>
                    </div>
                  </div>
                </Col>
                <template v-for="(item,index) in 6">
                  <Col span="6">
                    <div class="tab-list-item">
                      <div class="image-clip">
                        <img src="./images/canvas.png" class="img-responsive" alt />
                      </div>
                      <div class="task-hover">
                        <div class="task-mask"></div>
                        <div class="task-edit">
                          <div class="task-edit-content row-flex-nowrap">
                            <span class="flex1">编辑</span>
                            <span class="flex1 border">复制</span>
                            <span class="flex1 dlt">删除</span>
                          </div>
                          <p class="task-title">
                            故障预测与健康管理PHM{{index}}
                            <Icon type="ios-create" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </template>
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import manage from "./js/manage.js";
export default {
  mixins: [manage],
  components: {}
};
</script>

<style scoped>
@import url("./fonts/iconfont.css");
@import url("./css/manage.css");
</style>