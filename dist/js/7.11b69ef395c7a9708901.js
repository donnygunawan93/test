webpackJsonp([7,10],{162:function(t,e,n){var i,s;i=n(254);var r=n(255);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=r.render,s.staticRenderFns=r.staticRenderFns,t.exports=i},183:function(t,e){!function(e,n){var i={version:"2.3.2",areas:{},apis:{},inherit:function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n]);return e},stringify:function(t){return void 0===t||"function"==typeof t?t+"":JSON.stringify(t)},parse:function(t){try{return JSON.parse(t)}catch(e){return t}},fn:function(t,e){i.storeAPI[t]=e;for(var n in i.apis)i.apis[n][t]=e},get:function(t,e){return t.getItem(e)},set:function(t,e,n){t.setItem(e,n)},remove:function(t,e){t.removeItem(e)},key:function(t,e){return t.key(e)},length:function(t){return t.length},clear:function(t){t.clear()},Store:function(t,e,n){var s=i.inherit(i.storeAPI,function(t,e,n){return 0===arguments.length?s.getAll():void 0!==e?s.set(t,e,n):"string"==typeof t||"number"==typeof t?s.get(t):t?s.setAll(t,e):s.clear()});s._id=t;try{var r="_safariPrivate_";e.setItem(r,"sucks"),s._area=e,e.removeItem(r)}catch(t){}return s._area||(s._area=i.inherit(i.storageAPI,{items:{},name:"fake"})),s._ns=n||"",i.areas[t]||(i.areas[t]=s._area),i.apis[s._ns+s._id]||(i.apis[s._ns+s._id]=s),s},storeAPI:{area:function(t,e){var n=this[t];return n&&n.area||(n=i.Store(t,e,this._ns),this[t]||(this[t]=n)),n},namespace:function(t,e){if(!t)return this._ns?this._ns.substring(0,this._ns.length-1):"";var n=t,s=this[n];return s&&s.namespace||(s=i.Store(this._id,this._area,this._ns+n+"."),this[n]||(this[n]=s),e||s.area("session",i.areas.session)),s},isFake:function(){return"fake"===this._area.name},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(t){return this._area.has?this._area.has(this._in(t)):!!(this._in(t)in this._area)},size:function(){return this.keys().length},each:function(t,e){for(var n=0,s=i.length(this._area);n<s;n++){var r=this._out(i.key(this._area,n));if(void 0!==r&&t.call(this,r,e||this.get(r))===!1)break;s>i.length(this._area)&&(s--,n--)}return e||this},keys:function(){return this.each(function(t,e){e.push(t)},[])},get:function(t,e){var n=i.get(this._area,this._in(t));return null!==n?i.parse(n):e||n},getAll:function(){return this.each(function(t,e){e[t]=this.get(t)},{})},set:function(t,e,n){var s=this.get(t);return null!=s&&n===!1?e:i.set(this._area,this._in(t),i.stringify(e),n)||s},setAll:function(t,e){var n,i;for(var s in t)i=t[s],this.set(s,i,e)!==i&&(n=!0);return n},remove:function(t){var e=this.get(t);return i.remove(this._area,this._in(t)),e},clear:function(){return this._ns?this.each(function(t){i.remove(this._area,this._in(t))},1):i.clear(this._area),this},clearAll:function(){var t=this._area;for(var e in i.areas)i.areas.hasOwnProperty(e)&&(this._area=i.areas[e],this.clear());return this._area=t,this},_in:function(t){return"string"!=typeof t&&(t=i.stringify(t)),this._ns?this._ns+t:t},_out:function(t){return this._ns?t&&0===t.indexOf(this._ns)?t.substring(this._ns.length):void 0:t}},storageAPI:{length:0,has:function(t){return this.items.hasOwnProperty(t)},key:function(t){var e=0;for(var n in this.items)if(this.has(n)&&t===e++)return n},setItem:function(t,e){this.has(t)||this.length++,this.items[t]=e},removeItem:function(t){this.has(t)&&(delete this.items[t],this.length--)},getItem:function(t){return this.has(t)?this.items[t]:null},clear:function(){for(var t in this.list)this.removeItem(t)},toString:function(){return this.length+" items in "+this.name+"Storage"}}};e.store&&(i.conflict=e.store);var s=i.Store("local",function(){try{return localStorage}catch(t){}}());s.local=s,s._=i,s.area("session",function(){try{return sessionStorage}catch(t){}}()),e.store=s,"function"==typeof n&&void 0!==n.amd?n(function(){return s}):"undefined"!=typeof t&&t.exports&&(t.exports=s)}(this,this.define)},253:function(t,e,n){"use strict";var i=n(183);n.n(i);e.a=function(t){return!(!i("user")&&i("user").permissions)&&i("user").permissions.indexOf(t)>=0}},254:function(t,e,n){"use strict";var i=n(253);Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{userCan:i.a}}}},255:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("div",{staticClass:"toolbar text-center"},[e("q-toolbar-title",[t._v("myApp")])]),t._v(" "),e("div",{staticClass:"list"},[e("q-collapsible",{attrs:{icon:"person",label:"My Account"}},[e("div",{staticClass:"item item-link",on:{click:function(e){t.$router.push("/password/change")}}},[e("div",{staticClass:"item-content"},[t._v("Change Password")])]),t._v(" "),e("div",{staticClass:"item item-link",on:{click:function(e){t.$router.replace("/login")}}},[e("div",{staticClass:"item-content"},[t._v("Logout")])])]),t._v(" "),t._v(" "),e("div",{staticClass:"list-label bg-light"},[t._v("Navigation")]),t._v(" "),e("div",{staticClass:"item item-link",on:{click:function(e){t.$router.push("/dashboard")}}},[e("div",{staticClass:"item-content"},[t._v("Dashboard")])]),t._v(" "),t.userCan("student.read")?e("div",{staticClass:"item item-link",on:{click:function(e){t.$router.push("/students")}}},[e("div",{staticClass:"item-content"},[t._v("Students")])]):t._e()])])},staticRenderFns:[]}}});