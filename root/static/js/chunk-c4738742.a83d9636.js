(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4738742"],{"100f":function(e,t,n){},"5d8b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mainSearch",{attrs:{firstInput:"设备编号"},on:{search:e.search}}),n("div",{staticClass:"Main"},[n("List",{attrs:{tableData:e.tableData,table:e.table,width:"280px"},on:{clickList:e.clickList},scopedSlots:e._u([{key:"operation",fn:function(){return[n("el-button",{attrs:{type:"text"},on:{click:e.SalesDetails}},[e._v("查看详情")])]},proxy:!0}])}),n("el-dialog",{attrs:{title:"设备详情",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticClass:"aisle"},[n("div",{staticClass:"aisle_header"},[n("ul",[n("li",[e._v("销售量："+e._s(e.salesNum)+"个")]),n("li",[e._v("销售额："+e._s(e.money)+"元")]),n("li",[e._v("补货次数："+e._s(e.replenishmentNum)+"次")]),n("li",[e._v("维修次数："+e._s(e.maintenanceNum)+"次")])]),n("p",[e._v("商品销量（月）")]),n("div",[e.isShow?n("el-row",e._l(e.CommoditSales,(function(t,a){return n("el-col",{key:a,attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"},[e._v(" "+e._s(t.skuName)+" ："+e._s(t.count)+" ")])])})),1):e._e(),e.isShow?e._e():n("div",{staticClass:"noSP"},[e._v(e._s(e.CommoditSales))])],1)])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)]),n("Paging",{attrs:{total:e.total},on:{nextClick:e.nextClick,prevClick:e.prevClick,changeCount:e.changeCount}})],1)],1)},i=[],s=n("c7eb"),r=n("1da1"),c=(n("d3b7"),n("159b"),n("b0c0"),n("f4bb")),o=n("3852"),u=n("0885"),l=n("3b9b"),d=n("365c"),p={data:function(){return{total:"",table:[{prop:"innerCode",label:"设备编号"},{prop:"taskType",label:"设备型号"},{prop:"address",label:"详细地址"},{prop:"ownerName",label:"运营状态"},{prop:"vmStatus",label:"设备状态"}],dialogVisible:!1,tableData:[],number:1,index:1,ListItemInfo:[],ListId:0,salesNum:0,money:0,replenishmentNum:0,maintenanceNum:0,CommoditSales:"",isShow:!1}},created:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("equipment/getEquipment",e.index);case 2:e.getList();case 3:case"end":return t.stop()}}),t)})))()},methods:{handleClose:function(e){e()},clickList:function(e){if(this.ListItemInfo=e,e.index<=10)this.ListId=e.index-1;else{if(e.index%10===0)return this.ListId=9;this.ListId=e.index%10-1}},getList:function(){var e=this;this.total=this.$store.state.equipment.AllEquipment.totalCount,this.number=1;var t=[];this.$store.state.equipment.AllEquipment.currentPageRecords.forEach((function(n){var a=0;0===n.vmStatus?a="未投放":1===n.vmStatus?a="运营":3===n.vmStatus&&(a="撤机"),t.push({index:10*(e.index-1)+e.number,innerCode:n.innerCode,taskType:n.type.name,address:n.node.addr,ownerName:a,vmStatus:"离线 货道 传送轴"}),e.number++})),this.tableData=t,console.log(this.tableData)},nextClick:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.index++,t.next=3,e.$store.dispatch("equipment/getEquipment",e.index);case 3:e.getList();case 4:case"end":return t.stop()}}),t)})))()},prevClick:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.index--,t.next=3,e.$store.dispatch("equipment/getEquipment",e.index);case 3:e.getList();case 4:case"end":return t.stop()}}),t)})))()},changeCount:function(e){var t=this;return Object(r["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.index=e,n.next=3,t.$store.dispatch("equipment/getEquipment",t.index);case 3:t.getList();case 4:case"end":return n.stop()}}),n)})))()},search:function(e){var t=this;return Object(r["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("equipment/getNumEquipment",e);case 2:t.getList();case 3:case"end":return n.stop()}}),n)})))()},SalesDetails:function(){var e=this;return Object(r["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout(Object(r["a"])(Object(s["a"])().mark((function t(){var n,a,i,r,c,o,u,l;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dialogVisible=!0,n={start:"2022-08-01 00:00:00",end:"2022-08-09 23:59:59",innerCode:e.$store.state.equipment.AllEquipment.currentPageRecords[e.ListId].innerCode},t.next=4,Object(d["e"])(n);case 4:return a=t.sent,t.next=7,Object(d["d"])(n);case 7:return i=t.sent,t.next=10,Object(d["K"])(n.innerCode,"2022-08-01","2022-08-09");case 10:return r=t.sent,t.next=13,Object(d["I"])(n.innerCode,"2022-08-01","2022-08-09");case 13:return c=t.sent,t.next=16,Object(d["c"])(n.innerCode,"2022-08-01","2022-08-09");case 16:if(o=t.sent,u="","0"===i.data)u=i.data;else for(l=1;l<i.data.length;l++)l>4&&(u+="."),u+=i.data[l];e.salesNum=a.data,e.money=u,e.replenishmentNum=r.data,e.maintenanceNum=c.data,0===o.data.length?(e.isShow=!1,e.CommoditSales="当前设备未销售商品"):(e.isShow=!0,e.CommoditSales=o.data),console.log(e.CommoditSales);case 25:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})))()}},components:{mainSearch:c["a"],List:u["a"],Paging:o["a"],Add:l["a"]}},m=p,b=(n("f8b7a"),n("2877")),h=Object(b["a"])(m,a,i,!1,null,"18fea80c",null);t["default"]=h.exports},f8b7a:function(e,t,n){"use strict";n("100f")}}]);