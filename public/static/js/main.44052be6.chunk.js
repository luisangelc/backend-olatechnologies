(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{308:function(e,t,n){},309:function(e,t,n){},328:function(e,t,n){},337:function(e,t){},339:function(e,t){},350:function(e,t){},352:function(e,t){},378:function(e,t){},380:function(e,t){},381:function(e,t){},386:function(e,t){},388:function(e,t){},407:function(e,t){},419:function(e,t){},422:function(e,t){},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(64),i=n.n(r),o=(n(308),n(309),n(182)),c=n.n(o),l=n(256),s=n(257),d=n(114),u=n(115),h=n(149),b=n(139),j=n(461),p=n(466),g=n(457),m=n(70),f=n(463),x=n(464),O=n(438),v=n(458),y=n(456),C=n(107),E=n(258),S=n.n(E).a.create({baseURL:"http://localhost:3000/api",timeout:2e3,headers:{}}),k=(n(328),n(459)),T=n(460),w=n(455),I=n(186),L=n(183),F=n(152),A=n(153),M={letterSpacing:"0.3px",borderStyle:"none none dotted none",borderWidth:"1px",borderColor:"lightgray",width:"fit-content",color:"#333",":hover":{fontWeight:"bold",cursor:"pointer",borderColor:"#6e6e6e"}},D={paddingLeft:"5px"},W="25px",B={height:W,minWidth:"200px",borderStyle:"none none solid none",borderWidth:"1px",borderColor:"lightgray",letterSpacing:"0.3px"},N={height:W,width:W,border:"none",marginBottom:"2px",marginLeft:"5px"},V={color:"#ad2411",display:"block"},z=n(6),G=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).toggleEditMode=function(){var e=a.state,t=e.isEditing,n=e.previewLabel,r=a.props,i=r.customErrorFunction,o=r.editChangeEvent;if(!0===t){var c=i(n);return c?void a.setState({hasError:c}):void(o&&(a.setState({isEditing:!1}),o(n)))}a.setState({isEditing:!0})},a.cancelEditMode=function(){var e=a.props.labelValue;a.setState({isEditing:!1,previewLabel:e,hasError:!1})},a.simpleLabelWithClickAction=function(){var e=a.props,t=e.labelValue,n=e.labelStyle,r=e.placeholder,i=e.placeholderStyle,o=e.hoveringStyle,c=e.customEditIcon,l=e.customEditIconStyle,s=P(t),d=s?r:t,u=I.a.getState(a.state,"label-value",":hover"),h=[M,!s&&!u&&n,s&&!u&&i,u&&o],b=Object(z.jsx)("span",{style:[D,l],children:c});return Object(z.jsxs)("p",{style:h,onClick:a.toggleEditMode,children:[d,u&&b]},"label-value")},a.watchForEnterClick=function(e){13===e.keyCode&&(a.state.hasError||a.toggleEditMode())},a.inputOnChangeEvent=function(e){var t=e.target.value;t.length>0?a.setState({hasError:!1,previewLabel:t}):a.setState({previewLabel:t})},a.inputToEditLabel=function(){var e=a.state.previewLabel,t=a.props,n=t.inputStyle,r=t.customCloseIcon,i=t.customCancelIconStyle,o=t.customApproveIcon,c=t.customApproveIconStyle;return[Object(z.jsx)("input",{type:"text",value:e,style:[B,n],onChange:a.inputOnChangeEvent,onKeyUp:a.watchForEnterClick,autoFocus:!0},"input-value-label"),Object(z.jsx)("button",{style:[N,i],onClick:a.cancelEditMode,children:r},"input-value-cancel-button"),Object(z.jsx)("button",{style:[N,c],onClick:a.toggleEditMode,children:o},"input-value-approve-button")]},a.getErrorMessage=function(){var e=a.state.hasError,t=a.props,n=t.hideErrors,r=t.customErrorMessage,i=t.errorStyle,o=!n&&e,c=[V,i];return o&&Array.isArray(r)?Object(z.jsx)("ul",{style:c,children:r.map((function(e){return Object(z.jsx)("li",{children:e},Object(L.generate)())}))}):o?Object(z.jsx)("span",{style:c,children:r}):null},a.props=e,a.state={uniqueId:Object(L.generate)(),isEditing:!1,hasError:!1,previewLabel:a.props.labelValue},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.id,n=e.isEditing,a=e.uniqueId,r=e.style,i=n?this.inputToEditLabel():this.simpleLabelWithClickAction(),o=this.getErrorMessage(),c=P(t)?"editable-label-id-".concat(a):t;return Object(z.jsxs)("div",{id:c,style:r,children:[i,o]},c)}}]),n}(a.Component),P=Object(k.a)([T.a,w.a]);G.defaultProps={id:null,hideErrors:!1,customErrorMessage:"Invalid input entry",customErrorFunction:P,customEditIcon:Object(z.jsx)(F.a,{icon:A.b}),customCloseIcon:Object(z.jsx)(F.a,{icon:A.c}),customApproveIcon:Object(z.jsx)(F.a,{icon:A.a}),placeholder:null,customApproveIconStyle:{},customCancelIconStyle:{},customEditIconStyle:{},inputStyle:{},labelStyle:{},errorStyle:{},style:{},placeholderStyle:{},hoveringStyle:{}};var R=Object(I.a)(G),_=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.getTareas()},a.handleChangeFilter=function(e){a.getTareas(e.value)},a.onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState((function(e){return Object(s.a)({},n,r)}))},a.changeLabelEvent=function(e,t){a.putTask(t,{nombre:e})},a.postTarea=function(){a.state.nombre&&S.post("/nueva-tarea",{nombre:a.state.nombre}).then((function(e){a.setState({nombre:""}),a.getTareas()})).catch((function(e){console.warn(e)}))},a.getTareas=Object(l.a)(c.a.mark((function e(){var t,n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:-1,n=[],!(t<0)){e.next=8;break}return e.next=5,S.get("/tareas").then((function(e){return a.state.total=e.data.total,a.state.sinTerminar=e.data.sinTerminar,a.state.terminadas=e.data.terminadas,e.data.Data})).catch((function(e){console.warn(e)}));case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,S.get("/tareas/".concat(t)).then((function(e){return a.state.total=e.data.total,a.state.sinTerminar=e.data.sinTerminar,a.state.terminadas=e.data.terminadas,e.data.Data})).catch((function(e){console.warn(e)}));case 10:n=e.sent;case 11:if(n){e.next=14;break}return e.abrupt("return",Object(z.jsx)(j.a,{fluid:!0,children:Object(z.jsx)(j.a.Content,{children:Object(z.jsx)(j.a.Header,{textAlign:"left",children:Object(z.jsx)("div",{children:"No se encontraron datos"})})})}));case 14:n&&(n=n.sort((function(e,t){return e.estatus?1:t.estatus?-1:0}))),a.setState({listaTareas:n.map((function(e,t){var n={color:"yellow",cardBackground:{background:"white"},taskComplete:{textDecoration:"none"}};return e.estatus&&(n.color="green",n.cardBackground.background="beige",n.taskComplete.textDecoration="line-through"),Object(z.jsxs)(j.a,{color:n.color,fluid:!0,style:n.cardBackground,children:[Object(z.jsx)(j.a.Content,{children:Object(z.jsx)(j.a.Header,{textAlign:"left",style:n.taskComplete,children:Object(z.jsx)(R,{style:{wordWrap:"break-word"},labelValue:e.nombre,editChangeEvent:function(t,n){return a.changeLabelEvent(t,e._id)},customEditIconStyle:{color:"teal"},customCancelIconStyle:{color:"red"},customApproveIconStyle:{color:"green"}})})}),Object(z.jsxs)(j.a.Meta,{textAlign:"left",style:{margin:"15px"},children:[Object(z.jsx)(p.a,{onChange:function(t,n){return a.putTask(e._id,n)},checked:e.estatus,label:Object(z.jsx)("label",{children:"Completada"})}),Object(z.jsx)(g.a,{trigger:Object(z.jsx)(m.a,{link:!0,name:"delete",color:"red",style:{paddingLeft:"10px"},children:Object(z.jsx)("label",{style:{color:"black",marginLeft:"5px",fontSize:"15px",fontFamily:"sans-serif"},children:"Eliminar"})}),flowing:!0,hoverable:!0,children:Object(z.jsx)(f.a,{centered:!0,columns:1,children:Object(z.jsxs)(f.a.Column,{textAlign:"center",children:[Object(z.jsx)(x.a,{as:"h4",children:"Confirme si, \xbfDesea eliminar esta tarea ?"}),Object(z.jsx)(O.a,{onClick:function(){return a.deleteTarea(e._id)},children:"Eliminar"})]})})})]})]},t)}))});case 16:case"end":return e.stop()}}),e)}))),a.putTask=function(e,t){S.put("/tarea/".concat(e),{estatus:t.checked,nombre:t.nombre}).then((function(e){a.getTareas()})).catch((function(e){console.warn(e)}))},a.undoTarea=function(e){},a.deleteTarea=function(e){S.delete("/tarea/".concat(e)).then((function(e){a.getTareas()})).catch((function(e){console.warn(e)}))},a.state={nombre:"",listaTareas:[],isOpen:!1,total:0,terminadas:0,sinTerminar:0},a}return Object(u.a)(n,[{key:"componentWillMount",value:function(){this.setState({optionsFilter:[{value:"1",text:"Todas"},{value:"2",text:"Terminadas"},{value:"3",text:"Sin Terminar"}],selected:["1"]})}},{key:"render",value:function(){var e=this;return Object(z.jsxs)("div",{children:[Object(z.jsx)("div",{children:Object(z.jsxs)(x.a,{as:"h1",children:[Object(z.jsx)("div",{className:"app-header",children:"Mi Lista de Tareas"})," "]})}),Object(z.jsx)("div",{className:"app-form",children:Object(z.jsxs)(v.a,{onSubmit:this.postTarea,children:[Object(z.jsxs)(f.a,{children:[Object(z.jsx)(f.a.Column,{width:8,children:Object(z.jsx)(v.a.Field,{children:Object(z.jsx)(y.a,{type:"text",name:"nombre",onChange:this.onChange,value:this.state.nombre,fluid:!0,placeholder:"Agregar una tarea"})})}),Object(z.jsx)(f.a.Column,{width:2,stretched:!0,verticalAlign:"middle",children:Object(z.jsx)(v.a.Group,{inline:!0,className:"no-margin",children:Object(z.jsx)(v.a.Field,{children:Object(z.jsx)(O.a,{primary:!0,children:"Guardar"})})})}),Object(z.jsx)(f.a.Column,{width:4,className:"no-margin",children:Object(z.jsx)(v.a.Dropdown,{placeholder:"Please select",defaultValue:this.state.selected,fluid:!0,selection:!0,options:this.state.optionsFilter,onChange:function(t,n){return e.handleChangeFilter(n)}})})]}),Object(z.jsx)(f.a,{children:Object(z.jsx)(f.a.Column,{width:6,children:Object(z.jsxs)(v.a.Group,{inline:!0,className:"no-margin",children:[Object(z.jsx)(C.a,{children:"Total Tareas:"}),Object(z.jsx)(C.a,{circular:!0,color:"teal",style:{fontFamily:"serif",fontSize:"12px",color:"gray",marginRight:"20px"},children:this.state.total}),Object(z.jsx)(C.a,{children:"Terminadas:"}),Object(z.jsx)(C.a,{circular:!0,color:"teal",style:{fontFamily:"serif",fontSize:"12px",color:"gray",marginRight:"20px"},children:this.state.terminadas}),Object(z.jsx)(C.a,{children:"Sin Terminar:"}),Object(z.jsx)(C.a,{circular:!0,color:"teal",style:{fontFamily:"serif",fontSize:"12px",color:"white"},children:this.state.sinTerminar})]})})})]})}),Object(z.jsx)("div",{children:Object(z.jsx)(j.a.Group,{children:this.state.listaTareas})})]})}}]),n}(a.Component);var q=function(){return Object(z.jsx)("div",{children:Object(z.jsx)(_,{})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,467)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};i.a.render(Object(z.jsx)(q,{}),document.getElementById("root")),H()}},[[437,1,2]]]);
//# sourceMappingURL=main.44052be6.chunk.js.map