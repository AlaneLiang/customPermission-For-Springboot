webpackJsonp([6],{148:function(e,t,a){function s(e){o||a(190)}var o=!1,r=a(58)(a(165),a(211),s,null,null);r.options.__file="/Users/ppd/Desktop/study/customPermission/admin/src/components/setting/sysUser.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] sysUser.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},165:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{search:{page:1,pageSize:10,total:0},roles:[],sexs:{0:"女",1:"男"},userModal:{opened:!1,data:{id:"",account:"",name:"",mobile:"",password:"",email:"",sex:"0",roleID:"",roleName:"",birthday:""},rules:{required:["account","password","roleID"]}},list:[]}},mounted:function(){this.init()},methods:{init:function(){this.loadData(),this.initRole()},loadData:function(){var t=this;e.post("/sys/user/list",this.search).then(function(e){if(a(e),"000000"==e.code){var s=e.result.list;t.list=null==s?[]:s,t.search.total=e.result.total}})},initRole:function(){var t=this;e.get("/sys/role/list").then(function(e){"000000"==e.code&&(t.roles=e.result.list)})},doSearch:function(){this.search.page=1,this.loadData()},doSave:function(){var t=this,s=this.userModal.data;if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.exec(this.userModal.data.password))return void this.$Message.error("密码必须为8个以上大小写加数字");e.post("/sys/user/save",s).then(function(e){t.$Message(e.msg),a(e),"000000"==e.code&&(t.userModal.opened=!1,t.loadData())})},showAdd:function(){this.userModal.opened=!0,this.userModal.data.id=null,this.userModal.data.name="",this.userModal.data.account="",this.userModal.data.password="",this.userModal.data.email="",this.userModal.data.sex="0",this.userModal.data.mobile="",this.userModal.data.roleID="",this.userModal.data.roleName="",this.userModal.data.birthday="",this.userModal.data.accountDisabled=!1},showUpdate:function(e){this.userModal.opened=!0,this.userModal.data.id=e.id,this.userModal.data.name=e.name,this.userModal.data.account=e.account,this.userModal.data.password=e.password,this.userModal.data.email=e.email,this.userModal.data.sex=e.sex,this.userModal.data.mobile=e.mobile,this.userModal.data.roleID=e.roleID,this.userModal.data.roleName=e.roleName,this.userModal.data.birthday=e.birthday},showDelete:function(t){var a=this;this.$Confirm("确认要删除"+t.account+"？").then(function(){e.post("/sys/user/delete",{id:t.id}).then(function(e){a.$Message(e.msg),"000000"==e.code&&(a.userModal.opened=!1,a.loadData())})}).catch(function(e){console.log(e)})},pageChange:function(e){this.search.page=e.cur,this.search.pageSize=e.size,this.loadData()}},computed:{}}}).call(t,a(17),a(30))},190:function(e,t){},211:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"margin",rawName:"v-margin",value:10,expression:"10"}],staticClass:"h-panel"},[a("div",{directives:[{name:"margin",rawName:"v-margin",value:10,expression:"10"}],staticClass:"h-panel-bar"},[a("span",{staticClass:"h-panel-title"},[e._v("系统管理/用户管理")]),e._v(" "),a("div",{staticClass:"right"},[a("button",{staticClass:"h-btn h-btn-s h-btn-green",on:{click:e.showAdd}},[a("i",{staticClass:"h-icon-plus"}),e._v(" 新增")])])]),e._v(" "),a("div",{staticClass:"h-panel-body"},[a("Form",{ref:"form",attrs:{mode:"inline","label-width":110,model:e.search,top:.2}},[a("FormItem",{attrs:{label:"账户名"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.name,expression:"search.name"}],attrs:{type:"text"},domProps:{value:e.search.name},on:{input:function(t){t.target.composing||e.$set(e.search,"name",t.target.value)}}})]),e._v(" "),a("FormItem",[a("Button",{attrs:{color:"blue"},on:{click:e.doSearch}},[a("i",{staticClass:"h-icon-search"}),e._v(" 查询")])],1)],1),e._v(" "),a("Table",{attrs:{datas:e.list,stripe:""}},[a("TableItem",{attrs:{title:"No.",width:50},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.index+1))]}}])}),e._v(" "),a("TableItem",{attrs:{title:"账户名",prop:"account"}}),e._v(" "),a("TableItem",{attrs:{title:"名字",prop:"name"}}),e._v(" "),a("TableItem",{attrs:{title:"邮箱",prop:"email"}}),e._v(" "),a("TableItem",{attrs:{title:"生日",prop:"birthday"}}),e._v(" "),a("TableItem",{attrs:{title:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.data.sex?a("span",{},[e._v("男")]):e._e(),e._v(" "),0==t.data.sex?a("span",{},[e._v("女")]):e._e()]}}])}),e._v(" "),a("TableItem",{attrs:{title:"密码",prop:"password"}}),e._v(" "),a("TableItem",{attrs:{title:"邮箱",prop:"email"}}),e._v(" "),a("TableItem",{attrs:{title:"角色",prop:"roleName"}}),e._v(" "),a("TableItem",{attrs:{title:"操作人",prop:"domainName"}}),e._v(" "),a("TableItem",{attrs:{title:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("button",{staticClass:"h-btn h-btn-s",on:{click:function(a){e.showUpdate(t.data)}}},[a("i",{staticClass:"h-icon-edit"}),e._v(" 编辑\n                    ")]),e._v(" "),a("button",{staticClass:"h-btn h-btn-s h-btn-text-red",on:{click:function(a){e.showDelete(t.data)}}},[a("i",{staticClass:"h-icon-trash"}),e._v(" 删除\n                    ")])]}}])})],1),e._v(" "),a("div",{staticClass:"top10"},[a("Pagination",{attrs:{cur:e.search.page,pagerSize:e.search.pageSize,total:e.search.total},on:{change:e.pageChange}})],1)],1),e._v(" "),a("Modal",{attrs:{"close-on-mask":!1,"has-divider":!0,hasCloseIcon:!0},model:{value:e.userModal.opened,callback:function(t){e.$set(e.userModal,"opened",t)},expression:"userModal.opened"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(null==e.userModal.data.id?"新增":"编辑")+"用户")]),e._v(" "),a("div",[a("Form",{ref:"form",attrs:{"label-width":100,model:e.userModal.data,rules:e.userModal.rules,top:.2}},[a("FormItem",{attrs:{label:"账户名",prop:"account"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userModal.data.account,expression:"userModal.data.account"}],attrs:{type:"text"},domProps:{value:e.userModal.data.account},on:{input:function(t){t.target.composing||e.$set(e.userModal.data,"account",t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"名字",prop:"name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userModal.data.name,expression:"userModal.data.name"}],attrs:{type:"text"},domProps:{value:e.userModal.data.name},on:{input:function(t){t.target.composing||e.$set(e.userModal.data,"name",t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"密码",prop:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userModal.data.password,expression:"userModal.data.password"}],attrs:{type:"text"},domProps:{value:e.userModal.data.password},on:{input:function(t){t.target.composing||e.$set(e.userModal.data,"password",t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userModal.data.email,expression:"userModal.data.email"}],attrs:{type:"text"},domProps:{value:e.userModal.data.email},on:{input:function(t){t.target.composing||e.$set(e.userModal.data,"email",t.target.value)}}})]),e._v(" "),a("FormItem",{attrs:{label:"性别",prop:"sex"}},[a("Radio",{attrs:{datas:e.sexs},model:{value:e.userModal.data.sex,callback:function(t){e.$set(e.userModal.data,"sex",t)},expression:"userModal.data.sex"}})],1),e._v(" "),a("FormItem",{attrs:{label:"生日",prop:"birthday"}},[a("DatePicker",{model:{value:e.userModal.data.birthday,callback:function(t){e.$set(e.userModal.data,"birthday",t)},expression:"userModal.data.birthday"}})],1),e._v(" "),a("FormItem",{attrs:{label:"角色",prop:"roleID"}},[a("Select",{attrs:{keyName:"roleID",titleName:"roleName",datas:e.roles},model:{value:e.userModal.data.roleID,callback:function(t){e.$set(e.userModal.data,"roleID",t)},expression:"userModal.data.roleID"}})],1)],1)],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"h-btn",on:{click:function(t){e.userModal.opened=!1}}},[e._v("取消")]),e._v(" "),a("button",{staticClass:"h-btn h-btn-primary",on:{click:e.doSave}},[e._v("确定")])])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});