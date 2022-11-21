"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{5906:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(7689),o=e(7468),i=e(2079),a=e(184);function c(n){var t=n.trending,e=(0,r.TH)(),c=t.map((function(n){var r=n.id,c=n.title,u=n.backdrop_path;return(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)(o.kv,{children:(0,a.jsxs)(o.up,{to:"/movies/".concat(r),state:{from:e},children:[(0,a.jsx)(o.SR,{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):i,alt:c}),(0,a.jsx)(o.MW,{children:c})]})},r)})}));return(0,a.jsx)(o.ws,{children:c})}},7468:function(n,t,e){e.d(t,{MW:function(){return g},SR:function(){return h},kv:function(){return f},up:function(){return b},wo:function(){return m},ws:function(){return x}});var r,o,i,a,c,u,p,d=e(168),s=e(6444),l=e(6731),x=(s.ZP.div(r||(r=(0,d.Z)(["\n\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-gap: 16px;\n"]))),s.ZP.ul(o||(o=(0,d.Z)(["\n\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\ngrid-gap: 16px;\npadding: 0 50px 0 50px;\nlist-style: none;\n\n"])))),f=s.ZP.li(i||(i=(0,d.Z)(["\nborder: 2px solid red;\nborder-radius: 8px;\n  box-shadow: 0px 4px 3px 0px rgba(246, 0, 0, 0.2),\n    4px 4px 4px 0px rgba(246, 247, 245, 0.14), 0px 2px 1px -1px rgba(246, 247, 245, 0.12);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover {\n      transform: scale(1.03);\n      }\n"]))),h=s.ZP.img(a||(a=(0,d.Z)(["\ndisplay: block;\npadding: 1px;\nwidth: 100%;\n  height: 360px;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 8px;\n\n"]))),g=s.ZP.p(c||(c=(0,d.Z)(["\n\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  color: white;\n  padding: 0 15px\n"]))),m=s.ZP.h1(u||(u=(0,d.Z)(["\ncolor: white;\npadding: 10px 5px 10px 50px\n"]))),b=(0,s.ZP)(l.OL)(p||(p=(0,d.Z)(["\ntext-decoration: none;\n  color: black;\n\n  :active {\n    color: blue;\n  }\n"])))},5258:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,o,i,a=e(885),c=e(6731),u=e(2791),p=e(8830),d=e(4221),s=e(5906),l=e(7692),x=e(168),f=e(6444),h=f.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: transperent;\n  margin: 15px 0 12px 50px;\n  border: 2px solid red;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),g=f.ZP.button(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 2px solid red;\n  margin: 3px;\n  border-radius: 5px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),m=f.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 24px;\n  border: solid 2px;\n  border-radius: 4px;\n  outline: none;\n  margin: 5px 5px;\n  padding: 4px 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 24px;\n  }\n"]))),b=e(184);function v(n){var t=n.onSubmit,e=(0,u.useState)(""),r=(0,a.Z)(e,2),o=r[0],i=r[1];return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(h,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(t(o),i("")):d.fn.info("Print something")},children:[(0,b.jsx)(g,{type:"submit",children:(0,b.jsx)(l.Goc,{style:{width:36,height:36}})}),(0,b.jsx)(m,{value:o,onChange:function(n){i(n.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})]})})}function Z(){var n,t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],o=e[1],i=(0,c.lr)(),l=(0,a.Z)(i,2),x=l[0],f=l[1],h=null!==(n=x.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){""!==h&&(0,p.UN)(h).then((function(n){var t=n.data;0===t.results.length&&(d.fn.info('There are no movies on your request "'.concat(h,'".Please try again.')),o([])),o(t.results)})).catch((function(n){return d.fn.warning("Sorry, something went wrong.... Please try again.")}))}),[h]);return(0,b.jsxs)("main",{children:[(0,b.jsx)(v,{onSubmit:function(n){f("query=".concat(n))}}),(0,b.jsx)(s.Z,{trending:r})]})}},8830:function(n,t,e){e.d(t,{Hg:function(){return a},IQ:function(){return p},Jh:function(){return d},Pg:function(){return c},UN:function(){return u}});var r=e(1044),o="?api_key=6295881d104dda08db4ad0327ab9a326",i="https://api.themoviedb.org/3/",a=function(){return r.ZP.get("".concat(i,"trending/movie/day").concat(o))},c=function(n){return r.ZP.get("".concat(i,"movie/").concat(n).concat(o))},u=function(n){return r.ZP.get("".concat(i,"search/movie").concat(o,"&query=").concat(n))},p=function(n){return r.ZP.get("".concat(i,"movie/").concat(n,"/credits").concat(o))},d=function(n){return r.ZP.get("".concat(i,"movie/").concat(n,"/reviews").concat(o))}},2079:function(n,t,e){n.exports=e.p+"static/media/noImag.72693ce09abdb3773606.png"}}]);
//# sourceMappingURL=258.afb53e6f.chunk.js.map