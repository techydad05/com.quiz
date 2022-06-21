import{S as te,i as se,s as le,e as k,k as M,t as I,N as ge,c as E,d as h,m as L,a as C,h as A,b,f as Y,I as a,g as H,O as be,P as Z,j as Q,H as ke,E as ee,G as ue,v as Ee,q as R,w as pe,x as me,y as de,o as K,B as he,n as ye,p as _e,Q as ve,R as X,T as we}from"../../chunks/index-bf4467d3.js";import{d as xe}from"../../chunks/transform-cd6bc136.js";import{b as Ce}from"../../chunks/paths-396f020f.js";class Se extends Map{constructor(e,l=Pe){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:l}}),e!=null)for(const[t,f]of e)this.set(t,f)}get(e){return super.get(re(this,e))}has(e){return super.has(re(this,e))}set(e,l){return super.set(Te(this,e),l)}delete(e){return super.delete(ze(this,e))}}function re({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):l}function Te({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):(s.set(t,l),l)}function ze({_intern:s,_key:e},l){const t=e(l);return s.has(t)&&(l=s.get(t),s.delete(t)),l}function Pe(s){return s!==null&&typeof s=="object"?s.valueOf():s}function De(s){return s}function Me(s,...e){return Ie(s,Array.from,De,e)}function Ie(s,e,l,t){return function f(c,g){if(g>=t.length)return l(c);const y=new Se,_=t[g++];let n=-1;for(const m of c){const o=_(m,++n,c),r=y.get(o);r?r.push(m):y.set(o,[m])}for(const[m,o]of y)y.set(m,f(o,g));return e(y)}(s,0)}const Le=async s=>{if("clipboard"in navigator)await navigator.clipboard.writeText(s);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=s,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Ae=(s,e)=>{async function l(){if(e)try{await Le(e),s.dispatchEvent(new CustomEvent("svelte-copy",{detail:e}))}catch(t){s.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:t}))}}return s.addEventListener("click",l,!0),{update:t=>e=t,destroy:()=>s.removeEventListener("click",l,!0)}};function je(s){let e,l,t,f,c,g,y,_,n,m,o,r,p,S,T,q,P,j,U,z,B,D,N,J;return{c(){e=k("link"),l=M(),t=k("div"),f=k("h3"),c=I(s[0]),g=M(),y=k("p"),_=I(s[1]),n=M(),m=k("details"),o=k("summary"),r=I("CSS Snippet"),p=M(),S=k("code"),T=I(s[2]),q=M(),P=k("p"),j=k("button"),U=I("Copy CSS to Clipboard"),B=k("span"),D=I(s[3]),this.h()},l(x){const w=ge('[data-svelte="svelte-1uevrx3"]',document.head);e=E(w,"LINK",{rel:!0,href:!0}),w.forEach(h),l=L(x),t=E(x,"DIV",{style:!0,class:!0});var u=C(t);f=E(u,"H3",{class:!0});var W=C(f);c=A(W,s[0]),W.forEach(h),g=L(u),y=E(u,"P",{});var i=C(y);_=A(i,s[1]),i.forEach(h),n=L(u),m=E(u,"DETAILS",{class:!0});var d=C(m);o=E(d,"SUMMARY",{class:!0});var v=C(o);r=A(v,"CSS Snippet"),v.forEach(h),p=L(d),S=E(d,"CODE",{class:!0});var O=C(S);T=A(O,s[2]),O.forEach(h),d.forEach(h),q=L(u),P=E(u,"P",{});var V=C(P);j=E(V,"BUTTON",{class:!0});var F=C(j);U=A(F,"Copy CSS to Clipboard"),F.forEach(h),B=E(V,"SPAN",{class:!0});var G=C(B);D=A(G,s[3]),G.forEach(h),V.forEach(h),u.forEach(h),this.h()},h(){b(e,"rel","external stylesheet"),b(e,"href",s[5]),b(f,"class","svelte-19ry7n"),Y(y,"font-size",s[4],!1),b(o,"class","svelte-19ry7n"),b(S,"class","svelte-19ry7n"),b(m,"class","svelte-19ry7n"),b(j,"class","svelte-19ry7n"),b(B,"class","svelte-19ry7n"),Y(t,"font-family","'"+s[0]+"'"),b(t,"class","svelte-19ry7n")},m(x,w){a(document.head,e),H(x,l,w),H(x,t,w),a(t,f),a(f,c),a(t,g),a(t,y),a(y,_),a(t,n),a(t,m),a(m,o),a(o,r),a(m,p),a(m,S),a(S,T),a(t,q),a(t,P),a(P,j),a(j,U),a(P,B),a(B,D),N||(J=[be(z=Ae.call(null,j,s[2])),Z(j,"svelte-copy",s[6])],N=!0)},p(x,[w]){w&1&&Q(c,x[0]),w&2&&Q(_,x[1]),w&16&&Y(y,"font-size",x[4],!1),w&4&&Q(T,x[2]),z&&ke(z.update)&&w&4&&z.update.call(null,x[2]),w&8&&Q(D,x[3]),w&1&&Y(t,"font-family","'"+x[0]+"'")},i:ee,o:ee,d(x){h(e),x&&h(l),x&&h(t),N=!1,ue(J)}}}function Be(s,e,l){let t,{id:f=""}=e,{family:c=""}=e,{size:g=16}=e,{text:y}=e,_="",n="";const m=`${Ce}/assets/demo/fonts/${f}.css`,o=()=>{l(3,n="Copied!"),setTimeout(()=>{l(3,n="")},1e3)};return Ee(async()=>{const r=await fetch(m);l(2,_=await r.text())}),s.$$set=r=>{"id"in r&&l(7,f=r.id),"family"in r&&l(0,c=r.family),"size"in r&&l(8,g=r.size),"text"in r&&l(1,y=r.text)},s.$$.update=()=>{s.$$.dirty&256&&l(4,t=`${g}px`)},[c,y,_,n,t,m,o,f,g]}class Fe extends te{constructor(e){super(),se(this,e,Be,je,le,{id:7,family:0,size:8,text:1})}}var Ne=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ae(s,e,l){const t=s.slice();return t[5]=e[l][0],t[6]=e[l][1],t}function ie(s,e,l){const t=s.slice();return t[9]=e[l].family,t[10]=e[l].id,t}function fe(s){let e,l;return e=new Fe({props:{id:s[10],family:s[9],size:s[0],text:s[1]}}),{c(){pe(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,f){de(e,t,f),l=!0},p(t,f){const c={};f&1&&(c.size=t[0]),f&2&&(c.text=t[1]),e.$set(c)},i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}function ce(s){let e,l=s[5]+"",t,f,c,g,y,_=s[6],n=[];for(let o=0;o<_.length;o+=1)n[o]=fe(ie(s,_,o));const m=o=>K(n[o],1,1,()=>{n[o]=null});return{c(){e=k("h2"),t=I(l),f=M(),c=k("section");for(let o=0;o<n.length;o+=1)n[o].c();g=M(),this.h()},l(o){e=E(o,"H2",{});var r=C(e);t=A(r,l),r.forEach(h),f=L(o),c=E(o,"SECTION",{class:!0});var p=C(c);for(let S=0;S<n.length;S+=1)n[S].l(p);g=L(p),p.forEach(h),this.h()},h(){b(c,"class","svelte-4m0s58")},m(o,r){H(o,e,r),a(e,t),H(o,f,r),H(o,c,r);for(let p=0;p<n.length;p+=1)n[p].m(c,null);a(c,g),y=!0},p(o,r){if(r&7){_=o[6];let p;for(p=0;p<_.length;p+=1){const S=ie(o,_,p);n[p]?(n[p].p(S,r),R(n[p],1)):(n[p]=fe(S),n[p].c(),R(n[p],1),n[p].m(c,g))}for(ye(),p=_.length;p<n.length;p+=1)m(p);_e()}},i(o){if(!y){for(let r=0;r<_.length;r+=1)R(n[r]);y=!0}},o(o){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)K(n[r]);y=!1},d(o){o&&h(e),o&&h(f),o&&h(c),ve(n,o)}}}function Oe(s){let e,l,t,f,c,g,y,_,n,m,o,r,p,S,T,q,P,j,U,z,B,D,N,J,x,w=s[2],u=[];for(let i=0;i<w.length;i+=1)u[i]=ce(ae(s,w,i));const W=i=>K(u[i],1,1,()=>{u[i]=null});return{c(){e=k("div"),l=k("h1"),t=I("Hosted Fonts on The Pudding"),f=M(),c=k("p"),g=k("em"),y=I("Do not use fonts hosted by The Pudding without written permission."),_=M(),n=k("form"),m=k("label"),o=I("font-size: "),r=I(s[0]),p=I("px"),S=M(),T=k("input"),q=M(),P=k("label"),j=I("text sample"),U=M(),z=k("input"),B=M(),D=k("article");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=E(i,"DIV",{id:!0,class:!0});var d=C(e);l=E(d,"H1",{});var v=C(l);t=A(v,"Hosted Fonts on The Pudding"),v.forEach(h),f=L(d),c=E(d,"P",{});var O=C(c);g=E(O,"EM",{});var V=C(g);y=A(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(h),O.forEach(h),_=L(d),n=E(d,"FORM",{});var F=C(n);m=E(F,"LABEL",{for:!0,class:!0});var G=C(m);o=A(G,"font-size: "),r=A(G,s[0]),p=A(G,"px"),G.forEach(h),S=L(F),T=E(F,"INPUT",{id:!0,type:!0,min:!0,max:!0}),q=L(F),P=E(F,"LABEL",{for:!0,class:!0});var ne=C(P);j=A(ne,"text sample"),ne.forEach(h),U=L(F),z=E(F,"INPUT",{id:!0,type:!0,maxlength:!0}),F.forEach(h),d.forEach(h),B=L(i),D=E(i,"ARTICLE",{class:!0});var oe=C(D);for(let $=0;$<u.length;$+=1)u[$].l(oe);oe.forEach(h),this.h()},h(){b(m,"for","size"),b(m,"class","svelte-4m0s58"),b(T,"id","size"),b(T,"type","range"),b(T,"min","12"),b(T,"max","48"),b(P,"for","text"),b(P,"class","svelte-4m0s58"),b(z,"id","text"),b(z,"type","text"),b(z,"maxlength","100"),b(e,"id","info"),b(e,"class","svelte-4m0s58"),b(D,"class","svelte-4m0s58")},m(i,d){H(i,e,d),a(e,l),a(l,t),a(e,f),a(e,c),a(c,g),a(g,y),a(e,_),a(e,n),a(n,m),a(m,o),a(m,r),a(m,p),a(n,S),a(n,T),X(T,s[0]),a(n,q),a(n,P),a(P,j),a(n,U),a(n,z),X(z,s[1]),H(i,B,d),H(i,D,d);for(let v=0;v<u.length;v+=1)u[v].m(D,null);N=!0,J||(x=[Z(T,"change",s[3]),Z(T,"input",s[3]),Z(z,"input",s[4])],J=!0)},p(i,[d]){if((!N||d&1)&&Q(r,i[0]),d&1&&X(T,i[0]),d&2&&z.value!==i[1]&&X(z,i[1]),d&7){w=i[2];let v;for(v=0;v<w.length;v+=1){const O=ae(i,w,v);u[v]?(u[v].p(O,d),R(u[v],1)):(u[v]=ce(O),u[v].c(),R(u[v],1),u[v].m(D,null))}for(ye(),v=w.length;v<u.length;v+=1)W(v);_e()}},i(i){if(!N){for(let d=0;d<w.length;d+=1)R(u[d]);N=!0}},o(i){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)K(u[d]);N=!1},d(i){i&&h(e),i&&h(B),i&&h(D),ve(u,i),J=!1,ue(x)}}}function He(s,e,l){let t=18,f="The quick brown fox jumps over the lazy dog.";const c=Me(Ne,_=>_.type);c.sort((_,n)=>xe(_[1].length,n[1].length));function g(){t=we(this.value),l(0,t)}function y(){f=this.value,l(1,f)}return[t,f,c,g,y]}class Re extends te{constructor(e){super(),se(this,e,He,Oe,le,{})}}function qe(s){let e,l;return e=new Re({}),{c(){pe(e.$$.fragment)},l(t){me(e.$$.fragment,t)},m(t,f){de(e,t,f),l=!0},p:ee,i(t){l||(R(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){he(e,t)}}}class Ve extends te{constructor(e){super(),se(this,e,null,qe,le,{})}}export{Ve as default};
