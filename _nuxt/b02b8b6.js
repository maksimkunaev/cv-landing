(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{261:function(t,e,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("1b97eeab",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n(261)},265:function(t,e,n){var o=n(23)(!1);o.push([t.i,".position-root{display:flex;flex-direction:column}.position-title{display:flex;align-items:center;text-decoration:none;justify-content:space-between;margin-top:16px}.position-name{text-transform:uppercase}.position-selected{color:var(--secondary-color)}.position-skills{align-self:flex-start;margin-top:16px}.position-date{text-align:right}",""]),t.exports=o},270:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("e41989ea",content,!0,{sourceMap:!1})},275:function(t,e,n){"use strict";n.r(e);var o={name:"Company",props:{item:{type:Object,defualt:function(){return{}}}}},l=(n(264),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-root"},[n("h2",{staticClass:"header-M position-name"},[t._v(t._s(t.item.position))]),t._v(" "),n("a",{staticClass:"position-title",attrs:{href:t.item.link,target:"_blank"}},[n("span",{staticClass:"text-S position-selected"},[t._v(t._s(t.item.label)+" ")]),t._v(" "),n("span",{staticClass:"text-S position-date"},[t._v(t._s(t.item.startDate)+" - "+t._s(t.item.endDate))])]),t._v(" "),n("p",{staticClass:"text-S position-skills"},[t._v(t._s(t.item.responsibilities))])])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n(270)},285:function(t,e,n){var o=n(23)(!1);o.push([t.i,".experience-list{display:flex;flex-direction:column;max-width:100%;margin:0 auto;flex-wrap:wrap}.experience-item{margin-top:40px;border-bottom:1px solid var(--quaternery-color);padding-bottom:24px}.experience-item:first-child{margin-top:0}.experience-item:last-child{border-bottom:none}",""]),t.exports=o},296:function(t,e,n){"use strict";n.r(e);var o=n(58),l={name:"Experience",components:{Position:n(275).default},data:function(){return{companies:o.b}}},r=(n(284),n(13)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"experience-list"},t._l(t.companies,(function(t){return n("li",{key:t.link,staticClass:"experience-item"},[n("Position",{attrs:{item:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);