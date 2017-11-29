<template>
  <div class="content-wrapper managepage">
    <section class="left-part-nav">
      <section class="logo">
        <div class="img-ct"></div>
        <br>
        <div class="name-ct">Element样例测试中心</div>
      </section>
      <section class="menu-ct">
        <div class="menu-item" v-for="item in leftMenuList">
          <div class="item-icon-ct" :class="[item.iconClass]">
          </div>
          <div class="item-text-ct">{{item.name}}</div>
        </div>
      </section>
    </section>
    <section class="right-part-content">
      <section class="left-right-inline-layout shadow-divider height-60">
        <div class="left-part"></div>
        <div class="right-part">
          <div class="right-part-item">
            <span>
              <i class="fa fa-commenting-o"></i>
            </span>
          </div>
          <div class="right-part-item">
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
      <section class="left-right-inline-layout solid-divider height-50">
        <div class="left-part info-dimension">
          <div class="item">
            <span class="selected">学生</span>
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
              <i class="fa fa-plus"></i>
            </span>
          </div>
        </div>
      </section>
      <section class="left-right-inline-layout solid-divider height-60">
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
          <div class="item" style="width:130px;">
            <el-input placeholder="姓名/电话" size="small" prefix-icon="el-icon-search" v-model="value"></el-input>
          </div>
        </div>
        <div class="right-part count-info">
          <div class="item">
            <div class="number">775</div>
            <div class="des">
              <span>总人数</span>
            </div>
          </div>
          <div class="item">
            <div class="number">175</div>
            <div class="des">
              <span>在读人数</span>
            </div>
          </div>
          <div class="item">
            <div class="number">275</div>
            <div class="des">
              <span>结课人数</span>
            </div>
          </div>
          <div class="item">
            <div class="number">105</div>
            <div class="des">
              <span>试听人数</span>
            </div>
          </div>
          <div class="item">
            <div class="number">375</div>
            <div class="des">
              <span>流失人数</span>
            </div>
          </div>
        </div>
      </section>
      <!-- 表格内容 -->
      <section class="table-ct">
        <el-table :data="tableData" :max-height="tableHeight">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">
              <div class="table-column">
                <div class="name-img-ct">
                  <div>
                    <img src="../../static/images/manage/男生-预微信头像.png" />
                  </div>
                </div>
                <div class="name-info-ct">
                  <span class="top">{{scope.row.name}}</span>
                  <br>
                  <span class="bottom">家长：刘先生</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="联系电话" width="160">
            <template slot-scope="scope">
              <div>{{scope.row.tel}}</div>
            </template>
          </el-table-column>
          <el-table-column label="年级" width="120">
            <template slot-scope="scope">
              <div>{{scope.row.grade}}</div>
            </template>
          </el-table-column>
          <el-table-column label="课程">
            <template slot-scope="scope">
              <div class="table-column">
                <span class="class-item" v-for="item in scope.row.classes">
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                </span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <!-- 分页组件 -->
      <section class="pagination-ct">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10, 200, 300, 400]"
          :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </section>
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
            <div class="add-relationship"><span class="add-plus-circle">+</span>添加联系人</div>
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
  import axios from 'axios'
  export default {
    components: {
      navTop
    },
    data() {
      return {
        value: '',
        isNavFixed: false,
        leftMenuList: [
          { name: '工作窗口', iconClass: 'workWindows' },
          { name: '师生档案', iconClass: 'tsFiles' },
          { name: '课程管理', iconClass: 'courseManage' },
          { name: '班级管理', iconClass: 'classManage' },
          { name: '收支管理', iconClass: 'expenseManage' },
          { name: '微网管理', iconClass: 'piconectManage' },
          { name: '服务商店', iconClass: 'serviceStore' }
        ],
        options: [{ value: 1, label: 'option1' }, { value: 2, label: 'option1' }, { value: 3, label: 'option1' }, { value: 4, label: 'option1' }, { value: 5, label: 'option1' }],
        tableData: [],
        tableHeight: '1000',
        infoFormVisible: false,
        infoForm: {
          name: "",
          gender: "",
          school: "",
          grade: "",
          class: "",
          contacts: [{ name: '', relation: '', telNum: "" }],
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
    beforeCreate() { },
    //Init injections&reactivity ->
    created() { },
    //create vm.$el and replace 'el' with it ->
    mounted() {
      var vm = this;
      //初始化数据
      (function () {
        vm.$axios.get('http://api/v1/data/typeList').then(function (res) {
          console.log(res);
          vm.tableData = res.data.data;
        }).catch(function (error) {
          console.log(error);
        })
      }())
      //计算右侧内容框的宽度
      function calDomWH() {
        var pageW = document.body.clientWidth || document.documentElement.clientWidth;
        var pageH = document.body.clientHeight || document.documentElement.clientHeight;
        vm.tableHeight = pageH - (60 + 50 + 60 + 50) + '';
        var rightPartW = pageW - 250;
        document.querySelector(".managepage .right-part-content").style.width = rightPartW + 'px';
      }
      calDomWH();
    },
    //when data changes
    beforeUpdate() { },
    //Virtual DOM re-render and patch
    updated() { },
    //when vm.$destroy() is called
    beforeDestroy() { },
    //Teardown watchers,child components and event listenrs
    destroyed() { },
    //method
    methods: {
      handleSizeChange() { },
      handleCurrentChange() { }
    },
    watch: {},
    //computed
    computed: {}
  };
</script>
