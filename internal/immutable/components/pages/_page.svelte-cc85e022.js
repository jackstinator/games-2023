import{S as G,i as O,s as Q,e as z,b as F,A as J,I as R,h as f,k as b,q as V,a as q,J as K,l as x,m as g,r as B,c as C,K as L,n as s,D as h,u as M}from"../../chunks/index-d963d406.js";import{b as $}from"../../chunks/paths-846459bd.js";function N(i,a,r){const e=i.slice();return e[1]=a[r],e}function j(i){let a,r,e,t=i[1].metadata.title+"",n,l,_,p,v=i[1].metadata.description+"",w,y,u,E,c,m,k,P;return{c(){a=b("div"),r=b("a"),e=b("h5"),n=V(t),_=q(),p=b("p"),w=V(v),y=q(),u=b("a"),E=V(`View Page
            `),c=K("svg"),m=K("path"),P=q(),this.h()},l(d){a=x(d,"DIV",{class:!0});var o=g(a);r=x(o,"A",{href:!0});var D=g(r);e=x(D,"H5",{class:!0});var H=g(e);n=B(H,t),H.forEach(f),D.forEach(f),_=C(o),p=x(o,"P",{class:!0});var I=g(p);w=B(I,v),I.forEach(f),y=C(o),u=x(o,"A",{href:!0,class:!0});var A=g(u);E=B(A,`View Page
            `),c=L(A,"svg",{"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var S=g(c);m=L(S,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),g(m).forEach(f),S.forEach(f),A.forEach(f),P=C(o),o.forEach(f),this.h()},h(){s(e,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),s(r,"href",l=`${$}/${i[1].path}`),s(p,"class","mb-3 font-normal text-gray-700 dark:text-gray-400"),s(m,"fill-rule","evenodd"),s(m,"d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"),s(m,"clip-rule","evenodd"),s(c,"aria-hidden","true"),s(c,"class","ml-2 -mr-1 w-4 h-4"),s(c,"fill","currentColor"),s(c,"viewBox","0 0 20 20"),s(c,"xmlns","http://www.w3.org/2000/svg"),s(u,"href",k=`${$}/${i[1].path}`),s(u,"class","inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"),s(a,"class","m-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700")},m(d,o){F(d,a,o),h(a,r),h(r,e),h(e,n),h(a,_),h(a,p),h(p,w),h(a,y),h(a,u),h(u,E),h(u,c),h(c,m),h(a,P)},p(d,o){o&1&&t!==(t=d[1].metadata.title+"")&&M(n,t),o&1&&l!==(l=`${$}/${d[1].path}`)&&s(r,"href",l),o&1&&v!==(v=d[1].metadata.description+"")&&M(w,v),o&1&&k!==(k=`${$}/${d[1].path}`)&&s(u,"href",k)},d(d){d&&f(a)}}}function T(i){let a,r=i[0].games,e=[];for(let t=0;t<r.length;t+=1)e[t]=j(N(i,r,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();a=z()},l(t){for(let n=0;n<e.length;n+=1)e[n].l(t);a=z()},m(t,n){for(let l=0;l<e.length;l+=1)e[l].m(t,n);F(t,a,n)},p(t,[n]){if(n&1){r=t[0].games;let l;for(l=0;l<r.length;l+=1){const _=N(t,r,l);e[l]?e[l].p(_,n):(e[l]=j(_),e[l].c(),e[l].m(a.parentNode,a))}for(;l<e.length;l+=1)e[l].d(1);e.length=r.length}},i:J,o:J,d(t){R(e,t),t&&f(a)}}}function U(i,a,r){let{data:e}=a;return i.$$set=t=>{"data"in t&&r(0,e=t.data)},[e]}class Y extends G{constructor(a){super(),O(this,a,U,T,Q,{data:0})}}export{Y as default};