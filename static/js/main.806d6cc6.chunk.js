(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),r=n(5),o=n(7),i=n(6),p=n(1),u=n.n(p),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={key:""},e.handleKeyUp=function(t){e.setState({key:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.key?Object(d.jsx)("p",{className:"App__message",children:" The last pressed key is [".concat(this.state.key,"]")}):Object(d.jsx)("p",{children:"Nothing was pressed yet"})})}}]),n}(u.a.Component);n(13);c.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.806d6cc6.chunk.js.map