(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(15),n=a.n(o),l=(a(22),a(7)),i=(a(23),a(0));function r(){var e=Object(c.useState)({color:"white",backgroundColor:"black"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Light Mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"my-5",children:"About us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",style:a,children:[Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",style:a,className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",style:a,children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",style:a,className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("button",{type:"button",onClick:function(){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("ENABLE dark mode"),console.log("dark")):(s({color:"white",backgroundColor:"black"}),d("ENABLE light mode"),console.log("light"))},className:"btn btn-warning my-3",children:r})]})}var d=a(10);function b(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function h(e){var t=Object(c.useState)("Enter text Here"),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"box",className:"form-label"}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){console.log("onchange"),o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"box",rows:"10"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("uppercase was clicked"+s);var t=s.toUpperCase();o(t),e.showAlert("converted into uppercase","success")},children:"Convert To Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("uppercase was clicked"+s);var e=s.toLowerCase();o(e)},children:"Convert To Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){for(var e="",t=0;t<s.length;t++)s[t].toUpperCase()===s[t]?e+=s[t].toLowerCase():s[t].toLowerCase()===s[t]&&(e+=s[t].toUpperCase());o(e)},children:"Invertcase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=document.getElementById("box");e.select(),navigator.clipboard.writeText(e.value)},children:"CopyText"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.split(/[ ]+/);o(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h1",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," minutes read"]}),Object(i.jsx)("h2",{children:"PREVIEW"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter text in above box to preview"})]})]})})}b.defaultProps={title:"set title here",aboutText:"about text here"};var j=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),e.alert.msg]})},u=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),m=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1800)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"klksd",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="grey",x("Dark Mode is enabled","success"),document.title="TextUtils- dark mode",setInterval((function(){document.title="textutils is amazing mode"}),2e3),setInterval((function(){document.title="Install Textutils NOw"}),1500)):(s("light"),document.body.style.backgroundColor="white",x("Dark Mode is disabled","Danger"))}}),Object(i.jsx)(j,{alert:m}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/about",children:Object(i.jsx)(r,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{showAlert:x,heading:"enter the text",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.d98b87b2.chunk.js.map