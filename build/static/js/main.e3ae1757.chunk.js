(this.webpackJsonpreacttasks=this.webpackJsonpreacttasks||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),u=(n(61),n(26)),i=n(29),l=n(3),s=n.n(l),m=n(6),f=n(22),p=n(109),d=n(110),b=(n(63),n(64),n(16)),h=n.n(b),v=(n(81),function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(f.a)(o,2),b=l[0],v=l[1],E=Object(a.useState)(!1),k=Object(f.a)(E,2),w=k[0],x=k[1],j=Object(a.useState)(!1),O=Object(f.a)(j,2),g=O[0],y=O[1],C=Object(a.useState)({id:0,titulo:"",descricao:"",finalizado:0}),N=Object(f.a)(C,2),S=N[0],T=N[1],z=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.next=3,F();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){"granted"===Notification.permission&&navigator.serviceWorker.ready.then("Novo Item Adicionado",{body:"Adicionado nova marca\xe7\xe3o"})},I=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!1),e.next=3,F();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("granted"===Notification.permission){e.next=3;break}return e.next=3,Notification.requestPermission();case 3:return e.next=5,F();case 5:case"end":return e.stop()}}),e)}))),[]);var F=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/tasks");case 2:t=e.sent,c(t.data),v(t.data),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/tasks",R).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(),e.next=3,B();case 3:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/tasks/".concat(t)).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("/tasks").then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={finalizado:"0"==t.finalizado?"1":"0"},e.next=3,h.a.put("/tasks/".concat(t.id),n).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=e.target,n=t.name,a=t.value;T(Object(i.a)(Object(i.a)({},S),{},Object(u.a)({},n,a)))},M=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("/tasksItem/".concat(S.id),S);case 2:return e.sent,e.next=5,I();case 5:return e.next=7,B();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R={titulo:"",descricao:"",finalizado:0};return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Marcador Tarefas"),r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){return x(!0)}},"Cadastrar Item"),r.a.createElement("button",{className:"btn btn-danger btn-sm",style:{float:"right"},onClick:function(){return W()}},"Remover todos os itens"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Titulo"),r.a.createElement("th",null,"Descricao"),r.a.createElement("th",null,"Finalizado"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement("input",{className:"form-control",placeholder:"Titulo.....",onChange:function(e){return c(b.filter((function(t){return t.titulo.toUpperCase().includes(e.target.value.toUpperCase())})))}}))),n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.titulo),r.a.createElement("td",null,e.descricao),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:"1"===e.finalizado,onChange:function(){return A(e)}})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return D(e.id)}},"Remover")," || ",r.a.createElement("button",{className:"btn btn-warning btn-sm",onClick:function(){return function(e){T(e),y(!0)}(e)}},"Editar")))})))),r.a.createElement(p.a,{show:w,onHide:z},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Cadastrar Item")),r.a.createElement(p.a.Body,null,r.a.createElement("label",null,"Titulo"),r.a.createElement("input",{className:"form-control",onChange:function(e){return R.titulo=e.target.value}}),r.a.createElement("label",null,"Descricao"),r.a.createElement("input",{className:"form-control",onChange:function(e){return R.descricao=e.target.value}})),r.a.createElement(p.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:z},"Fechar"),r.a.createElement(d.a,{variant:"primary",onClick:H},"Salvar"))),r.a.createElement(p.a,{show:g,onHide:I},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Editar Item")),r.a.createElement(p.a.Body,null,r.a.createElement("label",null,"Titulo"),r.a.createElement("input",{className:"form-control",name:"titulo",value:S.titulo,onChange:J}),r.a.createElement("label",null,"Descricao"),r.a.createElement("input",{className:"form-control",name:"descricao",value:S.descricao,onChange:J})),r.a.createElement(p.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:I},"Fechar"),r.a.createElement(d.a,{variant:"primary",onClick:M},"Salvar"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(105);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,n){e.exports=n(106)},61:function(e,t,n){},63:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},64:function(e,t,n){},85:function(e,t){},87:function(e,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.e3ae1757.chunk.js.map