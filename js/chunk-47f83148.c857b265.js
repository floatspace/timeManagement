(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47f83148"],{"7fe5":function(t,e,l){},e37c:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-lx-remind"}),t._v(" 工时管理")]),l("el-breadcrumb-item",[t._v(" 异议处理")])],1)],1),l("div",{staticClass:"container"},[l("div",{staticClass:"btns"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("异议申请")])],1),l("el-table",{staticClass:"table",attrs:{data:t.data,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"申请人",width:"120"}}),l("el-table-column",{attrs:{prop:"type",label:"申请类型",width:"100"}}),l("el-table-column",{attrs:{prop:"date",label:"异议日期",width:"120"}}),l("el-table-column",{attrs:{prop:"content",label:"问题描述"}}),l("el-table-column",{attrs:{prop:"date",label:"申请日期",width:"120"}}),l("el-table-column",{attrs:{prop:"progress",label:"处理状态",width:"100"}}),l("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){t.auditFormVisible=!0}}},[t._v("审核")])]}}])})],1),l("el-dialog",{attrs:{title:"异议申请",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[l("el-form",{attrs:{model:t.form}},[l("el-form-item",{attrs:{label:"异议日期","label-width":t.formLabelWidth}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1),l("el-form-item",{attrs:{label:"当天工时","label-width":t.formLabelWidth}},[l("el-row",{attrs:{gutter:12}},[l("el-col",{attrs:{span:5,align:"left"}},[l("el-tag",{attrs:{type:"info"}},[t._v("正常工时：8H")])],1),l("el-col",{attrs:{span:5}},[l("el-tag",{attrs:{type:"success"}},[t._v("加班工时：2H")])],1)],1)],1),l("el-form-item",{attrs:{label:"问题描述","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确 定")])],1)],1),l("el-dialog",{attrs:{title:"异议审核",visible:t.auditFormVisible},on:{"update:visible":function(e){t.auditFormVisible=e}}},[l("el-form",{attrs:{model:t.formInline}},[l("el-form-item",{attrs:{label:"异议日期","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"input",value:"2019-01-23",readonly:""}})],1),l("el-form-item",{attrs:{label:"当天工时","label-width":t.formLabelWidth}},[l("el-row",{attrs:{gutter:12}},[l("el-col",{attrs:{span:5,align:"left"}},[l("el-tag",{attrs:{type:"info"}},[t._v("正常工时：8H")])],1),l("el-col",{attrs:{span:5}},[l("el-tag",{attrs:{type:"success"}},[t._v("加班工时：2H")])],1)],1)],1),l("el-form-item",{attrs:{label:"问题描述","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"textarea",value:"当天加班工时应为3小时，忘批准",readonly:""}})],1),l("el-form-item",{attrs:{label:"审核工时","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"input"}})],1),l("el-form-item",{attrs:{label:"审核处理","label-width":t.formLabelWidth}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formInline.auditType,callback:function(e){t.$set(t.formInline,"auditType",e)},expression:"formInline.auditType"}},[l("el-option",{attrs:{label:"通过",value:"zhonghang"}}),l("el-option",{attrs:{label:"不通过",value:"renshou"}})],1)],1),l("el-form-item",{attrs:{label:"不通过原因","label-width":t.formLabelWidth}},[l("el-input",{attrs:{type:"textarea"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.auditFormVisible=!1}}},[t._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.auditFormVisible=!1}}},[t._v("确 定")])],1)],1)],1)])},i=[],o=l("d4aa"),r={data:function(){return{data:[],dialogFormVisible:!1,form:{region:"",date:"",desc:""},formInline:{auditType:""},formLabelWidth:"120px",auditFormVisible:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios.post(o["a"].manhour.objection).then(function(e){t.data=e.data.list})}}},s=r,n=(l("ead4"),l("b0be")),d=Object(n["a"])(s,a,i,!1,null,"0c997dee",null);d.options.__file="Objection.vue";e["default"]=d.exports},ead4:function(t,e,l){"use strict";var a=l("7fe5"),i=l.n(a);i.a}}]);