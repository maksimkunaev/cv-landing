(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{268:function(t,n,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("c49b7c66",content,!0,{sourceMap:!1})},280:function(t,n,o){"use strict";o(268)},281:function(t,n,o){var e=o(23)(!1);e.push([t.i,".contacts-root[data-v-07309123]{display:flex;flex-direction:column;align-items:center;max-width:100%;margin:0 auto}.contacts-buttons[data-v-07309123]{display:flex;margin:0 auto;flex-wrap:wrap}.contact-button[data-v-07309123],.socials-link[data-v-07309123]{padding:16px 32px}.contact-button[data-v-07309123]{text-decoration:none;border-radius:var(--border-radius);display:flex;flex-direction:column;align-items:center;max-width:100%;border:1px solid var(--quaternery-color);margin-right:16px;color:var(--tertiary-color)}@media (max-width:$mobile-size){.contact-button[data-v-07309123]{margin-top:16px}}.contact-button[data-v-07309123]:focus,.contact-button[data-v-07309123]:hover{background-color:var(--quaternery-color)}",""]),t.exports=e},294:function(t,n,o){"use strict";o.r(n);o(30),o(73),o(40),o(59),o(134),o(47);var e=o(58),c={name:"Bio",data:function(){return{bio:e.a,isLoading:!1}},computed:{formattedDescription:function(){return console.log(e.a),e.a.description.replace(/{technologies}/g,e.a.technologies.map((function(t){return'<span class="text-M">'.concat(t,"</span>")})).join(", "))}}},r=(o(280),o(13)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"contacts-root"},[o("div",{staticClass:"contacts-buttons"},t._l(t.bio.socials,(function(n){return o("a",{key:n.link,staticClass:"contact-button",attrs:{href:n.link,target:"_blank"}},[t._v("\n      "+t._s(n.label)+"\n    ")])})),0),t._v(" "),t._l(t.bio.contacts,(function(n){return o("a",{key:n.link,staticClass:"socials-link",attrs:{href:n.link,target:"_blank"}},[t._v("\n    "+t._s(n.label)+"\n  ")])}))],2)}),[],!1,null,"07309123",null);n.default=component.exports}}]);