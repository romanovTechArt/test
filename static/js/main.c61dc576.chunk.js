(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(8),s=c.n(i),l=(c(50),c(51),c(2)),o=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__heading",children:Object(l.jsx)("h2",{children:"Kanban Board Example"})}),Object(l.jsxs)("div",{className:"header__info",children:[Object(l.jsx)("div",{className:"header__info_author",children:"Romanov V"}),Object(l.jsx)("div",{className:"header__info_date",children:"September 06, 2021"})]})]})},d=c(23),r=c(34),_=c(18),u=c(91),j=c(94),m=c(95),b=c(41),h=c(37),O=c.n(h),x=(c(54),c(93)),f=c(92),v=c(96),g=c(90),N=c(38),p=[{_id:1,title:"First Task",status:"plan",color:"urgent",text:"Additional Information"},{_id:2,title:"Second Task",status:"plan",color:"bug-fix",text:"Additional Information"},{_id:3,title:"Third Task",status:"plan",color:"urgent",text:"Additional Information"},{_id:4,title:"Fourth Task",status:"toDo",color:"features",text:"Additional Information"},{_id:5,title:"Fifth Task",status:"toDo",color:"urgent",text:"Additional Information"},{_id:6,title:"Sixth Task",status:"code",color:"bug-fix",text:"Additional Information"},{_id:7,title:"Seventh Task",status:"test",color:"urgent",text:"Additional Information"},{_id:8,title:"Eighth Task",status:"create",color:"features",text:"Additional Information"}],k="To Do",H="Plan",T="Code",S="Create",D="Test",A="Done",C=function(){var e=Object(n.useState)(p),t=Object(_.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(null),o=Object(_.a)(s,2),j=o[0],m=o[1],h=a.a.useState(!1),C=Object(_.a)(h,2),F=C[0],w=C[1],B=Object(N.a)(),E=Object(g.a)(B.breakpoints.down("sm")),R=function(e){w(!0),m(e)},J=Object(n.useCallback)((function(e,t){var n=c.find((function(t){return t._id===e})),a=c.indexOf(n);n=Object(r.a)(Object(r.a)({},n),{},{status:t});var s=O()(c,Object(d.a)({},a,{$set:n}));i(s)}),[c]);return Object(l.jsxs)("main",{children:[Object(l.jsx)(u.a,{backend:b.a,children:Object(l.jsxs)("section",{className:"board",children:[Object(l.jsx)(I,{status:"toDo",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_toDo",children:k}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"toDo"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"toDo"),Object(l.jsxs)("div",{className:"board__column_progress",children:[Object(l.jsx)("div",{className:"board__column_progress_progress",children:"In progress"}),Object(l.jsxs)("div",{className:"board__column_progress_list",children:[Object(l.jsx)(I,{status:"plan",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_plan",children:H}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"plan"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"plan"),Object(l.jsx)(I,{status:"code",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_code",children:T}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"code"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"code"),Object(l.jsx)(I,{status:"create",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_create",children:S}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"create"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"create"),Object(l.jsx)(I,{status:"test",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_test",children:D}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"test"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"test")]})]}),Object(l.jsx)(I,{status:"done",changeTaskStatus:J,children:Object(l.jsxs)("div",{className:"board__column",children:[Object(l.jsx)("div",{className:"board__column__columnHead_done",children:A}),Object(l.jsx)("div",{className:"board__column__content",children:c.filter((function(e){return"done"===e.status})).map((function(e){return Object(l.jsx)(y,{id:e._id,children:Object(l.jsx)("div",{onClick:function(){return R(e.title)},className:"board__column__columnHead__item board__column__columnHead__item_".concat(e.color),children:e.title})},e._id)}))})]})},"done")]})}),F&&Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{fullScreen:E,open:F,onClose:function(){w(!1)},"aria-labelledby":"responsive-dialog-title",children:Object(l.jsx)(f.a,{children:Object(l.jsxs)(v.a,{children:["Additional information for ",j]})})})})]})},I=function(e){var t=e.status,c=e.changeTaskStatus,a=e.children,i=Object(n.useRef)(null),s=Object(j.a)({accept:"card",drop:function(e){c(e.id,t)}});return(0,Object(_.a)(s,2)[1])(i),Object(l.jsxs)("div",{ref:i,children:[" ",a]})},y=function(e){var t=e.id,c=e.children,a=Object(n.useRef)(null),i=Object(m.a)({item:{type:"card",id:t},collect:function(e){return{isDragging:e.isDragging()}}}),s=Object(_.a)(i,2),o=s[0].isDragging?0:1;return(0,s[1])(a),Object(l.jsx)("div",{ref:a,style:{opacity:o},children:c})},F=(c(60),function(){return Object(l.jsxs)("section",{className:"legend",children:[Object(l.jsx)("p",{children:"Legend"}),Object(l.jsxs)("div",{className:"legend__list",children:[Object(l.jsx)("div",{className:"legend__list__item legend__list__item_urgent",children:"= Urgent"}),Object(l.jsx)("div",{className:"legend__list__item legend__list__item_bug-fix",children:"= Bug fix"}),Object(l.jsx)("div",{className:"legend__list__item legend__list__item_features",children:"= Features"})]})]})});var w=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(C,{}),Object(l.jsx)(F,{})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c61dc576.chunk.js.map