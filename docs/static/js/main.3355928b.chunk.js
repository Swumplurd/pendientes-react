(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{41:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(11),n=c.n(s),d=(c(17),c(18),c(4)),r=c(6),l=c(2),i=c(12),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[t.payload].concat(Object(i.a)(e));case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},j=c(0),b=function(e){var t=e.todo,c=e.index,a=e.handleDelete,s=e.handleToggle;return Object(j.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12 mb-4 shadow-lg",children:Object(j.jsx)("div",{className:t.done?"card bg-success bg-gradient text-light":"card bg-secondary bg-gradient text-light",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h5",{className:"card-title",children:["Tarea: ",c+1]}),Object(j.jsx)("p",{className:"card-text",children:t.desc}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"d-grid",children:[Object(j.jsx)("button",{onClick:function(){a(t.id)},className:"btn btn-dark mb-2",children:"Borrar"}),Object(j.jsx)("button",{onClick:function(){s(t.id)},className:"btn btn-info",children:t.done?"Marcar como Pendiente":"Marcar como Terminada"})]})]})})})},m=function(e){var t=e.todos,c=e.handleDelete,a=e.handleToggle;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container px-0 mt-4",children:Object(j.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(j.jsx)(b,{handleDelete:c,handleToggle:a,todo:e,index:t},e.id)}))})})})},h=function(){return JSON.parse(localStorage.getItem("todos"))||[]},u=function(){var e=Object(a.useReducer)(o,[],h),t=Object(d.a)(e,2),c=t[0],s=t[1],n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(d.a)(t,2),s=c[0],n=c[1];return[s,function(e){var t=e.target;n(Object(l.a)(Object(l.a)({},s),{},Object(r.a)({},t.name,t.value)))},function(){n(e)}]}({description:""}),i=Object(d.a)(n,3),b=i[0].description,u=i[1],g=i[2];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container-fluid mb-5 shadow-lg",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col px-0",children:Object(j.jsx)("div",{className:"bg-dark text-secondary px-4 py-5 text-center",children:Object(j.jsxs)("div",{className:"py-5",children:[Object(j.jsx)("h1",{className:"display-5 fw-bold text-white",children:"Lista de Tareas"}),Object(j.jsx)("div",{className:"col-lg-6 mx-auto",children:Object(j.jsx)("p",{className:"fs-5 mb-4",children:"A\xf1ade tu lista de tareas y guardalas en tu navegador. Asegurate de no borrar los datos de navegacion para no perder tus tareas."})})]})})})})}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-lg-4 col-md-12 col-sm-12",children:[Object(j.jsx)("h4",{children:"Agregar Tarea"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0!==b.trim().length){var t={id:(new Date).getTime(),desc:b,done:!1};s({type:"add",payload:t}),g()}},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Descripcion"}),Object(j.jsx)("input",{type:"text",onChange:u,value:b,name:"description",className:"form-control shadow-lg",id:"desc","aria-describedby":"descHelp"}),Object(j.jsx)("div",{id:"descHelp",className:"form-text",children:"Escribe una descripcion..."})]}),Object(j.jsx)("div",{className:"d-grid",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-success",children:"Agregar"})})]})]}),Object(j.jsx)("div",{className:"col-lg-8 col-md col-sm-12",children:Object(j.jsx)(m,{todos:c,handleDelete:function(e){s({type:"delete",payload:e})},handleToggle:function(e){s({type:"toggle",payload:e})}})})]})})]})};document.body.className="bg-dark bg-gradient text-light",document.body.style="min-height: 100vh",n.a.render(Object(j.jsx)(u,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3355928b.chunk.js.map