(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1176:function(t,n,e){"use strict";e.r(n);var o={asyncData:function(t){var n=t.query._storyblok||t.isDev?"draft":"published",e=t.params.slug||t.route.fullPath;return t.app.$storyapi.get("cdn/stories/".concat(e),{version:n}).then((function(t){return t.data})).catch((function(n){t.error({statusCode:n.response.status,message:n.response.data})}))},data:function(){return{story:{content:{}}}},computed:{blok:function(){return this.$blok(this.story.content)}},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"===n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):window.location.reload()}))}},r=e(0),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("Blok",{directives:[{name:"editable",rawName:"v-editable",value:t.blok.$editable,expression:"blok.$editable"}],attrs:{body:t.blok}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Blok:e(195).default})}}]);