(this.webpackJsonpreacttasks=this.webpackJsonpreacttasks||[]).push([[0],{35:function(e,t,n){e.exports=n(64)},40:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),u=(n(40),n(3)),l=n.n(u),s=n(7),i=n(19),f=n(67),m=n(68),p=(n(42),n(43),n(16)),d=n.n(p),h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),p=u[0],h=u[1],E=Object(a.useState)(!1),b=Object(i.a)(E,2),v=b[0],w=b[1],k=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),e.next=3,x();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)}))),[]);var x=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/tasks");case 2:t=e.sent,c(t.data),h(t.data),console.log(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/tasks",C).then(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k();case 1:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("/tasks/".concat(t)).then(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("/tasks").then(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={finalizado:"0"==t.finalizado?"1":"0"},e.next=3,d.a.put("/tasks/".concat(t.id),n).then(Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={titulo:"",descricao:"",finalizado:0};return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"Marcador Tarefas"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return w(!0)}},"Cadastrar Item"),r.a.createElement("button",{className:"btn btn-danger",style:{float:"right"},onClick:function(){return O()}},"Remover todos os itens"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Titulo"),r.a.createElement("th",null,"Descricao"),r.a.createElement("th",null,"Finalizado"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",onChange:function(e){return c(p.filter((function(t){return t.titulo.toUpperCase().includes(e.target.value.toUpperCase())})))}})),r.a.createElement("td",null)),n.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.titulo),r.a.createElement("td",null,e.descricao),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:"1"===e.finalizado,onChange:function(){return y(e)}})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return j(e.id)}},"Remover")))})))),r.a.createElement(f.a,{show:v,onHide:k},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"Cadastrar Item")),r.a.createElement(f.a.Body,null,r.a.createElement("label",null,"Titulo"),r.a.createElement("input",{className:"form-control",onChange:function(e){return C.titulo=e.target.value}}),r.a.createElement("label",null,"Descricao"),r.a.createElement("input",{className:"form-control",onChange:function(e){return C.descricao=e.target.value}})),r.a.createElement(f.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:k},"Fechar"),r.a.createElement(m.a,{variant:"primary",onClick:g},"Salvar"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b07dc426.chunk.js.map