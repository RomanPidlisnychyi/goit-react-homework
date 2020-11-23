(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{31:function(t,e,n){t.exports=n(44)},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),u=n(8),i=n(45),l=n(1),s={createContactRequest:Object(l.b)("CREATE_CONTACT_REQUEST"),createContactSuccess:Object(l.b)("CREATE_CONTACT_SUCCESS"),createContactFailed:Object(l.b)("CREATE_CONTACT_FAILED"),createContactError:Object(l.b)("CREATE_CONTACT_ERROR"),fetchContactsRequest:Object(l.b)("FETCH_CONTACT_REQUEST"),fetchContactsSuccess:Object(l.b)("FETCH_CONTACT_SUCCESS"),fetchContactsError:Object(l.b)("FETCH_CONTACT_ERROR"),removeContactRequest:Object(l.b)("REMOVE_CONTACT_REQUEST"),removeContactSuccess:Object(l.b)("REMOVE_CONTACT_SUCCESS"),removeContactError:Object(l.b)("REMOVE_CONTACT_ERROR"),togglerFlag:Object(l.b)("CHANGE_FLAG"),filter:Object(l.b)("FILTER")},f=n(9),b=function(t){return t.items},p=function(t){return t.filter},m=Object(f.a)([b,p],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),d={getContacts:b,getFilter:p,getIsNameAlreadyExist:function(t){return t.isNameAlreadyExist},getFiltredContacts:m,getContactById:Object(f.a)([function(t,e){return e},m],(function(t,e){return e.find((function(e){return e.id===t}))}))},C=n(3),O=n(4);function E(){var t=Object(C.a)(["\n    width: 400px;\n    position: relative;\n"]);return E=function(){return t},t}var h=O.a.div(E());function g(t){var e=t.children;return a.a.createElement(h,null,e)}var j=n(2),v=n(16),x=n(17),y=n(19),T=n(18);function S(){var t=Object(C.a)(["\n    outline: none;\n    padding: 5px;\n    border: 1px solid transparent;\n    color: #fff;\n    background-color: #3645ac;\n    border-radius: 3px;\n    box-shadow: 1px 1px 3px #3645ac;\n    width: 100%;\n    &:hover {\n        cursor: pointer;\n        background-color: #243398;\n    }\n    &:disabled {\n        background-color: grey;\n    }\n"]);return S=function(){return t},t}function R(){var t=Object(C.a)(["\n    margin-bottom: 10px;\n    padding: 5px;\n    width: 100%;\n    border: 1px solid grey;\n    border-radius: 3px;\n    &:active,\n    :focus {\n        outline: none;\n        border-color: #3645ac;\n    }\n"]);return R=function(){return t},t}function A(){var t=Object(C.a)(["\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return A=function(){return t},t}function N(){var t=Object(C.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return N=function(){return t},t}var F=O.a.form(N()),_=O.a.p(A()),k=O.a.input(R()),w=O.a.button(S()),I={getContacts:function(){return function(t){t(s.fetchContactsRequest()),fetch("http://localhost:2000/contacts").then((function(t){return t.json()})).then((function(e){return t(s.fetchContactsSuccess(e))})).catch((function(e){return t(s.fetchContactsError(e))}))}},setContact:function(t,e){return function(n,r){if(n(s.createContactRequest()),r().items.find((function(e){return e.name===t})))return n(s.togglerFlag()),void n(s.createContactFailed());var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,number:e})};fetch("http://localhost:2000/contacts",a).then((function(t){return t.json()})).then((function(t){return n(s.createContactSuccess(t))})).catch((function(t){return n(s.createContactError(t))}))}},deleteContact:function(t){return function(e){e(s.removeContactRequest());fetch("http://localhost:2000/contacts/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(){return e(s.removeContactSuccess(t))})).catch((function(t){return e(s.createContactError(t))}))}}},q=function(t){Object(y.a)(n,t);var e=Object(T.a)(n);function n(){var t;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handlerInput=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(j.a)({},r,a))},t.handlerSubmit=function(e){e.preventDefault();var n=t.state,r=n.name,a=n.number;t.props.postContact(r,a),t.setState({name:"",number:""})},t}return Object(x.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,r=""!==e&&""!==n;return a.a.createElement(F,{onSubmit:this.handlerSubmit},a.a.createElement(_,null,"Name"),a.a.createElement(k,{type:"text",value:e,name:"name",onChange:this.handlerInput}),a.a.createElement(_,null,"Number"),a.a.createElement(k,{type:"text",value:n,name:"number",onChange:this.handlerInput}),a.a.createElement("br",null),a.a.createElement(w,{type:"submit",disabled:!r},"Add contact"))}}]),n}(r.Component),U={postContact:I.setContact},L=Object(u.b)(null,U)(q);function M(){var t=Object(C.a)(["\n    margin-bottom: 0;\n"]);return M=function(){return t},t}function H(){var t=Object(C.a)(["\n    box-shadow: 1px 1px 3px grey;\n    padding: 10px;\n    margin-bottom: 20px;\n"]);return H=function(){return t},t}var V=O.a.div(H()),D=Object(O.a)(k)(M()),B={onFilter:s.filter},J=Object(u.b)((function(t){return{filterValue:d.getFilter(t),items:d.getContacts(t)}}),B)((function(t){var e=t.filterValue,n=t.items,r=t.onFilter;return n.length>1&&a.a.createElement(V,null,a.a.createElement(_,null,"Find contacts by name"),a.a.createElement(D,{type:"text",value:e,name:"filter",onChange:function(t){return r(t.target.value)}}))})),Q=n(46),z=n(27);function G(){var t=Object(C.a)(["\n    display: flex;\n    align-items: center;\n"]);return G=function(){return t},t}function P(){var t=Object(C.a)(["\n    position: relative;\n    margin-left: 10px;\n    color: #fff;\n    font-size: 25px;\n    width: 25px;\n    height: 25px;\n    outline: none;\n    padding: 0 5px;\n    border: none;\n    border-radius: 5px;\n    background-color: #f1392d;\n    &:hover {\n        cursor: pointer;\n        background-color: #b2261b;\n    }\n    &::before {\n        content: '+';\n        position: absolute;\n        top: 55%;\n        left: 0;\n        transform: rotate(45deg) translate(-50%, -50%);\n    }\n"]);return P=function(){return t},t}function K(){var t=Object(C.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n    padding: 10px;\n    box-shadow: 1px 1px 3px grey;\n"]);return K=function(){return t},t}var W=O.a.li(K()),X=O.a.button(P()),Y=O.a.span(G()),Z=Object(u.b)((function(t,e){return Object(z.a)({},d.getContactById(t,e.id))}),(function(t,e){return{removeContact:function(){return t(I.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,r=t.removeContact;return a.a.createElement(W,null,a.a.createElement("span",null,e),a.a.createElement(Y,null,n,a.a.createElement(X,{type:"button",onClick:r})))}));var $=function(t){var e=t.items;return a.a.createElement(Q.a,{component:"ul",in:e.length},e.map((function(t){var e=t.id;return a.a.createElement(i.a,{key:e,classNames:"ContactList-fade",timeout:250},a.a.createElement(Z,{id:e}))})))},tt=function(t){Object(y.a)(n,t);var e=Object(T.a)(n);function n(){return Object(v.a)(this,n),e.apply(this,arguments)}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return a.a.createElement($,this.props)}}]),n}(r.Component),et=Object(u.b)((function(t){return{items:d.getFiltredContacts(t)}}),{fetchContacts:I.getContacts})(tt);function nt(){var t=Object(C.a)(["\n    position: absolute;\n    top: 12px;\n    right: -30px;\n    padding: 10px 50px;\n    font-size: 12px;\n    border-radius: 5px;\n    color: #fff;\n    background-color: #f1392d;\n"]);return nt=function(){return t},t}function rt(){var t=Object(C.a)(["\n    margin: 15px 0;\n    color: #3446ac;\n"]);return rt=function(){return t},t}var at,ct,ot=O.a.h2(rt()),ut=O.a.div(nt()),it={togglerFlag:s.togglerFlag},lt=Object(u.b)((function(t){return{isNameAlreadyExist:d.getIsNameAlreadyExist(t)}}),it)((function(t){var e=t.isNameAlreadyExist,n=t.togglerFlag;return e&&setTimeout((function(){n()}),2e3),a.a.createElement(g,null,a.a.createElement(i.a,{in:!0,appear:!0,classNames:"Title-fade",timeout:500},a.a.createElement(ot,null,"Phonebook")),a.a.createElement(L,null),a.a.createElement(J,null),a.a.createElement(et,null),a.a.createElement(i.a,{in:e,classNames:"InfoMessage-fade",timeout:250,unmountOnExit:!0},a.a.createElement(ut,null,"Contact already exists!")))})),st=n(28),ft=n(7),bt=Object(l.c)([],(at={},Object(j.a)(at,s.fetchContactsSuccess,(function(t,e){return e.payload})),Object(j.a)(at,s.createContactSuccess,(function(t,e){return[].concat(Object(st.a)(t),[e.payload])})),Object(j.a)(at,s.removeContactSuccess,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),at)),pt=Object(l.c)(!1,Object(j.a)({},s.togglerFlag,(function(t,e){return!t}))),mt=Object(l.c)("",Object(j.a)({},s.filter,(function(t,e){return e.payload}))),dt=Object(l.c)(!1,(ct={},Object(j.a)(ct,s.fetchContactsRequest,(function(){return!0})),Object(j.a)(ct,s.fetchContactsSuccess,(function(){return!1})),Object(j.a)(ct,s.fetchContactsError,(function(){return!1})),Object(j.a)(ct,s.createContactRequest,(function(){return!0})),Object(j.a)(ct,s.createContactSuccess,(function(){return!1})),Object(j.a)(ct,s.createContactFailed,(function(){return!1})),Object(j.a)(ct,s.createContactError,(function(){return!1})),Object(j.a)(ct,s.removeContactRequest,(function(){return!0})),Object(j.a)(ct,s.removeContactSuccess,(function(){return!1})),Object(j.a)(ct,s.removeContactError,(function(){return!1})),ct)),Ct=Object(ft.c)({items:bt,filter:mt,isNameAlreadyExist:pt,loading:dt}),Ot=Object(l.a)({reducer:Ct});n(42),n(43);o.a.render(a.a.createElement(u.a,{store:Ot},a.a.createElement(lt,null)),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8c03832a.chunk.js.map