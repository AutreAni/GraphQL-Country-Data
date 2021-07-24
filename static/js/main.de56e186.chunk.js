(this.webpackJsonpwithgraphql=this.webpackJsonpwithgraphql||[]).push([[0],{35:function(e,c,t){},36:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},41:function(e,c,t){"use strict";t.r(c);var s,n=t(6),a=t.n(n),i=t(27),j=t.n(i),l=(t(35),t(36),t(55)),d=t(57),r=t(54),o=t(20),b=t(58),u=t(28),O=t(56),h=Object(O.a)(s||(s=Object(u.a)(["\n  query country($code: ID!) {\n        country(code: $code) {\n          name\n          native\n          capital\n          emoji\n          currency\n          languages {\n            code\n            name\n          }\n        }\n    }\n"]))),x=t(2),m=function(e){var c=e.data;return c&&console.log(c),Object(x.jsxs)("div",{className:"country-data",children:[Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Name"}),Object(x.jsx)("span",{children:c.country.name})]}),Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Native"}),Object(x.jsx)("span",{children:c.country.native})]}),Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Capital"}),Object(x.jsx)("span",{children:c.country.capital})]}),Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Flag"}),Object(x.jsx)("span",{className:"emoji",children:c.country.emoji})]}),Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Currency"}),Object(x.jsx)("span",{children:c.country.currency})]}),Object(x.jsxs)("div",{className:"data-field",children:[Object(x.jsx)("span",{className:"field-name",children:"Languages"}),Object(x.jsx)("span",{className:"languages",children:c.country.languages.map((function(e,c){return Object(x.jsx)("span",{children:e.name},c)}))})]})]})},p=(t(38),function(){return Object(x.jsxs)("div",{className:"lds-default",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})}),v=(t(39),function(e){var c=e.message;return Object(x.jsxs)("div",{className:"error",children:[Object(x.jsx)("p",{children:c}),Object(x.jsx)("div",{className:"figure",children:Object(x.jsx)("div",{className:"figcaption",children:Object(x.jsx)("div",{className:"sad-mac"})})})]})}),f=function(){var e=Object(n.useState)(""),c=Object(o.a)(e,2),t=c[0],s=c[1],a=Object(b.a)(h),i=Object(o.a)(a,2),j=i[0],l=i[1],d=l.data,r=l.loading,u=l.error,O=Object(n.useState)(),f=Object(o.a)(O,2),g=f[0],N=f[1];return Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{className:"searchField",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),2===t.length?(j({variables:{code:t}}),s("")):N("*Country code should be two letters")},children:[Object(x.jsx)("input",{type:"text",maxLength:"2",value:t,onChange:function(e){var c=e.target.value,t=c.length-1;s(c.toUpperCase()),c.charCodeAt(t)>=65&&c.charCodeAt(t)<=90||c.charCodeAt(t)>=97&&c.charCodeAt(t)<=122||!c.length?N(null):N("*Country code should contain only letters")},placeholder:"Counrty Code"}),Object(x.jsx)("button",{type:"submit",children:"Find"}),Object(x.jsx)("p",{className:"errorMsg",children:g})]})})}),Object(x.jsx)("div",{className:"result",children:Object(x.jsxs)("div",{className:"container",children:[r?Object(x.jsx)(p,{}):null,d&&d.country?Object(x.jsx)(m,{data:d}):null,d&&!d.country?Object(x.jsx)(v,{message:"Country not found"}):null,u?Object(x.jsx)(v,{message:u.message}):null]})})]})},g=t.p+"static/media/Pexels Videos 1851190.217bc138.mp4",N=new l.a({cache:new d.a,uri:"https://countries.trevorblades.com",options:{heaers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Connection:"keep-alive",DNT:"1",Origin:"https://countries.trevorblades.com"}}});var y=function(){return Object(x.jsx)(r.a,{client:N,children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(x.jsx)("source",{src:g,type:"video/mp4"})}),Object(x.jsx)(f,{})]})})};j.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.de56e186.chunk.js.map