(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41c1c1a5"],{"00ca":function(t,e,a){"use strict";a("9586")},1148:function(t,e,a){"use strict";var r=a("5926"),n=a("577e"),s=a("1d80"),i=RangeError;t.exports=function(t){var e=n(s(this)),a="",c=r(t);if(c<0||c==1/0)throw i("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(a+=e);return a}},"408a":function(t,e,a){var r=a("e330");t.exports=r(1..valueOf)},8416:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"TopStatistical"},[a("el-row",[a("el-col",{staticClass:"leftDay",attrs:{span:12}},[a("p",{staticClass:"leftTop",staticStyle:{"font-weight":"bold"}},[t._v("日售统计表")]),a("el-row",{staticClass:"StatisticalContent"},[a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.todayNumStatistics))]),a("span",{staticClass:"text"},[t._v("当日销售量(个)")])]),a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.todayMoneyStatistics))]),a("span",{staticClass:"text"},[t._v("当日销售量(元)")])]),a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.todayDivideStatistics))]),a("span",{staticClass:"text"},[t._v("当日分成(元)")])])],1)],1),a("el-col",{staticClass:"rightDay",attrs:{span:12}},[a("p",{staticClass:"leftTop",staticStyle:{"font-weight":"bold"}},[t._v("月售统计表")]),a("el-row",{staticClass:"StatisticalContent"},[a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.OrderStatistics))]),a("span",{staticClass:"text"},[t._v("当月销售量(个)")])]),a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.IncomeStatisticsWY))]),a("span",{staticClass:"text"},[t._v("当月销售量(万元)")])]),a("el-col",{staticClass:"DayNum",attrs:{span:8}},[a("span",{staticClass:"num"},[t._v(t._s(t.DivideStatistics))]),a("span",{staticClass:"text"},[t._v("当月分成(元)")])])],1)],1)],1)],1),a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-form",{ref:"form",staticClass:"choice",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"合作商"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},t._l(t.PartnList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1)],1),a("div",{staticClass:"block"},[a("span",[t._v("日期：")]),a("el-date-picker",{attrs:{"picker-options":t.pickerOptions,type:"daterange","range-separator":"~","default-value":t.monthOne,"start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"]},model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),a("Button",{staticClass:"btn",on:{Submit:t.submit}},[a("i",{staticClass:"el-icon-search"}),t._v(" 查询")])],1),a("el-row",{staticClass:"showData"},[a("el-col",{attrs:{span:3}},[a("span",{staticClass:"leftText"},[t._v("笔数统计：")]),a("span",{staticClass:"red"},[t._v(t._s(t.OrderStatistics))]),a("span",{staticClass:"mini"},[t._v(" 个")])]),a("el-col",{attrs:{span:4}},[a("span",{staticClass:"leftText"},[t._v("收入统计：")]),a("span",{staticClass:"red"},[t._v(t._s(t.IncomeStatistics))]),a("span",{staticClass:"mini"},[t._v(" 元")])]),a("el-col",{attrs:{span:3}},[a("span",{staticClass:"leftText"},[t._v("分成统计：")]),a("span",{staticClass:"red"},[t._v(t._s(t.DivideStatistics))]),a("span",{staticClass:"mini"},[t._v(" 元")])])],1),a("Table",{staticClass:"istable",attrs:{tableData:t.tableData,table:t.table,isIndex:!1,isOeration:!1}}),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"hide-on-single-page":"","current-page":t.currentPage1,"page-size":10,layout:"total, prev, pager, next",total:t.totalCount},on:{"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e},"next-click":t.nextData,"prev-click":t.prevClick}})],1)],1)],1)},n=[],s=a("c7eb"),i=a("1da1"),c=(a("d3b7"),a("159b"),a("b0c0"),a("b680"),a("4995")),o=a("1476"),u=a("b775");function l(t){return Object(u["a"])({url:"/order-service/report/orderAmount",params:t})}function d(t){return Object(u["a"])({url:"/order-service/report/orderCount",params:t})}function f(t){return Object(u["a"])({url:"/order-service/report/totalBill",params:t})}function m(){return Object(u["a"])({url:"/user-service/partner/search",params:{pageSize:10}})}function p(t,e){return Object(u["a"])({url:"/order-service/report/partnerCollect",params:{start:t,end:e,pageIndex:1,pageSize:10}})}function v(t,e,a){return Object(u["a"])({url:"/order-service/report/partnerCollect",params:{partnerName:t,start:e,end:a,pageIndex:1,pageSize:10}})}var h=a("5a0c"),b=a.n(h),w={data:function(){return{form:{region:"",value:""},pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()-864e5}},monthOne:"",monthOnePreciseTime:"",newDatePreciseTime:"",newDate:"",IncomeStatistics:"",IncomeStatisticsWY:"",OrderStatistics:"",DivideStatistics:"",newDateStart:"",todayMoneyStatistics:"",todayNumStatistics:"",todayDivideStatistics:"",PartnList:[],tableData:[],table:[{prop:"date",label:"订单日期"},{prop:"ownerName",label:"合作商"},{prop:"ratio",label:"分成比例"},{prop:"orderTotalMoney",label:"收入(元)"},{prop:"orderCount",label:"笔数"},{prop:"totalBill",label:"分成金额(元)"}],temporaryTableData:[],query:[],pageIndex:0,totalCount:0,pageSize:10,totalPage:0,currentPage1:1,starttime:"",endtime:""}},components:{Table:c["a"],Button:o["a"]},created:function(){this.getTimerIn(),this.getNum(),this.getDivide(),this.getDayTimerIn(),this.getDayNum(),this.getDayDivide(),this.getPartner(),this.getPartnerCollect()},methods:{prevClick:function(){this.pageIndex--,this.tableData=[],this.getCommodityList()},nextData:function(){this.pageIndex++,this.tableData=[],this.getCommodityList()},getPartnerCollect:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,p(t.monthOnePreciseTime,t.newDatePreciseTime);case 3:a=e.sent,r=a.data.currentPageRecords,r.forEach((function(e){t.tableData.push({date:e.date,ownerName:e.ownerName,ratio:e.ratio+"%",orderTotalMoney:e.orderTotalMoney,orderCount:e.orderCount,totalBill:"+"+e.totalBill/100})})),console.log(t.tableData);case 7:case"end":return e.stop()}}),e)})))()},getPartner:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:a=e.sent,r=a.data.currentPageRecords,r.forEach((function(e){t.PartnList.push({id:e.id,name:e.name})}));case 5:case"end":return e.stop()}}),e)})))()},getDayDivide:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,f({start:t.newDateStart,end:t.newDate});case 3:a=e.sent,t.todayDivideStatistics=a.data;case 5:case"end":return e.stop()}}),e)})))()},getDayNum:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,d({start:t.newDateStart,end:t.newDate});case 3:a=e.sent,t.todayNumStatistics=a.data;case 5:case"end":return e.stop()}}),e)})))()},getDayTimerIn:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,l({start:t.newDateStart,end:t.newDate});case 3:a=e.sent,t.todayMoneyStatistics=a.data;case 5:case"end":return e.stop()}}),e)})))()},getTimerIn:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,l({start:t.monthOne,end:t.newDate});case 3:a=e.sent,t.IncomeStatistics=a.data/100,t.IncomeStatisticsWY=(a.data/1e6).toFixed(2);case 6:case"end":return e.stop()}}),e)})))()},getNum:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,d({start:t.monthOne,end:t.newDate});case 3:a=e.sent,t.OrderStatistics=a.data;case 5:case"end":return e.stop()}}),e)})))()},getDivide:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.startTime(),e.next=3,f({start:t.monthOne,end:t.newDate});case 3:a=e.sent,t.DivideStatistics=a.data/100;case 5:case"end":return e.stop()}}),e)})))()},startTime:function(){var t=b()(new Date).format("YYYY-MM-01 00:00:00");this.monthOne=t;var e=b()(new Date).format("YYYY-MM-DD hh:mm:ss");this.newDate=e;var a=b()(new Date).format("YYYY-MM-DD 00:00:00");this.newDateStart=a;var r=b()(new Date).format("YYYY-MM-01");this.monthOnePreciseTime=r;var n=b()(new Date).format("YYYY-MM-DD");this.newDatePreciseTime=n,""===this.form.value&&(this.form.value=[this.monthOnePreciseTime,this.newDatePreciseTime])},getPartnerCollectPartnerName:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(t.form.region,t.starttime,t.endtime);case 2:a=e.sent,t.tableData=[],r=a.data.currentPageRecords,r.forEach((function(e){t.tableData.push({date:e.date,ownerName:e.ownerName,ratio:e.ratio+"%",orderTotalMoney:e.orderTotalMoney,orderCount:e.orderCount,totalBill:"+"+e.totalBill/100})}));case 6:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r,n,i;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.startTime(),t.$refs.form.validate(),a=t.form.value[0],r=t.form.value[1],n=b()(a).format("YYYY-MM-DD"),t.starttime=n,i=b()(r).format("YYYY-MM-DD"),t.endtime=i,t.getPartnerCollectPartnerName();case 9:case"end":return e.stop()}}),e)})))()}}},g=w,D=(a("00ca"),a("2877")),C=Object(D["a"])(g,r,n,!1,null,"a36c2d74",null);e["default"]=C.exports},9586:function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),n=a("da84"),s=a("e330"),i=a("94ca"),c=a("cb2d"),o=a("1a2d"),u=a("7156"),l=a("3a9b"),d=a("d9b5"),f=a("c04e"),m=a("d039"),p=a("241c").f,v=a("06cf").f,h=a("9bf2").f,b=a("408a"),w=a("58a8").trim,g="Number",D=n[g],C=D.prototype,O=n.TypeError,x=s("".slice),S=s("".charCodeAt),T=function(t){var e=f(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,a,r,n,s,i,c,o,u=f(t,"number");if(d(u))throw O("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=w(u),e=S(u,0),43===e||45===e){if(a=S(u,2),88===a||120===a)return NaN}else if(48===e){switch(S(u,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(s=x(u,2),i=s.length,c=0;c<i;c++)if(o=S(s,c),o<48||o>n)return NaN;return parseInt(s,r)}return+u};if(i(g,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:D(T(t)),a=this;return l(C,a)&&m((function(){b(a)}))?u(Object(e),a,_):e},N=r?p(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;N.length>k;k++)o(D,y=N[k])&&!o(_,y)&&h(_,y,v(D,y));_.prototype=C,C.constructor=_,c(n,g,_,{constructor:!0})}},b680:function(t,e,a){"use strict";var r=a("23e7"),n=a("e330"),s=a("5926"),i=a("408a"),c=a("1148"),o=a("d039"),u=RangeError,l=String,d=Math.floor,f=n(c),m=n("".slice),p=n(1..toFixed),v=function(t,e,a){return 0===e?a:e%2===1?v(t,e-1,a*t):v(t*t,e/2,a)},h=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},b=function(t,e,a){var r=-1,n=a;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=d(n/1e7)},w=function(t,e){var a=6,r=0;while(--a>=0)r+=t[a],t[a]=d(r/e),r=r%e*1e7},g=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var r=l(t[e]);a=""===a?r:a+f("0",7-r.length)+r}return a},D=o((function(){return"0.000"!==p(8e-5,3)||"1"!==p(.9,0)||"1.25"!==p(1.255,2)||"1000000000000000128"!==p(0xde0b6b3a7640080,0)}))||!o((function(){p({})}));r({target:"Number",proto:!0,forced:D},{toFixed:function(t){var e,a,r,n,c=i(this),o=s(t),d=[0,0,0,0,0,0],p="",D="0";if(o<0||o>20)throw u("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return l(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=h(c*v(2,69,1))-69,a=e<0?c*v(2,-e,1):c/v(2,e,1),a*=4503599627370496,e=52-e,e>0){b(d,0,a),r=o;while(r>=7)b(d,1e7,0),r-=7;b(d,v(10,r,1),0),r=e-1;while(r>=23)w(d,1<<23),r-=23;w(d,1<<r),b(d,1,1),w(d,2),D=g(d)}else b(d,0,a),b(d,1<<-e,0),D=g(d)+f("0",o);return o>0?(n=D.length,D=p+(n<=o?"0."+f("0",o-n)+D:m(D,0,n-o)+"."+m(D,n-o))):D=p+D,D}})},df49:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"h",(function(){return c})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return l})),a.d(e,"g",(function(){return d}));var r=a("b775");function n(t){return Object(r["a"])({url:"/vm-service/skuClass/search",params:t})}function s(t){return Object(r["a"])({url:"/vm-service/skuClass/search",params:t})}function i(t){return Object(r["a"])({url:"/vm-service/skuClass",method:"POST",data:t})}function c(t,e){return Object(r["a"])({url:"/vm-service/skuClass/".concat(t),method:"PUT",data:{className:e}})}function o(t){return Object(r["a"])({url:"/vm-service/skuClass/".concat(t),method:"DELETE"})}function u(t){return Object(r["a"])({url:"vm-service/sku/search",params:t})}function l(t){return Object(r["a"])({url:"/vm-service/sku",method:"POST",data:t})}function d(t){return Object(r["a"])({url:"/vm-service/sku/"+t.skuId,method:"PUT",data:t})}}}]);