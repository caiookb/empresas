(this["webpackJsonpempresas-web"]=this["webpackJsonpempresas-web"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"Header_header__2Gu8G",options:"Header_options__hjmsP",logout:"Header_logout__2pVI_",normalHeader:"Header_normalHeader__2OlkL",expandedHeader:"Header_expandedHeader__1TkS7",goBackHeader:"Header_goBackHeader__1N0BF"}},18:function(e,t,n){e.exports={input:"TextInput_input__OA2so",icon:"TextInput_icon__2S-7T",field:"TextInput_field__3VeOU",visibilityIcon:"TextInput_visibilityIcon__3a8zv"}},23:function(e,t,n){e.exports={spinner:"Spinner_spinner__3q1So",load:"Spinner_load__1b14J",loader:"Spinner_loader__3biih",load8:"Spinner_load8__2mm4U"}},24:function(e,t,n){e.exports={card:"Card_card__2SZbI",photo:"Card_photo__3cZv3",info:"Card_info__224Qd"}},25:function(e,t,n){e.exports={card:"ExpandedCard_card__X5kNR",photo:"ExpandedCard_photo__td42N",info:"ExpandedCard_info__3-Zkm"}},26:function(e,t,n){e.exports={container:"Login_container__2MuK8",login:"Login_login__2v3jB",errorText:"Login_errorText__K5997"}},41:function(e,t,n){e.exports={buttons:"Buttons_buttons__1f1ie"}},51:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"SAVE_COMPANIES",(function(){return R})),n.d(r,"SAVE_COMPANY_DETAIL",(function(){return Y})),n.d(r,"SAVE_COMPANY_TYPES",(function(){return q})),n.d(r,"CLEAN_COMPANIES",(function(){return F}));var i={};n.r(i),n.d(i,"SAVE_USER",(function(){return J})),n.d(i,"CLEAN_USER",(function(){return G})),n.d(i,"IS_AUTH",(function(){return z}));var a={};n.r(a),n.d(a,"saveCompanies",(function(){return X})),n.d(a,"saveCompanyDetail",(function(){return Z})),n.d(a,"saveCompanyTypes",(function(){return K})),n.d(a,"clearCompanies",(function(){return Q}));var c={};n.r(c),n.d(c,"saveUser",(function(){return $})),n.d(c,"clearUser",(function(){return W})),n.d(c,"isAuth",(function(){return ee}));var o={};n.r(o),n.d(o,"login",(function(){return ce}));var s={};n.r(s),n.d(s,"getCompanies",(function(){return oe})),n.d(s,"getCompanyDetail",(function(){return se})),n.d(s,"getCompanyByType",(function(){return ue})),n.d(s,"getCompanyByName",(function(){return le}));var u={};n.r(u),n.d(u,"dispatch",(function(){return Oe}));var l={};n.r(l),n.d(l,"login",(function(){return _e})),n.d(l,"logout",(function(){return xe}));var d=n(1),p=n(0),j=n(19),f=n.n(j),h=(n(51),n(4)),b=n(22),m=n(15),v=n(3),O=n(9),_=function(e){var t=e.onClick,n=e.name,r=e.color,i=e.label;return Object(d.jsxs)("div",{style:{display:"flex"},children:[i,Object(d.jsx)("i",{onClick:function(){return t()},className:"material-icons",style:{cursor:"pointer",color:r},children:n})]})},x=_;_.defaultProps={onClick:function(){return null},label:""};var y=n(18),g=n.n(y),S=function(e){var t=e.icon,n=e.type,r=e.required,i=e.error,a=e.placeholder,c=e.onChange,o=e.onBlur,s=e.name,u=Object(p.useState)(n),l=Object(O.a)(u,2),j=l[0],f=l[1],h=function(){return Object(d.jsx)(x,{name:"error",color:"red"})},b=function(){return Object(d.jsx)(x,{onClick:function(){return c("")},name:"close",color:"white"})},m=function(){return Object(d.jsx)("div",{className:g.a.visibilityIcon,children:Object(d.jsx)(x,{onClick:function(){return function(e){return f("password"===e?"text":"password")}(j)},name:"password"!==j?"visibility":"visibility_off"})})},v=function(){return"password"!==s||i?i?Object(d.jsx)(h,{}):"Pesquisar"===a?Object(d.jsx)(b,{}):null:Object(d.jsx)(m,{})};return Object(d.jsxs)("div",{className:g.a.input,style:{borderBottom:i?"solid 0.6px #ff0f44":"Pesquisar"===a?"solid 0.6px #ffffff":null},children:[Object(d.jsx)("img",{className:g.a.icon,src:t}),Object(d.jsx)("div",{className:g.a.field,children:Object(d.jsx)("input",{type:j,onChange:function(e){return c(e.target.value)},onBlur:function(e){return o(e.target.value)},placeholder:a,required:r,style:{color:"Pesquisar"===a?"white":null},name:s})}),Object(d.jsx)(v,{})]})},C=S;S.defaultProps={onChange:function(){return null},onBlur:function(){return null},type:"text",required:!1,name:null};var E=n(41),A=n.n(E),N=function(e){var t=e.title,n=e.color;e.onClick;return Object(d.jsx)("button",{className:A.a.buttons,style:{backgroundColor:n},onClick:function(){return onclick},children:t})},T=n(23),I=n.n(T),P=function(e){return e.loading?Object(d.jsx)("div",{className:I.a.spinner,children:Object(d.jsx)("div",{className:I.a.load,children:Object(d.jsx)("div",{className:I.a.loader})})}):null},k=function(e){var t=e.width,n=e.logo;return Object(d.jsx)("img",{style:{width:t},src:n})},w=n(12),L=n.n(w),V=n.p+"static/media/ioasys_logo.4da438b1.png",B=n.p+"static/media/logo_nav.9a2734b9.png",U=n.p+"static/media/email.fb82ffed.svg",M=n.p+"static/media/password.b1bd3490.svg",H=n.p+"static/media/search.9de52394.svg",D=n(45),R="SAVE_COMPANIES",Y="SAVE_COMPANY_DETAIL",q="SAVE_COMPANY_TYPES",F="CLEAN_COMPANIES",J="SAVE_USER",G="CLEAN_USER",z="IS_AUTH",X=function(e){return{type:r.SAVE_COMPANIES,payload:e}},Z=function(e){return{type:r.SAVE_COMPANY_DETAIL,payload:e}},K=function(e){return{type:r.SAVE_COMPANY_TYPES,payload:e}},Q=function(){return{type:r.CLEAN_COMPANIES,payload:{}}},$=function(e){return{type:i.SAVE_USER,payload:e}},W=function(){return{type:i.CLEAN_USER,payload:{}}},ee=function(e){return{type:i.IS_AUTH,payload:e}},te=n(42),ne=n.n(te),re="https://empresas.ioasys.com.br/api/v1/",ie=function(e){return re.concat(e.join("/"))},ae=function(e){var t=e.method,n=e.path,r=e.body,i=JSON.parse(localStorage.getItem("headers")),a={"access-token":null===i||void 0===i?void 0:i.accessToken,client:null===i||void 0===i?void 0:i.client,uid:null===i||void 0===i?void 0:i.uid},c={method:t,data:r,headers:ie(n).includes("auth/sign_in")?{}:a};return ne()(ie(n),c).then((function(e){return e})).catch((function(e){throw e}))},ce=function(e){return ae({method:"POST",path:["users","auth","sign_in"],body:e})},oe=function(){return ae({method:"GET",path:["enterprises"]})},se=function(e){return ae({method:"GET",path:["enterprises","".concat(e)]})},ue=function(e){return ae({method:"GET",path:["enterprises",0===e?"":"?enterprise_types=".concat(e)]})},le=function(e){return ae({method:"GET",path:["enterprises","?name=".concat(e)]})},de=function(e,t){return function(n){return function(e,t){return(null===e||void 0===e?void 0:e.type)===t?s.getCompanyByType(e.id):s.getCompanyByName(t)}(t.find((function(t){return t.type.includes(e.toLowerCase())})),e).then((function(e){n(a.saveCompanies(e.data.enterprises))})).catch((function(e){throw e}))}},pe=n(11),je=n(43),fe={companies:[],selected_company:{},company_types:[]},he={user:[],isAuth:void 0},be=Object(pe.c)({companies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(n){case r.SAVE_COMPANIES:return Object(h.a)(Object(h.a)({},e),{},{companies:i});case r.SAVE_COMPANY_DETAIL:return Object(h.a)(Object(h.a)({},e),{},{selected_company:i});case r.SAVE_COMPANY_TYPES:return Object(h.a)(Object(h.a)({},e),{},{company_types:i});case r.CLEAN_COMPANIES:return Object(h.a)({},e);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case i.SAVE_USER:return Object(h.a)(Object(h.a)({},e),{},{user:r});case i.IS_AUTH:return Object(h.a)(Object(h.a)({},e),{},{isAuth:r});case i.CLEAN_USER:return Object(h.a)({},e);default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ve=Object(pe.e)(be,me(Object(pe.a)(je.a))),Oe=function(){return ve.dispatch},_e=function(e){var t=u.dispatch();return o.login(e).then((function(e){t(c.saveUser(e.data.investor)),t(c.isAuth(!0));var n=e.headers,r={client:n.client,uid:n.uid,accessToken:e.headers["access-token"]};localStorage.setItem("user",JSON.stringify(e.data.investor)),localStorage.setItem("headers",JSON.stringify(r))})).catch((function(e){if("Invalid login credentials. Please try again."===e.response.data.errors[0])throw"Invalid login credentials"}))},xe=function(e){var t=u.dispatch();t(c.clearUser()),t(c.isAuth(!1)),t(a.clearCompanies()),localStorage.removeItem("user"),localStorage.removeItem("headers"),e.push("/login")},ye=function(e){var t=e.setValue,n=e.value;return Object(d.jsx)("div",{className:L.a.expandedHeader,children:Object(d.jsx)(C,{icon:H,placeholder:"Pesquisar",name:"search",type:"text",onChange:t,value:n})})},ge=function(e){var t=e.setExpanded,n=e.canFetch;return Object(d.jsxs)("div",{className:L.a.normalHeader,children:[Object(d.jsx)("p",{}),Object(d.jsx)(k,{width:"200px",logo:B}),Object(d.jsx)(x,{name:"search",onClick:function(){t(!0),n(!0)}})]})},Se=function(e){var t=e.history,n=e.title;return Object(d.jsxs)("div",{className:L.a.goBackHeader,children:[Object(d.jsx)(x,{name:"arrow_back",onClick:function(){return t.goBack()}}),Object(d.jsx)("p",{style:{marginLeft:20},children:null===n||void 0===n?void 0:n.toUpperCase()})]})},Ce=function(e){var t=e.value,n=e.setValue,r=e.goBack,i=e.history,a=e.title,c=e.canFetch,o=Object(p.useState)(!1),s=Object(O.a)(o,2),u=s[0],l=s[1];return Object(d.jsxs)("div",{className:L.a.header,children:[Object(d.jsx)("div",{className:L.a.options,children:u?Object(d.jsx)(ye,{value:t,setValue:n}):r?Object(d.jsx)(Se,{history:i,title:a}):Object(d.jsx)(ge,{setExpanded:l,canFetch:c})}),Object(d.jsx)("div",{className:L.a.logout,style:{cursor:"pointer"},onClick:function(){return xe(i)},children:Object(d.jsx)(x,{name:"login",label:"Logout"})})]})},Ee=n(24),Ae=n.n(Ee),Ne=function(e){var t=e.item,n=e.onClick,r=null===t||void 0===t?void 0:t.enterprise_name,i=null===t||void 0===t?void 0:t.country,a=null===t||void 0===t?void 0:t.photo,c=null===t||void 0===t?void 0:t.enterprise_type.enterprise_type_name;return Object(d.jsxs)("div",{className:Ae.a.card,onClick:n,children:[Object(d.jsxs)("div",{className:Ae.a.photo,style:{backgroundImage:"url(https://empresas.ioasys.com.br".concat(a,")")},children:[null===r||void 0===r?void 0:r.charAt(r[0]),null===r||void 0===r?void 0:r.charAt(r.length-1).toUpperCase()]}),Object(d.jsxs)("div",{className:Ae.a.info,children:[Object(d.jsx)("strong",{children:r}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:i})]})]})},Te=n(25),Ie=n.n(Te),Pe=function(e){var t=e.enterprise,n=null===t||void 0===t?void 0:t.enterprise_name,r=null===t||void 0===t?void 0:t.country,i=null===t||void 0===t?void 0:t.enterprise_type.enterprise_type_name,a=null===t||void 0===t?void 0:t.description,c=null===t||void 0===t?void 0:t.share_price,o=null===t||void 0===t?void 0:t.photo;return Object(d.jsxs)("div",{className:Ie.a.card,children:[Object(d.jsxs)("div",{className:Ie.a.photo,style:{backgroundImage:"url(https://empresas.ioasys.com.br".concat(o,")")},children:[null===n||void 0===n?void 0:n.charAt(n[0]),null===n||void 0===n?void 0:n.charAt(n.length-1).toUpperCase()]}),Object(d.jsxs)("div",{className:Ie.a.info,children:[Object(d.jsx)("strong",{children:n}),Object(d.jsx)("p",{children:i}),Object(d.jsx)("p",{children:r}),Object(d.jsxs)("p",{style:{color:"green"},children:["$",c]}),Object(d.jsx)("p",{style:{color:"#8d8c8c",marginTop:30},children:a})]})]})},ke=n(26),we=n.n(ke),Le=function(e){var t=e.history,n=Object(p.useState)(""),r=Object(O.a)(n,2),i=r[0],a=r[1],c=Object(p.useState)(""),o=Object(O.a)(c,2),s=o[0],u=o[1],l=Object(p.useState)(!1),j=Object(O.a)(l,2),f=j[0],h=j[1],b=Object(p.useState)(!1),m=Object(O.a)(b,2),v=m[0],_=m[1],x=function(){return""!==i&&""!==s},y=function(e){(e.preventDefault(),x)&&(_(!0),_e({email:i,password:s}).then((function(e){h(!1),setTimeout((function(){return _(!1),t.push("/enterprises")}),1500)})).catch((function(e){h(!0),setTimeout((function(){_(!1)}),1500)})))};return Object(d.jsxs)("div",{className:we.a.container,children:[Object(d.jsx)(P,{loading:v}),Object(d.jsxs)("form",{className:we.a.login,style:{filter:v?"blur(2px)":"none"},onSubmit:function(e){return y(e)},children:[Object(d.jsx)(k,{logo:V,width:"100%"}),Object(d.jsx)("h2",{children:"BEM-VINDO AO EMPRESAS"}),Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan."}),Object(d.jsx)(C,{placeholder:"E-mail",icon:U,name:"email",error:f,value:i,onChange:a,type:"email",required:!0}),Object(d.jsx)(C,{placeholder:"Senha",type:"password",name:"password",icon:M,error:f,value:s,onChange:u,required:!0}),f?Object(d.jsx)("p",{className:we.a.errorText,children:"Credenciais informadas s\xe3o inv\xe1lidas, tente novamente."}):null,Object(d.jsx)(N,{title:"ENTRAR",color:"#57bbbc",onClick:function(){return null}})]})]})},Ve=n(14),Be=function(){return Object(d.jsx)("p",{style:{textAlign:"center",color:"#b5b4b4",marginTop:100},children:"Nenhuma empresa foi encontrada para a busca realizada."})},Ue=function(){return Object(d.jsx)("p",{style:{textAlign:"center",color:"#383743",marginTop:150,fontSize:30},children:"Clique na busca para iniciar."})},Me=[{path:"/login",component:Le,isPrivate:!1},{path:"/enterprises",component:Object(v.g)(Object(Ve.b)((function(e){var t=e.user,n=t.user,r=t.isAuth,i=e.companies;return{user:n,enterprises:i.companies,selected_enterprise:i.selected_company,company_types:i.company_types,isAuth:r}}),(function(e){return{fetchEnterprises:function(){return e((function(e){return s.getCompanies().then((function(t){var n;e(a.saveCompanies(t.data.enterprises));var r=[{id:0,type:""}];null===(n=t.data.enterprises)||void 0===n||n.map((function(e){return r.push({id:e.enterprise_type.id,type:e.enterprise_type.enterprise_type_name.toLowerCase()})}));var i=Object(D.a)(new Set(r.sort((function(e,t){return e.id>t.id})).map((function(e){return JSON.stringify(e)})))).map((function(e){return JSON.parse(e)}));e(a.saveCompanyTypes(i))})).catch((function(e){throw e}))}))},saveSelectedEnterprise:function(t){return e((n=t,function(e){return s.getCompanyDetail(n).then((function(t){return e(a.saveCompanyDetail(t.data.enterprise)),t})).catch((function(e){throw e}))}));var n},filterByText:function(t,n){return e(de(t,n))}}}))((function(e){var t=e.fetchEnterprises,n=e.filterByText,r=e.enterprises,i=e.history,a=e.saveSelectedEnterprise,c=e.company_types,o=Object(p.useState)(""),s=Object(O.a)(o,2),u=s[0],j=s[1],f=Object(p.useState)(!1),h=Object(O.a)(f,2),b=h[0],m=h[1];Object(p.useEffect)((function(){t().catch((function(e){l.logout(i),i.push("/login")}))}),[b]),Object(p.useEffect)((function(){n(u,c)}),[u]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(Ce,{value:u,setValue:j,canFetch:m,history:i}),b?r.length>0?null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(Ne,{item:e,onClick:function(){return t=e.id,void a(t).then((function(){return i.push("/enterprise/".concat(t,"/"))}));var t}})})):Object(d.jsx)(Be,{}):Object(d.jsx)(Ue,{})]})}))),isPrivate:!0},{path:"/enterprise/:id",component:Object(v.g)(Object(Ve.b)((function(e){return{selected_enterprise:e.companies.selected_company}}),null)((function(e){var t=e.selected_enterprise,n=e.history;return Object(d.jsxs)("div",{children:[Object(d.jsx)(Ce,{goBack:!0,title:t.enterprise_name,history:n}),Object(d.jsx)(Pe,{enterprise:t})]})}))),isPrivate:!0}],He=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return JSON.parse(localStorage.getItem("headers"))?Object(d.jsx)(v.b,Object(h.a)(Object(h.a)({},n),{},{component:t})):Object(d.jsx)(v.a,{to:{pathname:"/login"}})},De=(n(74),function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)(v.d,{children:[Object(d.jsx)(v.b,{exact:!0,path:"/",component:Me[0].component}),Me.map((function(e){var t=e.isPrivate,n=e.path,r=Object(b.a)(e,["isPrivate","path"]),i=t?He:v.b;return Object(d.jsx)(i,Object(h.a)({path:n},r),n)}))]})})}),Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};f.a.render(Object(d.jsx)(Ve.a,{store:ve,children:Object(d.jsx)(De,{})}),document.getElementById("root")),Re()}},[[75,1,2]]]);
//# sourceMappingURL=main.6b47b58c.chunk.js.map