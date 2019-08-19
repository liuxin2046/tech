<template>
<div>
  <el-row type="flex" justify="end" align="middle" class="row">
    <el-col :span="5"><div class="admin">您好,管理员,欢迎登陆管理系统</div></el-col>
  </el-row>
  <el-row type="flex" align="middle" class="row breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>
  <el-form :inline="true" :model="formInline" class="form">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formInline.region" placeholder="活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <div class="table">
    <el-table
      :data="tableData"
      border
      style="width:100%"
      max-height="500"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000"
  class="pagination"
  >
  </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
          user: '',
          region: ''
        },
        tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
        ]
    }
  },
   methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleClick(row) {
        console.log(row);
      }
    }
}
</script>

<style>

</style>
<style lang="scss" scoped>
  .row {
    height: 60px;
    background-color: rgba(0, 0, 0, .8);
    color: white;
  }
  .breadcrumb {
    background-color: white;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
  }
  .form {
    border: 1px solid #ddd;
    margin: 10px;
    padding: 10px;
    /deep/ .el-form-item {
      margin-bottom: 0;
    }
  }
  .table {
    // margin: 0 10px;
    padding: 0 10px;
  }
  .pagination {
    padding: 10px;
    text-align: right;
  }
</style>
