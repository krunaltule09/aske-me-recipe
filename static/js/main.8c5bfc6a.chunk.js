(this.webpackJsonpask_me_recipe=this.webpackJsonpask_me_recipe||[]).push([[0],{13:function(e,c,a){},15:function(e,c,a){},16:function(e,c,a){"use strict";a.r(c);var t=a(0),s=a(1),n=a.n(s),r=a(6),i=a.n(r),l=(a(13),a(5)),o=a.n(l),h=a(7),b=a(3),j=(a.p,a(15),a(2)),p=a.n(j);var u=function(e){var c=e.image,a=e.calories,s=e.label,n=e.ingredients,r=e.healthLabels;return Object(t.jsxs)("div",{className:p.a.recipe,children:[Object(t.jsx)("h1",{className:p.a.label,children:s}),Object(t.jsx)("img",{className:p.a.image,src:c,alt:"image"}),Object(t.jsx)("ul",{className:p.a.healthLabels,children:r.map((function(e){return Object(t.jsx)("li",{className:p.a.healthLabelsElements,children:e})}))}),Object(t.jsxs)("p",{className:p.a.calories,children:["calories: ",parseFloat(a).toFixed(4)]}),Object(t.jsx)("b",{children:"Ingredients"}),Object(t.jsx)("ol",{children:n.map((function(e){return Object(t.jsx)("li",{children:e.text})}))})]})};var m=function(){var e="9a5d600d",c="63766535b43746ac383a917426c634ae",a=Object(s.useState)(1),n=Object(b.a)(a,2),r=(n[0],n[1],Object(s.useState)([])),i=Object(b.a)(r,2),l=i[0],j=i[1],p=Object(s.useState)(""),m=Object(b.a)(p,2),d=m[0],O=m[1],x=Object(s.useState)("chicken"),f=Object(b.a)(x,2),_=f[0],g=f[1],v="https://api.edamam.com/search?q=".concat(_,"&app_id=").concat(e,"&app_key=").concat(c);Object(s.useEffect)((function(){N()}),[_]);var N=function(){var e=Object(h.a)(o.a.mark((function e(){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v);case 2:return c=e.sent,e.next=5,c.json();case 5:a=e.sent,console.log(a.hits),j(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){O(e.target.value)},L=function(a){a.preventDefault(),g(d),O(""),console.log("https://api.edamam.com/search?q=".concat(_,"&app_id=").concat(e,"&app_key=").concat(c))};return 0==l.length?Object(t.jsxs)("div",{className:"App",children:[Object(t.jsxs)("form",{onSubmit:L,className:"search-form",children:[Object(t.jsx)("input",{className:"search-bar",onChange:S,value:d}),Object(t.jsx)("button",{type:"submit",className:"search-button",children:"Search"})]}),Object(t.jsx)("h2",{children:"Sorry! No recipes found"})]}):Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("h1",{children:"Ask Me Recipes"}),Object(t.jsxs)("form",{onSubmit:L,className:"search-form",children:[Object(t.jsx)("input",{className:"search-bar",onChange:S,value:d}),Object(t.jsx)("button",{type:"submit",className:"search-button",children:"Search"})]}),Object(t.jsx)("div",{className:"recipes",children:l.map((function(e){return Object(t.jsx)(u,{calories:e.recipe.calories,image:e.recipe.image,label:e.recipe.label,ingredients:e.recipe.ingredients,healthLabels:e.recipe.healthLabels},e.recipe.url)}))})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(c){var a=c.getCLS,t=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;a(e),t(e),s(e),n(e),r(e)}))};i.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(m,{})}),document.getElementById("root")),d()},2:function(e,c,a){e.exports={recipe:"recipe_recipe__xPSVC",image:"recipe_image__34iij",calories:"recipe_calories__1InNR",label:"recipe_label__1jVVD",healthLabels:"recipe_healthLabels__18XMU",healthLabelsElements:"recipe_healthLabelsElements__2Ax4q"}}},[[16,1,2]]]);
//# sourceMappingURL=main.8c5bfc6a.chunk.js.map