(this.webpackJsonpthistodo=this.webpackJsonpthistodo||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),l=(a(13),a(5)),c=a(3),s=a(4),m=a(6),u=a(7),d=(a(14),a(15),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={items:[],newItem:{text:""}},e.handleInput=function(t){e.setState({newItem:{id:Date.now(),text:t.target.value}})},e.addItem=function(t){t.preventDefault();var a=e.state.newItem;if(""!==a.text){var n=[].concat(Object(l.a)(e.state.items),[a]);e.setState({items:n,newItem:{id:"",text:""}}),e.alertMessage("A todo was added","primary")}},e.updateItem=function(t,a){var n=e.state.items;n.forEach((function(e){e.id===t&&(e.text=a)})),e.setState({items:n})},e.deleteItem=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a}),e.alertMessage("The todo is deleted","success")},e}return Object(s.a)(a,[{key:"alertMessage",value:function(e,t){var a=document.createElement("div");a.className="alert alert-".concat(t),a.appendChild(document.createTextNode(e));var n=document.querySelector(".container"),o=document.querySelector(".form-group");n.insertBefore(a,o),setTimeout((function(){document.querySelector(".alert").remove()}),2200)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App container"},o.a.createElement("header",null,o.a.createElement("h1",null,"This",o.a.createElement("strong",null,"To"),"Do")),o.a.createElement("form",{onSubmit:this.addItem,className:"form-group form-container"},o.a.createElement("label",{htmlFor:"exampleInputEmail1"}),o.a.createElement("input",{type:"text",value:this.state.newItem.text,onChange:this.handleInput,className:"form-control input-input",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter a todo.."}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"btn btn-primary knop"},"Add Todo")),o.a.createElement("div",null,this.state.items.map((function(t){return o.a.createElement("div",{className:"alert alert-dismissible alert-light todo-item",key:t.id},o.a.createElement("input",{type:"text",className:"form-control todo-input",onChange:function(a){e.updateItem(t.id,a.target.value)},key:t.id,value:t.text}),o.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)},type:"button",className:"close","data-dismiss":"alert"},"\xd7"))}))))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2ea3e4e4.chunk.js.map