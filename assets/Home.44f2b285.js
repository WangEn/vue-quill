import{d as e,p as a,q as t,c as s,u as l,o,a as n,b as r,x as c,t as i,_ as u,y as d,z as v,A as f,F as m,r as p,g as h,B as k}from"./app.8b868e23.js";const x=d("data-v-024e1674");v("data-v-024e1674");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},b={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const d=a(),v=t(),f=s((()=>v.value.heroImage||m.value||h.value||_.value)),m=s((()=>null!==v.value.heroText)),p=s((()=>v.value.heroText||d.value.title)),h=s((()=>null!==v.value.tagline)),k=s((()=>v.value.tagline||d.value.description)),_=s((()=>v.value.actionLink&&v.value.actionText)),I=s((()=>v.value.altActionLink&&v.value.altActionText));return x(((e,a)=>l(f)?(o(),n("header",y,[e.$frontmatter.heroImage?(o(),n("figure",g,[r("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):c("",!0),l(m)?(o(),n("h1",b,i(l(p)),1)):c("",!0),l(h)?(o(),n("p",$,i(l(k)),1)):c("",!0),l(_)?(o(),n(u,{key:3,item:{link:l(v).actionLink,text:l(v).actionText},class:"action"},null,8,["item"])):c("",!0),l(I)?(o(),n(u,{key:4,item:{link:l(v).altActionLink,text:l(v).altActionText},class:"action alt"},null,8,["item"])):c("",!0)])):c("",!0)))}});_.__scopeId="data-v-024e1674";const I=d("data-v-e5f225ce");v("data-v-e5f225ce");const A={key:0,class:"home-features"},T={class:"wrapper"},L={class:"container"},w={class:"features"},B={key:0,class:"title"},j={key:1,class:"details"};f();var q=e({expose:[],setup(e){const a=t(),u=s((()=>a.value.features&&a.value.features.length>0)),d=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(u)?(o(),n("div",A,[r("div",T,[r("div",L,[r("div",w,[(o(!0),n(m,null,p(l(d),((e,a)=>(o(),n("section",{key:a,class:"feature"},[e.title?(o(),n("h2",B,i(e.title),1)):c("",!0),e.details?(o(),n("p",j,i(e.details),1)):c("",!0)])))),128))])])])])):c("",!0)))}});q.__scopeId="data-v-e5f225ce";const z={},C=d("data-v-df8b2502");v("data-v-df8b2502");const F={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=C(((e,a)=>e.$frontmatter.footer?(o(),n("footer",F,[r("div",D,[r("p",E,i(e.$frontmatter.footer),1)])])):c("",!0)));z.render=G,z.__scopeId="data-v-df8b2502";const H=d("data-v-6e1bdf43");v("data-v-6e1bdf43");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=h("Content");return o(),n("main",J,[r(_),k(e.$slots,"hero"),r(q),r("div",K,[r(t)]),k(e.$slots,"features"),r(z),k(e.$slots,"footer")])}))});M.__scopeId="data-v-6e1bdf43";export default M;