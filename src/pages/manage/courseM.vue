<template>
  <div>
    <!-- 维度切换 -->
    <section class="left-right-inline-layout solid-divider height-50 bg-white">
      <div class="left-part info-dimension">
        <div class="item selected">
          <span>学生</span>
        </div>
        <div class="item">
          <span>教师</span>
        </div>
        <div class="item">
          <span>管理</span>
        </div>
      </div>
      <div class="right-part">
        <div class="add-btn" @click="infoFormVisible=true">
          <span>
            <i class="el-icon-circle-plus-outline"></i>
          </span>
        </div>
      </div>
    </section>
    <!-- 列表容器 -->
    <section class="dimension-ct">
      <!-- 过滤容器 -->
      <section class="left-right-inline-layout filter-ct solid-divider height-55 bg-white padd-h-20">
        <div class="left-part dropdown-filter">
          <div class="item">
            <el-select v-model="value" placeholder="请选择年级" size="small">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="item">
            <el-select v-model="value" placeholder="请选择类型" size="small">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="item">
            <el-select v-model="value" placeholder="请选择状态" size="small">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="item">
            <el-input placeholder="姓名/电话" size="small" prefix-icon="el-icon-search" v-model="value"></el-input>
          </div>
        </div>
        <div class="right-part count-info">

        </div>
      </section>
      <!-- 排序，及其他操作 -->
      <section class="left-right-inline-layout filter-ct solid-divider height-40 bg-white padd-h-20">
        <div class="left-part course-operate-ct">
          <div class="item">
            <el-checkbox v-model="value" @change="onToggleSiteMarkers">课程</el-checkbox>
          </div>
          <div class="item">人气
            <i class="el-icon-caret-bottom"></i>
          </div>
          <div class="item">年级
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="right-part count-info">
          <div class="item">
            <i class="el-icon-more"></i>
          </div>
        </div>
      </section>
      <!-- 课程内容列表 -->
      <section class="course-list-ct">

      </section>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      value: "",
      isNavFixed: false,
      options: [
        { value: 1, label: "option1" },
        { value: 2, label: "option1" },
        { value: 3, label: "option1" },
        { value: 4, label: "option1" },
        { value: 5, label: "option1" }
      ],
      tableData: [],
      tableHeight: "1000",
      infoFormVisible: false,
      infoForm: {
        name: "",
        gender: "",
        school: "",
        grade: "",
        class: "",
        contacts: [{ name: "", relation: "", telNum: "" }],
        birthday: "",
        birthdayNotify: true,
        address: "",
        province: "",
        city: "",
        marker: ""
      },
      formLabelWidth: "80px"
    };
  },
  //Init Events&lifecycle ->
  beforeCreate() {},
  //Init injections&reactivity ->
  created() {},
  //create vm.$el and replace 'el' with it ->
  mounted() {
    var vm = this;
    //初始化数据
    (function() {
      vm.$axios
        .get("http://api/v1/data/typeList")
        .then(function(res) {
          console.log(res);
          vm.tableData = res.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    })();
    //初始化左侧菜单导航 lmps:left-menu-perfect-scrollbar
    const lmps = new vm.perfectScrollBar(".left-part-nav", {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
    //计算右侧内容框的宽度
    function calDomWH() {
      var pageH =
        document.body.clientHeight || document.documentElement.clientHeight;
      var contentH = pageH - (50 + 50 + 55 + 50 + 40 + 30);
      document.getElementsByClassName(".course-list-ct")[0].style.height =
        contentH + "px";
    }
    calDomWH();
    window.onresize = function() {
      calDomWH();
      lmps.update();
    };
  },
  //when data changes
  beforeUpdate() {},
  //Virtual DOM re-render and patch
  updated() {},
  //when vm.$destroy() is called
  beforeDestroy() {},
  //Teardown watchers,child components and event listenrs
  destroyed() {},
  //method
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    handleMore() {},
    onSelectedTableRow(row, event) {},
    handleRowSelected() {}
  },
  watch: {},
  //computed
  computed: {}
};
</script>
