webpackJsonp([4],{"1YyV":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),i=n.n(s),r=n("exGp"),a=n.n(r),c=n("Dd8w"),o=n.n(c),u=n("NYxO"),l={data:function(){var t=this;return{list:[],columns:[{title:"ID",key:"id",width:120,align:"center"},{title:"用户名",key:"username"},{title:"操作",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.show(n.list)}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){t.remove(n.list)}}},"删除")])}}]}},computed:o()({},Object(u.d)({})),created:function(){this.getUserList()},methods:o()({},Object(u.b)({userList:"user/userList"}),{getUserList:function(){var t=this;return a()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.userList();case 3:n=e.sent,t.list=n.data.data,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,t,[[0,7]])}))()},show:function(t){console.log(t)},remove:function(t){console.log(t)}})},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"list-wrap"},[this.list.length>0?e("div",{staticClass:"list"},[e("Table",{attrs:{border:"",columns:this.columns,data:this.list}})],1):this._e()])},staticRenderFns:[]};var p=n("VU/8")(l,d,!1,function(t){n("MzeA")},"data-v-9816b9da",null);e.default=p.exports},MzeA:function(t, e){}});
//# sourceMappingURL=4.eb0868ef574ac3bb6959.js.map
