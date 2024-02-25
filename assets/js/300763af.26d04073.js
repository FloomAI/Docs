"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[783],{6201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=n(5893),o=n(1151);const r={sidebar_position:1},a="format",i={id:"pipelines/objects/response/format",title:"format",description:'Format defines the "formatter", a plugin that makes sure the response will fit your expectations in terms of format (plain-text/JSON/YAML/CSV), language, length etc.',source:"@site/docs/pipelines/objects/response/format.md",sourceDirName:"pipelines/objects/response",slug:"/pipelines/objects/response/format",permalink:"/docs/pipelines/objects/response/format",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"response",permalink:"/docs/category/response"},next:{title:"context",permalink:"/docs/pipelines/objects/response/context"}},c={},p=[];function l(e){const t={code:"code",em:"em",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"format",children:"format"}),"\n",(0,s.jsx)(t.p,{children:'Format defines the "formatter", a plugin that makes sure the response will fit your expectations in terms of format (plain-text/JSON/YAML/CSV), language, length etc.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"response:\n  # \u2714\ufe0f Response should be 3 sentences max, in English (US) \n  format:\n    - package: floom/response/formatter \n      type: text\n      language: en-us\n      max-sentences: 3\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This response uses Floom default ",(0,s.jsx)(t.strong,{children:"Formatter"})," package located at ",(0,s.jsx)(t.em,{children:"floom/response/formatter"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var s=n(7294);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);