import{_ as k,a as B,b as I,c as S,d as C,e as q,f as V,g as D,h as T,i as j,j as F,k as N,l as O,m as L,n as U,o as $,p as z,q as E,r as H,s as P,t as A,u as G,v as J,w as K,x as M,y as R,z as Q,A as W,B as X,C as Y,D as Z,E as ss,F as es,G as ts,H as _s,I as as,J as os,K as ns,L as is,M as ls,N as gs,O as cs}from"./truck-CUEaMSq9.js";import{u as f,o as rs,a as ds}from"./OrderFooter-DG3ar5j0.js";import{s as ps,h as e,_ as ms,r as h,a as r,c as d,d as l,b as s,F as us,y as vs,e as b,n as hs,w as p,m as bs,f as fs,t as _,p as ys,g as xs}from"./index-BjjV7tyl.js";const ws=ps("dressingStore",()=>{const a=e([{name:"참깨드레싱",image:"sauce1.png",weight:30,calories:42,carbs:1.5,protein:.6,fat:3.6,quantity:e(0),more:e(!1),category:"dressing"},{name:"오리엔탈드레싱",image:"sauce2.png",weight:30,calories:18,carbs:1.5,protein:.3,fat:.9,quantity:e(0),more:e(!1),category:"dressing"},{name:"발사믹드레싱",image:"sauce3.png",weight:30,calories:27,carbs:3,protein:.3,fat:1.2,quantity:e(0),more:e(!1),category:"dressing"},{name:"홀스래디쉬드레싱",image:"sauce4.png",weight:30,calories:24,carbs:2.5,protein:.3,fat:1.5,quantity:e(0),more:e(!1),category:"dressing"},{name:"치폴레드레싱",image:"sauce5.png",weight:30,calories:39,carbs:3.5,protein:.3,fat:3,quantity:e(0),more:e(!1),category:"dressing"},{name:"머스타드드레싱",image:"sauce6.png",weight:30,calories:33,carbs:4.5,protein:.3,fat:1.5,quantity:e(0),more:e(!1),category:"dressing"},{name:"어니언드레싱",image:"sauce7.png",weight:30,calories:36,carbs:4.2,protein:.3,fat:1.8,quantity:e(0),more:e(!1),category:"dressing"}]),n=f();return{ingredients:a,toggleIngredient:c=>{n.toggleIngredient(c)}}}),g=a=>(ys("data-v-559de6e9"),a=a(),xs(),a),ks={style:{padding:"56px 0 110px 0"}},Bs={style:{display:"grid","grid-template-columns":"repeat(auto-fill, minmax(160px, 1fr))",gap:"6px",width:"100%"}},Is=["onClick"],Ss={class:"text-center",style:{flex:"1 1 0"}},Cs={style:{display:"flex","justify-content":"flex-end"}},qs=g(()=>s("h5",null,"더보기",-1)),Vs=["src"],Ds={style:{"word-break":"keep-all"}},Ts={class:"modal"},js=["onClick"],Fs={style:{display:"flex",width:"100%"}},Ns={style:{flex:"1 1 0",display:"flex","justify-content":"center"}},Os=["src"],Ls={class:"dateTxt"},Us={style:{"word-break":"keep-all"}},$s={style:{display:"flex",gap:"6px",width:"100%"}},zs={class:"dateBox"},Es=g(()=>s("h5",{class:"dateBoxTitle"},"탄수화물",-1)),Hs={class:"date"},Ps={class:"dateBox"},As=g(()=>s("h5",{class:"dateBoxTitle"},"단백질",-1)),Gs={class:"date"},Js={class:"dateBox"},Ks=g(()=>s("h5",{class:"dateBoxTitle"},"지방",-1)),Ms={class:"date"},Rs={__name:"OrderDressing",setup(a){const n=ws(),m=f();e(!1),e(!1);const c=i=>m.selectedIngredients.some(v=>v.name===i.name),u=i=>new URL(Object.assign({"../assets/base.css":k,"../assets/box.png":B,"../assets/box02.png":I,"../assets/home.png":S,"../assets/logo.svg":C,"../assets/main.css":q,"../assets/menu1.png":V,"../assets/menu10.png":D,"../assets/menu11.png":T,"../assets/menu13.png":j,"../assets/menu14.png":F,"../assets/menu15.png":N,"../assets/menu16.png":O,"../assets/menu17.png":L,"../assets/menu18.png":U,"../assets/menu19.png":$,"../assets/menu2-1.png":z,"../assets/menu2.png":E,"../assets/menu20.png":H,"../assets/menu21.png":P,"../assets/menu22.png":A,"../assets/menu23.png":G,"../assets/menu24.png":J,"../assets/menu3.png":K,"../assets/menu4.png":M,"../assets/menu5.png":R,"../assets/menu6.png":Q,"../assets/menu7.png":W,"../assets/menu8.png":X,"../assets/menu9.png":Y,"../assets/mypage.png":Z,"../assets/person.png":ss,"../assets/salad.png":es,"../assets/saladbowl.png":ts,"../assets/sauce1.png":_s,"../assets/sauce2.png":as,"../assets/sauce3.png":os,"../assets/sauce4.png":ns,"../assets/sauce5.png":is,"../assets/sauce6.png":ls,"../assets/sauce7.png":gs,"../assets/truck.png":cs})[`../assets/${i}`],import.meta.url).href;return(i,v)=>{const y=h("v-icon"),x=h("v-bottom-sheet");return r(),d("div",ks,[l(rs),s("div",Bs,[(r(!0),d(us,null,vs(b(n).ingredients,(t,w)=>(r(),d("div",{key:w,class:hs(["menuBox",{active:c(t)}]),onClick:o=>b(n).toggleIngredient(t)},[l(x,{modelValue:t.more,"onUpdate:modelValue":o=>t.more=o},{activator:p(({props:o})=>[s("div",Ss,[s("div",Cs,[s("div",bs({ref_for:!0},o,{style:{display:"flex","margin-right":"-6px","align-items":"center"}}),[qs,l(y,{style:{color:"#999"}},{default:p(()=>[fs("mdi-chevron-right")]),_:1})],16)]),s("img",{src:u(t.image),alt:"menu",style:{width:"60px",height:"60px"}},null,8,Vs),s("h4",Ds,_(t.name),1),s("h5",null,_(t.calories)+"kcal",1)])]),default:p(()=>[s("div",Ts,[s("div",{class:"btn",onClick:o=>t.more=!t.more},[s("div",Fs,[s("div",Ns,[s("img",{src:u(t.image),alt:"menu",style:{width:"116px",height:"116px"}},null,8,Os)]),s("div",Ls,[s("h1",Us,_(t.name),1),s("h2",null,_(t.weight)+"g / "+_(t.calories)+"kcal",1)])]),s("div",$s,[s("div",zs,[Es,s("div",Hs,[s("h3",null,_(t.carbs)+"g",1)])]),s("div",Ps,[As,s("div",Gs,[s("h3",null,_(t.protein)+"g",1)])]),s("div",Js,[Ks,s("div",Ms,[s("h3",null,_(t.fat)+"g",1)])])])],8,js)])]),_:2},1032,["modelValue","onUpdate:modelValue"])],10,Is))),128))]),l(ds,{style:{position:"fixed",bottom:"0",left:"0"}})])}}},Ys=ms(Rs,[["__scopeId","data-v-559de6e9"]]);export{Ys as default};
