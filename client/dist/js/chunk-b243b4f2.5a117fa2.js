(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b243b4f2"],{b0c0:function(e,t,a){var n=a("83ab"),s=a("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,u="name";!n||u in r||s(r,u,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})},ca72:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-wrap"},[a("h2",[e._v("Signup Page")]),a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"Your email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"Password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{placeholder:"Confirm password",type:"password"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),e._m(0)])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{attrs:{type:"submit"}},[e._v("Register")])])}],r=(a("b0c0"),{data:function(){return{name:"",email:"",password:"",password2:""}},methods:{signup:function(){var e=this,t={name:this.name,email:this.email,password:this.password};this.$store.dispatch("signup",t).then((function(){return e.$router.push("/login")}))}}}),o=r,i=a("2877"),u=Object(i["a"])(o,n,s,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-b243b4f2.5a117fa2.js.map