(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{31:function(t,e,n){t.exports=n(44)},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),u=n(8),i=n(45),l=n(1),s={createContactRequest:Object(l.b)("CREATE_CONTACT_REQUEST"),createContactSuccess:Object(l.b)("CREATE_CONTACT_SUCCESS"),createContactFailed:Object(l.b)("CREATE_CONTACT_FAILED"),createContactError:Object(l.b)("CREATE_CONTACT_ERROR"),fetchContactsRequest:Object(l.b)("FETCH_CONTACT_REQUEST"),fetchContactsSuccess:Object(l.b)("FETCH_CONTACT_SUCCESS"),fetchContactsError:Object(l.b)("FETCH_CONTACT_ERROR"),removeContactRequest:Object(l.b)("REMOVE_CONTACT_REQUEST"),removeContactSuccess:Object(l.b)("REMOVE_CONTACT_SUCCESS"),removeContactError:Object(l.b)("REMOVE_CONTACT_ERROR"),togglerFlag:Object(l.b)("CHANGE_FLAG"),filter:Object(l.b)("FILTER")},f=n(9),b=function(t){return t.items},m=function(t){return t.filter},p=Object(f.a)([b,m],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),d={getContacts:b,getFilter:m,getIsNameAlreadyExist:function(t){return t.isNameAlreadyExist},getFiltredContacts:p,getContactById:Object(f.a)([function(t,e){return e},p],(function(t,e){return e.find((function(e){return e.id===t}))}))},C=n(3),O=n(4);function E(){var t=Object(C.a)(["\n    width: 400px;\n    position: relative;\n"]);return E=function(){return t},t}var g=O.a.div(E());function h(t){var e=t.children;return a.a.createElement(g,null,e)}var j=n(2),v=n(16),x=n(17),y=n(19),T=n(18);function S(){var t=Object(C.a)(["\n    outline: none;\n    padding: 5px;\n    border: 1px solid transparent;\n    color: #fff;\n    background-color: #3645ac;\n    border-radius: 3px;\n    box-shadow: 1px 1px 3px #3645ac;\n    width: 100%;\n    &:hover {\n        cursor: pointer;\n        background-color: #243398;\n    }\n    &:disabled {\n        background-color: grey;\n    }\n"]);return S=function(){return t},t}function R(){var t=Object(C.a)(["\n    margin-bottom: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 1px solid grey;\n    border-radius: 3px;\n    &:active,\n    :focus {\n        outline: none;\n        border-color: #3645ac;\n    }\n"]);return R=function(){return t},t}function A(){var t=Object(C.a)(["\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return A=function(){return t},t}function N(){var t=Object(C.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return N=function(){return t},t}var F=O.a.form(N()),_=O.a.p(A()),k=O.a.input(R()),w=O.a.button(S()),I="https://my-json-server.typicode.com/RomanPidlisnychyi/goit-react-homework",q={getContacts:function(){return function(t){t(s.fetchContactsRequest()),fetch("".concat(I,"/contacts")).then((function(t){return t.json()})).then((function(e){return t(s.fetchContactsSuccess(e))})).catch((function(e){return t(s.fetchContactsError(e))}))}},setContact:function(t,e){return function(n,r){if(n(s.createContactRequest()),d.getContacts(r()).find((function(e){return e.name===t})))return n(s.togglerFlag()),void n(s.createContactFailed());var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,number:e,id:Date.now()})};fetch("".concat(I,"/contacts"),a).then((function(t){return t.json()})).then((function(t){return n(s.createContactSuccess(t))})).catch((function(t){return n(s.createContactError(t))}))}},deleteContact:function(t){return function(e){e(s.removeContactRequest());fetch("".concat(I,"/contacts/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(){return e(s.removeContactSuccess(t))})).catch((function(t){return e(s.removeContactError(t))}))}}},U=function(t){Object(y.a)(n,t);var e=Object(T.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handlerInput=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(j.a)({},r,a))},t.handlerSubmit=function(e){e.preventDefault();var n=t.state,r=n.name,a=n.number;t.props.postContact(r,a),t.setState({name:"",number:""})},t}return Object(x.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,r=""!==e&&""!==n;return a.a.createElement(F,{onSubmit:this.handlerSubmit},a.a.createElement(_,null,"Name"),a.a.createElement(k,{type:"text",value:e,name:"name",onChange:this.handlerInput}),a.a.createElement(_,null,"Number"),a.a.createElement(k,{type:"text",value:n,name:"number",onChange:this.handlerInput}),a.a.createElement("br",null),a.a.createElement(w,{type:"submit",disabled:!r},"Add contact"))}}]),n}(r.Component),L={postContact:q.setContact},M=Object(u.b)(null,L)(U);function D(){var t=Object(C.a)(["\n    margin-bottom: 0;\n"]);return D=function(){return t},t}function H(){var t=Object(C.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return H=function(){return t},t}var V=O.a.div(H()),B=Object(O.a)(k)(D()),J={onFilter:s.filter},P=Object(u.b)((function(t){return{filterValue:d.getFilter(t),items:d.getContacts(t)}}),J)((function(t){var e=t.filterValue,n=t.items,r=t.onFilter;return n.length>1&&a.a.createElement(V,null,a.a.createElement(_,null,"Find contacts by name"),a.a.createElement(B,{type:"text",value:e,name:"filter",onChange:function(t){return r(t.target.value)}}))})),Q=n(46),z=n(27);function G(){var t=Object(C.a)(["\n    display: flex;\n    align-items: center;\n"]);return G=function(){return t},t}function K(){var t=Object(C.a)(["\n    position: relative;\n    margin-left: 10px;\n    color: #fff;\n    font-size: 25px;\n    width: 25px;\n    height: 25px;\n    outline: none;\n    padding: 0 5px;\n    border: none;\n    border-radius: 5px;\n    background-color: #f1392d;\n    &:hover {\n        cursor: pointer;\n        background-color: #b2261b;\n    }\n    &::before {\n        content: '+';\n        position: absolute;\n        top: 55%;\n        left: 0;\n        transform: rotate(45deg) translate(-50%, -50%);\n    }\n"]);return K=function(){return t},t}function W(){var t=Object(C.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n    padding: 10px;\n    box-shadow: 1px 1px 3px grey;\n"]);return W=function(){return t},t}var X=O.a.li(W()),Y=O.a.button(K()),Z=O.a.span(G()),$=Object(u.b)((function(t,e){return Object(z.a)({},d.getContactById(t,e.id))}),(function(t,e){return{removeContact:function(){return t(q.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,r=t.removeContact;return a.a.createElement(X,null,a.a.createElement("span",null,e),a.a.createElement(Z,null,n,a.a.createElement(Y,{type:"button",onClick:r})))}));var tt=function(t){var e=t.items;return a.a.createElement(Q.a,{component:"ul",in:e.length},e.map((function(t){var e=t.id;return a.a.createElement(i.a,{key:e,classNames:"ContactList-fade",timeout:250},a.a.createElement($,{id:e}))})))},et=function(t){Object(y.a)(n,t);var e=Object(T.a)(n);function n(){return Object(v.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return a.a.createElement(tt,this.props)}}]),n}(r.Component),nt=Object(u.b)((function(t){return{items:d.getFiltredContacts(t)}}),{fetchContacts:q.getContacts})(et);function rt(){var t=Object(C.a)(["\n    position: absolute;\n    top: 12px;\n    right: -30px;\n    padding: 10px 50px;\n    font-size: 12px;\n    border-radius: 5px;\n    color: #fff;\n    background-color: #f1392d;\n"]);return rt=function(){return t},t}function at(){var t=Object(C.a)(["\n    margin: 15px 0;\n    color: #3446ac;\n"]);return at=function(){return t},t}var ct,ot,ut=O.a.h2(at()),it=O.a.div(rt()),lt={togglerFlag:s.togglerFlag},st=Object(u.b)((function(t){return{isNameAlreadyExist:d.getIsNameAlreadyExist(t)}}),lt)((function(t){var e=t.isNameAlreadyExist,n=t.togglerFlag;return e&&setTimeout((function(){n()}),2e3),a.a.createElement(h,null,a.a.createElement(i.a,{in:!0,appear:!0,classNames:"Title-fade",timeout:500},a.a.createElement(ut,null,"Phonebook")),a.a.createElement(M,null),a.a.createElement(P,null),a.a.createElement(nt,null),a.a.createElement(i.a,{in:e,classNames:"InfoMessage-fade",timeout:250,unmountOnExit:!0},a.a.createElement(it,null,"Contact already exists!")))})),ft=n(28),bt=n(7),mt=Object(l.c)([],(ct={},Object(j.a)(ct,s.fetchContactsSuccess,(function(t,e){return e.payload})),Object(j.a)(ct,s.createContactSuccess,(function(t,e){return[].concat(Object(ft.a)(t),[e.payload])})),Object(j.a)(ct,s.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),ct)),pt=Object(l.c)(!1,Object(j.a)({},s.togglerFlag,(function(t,e){return!t}))),dt=Object(l.c)("",Object(j.a)({},s.filter,(function(t,e){return e.payload}))),Ct=Object(l.c)(!1,(ot={},Object(j.a)(ot,s.fetchContactsRequest,(function(){return!0})),Object(j.a)(ot,s.fetchContactsSuccess,(function(){return!1})),Object(j.a)(ot,s.fetchContactsError,(function(){return!1})),Object(j.a)(ot,s.createContactRequest,(function(){return!0})),Object(j.a)(ot,s.createContactSuccess,(function(){return!1})),Object(j.a)(ot,s.createContactFailed,(function(){return!1})),Object(j.a)(ot,s.createContactError,(function(){return!1})),Object(j.a)(ot,s.removeContactRequest,(function(){return!0})),Object(j.a)(ot,s.removeContactSuccess,(function(){return!1})),Object(j.a)(ot,s.removeContactError,(function(){return!1})),ot)),Ot=Object(bt.c)({items:mt,filter:dt,isNameAlreadyExist:pt,loading:Ct}),Et=Object(l.a)({reducer:Ot});n(42),n(43);o.a.render(a.a.createElement(u.a,{store:Et},a.a.createElement(st,null)),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f6e987e1.chunk.js.map