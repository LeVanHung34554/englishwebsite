(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[21],{517:function(e,t,a){"use strict";var n=a(3),r=a(11),c=a(4),o=a(280),i=a(449),s=a(499),l=a(460),u=a(0),d=a(488),b=Object(d.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),j=a(1),m=["label","options","className","error","resetFlag","index","onChange"];function p(e){var t,a=e.label,d=e.options,p=e.className,O=e.error,v=e.resetFlag,f=e.index,h=e.onChange,x=Object(c.a)(e,m),g=Object(u.useState)(null===(t=d[f])||void 0===t?void 0:t.value),N=Object(r.a)(g,2),y=N[0],S=N[1],k=b();return Object(u.useEffect)((function(){var e;v&&S(null===(e=d[0])||void 0===e?void 0:e.value)}),[v]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(o.a,{className:"".concat(k.root," ").concat(p),variant:"filled",children:[Object(j.jsx)(i.a,{classes:{root:k.label,focused:k.labelFocus},id:a,children:a}),Object(j.jsx)(l.a,Object(n.a)(Object(n.a)({classes:{root:k.selectRoot,icon:k.selectIcon},MenuProps:{classes:{paper:k.selectMenu}},disableUnderline:!0,error:O,labelId:a,label:a,value:y,onChange:function(e){S(e.target.value),h(e)}},x),{},{children:d&&d.map((function(e,t){return Object(j.jsx)(s.a,{value:e.value,children:e.label},t)}))}))]})})}p.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};t.a=p},518:function(e,t,a){"use strict";var n=a(26),r=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(34)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=o},519:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(11),o=a(495),i=a(0),s=a(1),l=["children"];t.a=function(e){var t=Object(i.useState)(!1),a=Object(c.a)(t,2),u=a[0],d=a[1],b=Object(i.useState)(-1),j=Object(c.a)(b,2),m=j[0],p=j[1],O=e.children,v=Object(r.a)(e,l);return Object(i.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&p(!0):e&&p(!1),function(){return e=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==m&&Object(s.jsx)(s.Fragment,{children:m?Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},v),{},{children:O})):Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},v),{},{open:u,onClick:function(){return d(!u)},children:O}))})})}},524:function(e,t,a){"use strict";var n=a(3),r=a(28),c=a.n(r),o="/api/listening",i={getListening:function(e){return c.a.get("".concat(o,"/get-listening/").concat(e))},getListenByTopic:function(e,t){return c.a.get("".concat(o,"/get-listen-by-topic"),{params:{topic:e,type:t}})},getListenById:function(e){return c.a.get("".concat(o,"/get-listen-by-id/").concat(e))},getListenTopics:function(e,t){return c.a.get("".concat(o,"/get-listen-topics"),{params:{topic:e,type:t}})},getAllListen:function(e){return c.a.get("".concat(o,"/get-all-listen"),{params:{type:e}})},searchListen:function(e){return c.a.get("".concat(o,"/search-listen"),{params:{name:e}})},postListen:function(e){return c.a.post("".concat(o,"/post-listen"),Object(n.a)({},e),{header:{"content-type":"multipart/form-data"}})},putListen:function(e,t){return c.a.put("".concat(o,"/put-listen/").concat(e),Object(n.a)({},t),{params:{id:e},header:{"content-type":"multipart/form-data"}})},deleteListen:function(e){return c.a.patch("".concat(o,"/delete-listen/").concat(e))}};t.a=i},525:function(e,t,a){"use strict";var n=a(26),r=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(34)).default)(c.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=o},534:function(e,t,a){"use strict";var n=a(26),r=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(34)).default)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=o},542:function(e,t,a){"use strict";var n=a(0),r=a(564),c=a.n(r),o=a(1),i={buttons:["source","|","bold","strikethrough","underline","italic","|","ul","ol","|","outdent","indent","|","font","fontsize","brush","paragraph","|","image","video","table","link","|","align","undo","redo","|","hr","eraser","copyformat","|","symbol","fullsize","print","about"]};t.a=function(e){var t=e.initialValue,a=e.getValue,r=Object(n.useRef)(null);return Object(o.jsx)(c.a,{ref:r,value:t,config:i,tabIndex:1,onChange:function(e){return a(e)}})}},581:function(e,t,a){"use strict";var n=a(488);t.a=Object(n.a)((function(){return{root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},sentenceInput:{minHeight:"8rem"}}}))},608:function(e,t,a){"use strict";var n=a(534),r=a.n(n),c=a(519),o=(a(0),a(581)),i=a(1);t.a=function(e){var t=e.title,a=Object(o.a)();return Object(i.jsx)(c.a,{title:t,className:"cur-help",children:Object(i.jsx)(r.a,{className:a.tooltipIcon})})}},764:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(16),c=a.n(r),o=a(3),i=a(4),s=a(27),l=a(11),u=a(524),d=a(19),b=a(180),j=a(503),m=a(520),p=a(178),O=a.n(p),v=a(525),f=a.n(v),h=a(518),x=a.n(h),g=a(145),N=a(517),y=a(583),S=a(64),k=a(94),w=a(608),C=a(581),L=a(602),V=a(753),z=a(726),I=a(20),M=a(48),F=a(542),T=a(1),R=["children","value","index"],P=k.b().shape({Name:k.d().trim().required("Input value"),Description:k.d().required("Input value"),Topic:k.d().required("Select one").oneOf(y.a.map((function(e){return e.value}))),LinkVideo:k.d(),Script:k.d()});function D(e){var t=e.children,a=e.value,n=e.index,r=Object(i.a)(e,R);return Object(T.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),{},{children:a===n&&Object(T.jsx)(L.a,{sx:{p:3},children:Object(T.jsx)(m.a,{children:t})})}))}function _(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function B(e){var t,a,r,c,i=e.onSubmitForm,s=e.submitting,u=Object(C.a)(),p=Object(n.useState)(0),v=Object(l.a)(p,2),h=v[0],k=(v[1],Object(n.useState)(1)),R=Object(l.a)(k,2),B=R[0],E=R[1],U=Object(S.d)({resolver:Object(b.a)(P)}),W=U.register,H=U.handleSubmit,A=U.formState.errors,q=Object(d.b)(),J=Object(I.g)(),G="https://res.cloudinary.com/phongvn2611/image/upload/v1638368033/english/word/default-image_fbmbtn.png",K=Object(n.useState)(G),Q=Object(l.a)(K,2),X=Q[0],Y=Q[1],Z=Object(n.useState)(null),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(""),ne=Object(l.a)(ae,2),re=ne[0],ce=ne[1],oe=function(e){var t=new FileReader;return t.readAsDataURL(e),new Promise((function(e){t.onloadend=function(){e(t.result)}}))};return Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:u.title,children:"Th\xeam b\xe0i nghe"}),Object(T.jsx)("div",{className:"english-break"}),Object(T.jsxs)("form",{onSubmit:H((function(e){i(Object(o.a)(Object(o.a)({},e),{},{VidUpload:ee,Image:X,Script:re}))})),autoComplete:"off",children:[Object(T.jsx)(m.a,{container:!0,alignContent:"center",children:Object(T.jsxs)("div",{className:u.avtWrap,children:[Object(T.jsx)("img",{src:X||G,alt:"",className:"".concat(u.avt," w-100 h-100")}),Object(T.jsx)("div",{className:"".concat(u.cameraIconWrap," flex-center"),children:Object(T.jsx)("input",{type:"file",className:u.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||q(Object(M.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&q(Object(M.b)("Size too large","error")),oe(t).then((function(e){Y(e)}))}catch(a){throw a}},accept:"image/*"})})]})}),Object(T.jsxs)(m.a,{className:u.grid,container:!0,spacing:3,children:[Object(T.jsxs)(m.a,{item:!0,xs:12,md:6,lg:4,children:[Object(T.jsx)(g.a,{className:"w-100",label:"Name (*)",error:Boolean(A.Name),inputProps:Object(o.a)({autoFocus:!0,name:"Name"},W("Name"))}),A.Name&&Object(T.jsx)("p",{className:"text-error",children:null===(t=A.Name)||void 0===t?void 0:t.message})]}),Object(T.jsxs)(m.a,{item:!0,xs:12,md:6,lg:4,children:[Object(T.jsx)(g.a,{className:"w-100",label:"Description (*)",error:Boolean(A.Description),inputProps:Object(o.a)({name:"Description"},W("Description"))}),A.Description&&Object(T.jsx)("p",{className:"text-error",children:null===(a=A.Description)||void 0===a?void 0:a.message})]}),Object(T.jsxs)(m.a,{item:!0,xs:12,md:6,lg:4,children:[Object(T.jsx)(N.a,{className:"w-100",label:"Topic (*)",options:y.a,error:Boolean(A.Topic),resetFlag:h,index:0,inputProps:Object(o.a)({name:"Topic"},W("Topic"))}),A.type&&Object(T.jsx)("p",{className:"text-error",children:null===(r=A.Topic)||void 0===r?void 0:r.message})]}),Object(T.jsxs)(L.a,{sx:{width:"50%"},children:[Object(T.jsx)(L.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(T.jsxs)(V.a,{value:B,onChange:function(e,t){E(t)},"aria-label":"basic tabs example",indicatorColor:"primary",children:[Object(T.jsx)(z.a,Object(o.a)({label:"Upload"},_(0))),Object(T.jsx)(z.a,Object(o.a)({label:"Link"},_(1)))]})}),Object(T.jsx)(D,{value:B,index:0,children:Object(T.jsx)(m.a,{item:!0,xs:6,children:Object(T.jsx)(m.a,{container:!0,alignContent:"center",children:Object(T.jsx)("div",{className:u.avtWrap,children:Object(T.jsx)("div",{className:"".concat(u.cameraIconWrap," flex-center"),children:Object(T.jsx)("input",{type:"file",className:u.fileInput,onChange:function(e){e.preventDefault();try{var t=e.target.files[0];t||q(Object(M.b)("No files were uploaded","error")),t.size/Math.pow(1024,2)>2&&q(Object(M.b)("Size too large","error")),oe(t).then((function(e){te(e)}))}catch(a){throw a}},accept:"video/*"})})})})})}),Object(T.jsx)(D,{value:B,index:1,children:Object(T.jsxs)(m.a,{item:!0,xs:6,children:[Object(T.jsx)(g.a,{className:"w-100",label:"Link Video",multiline:!0,endAdornment:Object(T.jsx)(w.a,{title:"Input link youtube"}),inputProps:Object(o.a)({name:"LinkVideo"},W("LinkVideo"))}),A.Video&&Object(T.jsx)("p",{className:"text-error",children:null===(c=A.Video)||void 0===c?void 0:c.message})]})})]})]}),Object(T.jsx)("div",{className:"row",children:Object(T.jsxs)("div",{className:"col-md-6",style:{margin:"auto",marginTop:"50px"},children:[Object(T.jsx)("div",{style:{textAlign:"center"},children:Object(T.jsx)("h3",{children:"Rich Text Editor"})}),Object(T.jsx)(F.a,{initialValue:"",getValue:function(e){ce(e)}})]})}),Object(T.jsx)("div",{className:"english-break"}),Object(T.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(T.jsx)(j.a,{className:"".concat(u.btn," ").concat(u.btnReset),color:"secondary",endIcon:Object(T.jsx)(f.a,{}),variant:"outlined",disabled:s,onClick:function(){return J.push("/admin/listening")},children:"Return"}),Object(T.jsx)(j.a,{type:"submit",className:"".concat(u.btn," _btn _btn-primary"),disabled:s,endIcon:s?Object(T.jsx)(O.a,{className:"ani-spin"}):Object(T.jsx)(x.a,{}),variant:"contained",children:"Create"})]})]})]})}B.defaultProps={onSubmitForm:function(){},submitting:!1};var E=B,U=["VidUpload","LinkVideo"],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if("string"!==typeof e||""===e)return null;var t=e.includes("https://www.youtube.com");return t||(t=e.includes("youtu.be/"))?e:null};var H=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],b=Object(d.b)(),j=function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,s,l,d,j,m,p,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r(!0),a=t.VidUpload,n=t.LinkVideo,s=Object(i.a)(t,U),!a||!n||""==n.trim()){e.next=7;break}return b(Object(M.b)("Ch\u1ecdn m\u1ed9t trong hai t\xf9y ch\u1ecdn \u0111\u1ec3 th\xeam video","warning")),r(!1),e.abrupt("return");case 7:if(l=[],console.log(t),null!=a){e.next=18;break}if(null!=(d=W(n))){e.next=15;break}return b(Object(M.b)("Link video is invalid.","warning")),r(!1),e.abrupt("return");case 15:l=Object(o.a)(Object(o.a)({},s),{},{Video:d}),e.next=19;break;case 18:l=Object(o.a)(Object(o.a)({},s),{},{Video:a});case 19:return e.next=21,u.a.postListen(l);case 21:j=e.sent,console.log(j.data),200===j.status&&(b(Object(M.b)("Created listening successfully","success")),r(!1)),e.next=31;break;case 26:e.prev=26,e.t0=e.catch(0),O=(null===(m=e.t0.response)||void 0===m||null===(p=m.data)||void 0===p?void 0:p.message)||"Error, can not create listening.",b(Object(M.b)(O,"error")),r(!1);case 31:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)(E,{onSubmitForm:j,submitting:a})},A=a(488),q=Object(A.a)((function(){return{root:{margin:"3.2rem 0"}}}));t.default=function(){var e=q();return Object(T.jsx)("div",{className:"container",children:Object(T.jsx)("div",{className:e.root,children:Object(T.jsx)("div",{className:"ani-fade",children:Object(T.jsx)(H,{})})})})}}}]);
//# sourceMappingURL=21.970941d8.chunk.js.map