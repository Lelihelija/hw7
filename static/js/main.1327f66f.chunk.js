(this.webpackJsonphw7=this.webpackJsonphw7||[]).push([[0],{40:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},50:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(20),c=a.n(s),o=a(15),u=a(37),i=a(38),l=a(5),m={loading:!1,users:[],error:""},p={loading:!1,tweets:[],error:""},d=Object(o.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS_REQUEST":return Object(l.a)(Object(l.a)({},e.users),{},{loading:!0});case"FETCH_USERS_SUCCESS":return{loading:!1,users:t.payload,error:""};case"FETCH_USERS_FAILURE":return{loading:!1,users:[],error:t.payload};default:return e}},tweet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TWEETS_REQUEST":return Object(l.a)(Object(l.a)({},e.tweets),{},{loading:!0,error:""});case"FETCH_TWEETS_SUCCESS":return{tweets:t.payload,loading:!1,error:""};case"FETCH_TWEETS_FAIL":return{users:[],loading:!1,error:t.payload};default:return e}}}),h=Object(o.d)(d,Object(o.a)(u.a,i.logger)),f=a(9),v=(a(49),a(50),a(22)),w=function(){return r.a.createElement("div",{className:"top-panel-wrapper"},r.a.createElement("ul",{className:"navigation-menu"},J.map((function(e,t){return r.a.createElement("li",{key:t,className:"nav-item"},r.a.createElement(v.b,{to:e.path,className:"top-panel-btn"},e.title))}))))},E=a(2),b=a(11),g=a(12),y=a(14),S=a(13),T=a(10),N=a.n(T),C=a(17),j=a(18),O=a.n(j),U=function(){return{type:"FETCH_USERS_REQUEST"}},_=function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}},k=function(e){return{type:"FETCH_USERS_FAILURE",payload:e}},A=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(U),e.next=3,O.a.get("https://cors-anywhere.herokuapp.com/http://domer.tech:9999/users").then((function(e){var a=e.data.data;t(_(a))})).catch((function(e){var a=e.message;t(k(a))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=(a(70),function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchUsersAction()}},{key:"render",value:function(){var e=this.props.users;return r.a.createElement("div",null,e.loading?r.a.createElement("h2",null,"Loading..."):e.error?r.a.createElement("h2",null,"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ",e.error):r.a.createElement("div",null,r.a.createElement("div",{className:"users-wrapper"},e.map((function(e,t){return r.a.createElement("div",{key:t,className:"user-container"},r.a.createElement("img",{className:"user-avatar",src:e.avatar,alt:"avatar"}),r.a.createElement("div",{className:"user-name"}," ",e.name," "),r.a.createElement("div",{className:"user-username"}," ",e.username," "))})))))}}]),a}(n.Component)),F=Object(f.b)((function(e){return console.log(e,e.user.users),{users:e.user.users}}),{fetchUsersAction:A})(x),R=(a(71),function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",username:{value:"",isValid:!1,validationRules:{regExp:/^([a-zA-Z0-9-])$/}},avatar:""},e.selectName=function(t){e.setState({name:t.currentTarget.value})},e.usernameValidation=function(t){return e.state.username.validationRules.regExp.test(String(t))},e.selectUsername=function(t){e.setState({username:Object(l.a)(Object(l.a)({},e.state.username),{},{value:t.target.value})})},e.selectAvatar=function(t){e.setState({avatar:t.currentTarget.value})},e.resetInputs=function(){e.setState({name:"",username:Object(l.a)(Object(l.a)({},e.state.username),{},{value:"",isValid:!1}),avatar:""})},e.addNewUser=function(){var t={name:e.state.name,username:"@".concat(e.state.username.value),avatar:e.state.avatar};console.log(t,e.state),e.resetInputs()},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"new-post-form-wrapper"},r.a.createElement("div",{className:"inputs-wrapper"},r.a.createElement("input",{type:"name",placeholder:"Type your name here",className:"new-post-items new-post-name",value:this.state.name,onChange:this.selectName.bind(this)}),r.a.createElement("div",{className:"username-wrapper"},"@",r.a.createElement("input",{type:"username",placeholder:"Type your username here",className:"new-post-items new-post-username",value:this.state.username.value,onChange:this.selectUsername.bind(this)})),r.a.createElement("input",{type:"url",placeholder:"Paste your avatar here",className:"new-post-items new-post-avatar",value:this.state.avatar,onChange:this.selectAvatar.bind(this)})),r.a.createElement("button",{type:"button",className:"submit-button",onClick:function(){e.addNewUser()}},"Add new user"))}}]),a}(n.Component)),H=function(){return{type:"FETCH_TWEETS_REQUEST"}},I=function(e){return{type:"FETCH_TWEETS_SUCCESS",payload:e}},W=function(e){return{type:"FETCH_TWEETS_FAIL",payload:e}},L=function(){return function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H),e.next=3,O.a.get("http://domer.tech:9999/tweets").then((function(e){var a=e.data.data;t(I(a))})).catch((function(e){var a=e.message;t(W(a))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=(a(72),function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchTweetsAction()}},{key:"render",value:function(){var e=this.props.tweets;return r.a.createElement("div",{className:"tweets-list-wrapper"},"So, there will be tweets!",e.map((function(e,t){return r.a.createElement("div",{key:t,className:"tweets-container"},r.a.createElement("p",null,e.content),r.a.createElement("img",{className:"tweets-image",src:e.image,alt:"tweet"}))})))}}]),a}(n.Component)),M=Object(f.b)((function(e){return console.log(e,e.tweet.tweets),{tweets:e.tweet.tweets}}),{fetchTweetsAction:L})(Q),V=function(){var e=Object(C.a)(N.a.mark((function e(t,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.post("http://domer.tech:9999/tweets/",Object(l.a)({},t));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),B=(a(73),function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={content:"",image:"",name:""},e.selectContent=function(t){e.setState({content:t.currentTarget.value})},e.selectImage=function(t){e.setState({image:t.target.value})},e.selectName=function(t){e.setState({name:t.currentTarget.value})},e.resetInputs=function(){e.setState({content:"",image:""})},e.addNewTweet=function(){V(e.state),e.resetInputs()},e}return Object(g.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchUsersAction(),this.props.fetchTweetsAction()}},{key:"render",value:function(){var e=this,t=this.props,a=t.users,n=t.tweets;return console.log("Needed one users: ",a,"tweets: ",n),r.a.createElement("div",{className:"add-tweet-wrapper"},r.a.createElement("label",{className:"new-tweet-items"},"Choose a user:"),r.a.createElement("select",{className:"new-tweet-items",onChange:this.selectName.bind(this),value:this.state.user,name:"user",id:"users"},a.map((function(e,t){return r.a.createElement("option",{className:"new-user-option",key:t},e.name)}))),r.a.createElement("div",{className:"inputs-wrapper"},r.a.createElement("input",{type:"content",placeholder:"Type your messare here",className:"new-tweet-items new-tweet-content",value:this.state.content,onChange:this.selectContent.bind(this)}),r.a.createElement("input",{type:"url",placeholder:"Paste your image here",className:"new-tweet-items new-tweet-image",value:this.state.image,onChange:this.selectImage.bind(this)})),r.a.createElement("button",{type:"button",className:"submit-button",onClick:function(){e.addNewTweet()}},"Add new tweet"))}}]),a}(n.Component)),J=[{title:"Users",path:"/users",component:F,index:1},{title:"Add user",path:"/add-user",component:R,index:2},{title:"Tweets list",path:"/tweets-list",component:M,index:3},{title:"Add tweet",path:"/add-tweet",component:Object(f.b)((function(e){return{users:e.user.users,tweets:e.tweet.tweets}}),{fetchUsersAction:A,fetchTweetsAction:L})(B),index:4}];var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,null,r.a.createElement(w,null),r.a.createElement(E.d,null,J.map((function(e){var t=e.path,a=e.component,n=e.index;return r.a.createElement(E.b,{path:t,key:n,component:a})})),r.a.createElement(E.b,{path:"/",exact:!0,render:function(){return r.a.createElement(E.a,{to:"/users"})}}),r.a.createElement(E.b,{exact:!0,render:function(){return r.a.createElement(E.a,{to:"/users"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(74);c.a.render(r.a.createElement(f.a,{store:h},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.1327f66f.chunk.js.map