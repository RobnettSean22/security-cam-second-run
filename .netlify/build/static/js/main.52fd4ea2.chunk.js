(this["webpackJsonpfrontend-test-2"]=this["webpackJsonpfrontend-test-2"]||[]).push([[0],[,,,,,,,,,,,function(n,e,t){n.exports=t.p+"static/media/Search.a3ae3d1b.svg"},,,,function(n,e,t){n.exports=t.p+"static/media/Sorting.cddc4b9b.svg"},function(n){n.exports=JSON.parse('{"devices":[{"name":"Lobby","id":1},{"name":"Dining Hall","id":2},{"name":"Ballroom","id":3},{"name":"Meeting Room","id":4},{"name":"Hallway One","id":5},{"name":"Arboretum","id":6},{"name":"Grand Hall","id":7},{"name":"Main Perimeter - Inner Security Checkpoint","id":8},{"name":"Recreation Room","id":9},{"name":"Hallway Two","id":10}]}')},function(n){n.exports=JSON.parse('{"status":[{"deviceId":1,"active":true,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":2,"active":true,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":3,"active":false,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":4,"active":true,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":5,"active":false,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":6,"active":true,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":7,"active":false,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":8,"active":false,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":9,"active":true,"thumbnail":"http://placekitten.com/200/300"},{"deviceId":10,"active":true,"thumbnail":"http://placekitten.com/200/300"}]}')},function(n,e,t){n.exports=t.p+"static/media/Logo.f22ad071.svg"},,function(n,e,t){n.exports=t(28)},,,,,function(n,e,t){},,,function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(10),o=t.n(r),c=(t(25),t(19)),l=t(4),u=t(1),s=t(11),d=t.n(s),f=t(2);function m(){var n=Object(u.a)(["\n  width: 63%;\n  height: 100%;\n  margin-left: 0.5%;\n  input {\n    width: 42%;\n    height: 70%;\n    background-image: url(",');\n    background-repeat: no-repeat;\n    background-position: 3% 50%;\n    background-size: 6%;\n    padding-left: 2.3%;\n    font-size: 10px;\n    color: #888888;\n    font-family: "Open Sans", sans-serif;\n    font-style: italic;\n    border: 1px #bfd1cb solid;\n    border-radius: 2px;\n    text-indent: 7%;\n\n    &:after {\n      opacity: 0.5;\n    }\n\n    &:focus {\n      outline: none;\n      background-image: none;\n    }\n    &:focus::placeholder {\n      color: transparent;\n    }\n  }\n']);return m=function(){return n},n}var p=f.a.div(m(),d.a);var h=function(n){var e=n.setValue;return n.value,i.a.createElement(p,null,i.a.createElement("input",{placeholder:"Search by Name or ID...",onChange:function(n){return e(n.target.value)}}))},g=t(15),v=t.n(g);function x(){var n=Object(u.a)(["\n  width: 7.2%;\n  height: 6%;\n  border-left: 1px solid #c3c4c5;\n  border-right: 1px solid #c3c4c5;\n  top: 17.2%;\n  right: 30.42%;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n  background: #fff;\n  div {\n    width: 100%;\n    height: 49%;\n    border-bottom: 1px solid #c3c4c5;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &:hover {\n      cursor: pointer;\n    }\n    h5 {\n      text-align: center;\n    }\n  }\n"]);return x=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  margin-right: 2.5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px #c3c4c5 solid;\n  border-radius: 4px;\n  &:hover {\n    cursor: pointer;\n  }\n  img {\n    width: 10%;\n    height: 62%;\n    padding-right: 4%;\n  }\n  h5 {\n    margin: 0;\n    align-self: flex-start;\n    font-size: 10px;\n    color: #3b4651;\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(u.a)(["\n  width: 18%;\n  height: 71%;\n  margin-right: 2.5%;\n"]);return y=function(){return n},n}var w=f.a.div(y()),E=f.a.div(b()),j=f.a.div(x());var O=function(n){var e=n.setByStatus,t=n.byStatus,r=Object(a.useState)(!1),o=Object(l.a)(r,2),c=o[0],u=o[1];return i.a.createElement(w,null,i.a.createElement(E,{onClick:function(n){return u(!0)}},i.a.createElement("img",{src:v.a,alt:""}),i.a.createElement("h5",null,"Sort by : ",0===t?"Name":"Status")),c?i.a.createElement(j,null,i.a.createElement("div",{onClick:function(n){e(0),u(!1)}}," ",i.a.createElement("h5",null,"Name")),i.a.createElement("div",{onClick:function(n){e(1),u(!1)}},i.a.createElement("h5",null,"Status"))):null)};function k(){var n=Object(u.a)(["\n  width: 100%;\n  height: 80%;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 10px 10px 0px 0px;\n  }\n"]);return k=function(){return n},n}function S(){var n=Object(u.a)(['\n  width: 100%;\n  height: 45%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 0px 0px 5px 5px;\n  background: #ffffff;\n\n  .active {\n    width: 90%;\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: flex-start;\n    border-left: 3px solid rgb(7, 204, 7);\n    border-radius: 4px;\n\n    h3 {\n      font-family: "Lato", sans-serif;\n      font-style: 600;\n      font-size: 8px;\n      letter-spacing: 1px;\n      margin: 0 0 0 2px;\n      opacity: 0.5;\n    }\n    h1 {\n      font-size: 10px;\n      font-family: "Lato", sans-serif;\n      font-weight: 600;\n      color: #2b4039;\n      letter-spacing: 1px;\n      margin: 0 0 0 2px;\n    }\n  }\n  .inactive {\n    width: 90%;\n    height: 90%;\n    border-left: 3px solid red;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: flex-start;\n    border-radius: 4px;\n\n    h3 {\n      margin: 0 0 0 2px;\n      font-size: 8px;\n      font-family: "Lato", sans-serif;\n      letter-spacing: 1px;\n      font-style: 600;\n      opacity: 0.5;\n    }\n    h1 {\n      font-size: 12px;\n      font-family: "Lato", sans-serif;\n      font-weight: 600;\n      letter-spacing: 1px;\n      color: #2b4039;\n      margin: 0 0 0 2px;\n      font-size: 12px;\n    }\n  }\n']);return S=function(){return n},n}function I(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  box-shadow: 5px 9px 10px -6px rgba(0, 0, 0, 0.75);\n  align-items: center;\n  border-radius: 10px;\n  overflow-x: hidden;\n  overflow-y: auto;\n"]);return I=function(){return n},n}var z=f.a.div(I()),C=f.a.div(S()),N=f.a.div(k());var J=function(n){var e=n.devices,t=(n.id,e.name.substring(15)),a=e.name.length>15?e.name.replace(t,"..."):e.name;return i.a.createElement(z,{key:e.id},i.a.createElement(N,null,i.a.createElement("img",{src:e.thumbnail,alt:""})),i.a.createElement(C,{className:"status-n-name"},i.a.createElement("div",{className:e.active?"active":"inactive"},i.a.createElement("h3",null,e.active?"Active":"Inactive"),i.a.createElement("h1",null,a))))},L=t(16),B=t(17),A=t(18),D=t.n(A);function H(){var n=Object(u.a)(["\n  width: 100%;\n  height: 48%;\n  display: grid;\n  display: grid;\n  grid-template-columns: repeat(3, 30%);\n  grid-auto-rows: 48%;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center;\n  overflow: none;\n  h3 {\n    margin: 0;\n  }\n"]);return H=function(){return n},n}function M(){var n=Object(u.a)(["\n  width: 100%;\n  height: 48%;\n  display: grid;\n  display: grid;\n  grid-template-columns: repeat(3, 30%);\n  grid-auto-rows: 48%;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center;\n  overflow: none;\n"]);return M=function(){return n},n}function R(){var n=Object(u.a)(["\n  width: 42%;\n  height: 75%;\n  padding-top: 1.2%;\n  overflow-y: auto;\n  align-self: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return R=function(){return n},n}function T(){var n=Object(u.a)(["\n  width: 42%;\n  height: 76%;\n  padding-top: 1.2%;\n  overflow-y: auto;\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(3, 30%);\n  grid-auto-rows: 25%;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  justify-content: center;\n"]);return T=function(){return n},n}function U(){var n=Object(u.a)(['\n  width: 97%;\n  height: 6%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  margin: 27px 0px 21px 14px;\n  h3 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: 600;\n    color: #181616;\n    margin: 0;\n    font-size: 9px;\n    opacity: 0.5;\n  }\n  h5 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: 600;\n    color: #181616;\n    margin: 0;\n    padding-left: 1%;\n    margin-bottom: 0.2%;\n    font-size: 9px;\n    opacity: 0.5;\n  }\n  hr {\n    width: 79%;\n    margin-bottom: 0.5%;\n    opacity: 0.5;\n  }\n']);return U=function(){return n},n}function V(){var n=Object(u.a)(['\n  width: 40%;\n  height: 5%;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  h3 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: 600;\n    color: #181616;\n    opacity: 0.5;\n    margin: 0;\n    font-size: 9px;\n  }\n  h5 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: 600;\n    color: #181616;\n    margin: 0;\n    padding-left: 1%;\n    margin-bottom: 0.2%;\n    font-size: 9px;\n    opacity: 0.5;\n  }\n  hr {\n    width: 78%;\n    margin-left: 4%;\n    margin-bottom: 0.5%;\n    opacity: 0.5;\n  }\n']);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  width: 41%;\n  height: 3%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  margin-top: 0.5%;\n"]);return W=function(){return n},n}function G(){var n=Object(u.a)(['\n  width: 40.5%;\n  height: 5%;\n  display: flex;\n  margin-top: 1%;\n\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  h1 {\n    font-family: "Open Sans", sans-serif;\n    font-weight: bold;\n    font-size: 15px;\n    margin: 0;\n  }\n  h5 {\n    font-family: "Open Sans", sans-serif;\n    font-style: italic;\n    opacity: 0.5;\n    padding-top: 1%;\n    font-size: 8px;\n    margin: 0;\n  }\n']);return G=function(){return n},n}function P(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  header {\n    width: 100%;\n    height: 7%;\n    background-image: linear-gradient(to right, #a2dda7, #3fcaab);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return P=function(){return n},n}var Y=f.a.div(P()),$=f.a.div(G()),q=f.a.div(W()),F=f.a.div(V()),K=f.a.div(U()),Q=f.a.div(T()),X=f.a.div(R()),Z=f.a.div(M()),_=f.a.div(H());var nn=function(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),s=u[0],d=u[1],f=JSON.stringify(B.status).replace(/"deviceId":/g,'"id":'),m=JSON.parse(f),p=L.devices;console.log(m),console.log(p);var g=Object(c.a)([m,p].reduce((function(n,e){return e.forEach((function(e){return n.has(e.id)&&Object.assign(n.get(e.id),e)||n.set(e.id,e)})),n}),new Map).values()),v=function(){return g.sort((function(n,e){return n.name.localeCompare(e.name)})),(0===t?g:g.sort((function(n,e){return e.active-n.active}))).filter((function(n){return-1!==n.name.toUpperCase().indexOf(s.toUpperCase())||-1!==n.id.toString().indexOf(s)}))},x=v().filter((function(n){return!0===n.active})),b=v().filter((function(n){return!1===n.active}));return console.log(1111,x),console.log(2222,b),i.a.createElement(Y,null,i.a.createElement("header",null,i.a.createElement("img",{placeholder:"Search by Name or I...",src:D.a,alt:"",style:{width:"20%",height:"35%"}})),i.a.createElement($,null,i.a.createElement("h1",null,"Your Cameras")," ",i.a.createElement("h5",null,"Total Devices: ",g.length)),i.a.createElement(q,null,i.a.createElement(h,{setValue:d,value:s}),i.a.createElement(O,{setByStatus:r,byStatus:t})),0===t?i.a.createElement(F,null,i.a.createElement("h3",null,"All Devices"),i.a.createElement("h5",null,"(",v().length,")")," ",i.a.createElement("hr",null)):i.a.createElement(F,null,i.a.createElement("h3",null,"Active Cameras"),i.a.createElement("h5",null,"(",x.length,")"),i.a.createElement("hr",null)),0===t?i.a.createElement(Q,null,v().map((function(n,e){return i.a.createElement(J,{key:e,devices:n})}))):i.a.createElement(X,null,i.a.createElement(Z,null,x.map((function(n,e){return i.a.createElement(J,{key:e,devices:n})}))),i.a.createElement(K,null,i.a.createElement("h3",null,"Inactive Cameras"),i.a.createElement("h5",null,"(",b.length,")"),i.a.createElement("hr",null)),i.a.createElement(_,null,b.map((function(n,e){return i.a.createElement(J,{key:e,devices:n})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.52fd4ea2.chunk.js.map