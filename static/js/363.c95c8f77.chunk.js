"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[363],{4363:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var a=t(2791),o=t(9434),r=(t(1174),t(4942)),s=t(1413),i=t(9439),l=t(4749),u={name:"",number:""},c=t(184);var m=function(e){var n=e.onSubmit,t=(0,a.useState)((0,s.Z)({},u)),o=(0,i.Z)(t,2),m=o[0],f=o[1],d=function(e){var n=e.target,t=n.value,a=n.name;f((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,r.Z)({},a,t))}))},h=m.name,b=m.number;return(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({name:h,number:b}),f((0,s.Z)({},u))},className:l.Z.form,children:[(0,c.jsxs)("label",{className:l.Z.label,children:["Name",(0,c.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:h,onChange:d,required:!0,className:l.Z.input})]}),(0,c.jsxs)("label",{className:l.Z.label,children:["Number",(0,c.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:b,onChange:d,required:!0,className:l.Z.input})]}),(0,c.jsx)("button",{type:"submit",className:l.Z.button,children:"Add contact"})]})},f=function(e){var n=e.contacts,t=e.type,a=e.text,o=e.onClick,r=n.map((function(e){var n=e.name,r=e.number,s=e.id;return(0,c.jsxs)("li",{className:l.Z.list,children:[n,": ",r," ",(0,c.jsx)("button",{type:t,onClick:function(){return o(s)},className:l.Z.button,children:a})]},s)}));return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:l.Z.title,children:"Contacts"}),(0,c.jsx)("ul",{className:l.Z.group,children:r})]})},d=function(e){var n=e.value,t=e.onChange;return(0,c.jsxs)("label",{className:l.Z.labelFilter,children:[" Find contacts by name",(0,c.jsx)("input",{type:"text",value:n,onChange:t,className:l.Z.input})]})},h=t(9507),b=function(e){var n=e.contacts,t=e.filter;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){var n=e.name,t=e.number;return n.toLowerCase().includes(a)||t.includes(a)}))},p=function(e){return e.filter},v=t(5653),x=t(1686),_=t.n(x);function Z(){var e=(0,o.v9)((function(e){return e.contacts.items})),n=(0,o.v9)(b),t=(0,o.v9)(p),r=(0,o.I0)();(0,a.useEffect)((function(){r((0,h.yF)())}),[r]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{onSubmit:function(n){for(var t=n.name,a=n.number,o=0;o<e.length;o++)if(e[o].name===t)return _().Notify.failure("".concat(t," is olredy in contacts"));r((0,h.v6)({name:t,number:a}))}}),e.length>0&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{value:t,onChange:function(e){var n=e.target;return r((0,v.T)(n.value))}}),(0,c.jsx)(f,{contacts:n,type:"button",text:"delete",onClick:function(e){r((0,h.in)(e))}})]})]})}_().Notify.init({width:"320px",position:"center-top",distance:"10px",opacity:"1",fontFamily:"source-code-pro",fontStyle:"normal",fontWeight:"400",fontSize:"14px",timeout:4e3,cssAnimationStyle:"from-top",useIcon:!1,cssAnimationDuration:1e3,failure:{background:"transperent",textColor:"#FF001B",childClassName:"notiflix-notify-failure",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)"}});var y=function(){return(0,c.jsx)(Z,{})}},4749:function(e,n){n.Z={conteiner:"PhoneBook_conteiner__b6026",title:"PhoneBook_title__7BHFR",form:"PhoneBook_form__CCnvu",label:"PhoneBook_label__pbb2j",input:"PhoneBook_input__EyWAv",button:"PhoneBook_button__Q0yVE",labelFilter:"PhoneBook_labelFilter__vnlwM",list:"PhoneBook_list__2sP0V"}}}]);
//# sourceMappingURL=363.c95c8f77.chunk.js.map