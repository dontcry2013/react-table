(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){e.exports=a(389)},389:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),s=a(55),l=a(79),d=a(175),i=(a(212),a(41));const u={loading:!1,users:[],error:""};var p=(e=u,t)=>{switch(t.type){case"FETCH_USERS_REQUEST":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_FAILURE":return{loading:!1,users:[],error:t.payload};default:return e}};const E={loading:!1,posts:[],error:""};var S=(e=E,t)=>{switch(t.type){case"FETCH_POST_REQUEST":return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case"FETCH_POST_SUCCESS":return{loading:!1,posts:t.payload,error:""};case"FETCH_POST_FAILURE":return{loading:!1,posts:[],error:t.payload};default:return e}};var y=Object(s.c)({user:p,post:S}),m=a(80),O=a(394),b=a(392),g=a(393);const j=[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"City",key:"city",render:e=>e.address.city},{title:"Company",key:"company",render:e=>e.company.name}];var C=a(100),_=a.n(C);const T=()=>({type:"FETCH_USERS_REQUEST"}),h=e=>({type:"FETCH_USERS_SUCCESS",payload:e}),f=e=>({type:"FETCH_USERS_FAILURE",payload:e}),F=()=>({type:"FETCH_POST_REQUEST"}),U=e=>({type:"FETCH_POST_SUCCESS",payload:e}),w=e=>({type:"FETCH_POST_FAILURE",payload:e});var R=[{title:"Title",dataIndex:"title",key:"title"},{title:"Body",dataIndex:"body",key:"body"}],v=({data:e,loading:t})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{rowKey:"title",dataSource:e,columns:R,loading:t,pagination:!1}));const H=O.a.Search;var k=()=>{const e=Object(l.b)(),t=Object(l.c)(e=>e.user),a=Object(l.c)(e=>e.post),r=Object(n.useState)(null),c=Object(m.a)(r,2),s=c[0],d=c[1],u=Object(n.useState)([]),p=Object(m.a)(u,2),E=p[0],S=p[1],y=Object(n.useState)([]),O=Object(m.a)(y,2),C=O[0],R=O[1],k=Object(n.useState)(!1),I=Object(m.a)(k,2),x=I[0],P=I[1],L=Object(n.useState)({loading:!1,posts:[]}),A=Object(m.a)(L,2),Q=A[0],B=A[1];Object(n.useEffect)(()=>{e(e=>{e(T()),_.a.get("https://jsonplaceholder.typicode.com/users").then(t=>{const a=t.data;e(h(a))}).catch(t=>{e(f(t.message))})})},[]),Object(n.useEffect)(()=>{B(a)},[a]),Object(n.useEffect)(()=>{const e=(t,a)=>{for(var n in a||(a=[]),t)"object"===typeof t[n]?e(t[n],a):a.push(t[n]+" ");return a};(()=>{S(t.users);const a=t.users.map(t=>({allValues:e(t).toString()}));R(a)})()},[t]),Object(n.useEffect)(()=>{if(s){const e=C.map((e,a)=>e.allValues.toLowerCase().indexOf(s.toLowerCase())>=0?t.users[a]:null);S(e.filter(e=>!!e))}else S(t.users)},[s,t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{onChange:e=>d(e.target.value),placeholder:"Search",enterButton:!0,style:{position:"sticky",top:"0",left:"0",width:"200px",margin:"2vh"}}),o.a.createElement(b.a,{rowKey:"name",dataSource:E,columns:j,loading:t.loading,pagination:!1,style:{margin:"2vh"},onRow:t=>({onClick:()=>{B(Object(i.a)(Object(i.a)({},Q),{},{loading:!0})),P(!0),e((e=>t=>{t(F()),_.a.get("https://jsonplaceholder.typicode.com/posts",{params:{userId:e}}).then(e=>{const a=e.data;t(U(a))}).catch(e=>{t(w(e.message))})})(t.id))}})}),o.a.createElement(g.a,{title:"Posts",width:1e3,centered:!0,visible:x,onOk:()=>{P(!1)},onCancel:()=>{P(!1)}},o.a.createElement(v,{data:Q.posts,loading:Q.loading})))};const I=Object(s.d)(y,Object(s.a)(d.a));function x(){return o.a.createElement(l.a,{store:I},o.a.createElement(k,null))}const P=document.getElementById("root");c.a.render(o.a.createElement(x,null),P)}},[[202,1,2]]]);
//# sourceMappingURL=main.c3e4e2d8.chunk.js.map