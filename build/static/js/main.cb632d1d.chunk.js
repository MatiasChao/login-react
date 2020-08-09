(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),l=(a(38),a(29)),s=a(1),i=a(11),u=a.n(i),m=a(14),p=a(12),h=a(7),d=a(10),E=a(15),g=a.n(E),LoginReducer=function(e,t){switch(t.type){case"ERROR_REGISTER":return Object(h.a)(Object(h.a)({},e),{},{message:t.message?t.message:"Error a iniciar sesi\xf3n",error:!0});case"SUCCESS_REGISTER":return Object(h.a)(Object(h.a)({},e),{},{authenticated:!0,error:!1});case"GET_USER":return Object(h.a)(Object(h.a)({},e),{},{userLogged:t.user});default:return e}},b=(a(57),function Login(e){var t={token:localStorage.getItem("token"),authenticated:null,userLogged:null,message:null,error:!1},a=Object(n.useReducer)(LoginReducer,t),o=Object(d.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)({email:"",password:""}),i=Object(d.a)(s,2),E=i[0],b=i[1],f=E.email,y=E.password,v=function onChange(e){b(Object(h.a)(Object(h.a)({},E),{},Object(p.a)({},e.target.name,e.target.value)))},w=function(){var t=Object(m.a)(u.a.mark((function _callee(t){var a;return u.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.a.get("http://localhost:4000/api/users",{headers:{"x-auth-token":t}});case 2:(a=n.sent)&&l({type:"GET_USER",user:a.data.user}),e.history.push({pathname:"/home",state:{data:a.data.user}});case 5:case"end":return n.stop()}}),_callee)})));return function getUserLogged(e){return t.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(u.a.mark((function _callee2(e){var t;return u.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),""!==f.trim()&&""!==y.trim()){a.next=4;break}return l({type:"ERROR_REGISTER",message:"El email y/o password no pueden ser vacios"}),a.abrupt("return");case 4:return a.prev=4,a.next=7,g.a.post("http://localhost:4000/api/auth",E);case 7:(t=a.sent)&&(localStorage.setItem("token-myapp",t.data.token),l({type:"SUCCESS_REGISTER"}),w(t.data.token)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(4),l({type:"ERROR_REGISTER"});case 14:case"end":return a.stop()}}),_callee2,null,[[4,11]])})));return function login(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container d-flex justify-content-center",style:{backgroundColor:"#6A62D2"}},r.a.createElement("div",{className:"form-container mt-5 mb-5 p-3 text-center"},r.a.createElement("h5",{className:"m-2 mb-3"}," SIGN IN TO YOUR ACCOUNT "),r.a.createElement("form",{onSubmit:k},r.a.createElement("div",{className:"mb-2"},r.a.createElement("input",{type:"text",placeholder:"email",className:"p-2",value:f,name:"email",style:{backgroundColor:"#E5E8ED",border:"none",width:"90%"},onChange:function onChange(e){return v(e)}})),r.a.createElement("div",{className:""},r.a.createElement("input",{type:"password",placeholder:"password",className:"p-2",value:y,name:"password",style:{backgroundColor:"#E5E8ED",border:"none",width:"90%"},onChange:function onChange(e){return v(e)}})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"mt-4 p-2",value:"SIGN IN",style:{backgroundColor:"#6A62D2",border:"none",color:"#fff",width:"90%"}})),c.error&&r.a.createElement("div",{className:"mt-2",style:{color:"red"}},r.a.createElement("p",null,c.message))))))}),f=function Home(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){localStorage.getItem("token-myapp")?c(!0):e.history.push("/login")}),[]);return r.a.createElement("div",{className:"container h-500",style:{backgroundColor:"#6A62D2"}},r.a.createElement("div",{className:"text-center",style:{height:"700px",paddingTop:"200px"}},r.a.createElement("h5",{className:"mb-5",style:{color:"white"}},"URL:  /home"),r.a.createElement("h5",{className:"mb-3",style:{color:"white"}}," ",o&&e.location.state.data.name," "),r.a.createElement("button",{onClick:function onClick(){return function logout(){localStorage.removeItem("token-myapp"),e.history.push("/login")}()},className:"p-2 pl-5 pr-5",style:{backgroundColor:"#746BDE",border:"none",color:"white",width:"200px",fontSize:"14px"}},"LOG OUT")))},y=function User(e){return Object(n.useEffect)((function(){localStorage.getItem("token-myapp")||e.history.push("/login")}),[]),r.a.createElement("div",{className:"container h-500",style:{backgroundColor:"#6A62D2"}},r.a.createElement("div",{className:"text-center",style:{height:"700px",paddingTop:"200px"}},r.a.createElement("h5",{className:"mb-5",style:{color:"white"}},"URL:  /user")))},v=function Public(){return r.a.createElement("div",{className:"container h-500",style:{backgroundColor:"#6A62D2"}},r.a.createElement("div",{className:"text-center",style:{height:"700px",paddingTop:"200px"}},r.a.createElement("h5",{className:"mb-5",style:{color:"white"}},"URL:  /public")))};var w=function App(){return r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:b}),r.a.createElement(s.a,{exact:!0,path:"/login",component:b}),r.a.createElement(s.a,{exact:!0,path:"/home",component:f}),r.a.createElement(s.a,{exact:!0,path:"/user",component:y}),r.a.createElement(s.a,{exact:!0,path:"/public",component:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}},[[31,1,2]]]);
//# sourceMappingURL=main.cb632d1d.chunk.js.map