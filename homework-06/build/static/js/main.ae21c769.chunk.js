(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{31:function(n,e,t){n.exports=t(44)},42:function(n,e,t){},43:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),c=t(6),u=t(45),l=t(9),s=t(21),m=t.n(s),b=Object(l.b)("CREATE_CONTACT",(function(n,e){return{payload:{id:m()(),name:n,phone:e}}})),f=Object(l.b)("CHANGE_FLAG"),p=Object(l.b)("REMOVE_CONTACT"),d=Object(l.b)("FILTER"),x=t(1),v=t(2);function O(){var n=Object(x.a)(["\n    width: 400px;\n    position: relative;\n"]);return O=function(){return n},n}var g=v.a.div(O());function j(n){var e=n.children;return r.a.createElement(g,null,e)}var E=t(8),h=t(25),y=t(26),C=t(28),N=t(27);function A(){var n=Object(x.a)(["\n    outline: none;\n    padding: 5px;\n    border: 1px solid transparent;\n    color: #fff;\n    background-color: #3645ac;\n    border-radius: 3px;\n    box-shadow: 1px 1px 3px #3645ac;\n    width: 100%;\n    &:hover {\n        cursor: pointer;\n        background-color: #243398;\n    }\n    &:disabled {\n        background-color: grey;\n    }\n"]);return A=function(){return n},n}function w(){var n=Object(x.a)(["\n    margin-bottom: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 1px solid grey;\n    border-radius: 3px;\n    &:active,\n    :focus {\n        outline: none;\n        border-color: #3645ac;\n    }\n"]);return w=function(){return n},n}function k(){var n=Object(x.a)(["\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return k=function(){return n},n}function S(){var n=Object(x.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return S=function(){return n},n}var F=v.a.form(S()),T=v.a.p(k()),I=v.a.input(w()),L=v.a.button(A()),R=function(n){Object(C.a)(t,n);var e=Object(N.a)(t);function t(){var n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handlerInput=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(E.a)({},a,r))},n.handlerSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;n.props.createContact(a,r),n.setState({name:"",number:""})},n}return Object(y.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number,a=""!==e&&""!==t;return r.a.createElement(F,{onSubmit:this.handlerSubmit},r.a.createElement(T,null,"Name"),r.a.createElement(I,{type:"text",value:e,name:"name",onChange:this.handlerInput}),r.a.createElement(T,null,"Number"),r.a.createElement(I,{type:"text",value:t,name:"number",onChange:this.handlerInput}),r.a.createElement("br",null),r.a.createElement(L,{type:"submit",disabled:!a},"Add contact"))}}]),t}(a.Component),M={createContact:b},V=Object(c.b)(null,M)(R);function _(){var n=Object(x.a)(["\n    margin-bottom: 0;\n"]);return _=function(){return n},n}function z(){var n=Object(x.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return z=function(){return n},n}var G=v.a.div(z()),H=Object(v.a)(I)(_()),J={onFilter:d},U=Object(c.b)((function(n){return{filterValue:n.filter,items:n.items}}),J)((function(n){var e=n.filterValue,t=n.items,a=n.onFilter;return t.length>1&&r.a.createElement(G,null,r.a.createElement(T,null,"Find contacts by name"),r.a.createElement(H,{type:"text",value:e,name:"filter",onChange:function(n){return a(n.target.value)}}))})),q=t(46),B=t(5);function D(){var n=Object(x.a)(["\n    display: flex;\n    align-items: center;\n"]);return D=function(){return n},n}function P(){var n=Object(x.a)(["\n    position: relative;\n    margin-left: 10px;\n    color: #fff;\n    font-size: 25px;\n    width: 25px;\n    height: 25px;\n    outline: none;\n    padding: 0 5px;\n    border: none;\n    border-radius: 5px;\n    background-color: #f1392d;\n    &:hover {\n        cursor: pointer;\n        background-color: #b2261b;\n    }\n    &::before {\n        content: '+';\n        position: absolute;\n        top: 55%;\n        left: 0;\n        transform: rotate(45deg) translate(-50%, -50%);\n    }\n"]);return P=function(){return n},n}function K(){var n=Object(x.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n    padding: 10px;\n    box-shadow: 1px 1px 3px grey;\n"]);return K=function(){return n},n}var Q=v.a.li(K()),W=v.a.button(P()),X=v.a.span(D()),Y=Object(c.b)((function(n,e){var t=n.items.find((function(n){return n.id===e.id}));return Object(B.a)({},t)}),(function(n,e){return{removeContact:function(){return n(p(e.id))}}}))((function(n){var e=n.name,t=n.phone,a=n.removeContact;return r.a.createElement(Q,null,r.a.createElement("span",null,e),r.a.createElement(X,null,t,r.a.createElement(W,{type:"button",onClick:a})))}));var Z=Object(c.b)((function(n){var e=n.items,t=n.filter;return{items:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}}))((function(n){var e=n.items;return r.a.createElement(q.a,{component:"ul",in:e.length},e.map((function(n){var e=n.id;return r.a.createElement(u.a,{key:e,classNames:"ContactList-fade",timeout:250},r.a.createElement(Y,{id:e}))})))}));function $(){var n=Object(x.a)(["\n    position: absolute;\n    top: 12px;\n    right: -30px;\n    padding: 10px 50px;\n    font-size: 12px;\n    border-radius: 5px;\n    color: #fff;\n    background-color: #f1392d;\n"]);return $=function(){return n},n}function nn(){var n=Object(x.a)(["\n    margin: 15px 0;\n    color: #3446ac;\n"]);return nn=function(){return n},n}var en,tn=v.a.h2(nn()),an=v.a.div($()),rn={togglerFlag:f},on=Object(c.b)((function(n){return{isNameAlreadyExist:n.isNameAlreadyExist}}),rn)((function(n){var e=n.isNameAlreadyExist,t=n.togglerFlag;return e&&setTimeout((function(){t()}),2e3),r.a.createElement(j,null,r.a.createElement(u.a,{in:!0,appear:!0,classNames:"Title-fade",timeout:500},r.a.createElement(tn,null,"Phonebook")),r.a.createElement(V,null),r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(u.a,{in:e,classNames:"InfoMessage-fade",timeout:250,unmountOnExit:!0},r.a.createElement(an,null,"Contact already exists!")))})),cn=t(17),un=Object(l.c)({items:[],filter:"",isNameAlreadyExist:!1},(en={},Object(E.a)(en,b,(function(n,e){return n.items.find((function(n){return n.name===e.payload.name}))?Object(B.a)(Object(B.a)({},n),{},{isNameAlreadyExist:!n.isNameAlreadyExist}):Object(B.a)(Object(B.a)({},n),{},{items:[e.payload].concat(Object(cn.a)(n.items))})})),Object(E.a)(en,f,(function(n,e){return Object(B.a)(Object(B.a)({},n),{},{isNameAlreadyExist:!n.isNameAlreadyExist})})),Object(E.a)(en,p,(function(n,e){var t=n.items.filter((function(n){return n.id!==e.payload}));return Object(B.a)(Object(B.a)({},n),{},{items:Object(cn.a)(t)})})),Object(E.a)(en,d,(function(n,e){return Object(B.a)(Object(B.a)({},n),{},{filter:e.payload})})),en)),ln=Object(l.a)({reducer:un});t(42),t(43);i.a.render(r.a.createElement(c.a,{store:ln},r.a.createElement(on,null)),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ae21c769.chunk.js.map