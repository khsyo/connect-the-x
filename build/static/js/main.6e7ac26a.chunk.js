(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/job-hero-banner-720W.60a740d1.jpg"},219:function(e,t,a){e.exports=a.p+"static/media/spinner.8b9a5cd1.gif"},221:function(e,t,a){e.exports=a.p+"static/media/job-hero-banner-480W.9b2c7ace.jpg"},222:function(e,t,a){e.exports=a.p+"static/media/job-hero-banner-320W.9325e4fc.jpg"},223:function(e,t,a){e.exports=a(434)},434:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(215),o=a.n(c),i=a(28),l=a(41),s=a(16),m=a(7),u=a(48),d=a.n(u),p=(a(240),a(13)),b=a(136),h=a(218),f={message:null,messageType:null};d.a.initializeApp({apiKey:"AIzaSyBqyLKGfSDU2-eXcwBuUFw1EYYTEsMCmN0",authDomain:"connect-the-x.firebaseapp.com",databaseURL:"https://connect-the-x.firebaseio.com",projectId:"connect-the-x",storageBucket:"connect-the-x.appspot.com",messagingSenderId:"401012072513",appId:"1:401012072513:web:300f9955d54ad898"}),d.a.firestore();var E=Object(m.c)(Object(p.reactReduxFirebase)(d.a,{userProfile:"users",useFirestoreForProfile:!0}),Object(b.reduxFirestore)(d.a))(m.d)(Object(m.b)({firebase:p.firebaseReducer,firestore:b.firestoreReducer,notify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTIFY_USER":return Object(h.a)({},e,{message:t.message,messageType:t.messageType});default:return e}}}),{},Object(m.c)(Object(p.reactReduxFirebase)(d.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),g=a(134),v=a.n(g),y=a(137),N=a(219),j=a.n(N);var w=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:j.a,alt:"Loading...",style:{margin:"auto",display:"block",width:"70px"}}))},O=v()({}),x=(Object(y.connectedRouterRedirect)({wrapperDisplayName:"UserIsAuthenticated",AuthenticatingComponent:w,allowRedirectBack:!0,redirectPath:function(e,t){return O.getRedirectQueryParam(t)||"/login"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=(t.profile,t.isInitializing);return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&!t.isEmpty}}),Object(y.connectedRouterRedirect)({wrapperDisplayName:"UserIsNotAuthenticated",AuthenticatingComponent:w,allowRedirectBack:!1,redirectPath:function(e,t){return O.getRedirectQueryParam(t)||"/"},authenticatingSelector:function(e){var t=e.firebase,a=t.auth,n=t.isInitializing;return!a.isLoaded||!0===n},authenticatedSelector:function(e){var t=e.firebase.auth;return t.isLoaded&&t.isEmpty}})),k=a(23),C=a(24),S=a(27),A=a(25),L=a(26),R=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthenticated:!1},a.onLogout=function(e){return e.preventDefault(),a.props.firebase.auth().signOut().then(function(e){return a.props.history.push("/")}).catch(function(e){return"Something went wrong..."}),{isAuthenticated:!1}},a}return Object(L.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=this.state.isAuthenticated;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-info mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,r.a.createElement(i.b,{to:"/",className:"nav-brand text-light"},"CanaanJobs"),"      "),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarMain"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"navbar-collapse collapse",id:"navbarMain"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},t?r.a.createElement("ul",{className:"navbar-nav d-flex justify-content-around"},r.a.createElement("li",{className:"nav-item text-white nav-link"},e.email),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"!#",className:"nav-link text-light"},"Post a job")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"!#",className:"nav-link text-light"},"Find a job")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"!#",className:"nav-link text-light",role:"button",onClick:this.onLogout},"Logout"))):r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/login",className:"nav-link text-light"},"Login Now")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/register",className:"nav-link text-light"},"Register")))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.auth.uid?{isAuthenticated:!0}:{isAuthenticated:!1}}}]),t}(n.Component),U=Object(m.c)(Object(p.firebaseConnect)(),Object(s.connect)(function(e,t){return{auth:e.firebase.auth}}))(R),D=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleApplyNow=function(){console.log("Apply now clicked")},a.handleSeeMore=function(e){e.preventDefault(),console.log("See more clicked and ".concat(e.id))},a}return Object(L.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs;return r.a.createElement("div",{className:"container col-md-10 col-sm-12"},r.a.createElement("h1",{className:"mb-4"},"Job Listings ",r.a.createElement("i",{className:"fas fa-arrow-up"})),r.a.createElement("div",{className:"row"},t?t.map(function(t){return r.a.createElement("div",{className:"col-md-4 col-sm-6 mb-4",key:t.id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header text-info font-weight-bold"},t.title),r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",null,t.hiringCompany),r.a.createElement("br",null),t.city,", ",t.country,r.a.createElement("br",null),"Salary: RM ",t.salary)),r.a.createElement("input",{type:"button",className:"btn btn-outline-success col-6",value:"Apply Now",onClick:e.handleApplyNow}),r.a.createElement(i.b,{to:"/job/".concat(t.id),className:"btn btn-outline-danger col-6"},"See More ",r.a.createElement("i",{className:"fas fa-info-circle"})))}):null))}}]),t}(n.Component),F=Object(m.c)(Object(p.firestoreConnect)([{collection:"jobs"}]),Object(s.connect)(function(e){return{jobs:e.firestore.ordered.jobs}}))(D),I=a(139),P=a.n(I),T=a(221),_=a.n(T),q=a(222),B=a.n(q),M=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){var t=a.props.job;console.log(t.title)},a}return Object(L.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.job;return e?r.a.createElement("div",{className:"container col-sm-12 col-md-9"},r.a.createElement("div",{className:"embed-responsive-4by3 mb-2"},r.a.createElement("img",{srcSet:"".concat(P.a," 1280w, ").concat(_.a," 640w, ").concat(B.a," 320w"),src:P.a,alt:"now hiring"})),r.a.createElement("div",{className:"row mb-2 col-sm-12 col-md-12 pl-0 d-flex justify-content-center"},r.a.createElement("h4",{className:"col-sm-8"},r.a.createElement("span",{className:"text-info"},"We are looking for: ")," ",e.title),r.a.createElement("div",{className:"col-sm-4 bg-success text-white d-flex flex-column justify-content-center"},"Expected salary: RM ",e.salary)),r.a.createElement("div",{className:"row col-sm-6 mb-2 text-secondary font-weight-bold"},e.hiringCompany,"  -  ",e.city,", ",e.country),r.a.createElement("div",{className:"row col-sm-6"},r.a.createElement("h5",{className:"text-info"},"Job Description: "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"row col-sm-6"},r.a.createElement("h5",{className:"text-info"},"Skills Required: "),r.a.createElement("ul",null,r.a.createElement("li",null,"Lorem ipsum dolor sit amet, hasaiuasdfiua sdfiuafsiuasdf"),r.a.createElement("li",null,"Lorem ipsum dolor sit amet"),r.a.createElement("li",null,"Lorem ipsum dolor sit amet"),r.a.createElement("li",null,"Lorem ipsum dolor sit amet"),r.a.createElement("li",null,"Lorem ipsum dolor sit amet"))),r.a.createElement("button",{className:"btn btn-primary mb-5",onClick:this.handleClick},"Apply now")):r.a.createElement(w,null)}}]),t}(n.Component),W=Object(m.c)(Object(p.firestoreConnect)(function(e){return[{collection:"jobs",storeAs:"job",doc:e.match.params.id}]}),Object(s.connect)(function(e,t){var a=e.firestore.ordered;return{job:a.job&&a.job[0]}}))(M),J=a(47),X=function(e,t){return{type:"NOTIFY_USER",message:e,messageType:t}},z=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){a.setState(Object(J.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password,c=a.props,o=c.firebase,i=c.notifyUser;o.auth().createUserWithEmailAndPassword(n,r).then(function(e){var t=o.auth().currentUser,n={url:"localhost:3000/?email="+o.auth().currentUser.email,handleCodeInApp:!1};t.sendEmailVerification(n).then(function(){}).catch(function(e){i("Verification email failed","error"),console.log("Email verification failed")}),a.props.history.push("/")}).catch(function(e){return i("That user already exists","error")})},a}return Object(L.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.notify,t=e.message,a=e.messageType;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},t?r.a.createElement("h6",null,a):null,r.a.createElement("h1",{className:"text-center pb-4 pt-3"},r.a.createElement("span",{className:"text-info"},r.a.createElement("i",{className:"fas fa-lock"})," Sign Up")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",required:!0,value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,value:this.state.password,onChange:this.onChange})),r.a.createElement("input",{type:"submit",value:"Sign up",className:"btn btn-block btn-info"}))))))}}]),t}(n.Component),V=Object(m.c)(Object(p.firebaseConnect)(),Object(s.connect)(function(e,t){return{notify:e.notify,settings:e.settings}},{notifyUser:X}))(z),Y=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){a.setState(Object(J.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password,c=a.props,o=c.firebase,i=c.notifyUser;o.login({email:n,password:r}).then(function(e){return a.props.history.push("/")}).catch(function(e){return i("Incorrect login credentials","error")})},a.handleForgotPassword=function(e){e.preventDefault()},a}return Object(L.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.notify,t=e.message,a=e.messageType;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},t?r.a.createElement("h6",{className:"text-danger"},"".concat(a,": ").concat(t)):null,r.a.createElement("h1",{className:"text-center pb-4 pt-3"},r.a.createElement("span",{className:"text-info"},r.a.createElement("i",{className:"fas fa-user-ninja"})," Login Now")),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"text",className:"form-control",name:"email",required:!0,value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,value:this.state.password,onChange:this.onChange})),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-block btn-info"})),r.a.createElement("div",{className:"mt-2"},r.a.createElement("span",null,"Don't have account?"," ",r.a.createElement(i.b,{to:"/register"}," Register now! ")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"#!",onClick:this.handleForgotPassword},"Forgot password...")))))))}}]),t}(n.Component),K=Object(m.c)(Object(p.firebaseConnect)(),Object(s.connect)(function(e,t){return{notify:e.notify,settings:e.settings}},{notifyUser:X}))(Y);var Q=function(){return r.a.createElement(s.Provider,{store:E},r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:F}),r.a.createElement(l.a,{exact:!0,path:"/job/:id",component:W}),r.a.createElement(l.a,{exact:!0,path:"/register",component:x(V)}),r.a.createElement(l.a,{exact:!0,path:"/login",component:x(K)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[223,1,2]]]);
//# sourceMappingURL=main.6e7ac26a.chunk.js.map