(globalThis["webpackChunklistly"]=globalThis["webpackChunklistly"]||[]).push([[937],{4937:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>D});l(239),l(7225),l(8743),l(2858),l(2071),l(5520),l(2775),l(6203);var t=l(1758),o=l(9104),s=l(8790),d=l(8734),c=l(8783),u=l.n(c);const n=e=>((0,t.Qi)("data-v-6a828a2a"),e=e(),(0,t.jt)(),e),i={class:"todo-app"},r={class:"input-section"},k={class:"tasks"},p={class:"task-category"},v=n((()=>(0,t.Lk)("img",{class:"item-section-checkbox__img",src:u(),alt:"checkbox"},null,-1))),m=n((()=>(0,t.Lk)("span",null,"Today Tasks",-1))),g={class:"task"},A={class:"category-title"},_=n((()=>(0,t.Lk)("div",{class:"category-color-bar"},null,-1))),b={class:"task"},h={__name:"ToDos",setup(e){const a=(0,d.KR)(""),l=(0,d.KR)(""),c=(0,d.KR)(""),u=(0,d.KR)({today:!0}),n=(0,d.KR)(JSON.parse(localStorage.getItem("tasks")||"[]")),h=(new Date).toISOString().split("T")[0],f=new Date;f.setDate(f.getDate()+1);const F=f.toISOString().split("T")[0],y=(0,t.EW)((()=>n.value.filter((e=>e.date===h)).sort(((e,a)=>new Date(e.date)-new Date(a.date))))),V=(0,t.EW)((()=>{const e=[],a=[...new Set(n.value.map((e=>e.date)))].filter((e=>e!==h&&e!==F));return n.value.some((e=>e.date===F))&&e.push({date:F,tasks:n.value.filter((e=>e.date===F)).sort(((e,a)=>new Date(e.date)-new Date(a.date)))}),a.forEach((a=>{e.push({date:a,tasks:n.value.filter((e=>e.date===a)).sort(((e,a)=>new Date(e.date)-new Date(a.date)))}),u.value[a]||(u.value[a]=!1)})),e})),w=()=>{a.value&&c.value&&l.value&&(n.value.push({id:Date.now(),name:a.value,description:l.value,color:I(),date:c.value,completed:!1}),a.value="",l.value="",c.value="",n.value.sort(((e,a)=>new Date(e.date)-new Date(a.date))),localStorage.setItem("tasks",JSON.stringify(n.value)))},I=()=>{const e="0123456789ABCDEF";let a="#";for(let l=0;l<6;l++)a+=e[Math.floor(16*Math.random())];return a},C=e=>{u.value[e]=!u.value[e]},L=e=>{const[a,l,t]=e.split("-");return`${t.padStart(2,"0")}/${l.padStart(2,"0")}`},q=e=>{localStorage.setItem("tasks",JSON.stringify(n.value))},S=(0,d.KR)(null);return(0,t.sV)((()=>{S.value.focus()})),(e,n)=>{const h=(0,t.g2)("q-input"),f=(0,t.g2)("q-item-section"),I=(0,t.g2)("q-item"),E=(0,t.g2)("q-chip"),U=(0,t.g2)("q-toggle"),D=(0,t.g2)("q-list"),K=(0,t.g2)("q-btn"),Q=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(Q,{class:"q-pa-md"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",i,[(0,t.Lk)("div",r,[(0,t.bF)(h,{class:"task-name__input text-blue",modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),onKeyup:(0,o.jR)(w,["enter"]),placeholder:"New Task",ref_key:"taskInput",ref:S,autogrow:""},null,8,["modelValue"]),(0,t.bF)(h,{class:"task-description__input",modelValue:l.value,"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),onKeyup:(0,o.jR)(w,["enter"]),placeholder:"Task Description",autogrow:""},null,8,["modelValue"]),(0,t.bF)(h,{modelValue:c.value,"onUpdate:modelValue":n[2]||(n[2]=e=>c.value=e),type:"date",onKeyup:(0,o.jR)(w,["native","enter"]),placeholder:"Date",class:"task-date__input"},null,8,["modelValue"])]),(0,t.Lk)("div",k,[(0,t.Lk)("div",p,[(0,t.bF)(I,null,{default:(0,t.k6)((()=>[(0,t.bF)(f,{class:"item-section__container"},{default:(0,t.k6)((()=>[v,m])),_:1})])),_:1}),(0,t.bF)(D,null,{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(y.value,(e=>((0,t.uX)(),(0,t.Wv)(I,{key:e.id,class:"task-item"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",{class:"task-color-bar",style:(0,s.Tr)({backgroundColor:e.color})},null,4),(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",g,[(0,t.bF)(E,{class:(0,s.C4)(["q-chip__header",{"completed-task":e.completed}]),row:"","q-chip--colored":"","q-chip--outline":""},{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(e.name),1)])),_:2},1032,["class"]),(0,t.Lk)("div",{class:(0,s.C4)(["q-chip__content",{"completed-task":e.completed}])},(0,s.v_)(e.description),3)])])),_:2},1024),(0,t.bF)(f,{side:""},{default:(0,t.k6)((()=>[(0,t.bF)(U,{"checked-icon":"check",color:"green","unchecked-icon":"clear",modelValue:e.completed,"onUpdate:modelValue":[a=>e.completed=a,a=>q(e)]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})]),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(V.value,(e=>((0,t.uX)(),(0,t.CE)("div",{class:"task-category",key:e.date},[(0,t.bF)(I,null,{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",A,[_,(0,t.Lk)("span",null,(0,s.v_)(e.date===(0,d.R1)(F)?"Tomorrow Tasks":L(e.date)+" Tasks"),1)])])),_:2},1024),(0,t.bF)(f,{side:""},{default:(0,t.k6)((()=>[(0,t.bF)(K,{dense:"",flat:"",icon:"keyboard_arrow_down",onClick:a=>C(e.date)},null,8,["onClick"])])),_:2},1024)])),_:2},1024),u.value[e.date]?((0,t.uX)(),(0,t.Wv)(D,{key:0,class:"task-list"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.tasks,(e=>((0,t.uX)(),(0,t.Wv)(I,{key:e.id,class:"task-item"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",{class:"task-color-bar",style:(0,s.Tr)({backgroundColor:e.color})},null,4),(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",b,[(0,t.bF)(E,{class:(0,s.C4)(["q-chip__header",{"completed-task":e.completed}]),row:"","q-chip--colored":"","q-chip--outline":""},{default:(0,t.k6)((()=>[(0,t.eW)((0,s.v_)(e.name),1)])),_:2},1032,["class"]),(0,t.Lk)("div",{class:(0,s.C4)(["q-chip__content",{"completed-task":e.completed}])},(0,s.v_)(e.description),3)])])),_:2},1024),(0,t.bF)(f,{side:""},{default:(0,t.k6)((()=>[(0,t.bF)(U,{"checked-icon":"check",color:"green","unchecked-icon":"clear",modelValue:e.completed,"onUpdate:modelValue":[a=>e.completed=a,a=>q(e)]},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)):(0,t.Q3)("",!0)])))),128))])])])),_:1})}}};var f=l(2807),F=l(7716),y=l(6183),V=l(124),w=l(5173),I=l(3999),C=l(6760),L=l(6908),q=l(1693),S=l(8582),E=l.n(S);const U=(0,f.A)(h,[["__scopeId","data-v-6a828a2a"]]),D=U;E()(h,"components",{QPage:F.A,QInput:y.A,QItem:V.A,QItemSection:w.A,QList:I.A,QChip:C.A,QToggle:L.A,QBtn:q.A})},8783:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgBtZXtbYMwEIbPTvnBlxQ2YAQ6QcMEbSZIOkFXaCdoM0HpBO0GYQRGYIMixMcPEPQ9BFUUKcgk8ErGxjKPz3eHT9CJsizbo9uheWhrUleCFq1Wq0DX9a9hUvCjbdt1nuffGG7odoVVVW0dx0kkvxVF8T4TmLXRNI0NJdG74pNmFrzhSyHEIy0gKeULW/5L04KnqpjhLS0kSbcpoiXgiNWrZVn33M8KZ6Bpmm/9q3cNPO6tSi6B0zQNkHJPk+FIpY8e4g8bnIOxZkcjupgtAMX42MddEWONh/GDYRgHVfAo/HyDYU4VzBoNKPzpNk1zLMvSnQrujFP5ifgE2IiHLk3QncoiPgFdIXZLTMso4VsxogUEbigRsAMtILjypytzCOqR5qtEHdi27W2Xilzz0IU0j8K6rp95IE5nkcd7zmPs7MFnygUE65M+dgFuyv/q/wdYC5WJACiZ0gAAAABJRU5ErkJggg=="}}]);