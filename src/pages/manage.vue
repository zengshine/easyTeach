<template>
  <div class="content-wrapper managepage">
    <section class="left-part-nav">
      <div class="collapse-btn">
        <div class="collapse-icon-ct"></div>
      </div>
      <section class="logo">
        <div class="img-ct"></div>
        <br>
        <div class="name-ct">Element样例测试中心</div>
      </section>
      <section class="menu-ct">
        <div class="menu-item" :class="{'selected':item.name=='师生档案'}" v-for="item in leftMenuList" @click="gotoAddress(item.path)">
          <div class="item-icon-ct" :class="[item.iconClass]">
          </div>
          <div class="item-text-ct">{{item.name}}</div>
        </div>
      </section>
      <section class="page-tip-ct hidden">
        <div class="manage-page-tips">
          <span class="tips-close-btn">
            <i class="el-icon-error"></i>
          </span>
          <div class="page-tips-text">
            <span>温馨提示：<br> 您的账户资料审核期 即将到期，请于2017 年11月28日前重新提 交审核资料，以免影 响正常使用！
            </span>
          </div>
          <div class="page-tips-btn">
            <span>马上提交</span>
          </div>
        </div>
        <div class="page-version">
          <span>VERSION1.0</span>
        </div>
      </section>
    </section>
    <section class="right-part-content">
      <section class="left-right-inline-layout shadow-divider height-50 bg-white ps-rel">
        <div class="left-part"></div>
        <div class="right-part">
          <div class="right-part-item">
            <span>
              <i class="fa fa-commenting-o"></i>
            </span>
          </div>
          <div class="right-part-item">
            <span class="manage-bell-count">15</span>
            <span>
              <span>
                <i class="fa fa-bell-o"></i>
              </span>
            </span>
          </div>
          <div class="right-part-item user-info">
            <span>hello,Mrs C</span>
            <img src="../../static/images/avatars/avatar-1.jpg">
          </div>
          <div class="right-part-item">
            <span>
              <span>
                <i class="fa fa-sign-out"></i>
              </span>
            </span>
          </div>
        </div>
      </section>
       <router-view></router-view>
    </section>
    <!-- 模态框容器 -->
    <section>
      <el-dialog title="信息录入" :visible.sync="infoFormVisible">
        <el-form class="infoInputForm" :model="infoForm" :inline="true" :label-width="formLabelWidth" size="mini" label-position="top">
          <el-form-item style="width:100%;" label="姓名">
            <el-input v-model="infoForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;" label="性别">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学校">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <br>
          <div class="contacts-ct" v-for="item in infoForm.contacts">
            <el-form-item label="联系人">
              <el-input v-model="item.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="关系">
              <el-select v-model="item.relation" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系号码">
              <el-input v-model="item.telNum" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="主联系人" label-position="right">
              <el-switch v-model="infoForm.birthdayNotify" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <br>
            <div class="add-relationship">
              <span class="add-plus-circle">+</span>添加联系人</div>
            <br>
          </div>
          <br>
          <el-form-item label="生日">
            <el-date-picker v-model="infoForm.birthday" type="date" placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="生日提醒">
            <el-switch v-model="infoForm.birthdayNotify" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <br>
          <el-form-item label="家庭地址">
            <el-input v-model="infoForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="省份">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="市区">
            <el-select v-model="infoForm.gender" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item class="textarea-item" label="备注" width="100%">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="infoForm.marker">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>

<style lang="scss" src="../../static/sass/main.scss">

</style>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      value: "",
      isNavFixed: false,
      leftMenuList: [
        { name: "工作窗口", iconClass: "workWindows",path:'/infoInput' },
        { name: "师生档案", iconClass: "tsFiles",path:'/' },
        { name: "课程管理", iconClass: "courseManage",path:'/courseManage' },
        { name: "班级管理", iconClass: "classManage" },
        { name: "服务商店", iconClass: "serviceStore" }
      ],
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
      var pageW =
        document.body.clientWidth || document.documentElement.clientWidth;
      var pageH =
        document.body.clientHeight || document.documentElement.clientHeight;
      vm.tableHeight = pageH - (50 + 50 + 60 + 50 + 30) + "";
      var rightPartW = pageW - 250;
      document.querySelector(".managepage .right-part-content").style.width =
        rightPartW + "px";
      //document.querySelector(".left-part-nav").style.height=pageH+'px';
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
    gotoAddress(path){
     var vm=this;
     vm.$router.push(path);
    },
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
