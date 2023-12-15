"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[983],{2144:function(e,n,t){var r=t(5893);t(7294);var i=t(8527);n.Z=e=>{let{children:n}=e;return(0,r.jsx)(i.xv,{textStyle:"h1",lineHeight:1,"date-testid":"atoms-journal-title",children:n})}},1297:function(e,n,t){t.r(n),t.d(n,{BImage:function(){return v},CartoonBox:function(){return p},CartoonTemplate:function(){return u},Chakra:function(){return j},FeatureMatrixEisenhower:function(){return T},FeatureStickyNotes:function(){return y},JournalTitle:function(){return a.Z},SAccordion:function(){return m},STable:function(){return g},UserStories:function(){return s}});var r=t(5893),i=t(7294),l=t(9042),s=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.iA,{children:[(0,r.jsx)(l.Rn,{children:"5 USER STORIES"}),(0,r.jsx)(l.hr,{children:(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Th,{children:"No"}),(0,r.jsx)(l.Th,{children:"AS A"}),(0,r.jsx)(l.Th,{children:"I WANT TO"}),(0,r.jsx)(l.Th,{children:"SO THAT"})]})}),(0,r.jsxs)(l.p3,{fontSize:["md","lg","xl","2xl"],fontFamily:"primary",fontWeight:400,children:[(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Td,{children:"1"}),(0,r.jsx)(l.Td,{children:"Parent"}),(0,r.jsx)(l.Td,{children:"create a playgroup session depending on my availability"}),(0,r.jsx)(l.Td,{children:" my kids can play with other kids at our house and socialise during school holidays"})]}),(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Td,{children:"2"}),(0,r.jsx)(l.Td,{children:"PlayTime App User"}),(0,r.jsx)(l.Td,{children:"see the playgroup sessions with vacancy"}),(0,r.jsx)(l.Td,{children:" I can make bookings for my daughter and I don’t need to take a day off from work"})]}),(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Td,{children:"3"}),(0,r.jsx)(l.Td,{children:"Working parent"}),(0,r.jsx)(l.Td,{children:"my children to join a playgroup session created by other parents"}),(0,r.jsx)(l.Td,{children:"I can leave my kids to people I know and let my children have good time under their supervision"})]}),(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Td,{children:"4"}),(0,r.jsx)(l.Td,{children:"Working parent"}),(0,r.jsx)(l.Td,{children:" know the playgroup vacancies as soon they are created"}),(0,r.jsx)(l.Td,{children:"I can book my kid’s place in the playgroup before anyone else"})]}),(0,r.jsxs)(l.Tr,{children:[(0,r.jsx)(l.Td,{children:"4"}),(0,r.jsx)(l.Td,{children:"Working parent"}),(0,r.jsx)(l.Td,{children:"I can only reschedule or cancel the playgroup session more than 12 hours before the start of the session"}),(0,r.jsx)(l.Td,{children:"the other parents can organise their days accordingly"})]})]})]})}),a=t(2144),o=t(7521),c=t(8527),d=t(4651),h=t(9926),p=e=>{let{size:n,imagePath:t,images:i,speechBalloonImage:l,tiltEnable:s=!0}=e,[a,p]=(0,h.q_)(()=>({opacity:0,position:"absolute",transform:"translate(50px, 0px)"}));return(0,r.jsx)(o.Z,{tiltEnable:s,tiltMaxAngleX:10,tiltMaxAngleY:10,perspective:800,transitionSpeed:500,scale:1.1,gyroscope:!0,onEnter:e=>{p({opacity:1,transform:"translate(0px, 0px)",position:"absolute"})},onLeave:e=>{p({opacity:0,transform:"translate(50px, 0px)",position:"absolute"})},style:{transformStyle:"preserve-3d",backgroundImage:"url('".concat(t).concat(i[0],"')"),backgroundSize:"contain",backgroundRepeat:"no-repeat",borderRadius:"25px"},children:(0,r.jsxs)(c.MI,{columns:1,spacingX:"1px",spacingY:"20px",style:{transform:"translateZ(150px) scale(0.8)"},children:[i[1]&&(0,r.jsx)(d.Ee,{src:"".concat(t).concat(i[1]),alt:"pic",style:{width:"100%"}}),i[2]&&(0,r.jsx)(d.Ee,{src:"".concat(t).concat(i[2]),alt:"pic",style:{position:"absolute"}}),l&&(0,r.jsx)(h.q.span,{style:a,children:(0,r.jsx)(d.Ee,{src:"".concat(t).concat(l),alt:"pic"})})]})})},u=e=>{let{cartoonBoxes:n,imagePath:t}=e;return(0,r.jsxs)(c.MI,{color:"white",gap:5,children:[n[0]&&(0,r.jsx)(p,{imagePath:t,images:n[0].images}),(0,r.jsxs)(c.MI,{columns:2,spacing:5,children:[n[1]&&(0,r.jsx)(p,{imagePath:t,images:n[1].images,speechBalloonImage:n[1].speechBalloonImage,tiltEnable:n[1].tiltEnable}),n[2]&&(0,r.jsx)(p,{imagePath:t,images:n[2].images,speechBalloonImage:n[2].speechBalloonImage,tiltEnable:n[2].tiltEnable})]}),n[3]&&(0,r.jsx)(p,{imagePath:t,images:n[3].images,speechBalloonImage:n[3].speechBalloonImage,tiltEnable:n[3].tiltEnable})]})},x=t(4090),m=e=>{let{sections:n,texts:t}=e;return(0,r.jsx)(x.UQ,{children:n.map((e,n)=>(0,r.jsxs)(x.Qd,{children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(x.KF,{children:[(0,r.jsx)(c.xu,{flex:"1",textAlign:"left",children:e}),(0,r.jsx)(x.XE,{})]})}),(0,r.jsx)(x.Hk,{pb:4,children:"Given the user signs in PlayTime App and is on “Calendar” screen When the user clicks on “Create” button Then the user is redirected to the “Create Playgroup” screen to fill the details and current day is selected and organiser is set as “me” and shows user’s profile picture and location is pre-populated with the home address of current user by default and it is enabled and the telephone number field is pre-populated with user’s mobile number and it is disabled and the number of children is set to 1 and enabled"})]},n))})},g=e=>{let{header:n,rows:t}=e;return(0,r.jsxs)(l.iA,{size:"lg",fontFamily:"primary",fontSize:["md","lg","xl","2xl"],children:[(0,r.jsx)(l.hr,{children:(0,r.jsx)(l.Tr,{children:n.map(e=>(0,r.jsx)(l.Th,{fontFamily:"primary",fontSize:["sm","md","lg","xl"],children:e}))})}),(0,r.jsx)(l.p3,{children:t.map(e=>(0,r.jsx)(l.Tr,{children:e.columns.map(e=>(0,r.jsx)(l.Td,{children:e}))}))})]})},j=t(9681);let b=()=>Math.floor(11*Math.random()+0);var f=e=>(0,r.jsx)(c.xu,{bg:"yellow.100",transform:"rotate(".concat(b(),"deg)"),boxShadow:"lg",height:"150px",fontSize:["md",null,"lg"],_hover:{transform:"scale(1.2)",transition:"transform .2s"},textAlign:"center",children:(0,r.jsxs)(c.M5,{ml:5,mr:5,mt:5,fontStyle:"italic",children:[e.id,(0,r.jsx)("br",{}),e.note]})}),y=e=>{let{featureNotes:n}=e;return(0,r.jsx)(c.MI,{columns:[2,null,3,4],spacing:10,mb:10,mt:10,children:n.map(e=>(0,r.jsx)(f,{...e}))})},T=e=>{var n,t,l,s;let[a,o]=(0,i.useState)([]),d=[],h=[],p=[],u=[],x=()=>{let n=[];return e.featureNotes.forEach(e=>{0!==e.urgentValue&&0!==e.importantValue&&(e.urgentValue<50&&e.importantValue<50&&d.push(e),e.urgentValue>=50&&e.importantValue<50&&h.push(e),e.urgentValue<50&&e.importantValue>=50&&p.push(e),e.urgentValue>=50&&e.importantValue>=50&&u.push(e))}),n.push(d),n.push(h),n.push(p),n.push(u),n};return(0,i.useEffect)(()=>{o(x())},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(c.MI,{columns:[1,null,2],spacing:1,margin:5,mt:10,children:[(0,r.jsxs)(c.xu,{bg:"#5DB075",height:"400px",position:"relative",children:[(0,r.jsx)(c.xv,{color:"black",top:-10,textAlign:"center",position:"relative",children:"URGENT"}),(0,r.jsx)(c.xv,{color:"black",position:"relative",left:-50,top:20,style:{writingMode:"vertical-lr"},children:"IMPORTANT"}),null===(n=a[0])||void 0===n?void 0:n.map(e=>(0,r.jsx)(c.Cd,{size:"40px",bg:"yellow.100",color:"black",position:"absolute",top:"".concat(2*e.importantValue,"%"),left:"".concat(2*e.urgentValue,"%"),children:e.id}))]}),(0,r.jsxs)(c.xu,{bg:"#5DB075",height:"400px",position:"relative",children:[(0,r.jsx)(c.xv,{color:"black",top:-10,textAlign:"center",position:"relative",children:"NOT URGENT"}),null===(t=a[1])||void 0===t?void 0:t.map(e=>(0,r.jsx)(c.Cd,{size:"40px",bg:"yellow.100",color:"black",position:"absolute",top:"".concat(2*e.importantValue,"%"),left:"".concat((e.urgentValue-50)*2,"%"),children:e.id}))]}),(0,r.jsxs)(c.xu,{bg:"#5DB075",height:"400px",position:"relative",children:[(0,r.jsx)(c.xv,{color:"black",position:"relative",left:-50,top:20,style:{writingMode:"vertical-lr"},children:"NOT IMPORTANT"}),null===(l=a[2])||void 0===l?void 0:l.map(e=>(0,r.jsx)(c.Cd,{size:"40px",bg:"yellow.100",color:"black",position:"absolute",top:"".concat((e.importantValue-50)*2,"%"),left:"".concat(2*e.urgentValue,"%"),children:e.id}))]}),(0,r.jsx)(c.xu,{bg:"#5DB075",height:"400px",position:"relative",children:null===(s=a[3])||void 0===s?void 0:s.map(e=>(0,r.jsx)(c.Cd,{size:"40px",bg:"yellow.100",color:"black",position:"absolute",top:"".concat((e.importantValue-50)*2,"%"),left:"".concat((e.urgentValue-50)*2,"%"),children:e.id}))})]})})},v=e=>{let{src:n,title:t,rotate:i=0}=e;return(0,r.jsxs)(c.kC,{direction:"column",boxShadow:"lg",style:{transform:"rotate(".concat(i,"deg)")},m:3,backgroundColor:"primary.50",maxWidth:"md",children:[(0,r.jsx)(d.Ee,{src:n,rounded:10}),t&&(0,r.jsx)(c.xv,{m:1,backgroundColor:"primary.50",children:t})]})}},3712:function(e,n,t){var r=t(5893);t(7294),n.Z=()=>(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("span",{}),(0,r.jsx)("br",{})]})}}]);