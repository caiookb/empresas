(this["webpackJsonpempresas-web"]=this["webpackJsonpempresas-web"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"Header_header__2Gu8G",options:"Header_options__hjmsP",logout:"Header_logout__2pVI_",normalHeader:"Header_normalHeader__2OlkL",expandedHeader:"Header_expandedHeader__1TkS7",goBackHeader:"Header_goBackHeader__1N0BF"}},18:function(e,t,n){e.exports={input:"TextInput_input__OA2so",icon:"TextInput_icon__2S-7T",field:"TextInput_field__3VeOU",visibilityIcon:"TextInput_visibilityIcon__3a8zv"}},23:function(e,t,n){e.exports={spinner:"Spinner_spinner__3q1So",load:"Spinner_load__1b14J",loader:"Spinner_loader__3biih",load8:"Spinner_load8__2mm4U"}},24:function(e,t,n){e.exports={card:"Card_card__2SZbI",photo:"Card_photo__3cZv3",info:"Card_info__224Qd"}},25:function(e,t,n){e.exports={card:"ExpandedCard_card__X5kNR",photo:"ExpandedCard_photo__td42N",info:"ExpandedCard_info__3-Zkm"}},26:function(e,t,n){e.exports={container:"Login_container__2MuK8",login:"Login_login__2v3jB",errorText:"Login_errorText__K5997"}},41:function(e,t,n){e.exports={buttons:"Buttons_buttons__1f1ie"}},51:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"SAVE_COMPANIES",(function(){return R})),n.d(r,"SAVE_COMPANY_DETAIL",(function(){return Y})),n.d(r,"SAVE_COMPANY_TYPES",(function(){return q})),n.d(r,"CLEAN_COMPANIES",(function(){return F}));var a={};n.r(a),n.d(a,"SAVE_USER",(function(){return J})),n.d(a,"CLEAN_USER",(function(){return G})),n.d(a,"IS_AUTH",(function(){return z}));var c={};n.r(c),n.d(c,"saveCompanies",(function(){return X})),n.d(c,"saveCompanyDetail",(function(){return Z})),n.d(c,"saveCompanyTypes",(function(){return K})),n.d(c,"clearCompanies",(function(){return Q}));var i={};n.r(i),n.d(i,"saveUser",(function(){return $})),n.d(i,"clearUser",(function(){return W})),n.d(i,"isAuth",(function(){return ee}));var o={};n.r(o),n.d(o,"login",(function(){return ie}));var s={};n.r(s),n.d(s,"getCompanies",(function(){return oe})),n.d(s,"getCompanyDetail",(function(){return se})),n.d(s,"getCompanyByType",(function(){return ue})),n.d(s,"getCompanyByName",(function(){return le}));var u={};n.r(u),n.d(u,"dispatch",(function(){return _e}));var l={};n.r(l),n.d(l,"login",(function(){return ve})),n.d(l,"logout",(function(){return xe}));var d=n(1),p=n(0),j=n(19),f=n.n(j),h=(n(51),n(4)),b=n(22),m=n(15),O=n(3),_=n(9),v=function(e){var t=e.onClick,n=e.name,r=e.color,a=e.label;return Object(d.jsxs)("div",{style:{display:"flex"},children:[a,Object(d.jsx)("i",{onClick:function(){return t()},className:"material-icons",style:{cursor:"pointer",color:r},children:n})]})},x=v;v.defaultProps={onClick:function(){return null},label:""};var y=n(18),g=n.n(y),S=function(e){var t=e.icon,n=e.type,r=e.required,a=e.error,c=e.placeholder,i=e.onChange,o=e.onBlur,s=e.name,u=Object(p.useState)(n),l=Object(_.a)(u,2),j=l[0],f=l[1],h=function(){return Object(d.jsx)(x,{name:"error",color:"red"})},b=function(){return Object(d.jsx)(x,{onClick:function(){return i("")},name:"close",color:"white"})},m=function(){return Object(d.jsx)("div",{className:g.a.visibilityIcon,children:Object(d.jsx)(x,{onClick:function(){return function(e){return f("password"===e?"text":"password")}(j)},name:"password"!==j?"visibility":"visibility_off"})})},O=function(){return"password"!==s||a?a?Object(d.jsx)(h,{}):"Pesquisar"===c?Object(d.jsx)(b,{}):null:Object(d.jsx)(m,{})};return Object(d.jsxs)("div",{className:g.a.input,style:{borderBottom:a?"solid 0.6px #ff0f44":"Pesquisar"===c?"solid 0.6px #ffffff":null},children:[Object(d.jsx)("img",{className:g.a.icon,src:t}),Object(d.jsx)("div",{className:g.a.field,children:Object(d.jsx)("input",{type:j,onChange:function(e){return i(e.target.value)},onBlur:function(e){return o(e.target.value)},placeholder:c,required:r,style:{color:"Pesquisar"===c?"white":null},name:s})}),Object(d.jsx)(O,{})]})},C=S;S.defaultProps={onChange:function(){return null},onBlur:function(){return null},type:"text",required:!1,name:null};var E=n(41),A=n.n(E),N=function(e){var t=e.title,n=e.color;e.onClick;return Object(d.jsx)("button",{className:A.a.buttons,style:{backgroundColor:n},onClick:function(){return onclick},children:t})},T=n(23),I=n.n(T),P=function(e){return e.loading?Object(d.jsx)("div",{className:I.a.spinner,children:Object(d.jsx)("div",{className:I.a.load,children:Object(d.jsx)("div",{className:I.a.loader})})}):null},k=function(e){var t=e.width,n=e.logo;return Object(d.jsx)("img",{style:{width:t},src:n})},w=n(12),L=n.n(w),V=n.p+"static/media/ioasys_logo.4da438b1.png",B=n.p+"static/media/logo_nav.9a2734b9.png",U=n.p+"static/media/email.fb82ffed.svg",M=n.p+"static/media/password.b1bd3490.svg",H=n.p+"static/media/search.9de52394.svg",D=n(45),R="SAVE_COMPANIES",Y="SAVE_COMPANY_DETAIL",q="SAVE_COMPANY_TYPES",F="CLEAN_COMPANIES",J="SAVE_USER",G="CLEAN_USER",z="IS_AUTH",X=function(e){return{type:r.SAVE_COMPANIES,payload:e}},Z=function(e){return{type:r.SAVE_COMPANY_DETAIL,payload:e}},K=function(e){return{type:r.SAVE_COMPANY_TYPES,payload:e}},Q=function(){return{type:r.CLEAN_COMPANIES,payload:{}}},$=function(e){return{type:a.SAVE_USER,payload:e}},W=function(){return{type:a.CLEAN_USER,payload:{}}},ee=function(e){return{type:a.IS_AUTH,payload:e}},te=n(42),ne=n.n(te),re="https://empresas.ioasys.com.br/api/v1/",ae=function(e){return re.concat(e.join("/"))},ce=function(e){var t=e.method,n=e.path,r=e.body,a=JSON.parse(localStorage.getItem("headers")),c={"access-token":null===a||void 0===a?void 0:a.accessToken,client:null===a||void 0===a?void 0:a.client,uid:null===a||void 0===a?void 0:a.uid},i={method:t,data:r,headers:ae(n).includes("auth/sign_in")?{}:c};return ne()(ae(n),i).then((function(e){return e})).catch((function(e){throw e}))},ie=function(e){return ce({method:"POST",path:["users","auth","sign_in"],body:e})},oe=function(){return ce({method:"GET",path:["enterprises"]})},se=function(e){return ce({method:"GET",path:["enterprises","".concat(e)]})},ue=function(e){return ce({method:"GET",path:["enterprises",0===e?"":"?enterprise_types=".concat(e)]})},le=function(e){return ce({method:"GET",path:["enterprises","?name=".concat(e)]})},de=function(e,t){return function(n){return function(e,t){return(null===e||void 0===e?void 0:e.type)===t?s.getCompanyByType(e.id):s.getCompanyByName(t)}(t.find((function(t){return t.type.includes(e.toLowerCase())})),e).then((function(e){n(c.saveCompanies(e.data.enterprises))})).catch((function(e){throw e}))}},pe=n(11),je=n(43),fe={companies:[],selected_company:{},company_types:[]},he={user:[],isAuth:void 0},be=Object(pe.c)({companies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case r.SAVE_COMPANIES:return Object(h.a)(Object(h.a)({},e),{},{companies:a});case r.SAVE_COMPANY_DETAIL:return Object(h.a)(Object(h.a)({},e),{},{selected_company:a});case r.SAVE_COMPANY_TYPES:return Object(h.a)(Object(h.a)({},e),{},{company_types:a});case r.CLEAN_COMPANIES:return Object(h.a)({},e);default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case a.SAVE_USER:return Object(h.a)(Object(h.a)({},e),{},{user:r});case a.IS_AUTH:return Object(h.a)(Object(h.a)({},e),{},{isAuth:r});case a.CLEAN_USER:return Object(h.a)({},e);default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,Oe=Object(pe.e)(be,me(Object(pe.a)(je.a))),_e=function(){return Oe.dispatch},ve=function(e){var t=u.dispatch();return o.login(e).then((function(e){t(i.saveUser(e.data.investor)),t(i.isAuth(!0));var n=e.headers,r={client:n.client,uid:n.uid,accessToken:e.headers["access-token"]};localStorage.setItem("user",JSON.stringify(e.data.investor)),localStorage.setItem("headers",JSON.stringify(r))})).catch((function(e){if("Invalid login credentials. Please try again."===e.response.data.errors[0])throw"Invalid login credentials"}))},xe=function(e){var t=u.dispatch();t(i.clearUser()),t(i.isAuth(!1)),t(c.clearCompanies()),localStorage.removeItem("user"),localStorage.removeItem("headers"),e.push("/login")},ye=function(e){var t=e.setValue,n=e.value;return Object(d.jsx)("div",{className:L.a.expandedHeader,children:Object(d.jsx)(C,{icon:H,placeholder:"Pesquisar",name:"search",type:"text",onChange:t,value:n})})},ge=function(e){var t=e.setExpanded,n=e.canFetch;return Object(d.jsxs)("div",{className:L.a.normalHeader,children:[Object(d.jsx)("p",{}),Object(d.jsx)(k,{width:"200px",logo:B}),Object(d.jsx)(x,{name:"search",onClick:function(){t(!0),n(!0)}})]})},Se=function(e){var t=e.history,n=e.title;return Object(d.jsxs)("div",{className:L.a.goBackHeader,children:[Object(d.jsx)(x,{name:"arrow_back",onClick:function(){return t.goBack()}}),Object(d.jsx)("p",{style:{marginLeft:20},children:null===n||void 0===n?void 0:n.toUpperCase()})]})},Ce=function(e){var t=e.value,n=e.setValue,r=e.goBack,a=e.history,c=e.title,i=e.canFetch,o=Object(p.useState)(!1),s=Object(_.a)(o,2),u=s[0],l=s[1];return Object(d.jsxs)("div",{className:L.a.header,children:[Object(d.jsx)("div",{className:L.a.options,children:u?Object(d.jsx)(ye,{value:t,setValue:n}):r?Object(d.jsx)(Se,{history:a,title:c}):Object(d.jsx)(ge,{setExpanded:l,canFetch:i})}),Object(d.jsx)("div",{className:L.a.logout,style:{cursor:"pointer"},onClick:function(){return xe(a)},children:Object(d.jsx)(x,{name:"login",label:"Logout"})})]})},Ee=n(24),Ae=n.n(Ee),Ne=function(e){var t=e.item,n=e.onClick,r=t.enterprise_name,a=t.country,c=t.photo,i=t.enterprise_type.enterprise_type_name;return Object(d.jsxs)("div",{className:Ae.a.card,onClick:n,children:[Object(d.jsxs)("div",{className:Ae.a.photo,style:{backgroundImage:"url(https://empresas.ioasys.com.br".concat(c,")")},children:[r.charAt(r[0]),r.charAt(r.length-1).toUpperCase()]}),Object(d.jsxs)("div",{className:Ae.a.info,children:[Object(d.jsx)("strong",{children:r}),Object(d.jsx)("p",{children:i}),Object(d.jsx)("p",{children:a})]})]})},Te=n(25),Ie=n.n(Te),Pe=function(e){var t=e.enterprise,n=t.enterprise_name,r=t.country,a=t.photo,c=t.enterprise_type.enterprise_type_name,i=t.description,o=t.share_price;return Object(d.jsxs)("div",{className:Ie.a.card,children:[Object(d.jsxs)("div",{className:Ie.a.photo,style:{backgroundImage:"url(https://empresas.ioasys.com.br".concat(a,")")},children:[n.charAt(n[0]),n.charAt(n.length-1).toUpperCase()]}),Object(d.jsxs)("div",{className:Ie.a.info,children:[Object(d.jsx)("strong",{children:n}),Object(d.jsx)("p",{children:c}),Object(d.jsx)("p",{children:r}),Object(d.jsxs)("p",{style:{color:"green"},children:["$",o]}),Object(d.jsx)("p",{style:{color:"#8d8c8c",marginTop:30},children:i})]})]})},ke=n(26),we=n.n(ke),Le=function(e){var t=e.history,n=Object(p.useState)(""),r=Object(_.a)(n,2),a=r[0],c=r[1],i=Object(p.useState)(""),o=Object(_.a)(i,2),s=o[0],u=o[1],l=Object(p.useState)(!1),j=Object(_.a)(l,2),f=j[0],h=j[1],b=Object(p.useState)(!1),m=Object(_.a)(b,2),O=m[0],v=m[1],x=function(){return""!==a&&""!==s},y=function(e){(e.preventDefault(),x)&&(v(!0),ve({email:a,password:s}).then((function(e){h(!1),setTimeout((function(){return v(!1),t.push("/enterprises")}),1500)})).catch((function(e){h(!0),setTimeout((function(){v(!1)}),1500)})))};return Object(d.jsxs)("div",{className:we.a.container,children:[Object(d.jsx)(P,{loading:O}),Object(d.jsxs)("form",{className:we.a.login,style:{filter:O?"blur(2px)":"none"},onSubmit:function(e){return y(e)},children:[Object(d.jsx)(k,{logo:V,width:"100%"}),Object(d.jsx)("h2",{children:"BEM-VINDO AO EMPRESAS"}),Object(d.jsx)("h3",{children:"Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan."}),Object(d.jsx)(C,{placeholder:"E-mail",icon:U,name:"email",error:f,value:a,onChange:c,type:"email",required:!0}),Object(d.jsx)(C,{placeholder:"Senha",type:"password",name:"password",icon:M,error:f,value:s,onChange:u,required:!0}),f?Object(d.jsx)("p",{className:we.a.errorText,children:"Credenciais informadas s\xe3o inv\xe1lidas, tente novamente."}):null,Object(d.jsx)(N,{title:"ENTRAR",color:"#57bbbc",onClick:function(){return null}})]})]})},Ve=n(14),Be=function(){return Object(d.jsx)("p",{style:{textAlign:"center",color:"#b5b4b4",marginTop:100},children:"Nenhuma empresa foi encontrada para a busca realizada."})},Ue=function(){return Object(d.jsx)("p",{style:{textAlign:"center",color:"#383743",marginTop:150,fontSize:30},children:"Clique na busca para iniciar."})},Me=[{path:"/login",component:Le,isPrivate:!1},{path:"/enterprises",component:Object(O.g)(Object(Ve.b)((function(e){var t=e.user,n=t.user,r=t.isAuth,a=e.companies;return{user:n,enterprises:a.companies,selected_enterprise:a.selected_company,company_types:a.company_types,isAuth:r}}),(function(e){return{fetchEnterprises:function(){return e((function(e){return s.getCompanies().then((function(t){var n;e(c.saveCompanies(t.data.enterprises));var r=[{id:0,type:""}];null===(n=t.data.enterprises)||void 0===n||n.map((function(e){return r.push({id:e.enterprise_type.id,type:e.enterprise_type.enterprise_type_name.toLowerCase()})}));var a=Object(D.a)(new Set(r.sort((function(e,t){return e.id>t.id})).map((function(e){return JSON.stringify(e)})))).map((function(e){return JSON.parse(e)}));e(c.saveCompanyTypes(a))})).catch((function(e){throw e}))}))},saveSelectedEnterprise:function(t){return e((n=t,function(e){return s.getCompanyDetail(n).then((function(t){return e(c.saveCompanyDetail(t.data.enterprise)),t})).catch((function(e){throw e}))}));var n},filterByText:function(t,n){return e(de(t,n))}}}))((function(e){var t=e.fetchEnterprises,n=e.filterByText,r=e.enterprises,a=e.history,c=e.saveSelectedEnterprise,i=e.company_types,o=Object(p.useState)(""),s=Object(_.a)(o,2),u=s[0],j=s[1],f=Object(p.useState)(!1),h=Object(_.a)(f,2),b=h[0],m=h[1];Object(p.useEffect)((function(){t().catch((function(e){l.logout(a),a.push("/login")}))}),[b]),Object(p.useEffect)((function(){n(u,i)}),[u]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(Ce,{value:u,setValue:j,canFetch:m,history:a}),b?r.length>0?null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsx)(Ne,{item:e,onClick:function(){return t=e.id,void c(t).then((function(){return a.push("/enterprise/".concat(t,"/"))}));var t}})})):Object(d.jsx)(Be,{}):Object(d.jsx)(Ue,{})]})}))),isPrivate:!0},{path:"/enterprise/:id",component:Object(O.g)(Object(Ve.b)((function(e){return{selected_enterprise:e.companies.selected_company}}),null)((function(e){var t=e.selected_enterprise,n=e.history;return Object(d.jsxs)("div",{children:[Object(d.jsx)(Ce,{goBack:!0,title:t.enterprise_name,history:n}),Object(d.jsx)(Pe,{enterprise:t})]})}))),isPrivate:!0}],He=function(e){var t=e.component,n=Object(b.a)(e,["component"]);return JSON.parse(localStorage.getItem("headers"))?Object(d.jsx)(O.b,Object(h.a)(Object(h.a)({},n),{},{component:t})):Object(d.jsx)(O.a,{to:{pathname:"/login"}})},De=(n(74),function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{exact:!0,path:"/",component:Me[0].component}),Me.map((function(e){var t=e.isPrivate,n=e.path,r=Object(b.a)(e,["isPrivate","path"]),a=t?He:O.b;return Object(d.jsx)(a,Object(h.a)({path:n},r),n)}))]})})}),Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};f.a.render(Object(d.jsx)(Ve.a,{store:Oe,children:Object(d.jsx)(De,{})}),document.getElementById("root")),Re()}},[[75,1,2]]]);
//# sourceMappingURL=main.084b060d.chunk.js.map