(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{181:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-meetup",function(){return n(685)}])},2281:function(e,t,n){"use strict";var r=n(5893),s=n(6099),i=n.n(s);t.Z=function(e){return(0,r.jsx)("div",{className:i().card,children:e.children})}},685:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),s=n(7294),i=n(2281),o=n(5074),c=n.n(o),d=function(e){let t=(0,s.useRef)(),n=(0,s.useRef)(),o=(0,s.useRef)(),d=(0,s.useRef)();return(0,r.jsx)(i.Z,{children:(0,r.jsxs)("form",{className:c().form,onSubmit:function(r){r.preventDefault();let s=t.current.value,i=n.current.value,c=o.current.value,u=d.current.value;e.onAddMeetup({title:s,image:i,address:c,description:u})},children:[(0,r.jsxs)("div",{className:c().control,children:[(0,r.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),(0,r.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),(0,r.jsxs)("div",{className:c().control,children:[(0,r.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),(0,r.jsx)("input",{type:"url",required:!0,id:"image",ref:n})]}),(0,r.jsxs)("div",{className:c().control,children:[(0,r.jsx)("label",{htmlFor:"address",children:"Address"}),(0,r.jsx)("input",{type:"text",required:!0,id:"address",ref:o})]}),(0,r.jsxs)("div",{className:c().control,children:[(0,r.jsx)("label",{htmlFor:"description",children:"Description"}),(0,r.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:d})]}),(0,r.jsx)("div",{className:c().actions,children:(0,r.jsx)("button",{children:"Add Meetup"})})]})})},u=n(1163),l=n(9008),a=n.n(l);let p=()=>{let e=(0,u.useRouter)(),t=async t=>{let n=await fetch("/api/new-meetup",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),r=await n.json();console.log(r),e.replace("/")};return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Add a New Meetups"}),(0,r.jsx)("meta",{name:"description",content:"Add your own meetups and create mazing networking opportunities."})]}),(0,r.jsx)(d,{onAddMeetup:t})]})};var f=p},5074:function(e){e.exports={form:"NewMeetupForm_form__dA95d",control:"NewMeetupForm_control__jRNhP",actions:"NewMeetupForm_actions__2fkck"}},6099:function(e){e.exports={card:"Card_card__73YTa"}},9008:function(e,t,n){e.exports=n(3121)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=181)}),_N_E=e.O()}]);