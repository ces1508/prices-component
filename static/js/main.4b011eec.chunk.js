(this.webpackJsonppricing=this.webpackJsonppricing||[]).push([[0],[,,function(e,a,t){},,,function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),l=(t(2),t(4)),o=(t(10),function(e){var a=e.children;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},"our pricing"),a)}),i=(t(11),function(e){var a=e.handleChange,t=Object(n.useRef)(null);return r.a.createElement("div",{className:"switch__wrapper"},r.a.createElement("p",{className:"switch__option"},"annually"),r.a.createElement("input",{onChange:function(){a(t.current.checked)},type:"checkbox",id:"switch",className:"switch__checkbox",ref:t}),r.a.createElement("label",{htmlFor:"switch",className:"switch"}),r.a.createElement("p",{className:"switch__option"},"monthly"))}),u=function(e){var a=e.feature,t=e.isSuggested;return r.a.createElement("p",{className:"planCard__feature ".concat(t?"planCard__feature--suggested":"")},a)},m=function(e){var a=e.text,t=e.isSuggested;return r.a.createElement("button",{className:"planCard__button ".concat(t?"planCard__button--suggested":"")},a)},d=(t(12),function(e){var a=e.name,t=e.monthlyPrice,n=e.anuallyPrice,c=e.cardType,s=e.type,l=e.features;return r.a.createElement("div",{className:"planCard ".concat("suggested"===c?"planCard--suggested":"")},r.a.createElement("p",{className:"planCard__name"},a),r.a.createElement("p",{className:"planCard__price"},"monthly"===s?t:n),r.a.createElement("div",{className:"planCard__feature-wrapper"},l.map((function(e,a){return r.a.createElement(u,{key:a,feature:e,isSuggested:"suggested"===c})}))),r.a.createElement(m,{text:"learn more",isSuggested:"suggested"===c}))});d.defaultProps={cardType:"normal",type:"monthly",features:[]};var p=d,g={plans:[{id:"basic",name:"basic",anuallyPrice:"199.99",monthlyPrice:"19.99",features:["500 GB storage","2 user allowed","send up to 3 GB"]},{id:"professional",name:"professional",anuallyPrice:"249.99",monthlyPrice:"24.99",features:["1 TB storage","5 user allowed","send up to 10 GB"],isSuggested:!0},{id:"master",name:"master",monthlyPrice:"39.99",anuallyPrice:"399.99",features:["2 TB storage","10 user allowed","send up to 20 GB"]}]};t(13);var h=function(){var e=Object(n.useState)("anually"),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(o,null,r.a.createElement(i,{handleChange:function(e){if(e)return c("monthly");c("anually")}})),r.a.createElement("section",{className:"plans-wrapper"},g.plans.map((function(e){return r.a.createElement(p,Object.assign({type:t,key:e.id},e,{cardType:e.isSuggested?"suggested":"normal"}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4b011eec.chunk.js.map