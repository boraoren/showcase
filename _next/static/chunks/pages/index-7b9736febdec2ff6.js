(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8209)}])},1961:function(e,t,r){"use strict";var n=r(5893),i=r(8527);r(7294),t.Z=e=>{let{value:t,month:r,state:l="default"}=e;return(0,n.jsx)(i.bK,{size:"60px",bg:"default"===l?"primary.900":"primary.50",color:"primary.50",fontWeight:700,rounded:"xl",children:(0,n.jsxs)(i.kC,{direction:"column",textAlign:"center",color:"default"===l?"primary.50":"primary.900",children:[(0,n.jsx)(i.xv,{children:t}),(0,n.jsx)(i.xv,{children:r})]})})}},499:function(e,t,r){"use strict";var n=r(5893);r(7294);var i=r(8527);t.Z=e=>{let{children:t}=e;return(0,n.jsx)(i.xv,{fontSize:["md","lg","xl","2xl"],ml:4,alignSelf:"center",fontFamily:"primary",fontWeight:400,mt:-2,children:t})}},3712:function(e,t,r){"use strict";var n=r(5893);r(7294),t.Z=()=>(0,n.jsxs)("footer",{children:[(0,n.jsx)("hr",{}),(0,n.jsx)("span",{}),(0,n.jsx)("br",{})]})},8209:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return p},default:function(){return y}});var n=r(5893),i=r(7294),l=r(9008),s=r.n(l),o=r(8527),a=r(3712),c=e=>{let{children:t,title:r="This is the default title"}=e;return(0,n.jsxs)(o.W2,{maxWidth:1200,height:"100vh",children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("header",{children:(0,n.jsx)("nav",{})}),t,(0,n.jsx)("br",{}),(0,n.jsx)(a.Z,{})]})},d=r(6369),u=r(4651),x=r(5193),m=r(1961),h=r(499),f=e=>{let{day:t,month:r,children:i,state:l="default",zIndex:s,isSticky:a}=e;return(0,n.jsx)(o.W2,{"data-testid":"molecules-journal-summary",position:a?"sticky":"initial",top:a?10:0,maxWidth:"106ch",p:5,bg:"over"===l&&"primary.900",color:"over"===l&&"primary.50",borderRadius:10,zIndex:s,children:(0,n.jsxs)(o.kC,{children:[(0,n.jsx)(m.Z,{value:t,month:r,state:l}),(0,n.jsx)(h.Z,{children:i})]})})},j=r(8683),g=r(1163),p=!0,y=e=>{let{indexPageData:t,journals:r,years:l,months:s,monthlyTotalJournalInformation:a}=e,{colorMode:m,toggleColorMode:h}=(0,d.If)(),[p,y]=(0,i.useState)(l[0]),[S,v]=(0,i.useState)(s[0]),[b,_]=(0,i.useState)([]),[k,w]=(0,i.useState)(""),z=(0,g.useRouter)();return(0,i.useEffect)(()=>{let e=r.filter(e=>{let t=new Date(e.frontmatter.date),r=t.getFullYear();return r===p});_(e)},[r,S,p]),(0,n.jsxs)(c,{title:t.pageTitle["en-US"],children:[(0,n.jsxs)(o.kC,{m:2,justifyContent:"space-between",children:[(0,n.jsxs)(o.MI,{columns:[1,null,3],spacing:1,textAlign:"center",children:[(0,n.jsx)(o.xv,{fontSize:["sm","md","lg","lg"],fontWeight:"bold",mt:1,children:"\uD83D\uDE80 Side Projects:"}),(0,n.jsx)(o.rU,{href:"side-projects/product-management",bg:"primary.900",color:"white",p:1,borderRadius:5,fontSize:["sm","md","lg","lg"],right:"0px",top:"-10px",children:"Product Management"}),(0,n.jsx)(o.rU,{href:"side-projects/billing-management",bg:"primary.900",color:"white",p:1,borderRadius:5,fontSize:["sm","md","lg","lg"],right:"0px",top:"-10px",children:"Billing Management"})]}),(0,n.jsx)(o.xu,{children:(0,n.jsxs)(o.xv,{fontSize:["md","lg","xl","2xl"],fontFamily:"caveat",right:"0px",top:"-10px",transform:"rotate(-10deg)",children:["V","1.12.0"]})})]}),(0,n.jsx)(o.xu,{bg:"primary.900",m:1,rounded:"xl",children:(0,n.jsxs)(o.kC,{align:"center",children:[(0,n.jsxs)(o.kC,{direction:"column",alignItems:"center",flex:1,children:[(0,n.jsxs)(o.xv,{fontSize:["xl","3xl","5xl","7xl"],color:"primary.50",fontFamily:"primary",fontWeight:900,children:[t.hi["en-US"]," ",t.Im["en-US"]," ",t.name["en-US"]]}),(0,n.jsx)(o.xv,{fontSize:["md","xl","3xl","5xl"],color:"secondary.400",fontFamily:"secondary",fontWeight:900,children:t.title["en-US"]})]}),(0,n.jsx)(u.Ee,{src:"./images/".concat(t.image),alt:t.name["en-US"],boxSize:"50%",mt:-50})]})}),l.length>1&&(0,n.jsx)(o.kC,{position:"sticky",mt:-59,ml:-2,mr:1,p:2,borderRadius:10,children:(0,n.jsx)(o.kC,{gap:1,children:l.map((e,t)=>{let r=p===e;return(0,n.jsx)(x.zx,{colorScheme:"blue",ml:5,variant:r?"solid":"link",fontWeight:"bold",fontSize:["md","md","xl","2xl"],onClick:()=>y(e),children:e},t)})})}),b.map((e,t)=>{let r=(0,j.N)(e.frontmatter.date);return(0,n.jsx)(o.xu,{mt:2,ml:1,style:{fontWeight:"bold",cursor:"pointer"},onMouseOver:()=>w(e.frontmatter.date),onMouseOut:()=>w(""),onFocus:()=>w(e.frontmatter.date),onClick:t=>{t.preventDefault(),z.push("journals/".concat(e.slug))},children:(0,n.jsx)(f,{day:r.day,state:k===e.frontmatter.date?"over":"default",month:(0,j.L)(r.month),children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.X6,{as:"h1",size:"lg",children:e.frontmatter.title}),(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:e.frontmatter.summary}}),"\xa0",(0,n.jsx)(o.rU,{href:"journals/".concat(e.slug),style:{fontWeight:"bold"},children:e.frontmatter.readMore})]})})},t)})]})}},8683:function(e,t,r){"use strict";r.d(t,{L:function(){return l},N:function(){return i}});var n=r(120);let i=e=>n.ou.fromFormat(e,"yyyy/MM/dd"),l=e=>{let t=new Date;return t.setMonth(e-1),t.toLocaleString("en-US",{month:"short"})}},9008:function(e,t,r){e.exports=r(2636)}},function(e){e.O(0,[120,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);