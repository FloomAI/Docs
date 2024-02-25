"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6277],{7415:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(5893),t=s(1151);const o={sidebar_position:5},a="global",r={id:"pipelines/objects/global",title:"global",description:"The global section is a centralized configuration space designed to define overarching settings and plugins that apply across the entire scope of your Floom AI Pipeline.",source:"@site/docs/pipelines/objects/global.md",sourceDirName:"pipelines/objects",slug:"/pipelines/objects/global",permalink:"/docs/pipelines/objects/global",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"validation",permalink:"/docs/pipelines/objects/response/validation"},next:{title:"\ud83c\udf1f Examples",permalink:"/docs/category/-examples"}},l={},c=[{value:"Key aspects",id:"key-aspects",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"global",children:"global"}),"\n",(0,i.jsxs)(n.p,{children:["The **",(0,i.jsx)(n.strong,{children:"global"})," section is a centralized configuration space designed to define overarching settings and plugins that apply across the entire scope of your Floom ",(0,i.jsx)(n.strong,{children:"AI Pipeline"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This section ensures consistent behavior and constraints for all operations within the pipeline, enhancing manageability and predictability."}),"\n",(0,i.jsx)(n.h2,{id:"key-aspects",children:"Key aspects"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Cost Management"}),": Implements a cost-limiting strategy to control usage and manage expenses associated with AI operations. By setting daily and monthly token limits for users and pipelines, it prevents cost overruns and ensures efficient resource utilization."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Caching"}),": Leverages a memory-based caching mechanism to optimize performance and reduce redundant processing. This plugin stores and retrieves intermediate or final AI responses, speeding up execution times for repeated queries and improving overall efficiency."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"global:\n  # \ud83d\udcb5 Cost limit\n  - package: floom/plugins/cost-management \n    limits:\n      user:\n        - day: 1000 # max tokens per day\n      pipeline:\n        - month: 600000 # max tokens per month\n    \n  # \u26a1Caching\n  - package: floom/plugins/cache \n    cache-type: memory\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var i=s(7294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);