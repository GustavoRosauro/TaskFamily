(this.webpackJsonpreacttasks=this.webpackJsonpreacttasks||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),u=(a(42),a(19)),l=a(21),i=a(3),s=a.n(i),m=a(6),f=a(17),p=a(69),d=a(70),h=(a(44),a(45),a(13)),b=a.n(h),E=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(f.a)(o,2),h=i[0],E=i[1],v=Object(n.useState)(!1),w=Object(f.a)(v,2),k=w[0],x=w[1],j=Object(n.useState)(!1),O=Object(f.a)(j,2),g=O[0],y=O[1],C=Object(n.useState)({id:0,titulo:"",descricao:"",finalizado:0}),N=Object(f.a)(C,2),S=N[0],T=N[1],z=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.next=3,F();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!1),e.next=3,F();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))),[]);var F=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/tasks");case 2:t=e.sent,c(t.data),E(t.data),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/tasks",U).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z();case 1:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("/tasks/".concat(t)).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("/tasks").then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(m.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={finalizado:"0"==t.finalizado?"1":"0"},e.next=3,b.a.put("/tasks/".concat(t.id),a).then(Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){var t=e.target,a=t.name,n=t.value;T(Object(l.a)(Object(l.a)({},S),{},Object(u.a)({},a,n)))},R=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("/tasksItem/".concat(S.id),S);case 2:return e.sent,e.next=5,B();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U={titulo:"",descricao:"",finalizado:0};return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Marcador Tarefas"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return x(!0)}},"Cadastrar Item"),r.a.createElement("button",{className:"btn btn-danger",style:{float:"right"},onClick:function(){return D()}},"Remover todos os itens"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Titulo"),r.a.createElement("th",null,"Descricao"),r.a.createElement("th",null,"Finalizado"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"3"},r.a.createElement("input",{className:"form-control",placeholder:"Titulo.....",onChange:function(e){return c(h.filter((function(t){return t.titulo.toUpperCase().includes(e.target.value.toUpperCase())})))}}))),a.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.titulo),r.a.createElement("td",null,e.descricao),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:"1"===e.finalizado,onChange:function(){return J(e)}})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return H(e.id)}},"Remover")," || ",r.a.createElement("button",{className:"btn btn-warning btn-sm",onClick:function(){return function(e){T(e),y(!0)}(e)}},"Editar")))})))),r.a.createElement(p.a,{show:k,onHide:z},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Cadastrar Item")),r.a.createElement(p.a.Body,null,r.a.createElement("label",null,"Titulo"),r.a.createElement("input",{className:"form-control",onChange:function(e){return U.titulo=e.target.value}}),r.a.createElement("label",null,"Descricao"),r.a.createElement("input",{className:"form-control",onChange:function(e){return U.descricao=e.target.value}})),r.a.createElement(p.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:z},"Fechar"),r.a.createElement(d.a,{variant:"primary",onClick:I},"Salvar"))),r.a.createElement(p.a,{show:g,onHide:B},r.a.createElement(p.a.Header,{closeButton:!0},r.a.createElement(p.a.Title,null,"Editar Item")),r.a.createElement(p.a.Body,null,r.a.createElement("label",null,"Titulo"),r.a.createElement("input",{className:"form-control",name:"titulo",value:S.titulo,onChange:M}),r.a.createElement("label",null,"Descricao"),r.a.createElement("input",{className:"form-control",name:"descricao",value:S.descricao,onChange:M})),r.a.createElement(p.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:B},"Fechar"),r.a.createElement(d.a,{variant:"primary",onClick:R},"Salvar"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dfee7d6c.chunk.js.map