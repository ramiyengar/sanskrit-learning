(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{184:function(e,t,s){"use strict";var a=s(5),r=s(104)(6),i="findIndex",n=!0;i in[]&&Array(1)[i](function(){n=!1}),a(a.P+a.F*n,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(50)(i)},233:function(e,t,s){},286:function(e,t,s){"use strict";var a=s(233);s.n(a).a},346:function(e,t,s){"use strict";s.r(t);s(184),s(72);var a={data:function(){return{active:null,id:String(this.$route.params.id),exercise:"",index:"",prev_ex:"",next_ex:"",length:"",previous:"/",next:"/",chosen:null,success_alert:!1,fail_alert:!1,score:0,color:"red"}},layout:"lessons",mounted:function(){var e=this;this.exercise=this.$store.state.samasachakra_exercises.find(function(t){return String(t.id)===e.id})},created:function(){var e=this;this.index=this.$store.state.samasachakra_exercises.findIndex(function(t){return String(t.id)===e.id}),this.prev_ex=this.$store.state.samasachakra_exercises[this.index-1],this.next_ex=this.$store.state.samasachakra_exercises[this.index+1],this.length=this.$store.state.samasachakra_exercises.length,this.previous=this.index>1?"/samasachakra/exercises/"+this.prev_ex.id:"/samasachakra/exercises/1",this.next=this.index<this.length-1?"/samasachakra/exercises/"+this.next_ex.id:"/samasachakra/exercises/10"},methods:{nexttab:function(){var e=parseInt(this.active);this.active=e<this.exercise.types-1?e+1:0},check:function(e){var t=this.exercise.ans,s=new Audio("correct.wav"),a=new Audio("https://drive.google.com/file/d/1QZd7mSi6zc-_6fpe1uQgmz-VHX3w2HVK/view?usp=sharing");this.chosen===t?(s.play(),this.success_alert=!0,this.fail_alert=!1,this.score=1,this.color="green"):(a.play(),this.success_alert=!1,this.fail_alert=!0,this.score=0,this.color="red")}}},r=(s(286),s(4)),i=Object(r.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"mt-0 pt-0"},[s("v-layout",{staticClass:"neg_margin",attrs:{row:""}},[s("v-btn",{attrs:{ripple:{class:"error--text"},to:e.previous,color:"accent darken-2"}},[s("b",[e._v("Previous")])]),e._v(" "),s("v-spacer"),e._v(" "),s("v-btn",{attrs:{ripple:{class:"error--text"},to:e.next,color:"accent darken-2"}},[s("b",[e._v("Next")])])],1),e._v(" "),s("v-card",{staticClass:"mt-0 pt-0 bordered",attrs:{color:"accent lighten-4"}},[s("v-card-title",{attrs:{"primary-title":""}},[s("h3",{staticClass:"papyrus myheader"},[e._v(e._s(e.exercise.id)+". "),s("span",{staticClass:"devanagari"},[e._v(e._s(e.exercise.title))]),e._v(" "),s("br"),e._v(e._s(e.exercise.title_eng))]),e._v(" "),s("v-chip",{staticClass:"title devanagari",attrs:{color:e.color,"text-color":"white"}},[s("v-avatar",{staticClass:"green darken-4"},[e._v(e._s(e.score))]),e._v("\n        Score\n      ")],1)],1),e._v(" "),s("v-layout",{staticClass:"myheader3",attrs:{row:""}},[s("v-flex",[s("div",{staticClass:"devanagari px-1",domProps:{innerHTML:e._s(e.exercise.question)}})])],1),e._v(" "),s("v-layout",{staticClass:"myheader3",attrs:{row:""}},[s("v-flex",[s("v-radio-group",{staticClass:"font-weight-bold",attrs:{column:""},model:{value:e.chosen,callback:function(t){e.chosen=t},expression:"chosen"}},e._l(e.exercise.options,function(e,t){return s("v-radio",{key:t,attrs:{label:e,value:e,success:"true"}})}),1),e._v(" "),s("v-btn",{attrs:{ripple:{class:"error--text"},round:"",color:"error darken-2"},on:{click:function(t){e.check()}}},[s("b",[e._v("Submit")])]),e._v(" "),s("v-alert",{attrs:{dismissible:"",type:"success",transition:"scale-transition"},model:{value:e.success_alert,callback:function(t){e.success_alert=t},expression:"success_alert"}},[e._v("\n          Correct Answer!\n        ")]),e._v(" "),s("v-alert",{attrs:{dismissible:"",type:"error",transition:"scale-transition"},model:{value:e.fail_alert,callback:function(t){e.fail_alert=t},expression:"fail_alert"}},[e._v("\n          Wrong Answer. Please try again or go through the relevant chapters.\n        ")])],1)],1)],1)],1)},[],!1,null,"2f3166b4",null);i.options.__file="_id.vue";t.default=i.exports}}]);