(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{49:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(9),i=a(40),u=a(41),o=a(47),m=a(46),d=a(19),f=a(5),p=a(42),E=a(8),v=a(3),b=a.n(v),h=a(4),O=a(43),y=a.n(O).a.create({withCredentials:!0}),j=function(e,t){return T(e,"GET",t)},g=function(e,t){return T(e,"POST",t)},_=function(e,t){return T(e,"PUT",t)},N=function(e,t){return T(e,"DELETE",t)};function T(e){return S.apply(this,arguments)}function S(){return(S=Object(h.a)(b.a.mark((function e(t){var a,n,r,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:"get",n=c.length>2&&void 0!==c[2]?c[2]:null,e.prev=2,e.next=5,y({url:"".concat("/api/").concat(t),method:a,data:n});case 5:return r=e.sent,e.abrupt("return",r.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(a,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(n)),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var I={query:function(){return j("cart/")},queryRes:function(e){var t=new URLSearchParams;return t.set("isToBuy",e),j("cart/?".concat(t))},getById:function(e){return j("cart/".concat(e),e)},remove:function(e){return N("cart/".concat(e))},removeAll:function(){return N("cart/ALL")},save:function(e){return e._id?_("cart/".concat(e._id),e):g("cart",e)},getEmptyItem:function(){return{name:"",price:0,description:"",isToBuy:!1,imgUrl:""}}};var x={getRandomColor:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},getRandomNumber:function(e,t){return Math.floor(Math.random()*(t-e)+e)},findIdxById:function(e,t){return e.findIndex((function(e){return e._id===t}))},findIdxByName:function(e,t){return e.findIndex((function(e){return e.name===t}))},getDate:function(){var e=new Date;return e=w(e)},getLastDays:function(e){for(var t=[],a=new Date,n=(a.getFullYear(),0);n<e;n++){var r=w(new Date(a.getTime()-24*n*60*60*1e3));t.push(r)}return t}};function w(e){var t=e.getMonth()+1;t=t<10?"0"+t:+t;var a=e.getDate();return a<10&&(a="0"+a),a+"-"+t+"-"+ +e.getFullYear()}var k={query:function(){return j("sale/")},getById:function(e){return j("sale/".concat(e),e)},update:function(e){return _("sale/".concat(e._id),e)},add:function(e){return g("sale",e)},getSaleObject:function(e){var t=x.getDate();return{_id:e._id,name:e.name,price:e.price,sumOfSales:1,totalMoney:e.price,saleDates:t}},sortByName:function(e){var t=e.reduce((function(e,t){return e[t.name]||(e[t.name]=0),e[t.name]++,e}),{});return(t=Object.keys(t).map((function(e){return[String(e),t[e]]}))).sort((function(e,t){return t[1]-e[1]})).slice(0,5)},getLastFiveDaysSaler:function(e){var t=x.getLastDays(5).map((function(e){return{date:e,sales:[]}}));return e.forEach((function(e){e.saleDates.forEach((function(a){var n=t.findIndex((function(e){return e.date===a}));-1!==n&&t[n].sales.push({_id:e._id,name:e.name,price:e.price})}))})),t},getTopFiveSalers:function(e){return e.sort((function(e,t){return t.sumOfSales-e.sumOfSales})).slice(0,5)},getTopFiveMoneySalers:function(e){return e.sort((function(e,t){return t.totalMoney-e.totalMoney})).slice(0,5)},getLastDays:function(e){return x.getLastDays(e)}};function M(e,t){e=k.getSaleObject(e);var a=x.findIdxById(t,e._id);return console.log(a),-1!==a?function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.update(e);case 2:n=t.sent,a({type:"UPDATE_SALE",_sale:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}():function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.add(e);case 2:n=t.sent,a({type:"ADD_SALE",_sale:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function C(e){var t=e.item,a=e.addToBuyList;return r.a.createElement("div",{className:"card-container flex column "},r.a.createElement("div",{className:"card-img"},r.a.createElement("img",{src:t.imgUrl,alt:"#"})),r.a.createElement("div",{className:"card-lng"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,"Name:"),r.a.createElement("div",{className:"pl20"},t.name)),r.a.createElement("div",{className:"flex"},r.a.createElement("div",null,"Price:"),r.a.createElement("div",{className:"pl20"},"$",t.price))),r.a.createElement("div",null,r.a.createElement("p",null,t.desription)),r.a.createElement("div",{className:"flex align-center justify-center"},r.a.createElement("button",{className:"classic-btn ",onClick:function(){return a(t)}},"Buy")))}function D(e){var t=e.cartItems,a=e.addToBuyList;return r.a.createElement("section",{className:"card-grid "},t.map((function(e){return r.a.createElement(C,{item:e,addToBuyList:a,key:e._id})})))}function B(e){var t=e.cartItems,a=e.clearBuyItems,n=function(e){var t=0;return e.forEach((function(e){return t+=e.price})),t}(t);return r.a.createElement("section",{className:"cart-dash"},t.map((function(e,t){return r.a.createElement("div",{className:"cart-info flex sa",key:t},r.a.createElement("div",null,e.name),r.a.createElement("div",null,"$",e.price))})),r.a.createElement("div",{className:"cart-payment flex column"},r.a.createElement("div",{className:"pb10"},r.a.createElement("span",null,"total:"),r.a.createElement("span",null,"$",n)),r.a.createElement("button",{className:"pb10 classic-btn",onClick:function(){return a(t)}},"Buy All")))}function A(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),u=Object(E.a)(i,2),o=u[0],m=u[1],d=Object(s.d)((function(e){return e.cartReducer})),f=d.cartItems,v=d.itemsToBuy,O=Object(s.d)((function(e){return e.saleReducer})).sales,y=Object(s.c)();Object(n.useEffect)((function(){console.log("useEffect"),y(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.query();case 2:a=e.sent,t({type:"SET_CART_ITEMS",cartItems:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.queryRes(!0);case 2:a=e.sent,console.log("cartItems-",a),t({type:"SET_CART_TO_BUY",cartItems:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query();case 2:a=e.sent,t({type:"SET_SALES",sales:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c,o]);return f?r.a.createElement("section",{className:"main-container"},v.length?r.a.createElement("div",{className:"flex end column shopping-cart"},r.a.createElement("div",{onClick:function(){return l(!c)}},"Shopping Cart ",r.a.createElement("span",null,v.length)),c&&f?r.a.createElement("div",null,r.a.createElement(B,{cartItems:v,clearBuyItems:function(e){var t,a=Object(p.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;y(M(n,O))}}catch(r){a.e(r)}finally{a.f()}y(function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.removeAll();case 2:t({type:"CLEAR_CART_TO_BUY"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m(!o)}})):""):r.a.createElement("div",{className:"flex end shopping-cart"},"Shopping Cart"),r.a.createElement("div",null,r.a.createElement(D,{cartItems:f,addToBuyList:function(e){var t=e;t.isToBuy=!0,y(function(e){return console.log("addtocartlist"),function(){var t=Object(h.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.save(e);case 2:a({type:"ADD_TO_BUY",item:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}))):r.a.createElement("div",{className:"main-container"},r.a.createElement("h2",null,"your cart is empty"))}var R=Object(s.b)()(Object(f.f)((function(e){return r.a.createElement("div",{className:"main-header flex sb align-center"},r.a.createElement("div",{className:"left-nav"},r.a.createElement(d.b,{className:"link",to:"/admin"},"Main-Page"),r.a.createElement(d.b,{to:"/home"},"Home"),r.a.createElement(d.b,{to:"/stats"},"Stats")))}))),L=a(44),U=a.n(L),P=a(93),F=a(94),q=a(95);function Y(e){window.open(e)}function $(){return r.a.createElement("div",{className:"footer brt"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"foot-col"},r.a.createElement("div",{className:"bold"},r.a.createElement("p",null,"TECHNOLOGY")),r.a.createElement("p",null,"React Hooks"),r.a.createElement("p",null,"Node.js"),r.a.createElement("p",null,"Mongo DB")),r.a.createElement("div",{className:"foot-col"},r.a.createElement("div",{className:"bold"},r.a.createElement("p",null,"CONTACT")),r.a.createElement("div",{className:"mb10"},r.a.createElement("a",{className:"foot-hover mb10",href:"mailto:chenedri22@gmail.com"},"chenedri22@gmail.com"))),r.a.createElement("div",{className:"foot-col cp"},r.a.createElement("div",{className:"bold"},r.a.createElement("p",null,"Media")),r.a.createElement("div",{onClick:function(){return Y("https://www.linkedin.com/in/chen-edri-46290776")}},r.a.createElement(P.a,null)),r.a.createElement("div",{onClick:function(){return Y("https://github.com/chenEdri ")}},r.a.createElement(F.a,null)),r.a.createElement("div",{onClick:function(){return Y("https://www.facebook.com/chen.edri.3")}},r.a.createElement(q.a,null)),r.a.createElement("div",{onClick:function(){}},r.a.createElement(U.a,null)))))}var V={query:function(){return j("item/")},getById:function(e){return j("item/".concat(e),e)},remove:function(e){return N("item/".concat(e))},save:function(e){return e._id?_("item/".concat(e._id),e):g("item",e)},getEmptyItem:function(){return{name:"",price:0,description:"",isToBuy:!1,imgUrl:"https://res.cloudinary.com/dygtul5wx/image/upload/v1600013117/mrToy/6_iyplsc.jpg"}}};function G(e){var t=e._id?"EDIT_ITEM":"ADD_ITEM";return function(){var a=Object(h.a)(b.a.mark((function a(n){var r;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,V.save(e);case 2:r=a.sent,n({type:t,_item:r});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function H(e){var t=e.item,a=e.onRemove,n=e.openEditModule;return r.a.createElement("div",{className:"card-grid tc"},r.a.createElement("div",null,t.name),r.a.createElement("div",null,"$",t.price),r.a.createElement("div",{className:"flex sb"},r.a.createElement("button",{className:"classic-btn",onClick:function(){return n(t._id)}},"Edit"),r.a.createElement("button",{className:"warning-btn",onClick:function(){return a(t._id)}},"delete")))}function J(e){var t=e.items,a=e.onRemove,n=e.openEditModule;return r.a.createElement("section",{className:"flex column "},t.map((function(e){return r.a.createElement(H,{item:e,key:e._id,onRemove:a,openEditModule:n})})))}var W=a(2);function X(e,t){switch(t.type){case"SET_ITEM":return Object(W.a)(Object(W.a)({},e),{},{item:t.item});case"SET_NAME":return Object(W.a)(Object(W.a)({},e),{},{item:Object(W.a)(Object(W.a)({},e.item),{},{name:t.name})});case"SET_PRICE":return Object(W.a)(Object(W.a)({},e),{},{item:Object(W.a)(Object(W.a)({},e.item),{},{price:t.price})});case"SET_DESC":return Object(W.a)(Object(W.a)({},e),{},{item:Object(W.a)(Object(W.a)({},e.item),{},{description:t.description})});case"SET_IMG":return Object(W.a)(Object(W.a)({},e),{},{item:Object(W.a)(Object(W.a)({},e.item),{},{imgUrl:t.imgUrl})});default:return e}}var z={saveItem:G},K=Object(s.b)(null,z)((function(e){var t=e.itemToEdit,a=e.closeEditModule,c=Object(n.useReducer)(X,{item:t}),l=Object(E.a)(c,2),s=l[0],i=l[1],u=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a(s.item);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=s.item;return o?r.a.createElement("form",{className:"item-edit container",onSubmit:function(e){return u(e)}},r.a.createElement("div",{className:"form"},r.a.createElement("label",{htmlFor:""},"Name:"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name",value:o.name,onChange:function(e){return i({type:"SET_NAME",name:e.target.value})}}),r.a.createElement("label",{htmlFor:""},"Price:"),r.a.createElement("input",{type:"number",name:"price",placeholder:"Price",value:o.price,onChange:function(e){return i({type:"SET_PRICE",price:+e.target.value})}}),r.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:o.description,onChange:function(e){return i({type:"SET_DESC",description:e.target.value})}}),r.a.createElement("input",{type:"text",name:"imgUrl",placeholder:"Image-Url",value:o.imgUrl,onChange:function(e){return i({type:"SET_IMG",imgUrl:e.target.value})}}),r.a.createElement("button",{className:"classic-btn"},"Save"))):r.a.createElement("div",null,"Loading....")}));function Q(e){var t=Object(s.d)((function(e){return e.itemReducer})).items,a=Object(n.useState)(!1),c=Object(E.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(!1),o=Object(E.a)(u,2),m=o[0],d=o[1],f=Object(n.useState)(null),p=Object(E.a)(f,2),v=p[0],O=p[1],y=Object(s.c)();Object(n.useEffect)((function(){y(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.query();case 2:a=e.sent,t({type:"SET_ITEMS",items:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[m,l]);var j=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,V.getById(t);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=V.getEmptyItem();case 7:a=e.t0,O(a),d(!m);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?r.a.createElement("section",{className:"main-container"},r.a.createElement("div",{className:"flex end"},r.a.createElement("button",{className:"classic-btn",onClick:function(){return j()}},"Add")),r.a.createElement("div",{className:"card-grid bold brb tc"},r.a.createElement("div",null,"Title"),r.a.createElement("div",null,"Price"),r.a.createElement("div",null,"Options")),r.a.createElement("div",{className:"flex column"},r.a.createElement(J,{items:t,onRemove:function(e){var t;y((t=e,function(){var e=Object(h.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.remove(t);case 2:a({type:"REMOVE_ITEM",itemId:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),i(!l)},openEditModule:j})),m?r.a.createElement("div",{className:"module"},r.a.createElement(K,{itemToEdit:v,closeEditModule:function(e){y(G(e)),e._id||y(function(e){return function(){var t=Object(h.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.save(e);case 2:n=t.sent,a({type:"SAVE_CART_ITEM",cartItem:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),O(null),d(!m)}})):""):r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:"https://res.cloudinary.com/dygtul5wx/image/upload/v1601042370/sprint%204/users/75_2_cf1ozr.gif"}))}function Z(e){var t=e.sale;return r.a.createElement("div",{className:"sale-in-day"},r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},"Name:")," ",r.a.createElement("span",null,t.name)),r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},"Price:")," ",r.a.createElement("span",null,"$",t.price)))}function ee(e){var t=e.lastDaysSales,a=function(e){console.log(e);var t=0;return e.forEach((function(e){e.sales.length&&e.sales.forEach((function(e){return t+=e.price}))})),t}(t);return r.a.createElement("section",{className:"last-dates flex column"},r.a.createElement("h3",{className:"brb tac"},"Last 5 Days"),r.a.createElement("div",{className:"flex sb"}," ",r.a.createElement("h4",null,"Total Sales: "),r.a.createElement("h4",null,"$",a)),t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h4",null,e.date),e.sales.length?e.sales.map((function(e,t){return r.a.createElement(Z,{sale:e,key:t})})):r.a.createElement("div",null,r.a.createElement("div",{className:"no-sale ml15"},"There are no sales at this date")))})))}function te(e){var t=e.item;return r.a.createElement("section",{className:"top-sale-prev flex column"},r.a.createElement("div",null,r.a.createElement("span",null,"Name:")," ",r.a.createElement("span",null,t.name)),r.a.createElement("div",null,r.a.createElement("span",null,"Price:")," ",r.a.createElement("span",null,"$",t.price)),r.a.createElement("div",null,r.a.createElement("span",null,"Number Of Sales:")," ",r.a.createElement("span",null,t.sumOfSales)))}function ae(e){var t=e.topSaleItems;return r.a.createElement("section",{className:"flex column top-sales"},r.a.createElement("h3",{className:"brb tac"},"Top Sales"),t.map((function(e,t){return r.a.createElement(te,{item:e,key:t})})))}function ne(e){var t=e.popularNameItems,a=e.topSaleItems;return r.a.createElement("div",{className:"flex column popular-sales"},r.a.createElement("h3",{className:"tac brb"},"The Unique Sales"),r.a.createElement("div",{className:"flex column"},r.a.createElement("h4",null,"Most Popular By Name"),t?t.map((function(e,t){return r.a.createElement("div",{key:t,className:"by flex sb"},r.a.createElement("span",null,e[0],":"),r.a.createElement("span",null,e[1]))})):""),r.a.createElement("div",{className:"flex column"},r.a.createElement("h4",null,"Top 5 Salers"),a?a.map((function(e){return r.a.createElement("div",{key:e._id,className:"by flex sb"},r.a.createElement("sapn",null,e.name,":"),r.a.createElement("span",null,"$",e.totalMoney))})):""))}function re(e){var t=Object(n.useState)(null),a=Object(E.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),u=Object(E.a)(i,2),o=u[0],m=(u[1],Object(n.useState)(null)),d=Object(E.a)(m,2),f=d[0],p=d[1],v=Object(n.useState)(null),O=Object(E.a)(v,2),y=(O[0],O[1]),j=Object(n.useState)(null),g=Object(E.a)(j,2),_=g[0],N=g[1],T=Object(n.useState)(null),S=Object(E.a)(T,2),I=S[0],x=S[1];Object(s.c)();function w(){return(w=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.query();case 2:return t=e.sent,l(t),M(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){var t=k.getLastFiveDaysSaler(e),a=k.getTopFiveSalers(e),n=k.getTopFiveMoneySalers(e),r=k.sortByName(e);p(r),y(n),N(a),x(t)}return Object(n.useEffect)((function(){!function(){w.apply(this,arguments)}()}),[o]),c?r.a.createElement("section",{className:"main-container"},r.a.createElement("div",{className:"stat-container"},_?r.a.createElement(ae,{topSaleItems:_}):"",r.a.createElement(ne,{popularNameItems:f,topSaleItems:_}),I?r.a.createElement(ee,{lastDaysSales:I}):"")):r.a.createElement("div",null,"loading...")}var ce=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d.a,null,r.a.createElement(R,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/admin",component:Q}),r.a.createElement(f.a,{path:"/home",component:A}),r.a.createElement(f.a,{path:"/Stats",component:re}))),r.a.createElement($,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);var le=a(17),se=a(45),ie={items:[]};var ue={cartItems:[],itemsToBuy:[]};var oe={sales:[]};var me=Object(le.c)({itemReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ITEMS":return Object(W.a)(Object(W.a)({},e),{},{items:t.items});case"REMOVE_ITEM":return Object(W.a)(Object(W.a)({},e),{},{items:e.items.filter((function(e){return e._id!==t._id}))});case"SAVE_ITEM":return Object(W.a)(Object(W.a)({},e),{},{items:e.items.map((function(e){return e._id===t.savedItem._id?t.savedItem:e}))});default:return e}},cartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CART_ITEMS":return Object(W.a)(Object(W.a)({},e),{},{cartItems:t.cartItems});case"REMOVE_CART_ITEM":return Object(W.a)(Object(W.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.itemId!==t.itemId}))});case"SAVE_CART_ITEM":var a=e.cartItems;return a.push(t.cartItem),Object(W.a)(Object(W.a)({},e),{},{cartItems:a});case"SET_CART_TO_BUY":return Object(W.a)(Object(W.a)({},e),{},{itemsToBuy:t.cartItems});case"ADD_TO_BUY":var n=e.itemsToBuy;return n.push(t.item),Object(W.a)(Object(W.a)({},e),{},{itemsToBuy:n});case"CLEAR_CART_TO_BUY":return Object(W.a)(Object(W.a)({},e),{},{itemsToBuy:[]});default:return e}},saleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SALES":return Object(W.a)(Object(W.a)({},e),{},{sales:t.sales});case"ADD_SALE":var a=e.sales;return a.push(t._sale),Object(W.a)(Object(W.a)({},e),{},{sales:a});case"UPDATE_SALE":return Object(W.a)(Object(W.a)({},e),{},{sales:e.sales.map((function(e){return e._id===t._sale._id?e:t._sale}))});default:return e}}}),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,fe=Object(le.e)(me,de(Object(le.a)(se.a)));l.a.render(r.a.createElement(s.a,{store:fe},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.6d9a214b.chunk.js.map