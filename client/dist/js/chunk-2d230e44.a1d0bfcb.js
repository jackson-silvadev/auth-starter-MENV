(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e44"],{ede4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-wrap"},[a("h2",[e._v("Login Page")]),a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Your email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{attrs:{type:"submit"}},[e._v("Login")])])}],s={data:function(){return{email:"",password:""}},methods:{login:function(){var e=this,t=this.email,a=this.password;this.$store.dispatch("user/login",{email:t,password:a}).then((function(){return e.$router.push("/")})).catch((function(e){return console.log(e)}))}}},r=s,i=a("2877"),l=Object(i["a"])(r,n,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d230e44.a1d0bfcb.js.map