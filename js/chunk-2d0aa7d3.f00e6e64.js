(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa7d3"],{"10db":function(a,t,l){"use strict";l.r(t);var e=function(){var a=this,t=a.$createElement,l=a._self._c||t;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-lx-remind"}),a._v(" 员工管理")]),l("el-breadcrumb-item",[a._v(" 别名管理")])],1)],1),l("div",{staticClass:"container"},[l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{type:"input",placeholder:"请输入"}})],1),l("el-form-item",{attrs:{label:"项目名称"}},[l("el-select",{model:{value:a.form.group,callback:function(t){a.$set(a.form,"group",t)},expression:"form.group"}},[l("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),l("el-option",{attrs:{label:"中国人寿",value:"zgrs"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"}},[a._v("查询")]),l("el-button",{attrs:{type:"danger"},on:{click:a.addAlias}},[a._v("新增别名")])],1)],1),l("el-table",{staticClass:"table",attrs:{data:a.aliasData,border:"",height:"260"}},[l("el-table-column",{attrs:{prop:"name",label:"员工姓名"}}),l("el-table-column",{attrs:{prop:"idno",label:"身份证号"}}),l("el-table-column",{attrs:{prop:"alias",label:"别名"}}),l("el-table-column",{attrs:{prop:"group",label:"项目名称"}}),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:a._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(l){a.editAlias(t.row)}}},[a._v("编辑")]),l("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){a.delAlias(t.row)}}},[a._v("删除")])]}}])})],1)],1),l("el-dialog",{attrs:{title:"添加别名",visible:a.dialogFormVisible},on:{"update:visible":function(t){a.dialogFormVisible=t}}},[l("el-form",{staticStyle:{width:"600px"},attrs:{model:a.aliasAddForm,"label-width":a.formLabelWidth}},[l("el-form-item",{attrs:{label:"项目名称"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:a.aliasAddForm.group,callback:function(t){a.$set(a.aliasAddForm,"group",t)},expression:"aliasAddForm.group"}},[l("el-option",{attrs:{label:"中国银行",value:"zgyh"}}),l("el-option",{attrs:{label:"中国人寿",value:"zgrs"}}),l("el-option",{attrs:{label:"请假系统",value:"qjxt"}})],1)],1),l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{disabled:a.inputDisable},model:{value:a.aliasAddForm.name,callback:function(t){a.$set(a.aliasAddForm,"name",t)},expression:"aliasAddForm.name"}})],1),l("el-form-item",{attrs:{label:"身份证号"}},[l("el-input",{attrs:{disabled:a.inputDisable},model:{value:a.aliasAddForm.idno,callback:function(t){a.$set(a.aliasAddForm,"idno",t)},expression:"aliasAddForm.idno"}})],1),l("el-form-item",{attrs:{label:"别名"}},[l("el-input",{model:{value:a.aliasAddForm.alias,callback:function(t){a.$set(a.aliasAddForm,"alias",t)},expression:"aliasAddForm.alias"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){a.dialogFormVisible=!1}}},[a._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){a.dialogFormVisible=!1}}},[a._v("确 定")])],1)],1)],1)},i=[],o=(l("61a5"),{data:function(){return{form:{},aliasAddForm:{},formLabelWidth:"120px",dialogFormVisible:!1,aliasData:[{name:"王帅",idno:"130634198810111666",alias:"王帅001",group:"中国人寿"},{name:"王帅",idno:"130634198810111666",alias:"王帅BOC3",group:"请假系统"}],inputDisable:!1}},methods:{addAlias:function(){this.dialogFormVisible=!0,this.inputDisable=!1,this.aliasAddForm={}},editAlias:function(a){this.inputDisable=!0;var t=a.name,l=a.idno,e=a.alias,i=a.group;this.aliasAddForm.name=t,this.aliasAddForm.idno=l,this.aliasAddForm.alias=e,this.aliasAddForm.group=i,this.dialogFormVisible=!0},delAlias:function(a){this.$confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){}).catch(function(){})}}}),s=o,r=l("b0be"),n=Object(r["a"])(s,e,i,!1,null,"7dec8507",null);n.options.__file="Alias.vue";t["default"]=n.exports}}]);