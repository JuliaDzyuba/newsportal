(this.webpackJsonpnewsportal=this.webpackJsonpnewsportal||[]).push([[0],{23:function(e,t,a){},34:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),m=a.n(l),s=a(4),r=(a(39),a(40),a(14)),i=a(15),o=(a(41),a(42),function(e){var t=e.cat,a=e.type,n=e.onClick;return c.a.createElement("ul",{className:"".concat(a,"__items")},c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"menu__items_active",onClick:n},"Home")),t.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(s.c,{exact:!0,to:"/".concat(e),activeClassName:"menu__items_active",onClick:n},e))})),c.a.createElement("li",null,c.a.createElement(s.c,{exact:!0,to:"/contacts",activeClassName:"menu__items_active",onClick:n},"Contacts")))}),u=function(e){var t=e.news,a=Object(i.a)(new Set(t.map((function(e){return e.category})))),l=c.a.createRef(),m=Object(n.useState)(!1),s=Object(r.a)(m,2),u=s[0],_=s[1],E=function(){_(!u)},f=function(e){e.path.includes(l.current)||_(!1)};return Object(n.useEffect)((function(){document.body.addEventListener("click",f)}),[]),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header__info"},c.a.createElement("a",{href:"/",className:"logo"},c.a.createElement("span",null,"TOP"),"NEWS"),c.a.createElement("div",{className:"social"},c.a.createElement("ul",{className:"social__links"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://facebook.com",className:"social__links_facebook",alt:"facebook"},"fb")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.instagram.com/?hl=ru",className:"social__links_instagram"},"i")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.pinterest.com/",className:"social__links_pinterest"},"Pin")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://vimeo.com/",className:"social__links_vimeo"},"Vim")))))),c.a.createElement("nav",{className:"menu header__menu"},c.a.createElement("div",{className:"container"},c.a.createElement(o,{cat:a,type:"menu"}),u&&c.a.createElement(o,{cat:a,type:"burger",onClick:E}),c.a.createElement("div",{ref:l,className:"header__burger",onClick:E},c.a.createElement("span",{onClick:E})," Menu"))))},_=(a(47),a(48),function(e){var t=new Date(e).getDate(),a=new Date(e).getMonth()+1;return" ".concat(t,".").concat(a<10?"0"+a:a," ")}),E=function(e){var t=e.news,a=function(e,t){return e.length>t?e.slice(0,t-3)+"...":e};return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"section__items"},t.map((function(e){return c.a.createElement("li",{className:t.length<4?"item section__item":t.length>4?"item item__category":"item section__item section__item_lastnews",key:e.id},c.a.createElement(s.b,{to:"/".concat(e.category,"/").concat(e.id),className:t.length>4?"item__link item__category_link":"item__link"},c.a.createElement("div",{className:"item__wrap"},c.a.createElement("img",{src:e.urlToImage,alt:"img",className:4===t.length?"item__img item__img_lastnews":"item__img"})),c.a.createElement("div",{className:t.length>4?"item__category_info":"item__section_info"},c.a.createElement("h3",{className:"item__title"},a(e.title,50)),c.a.createElement("div",{className:"item__details"},c.a.createElement("span",null,"\u0414\u0430\u0442\u0430 : "),_(e.date)," / ",e.category),c.a.createElement("p",{className:"item__descr"},a(e.abstract,135)),c.a.createElement("div",{className:"item__more"},c.a.createElement("button",{className:"btn btn__more"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),c.a.createElement("button",{className:"btn btn__comments"},"5 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432")))))}))))},f=a(25),d=a(26),p=a(33),N=a(32),h=a(27),g=(a(50),function(e){Object(p.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).breakPoints=[{width:1,itemsToShow:1},{width:425,itemsToShow:2,itemsToScroll:1},{width:575,itemsToShow:2,itemsToScroll:1},{width:767,itemsToShow:3,itemsToScroll:1},{width:991,itemsToShow:3,itemsToScroll:1}],n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.news.filter((function(e,t){return t<6})),t=function(e,t){return e.length>t?e.slice(0,t-3)+"...":e};return c.a.createElement(h.a,{enableAutoPlay:!0,autoPlaySpeed:5e3,showArrows:!1,itemPadding:[5,5,5,5],breakPoints:this.breakPoints},e.map((function(a){return c.a.createElement(s.b,{key:a.id,to:"/".concat(a.category,"/").concat(a.id),className:e.length>4?"item__link item__category_link":"item__link"},c.a.createElement("div",{className:"item__wrap"},c.a.createElement("img",{src:a.urlToImage,alt:"img",className:4===e.length?"item__img item__img_lastnews":"item__img"})),c.a.createElement("div",{className:e.length>4?"item__category_info":"item__section_info"},c.a.createElement("h3",{className:"item__title"},t(a.title,45)),c.a.createElement("div",{className:"item__details"},c.a.createElement("span",null,"\u0414\u0430\u0442\u0430 : "),_(a.date)," / ",a.category),c.a.createElement("p",{className:"item__descr"},t(a.abstract,80)),c.a.createElement("div",{className:"item__more"},c.a.createElement("button",{className:"btn btn__more"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),c.a.createElement("button",{className:"btn btn__comments"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"))))})))}}]),a}(c.a.Component)),v=function(e){var t,a=e.category,n=e.news,l=n.filter((function(e,t){return e.category===a}));switch(a){case"Last News":t=n.filter((function(e,t){return t<6}));break;default:t=l.filter((function(e,t){return t<3}))}return c.a.createElement("section",{className:"section"},c.a.createElement("h2",{className:"section__title"},a),"Last News"===a?c.a.createElement(g,{news:n}):c.a.createElement(E,{news:t}))},w=a(2),b=(a(51),a(52),function(e){var t=e.news,a=e.num;return t.filter((function(e,t){return t<a})).map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(s.b,{to:"/".concat(e.category,"/").concat(e.id),className:"mini__item"},c.a.createElement("img",{src:e.urlToImage,alt:"img",className:"mini__img"}),c.a.createElement("div",{className:"mini__item_descr"},c.a.createElement("h3",{className:a<4?"mini__item_title footer__item_title":"mini__item_title"},(t=e.title,n=40,t.length>n?t.slice(0,n-3)+"...":t)),c.a.createElement("div",{className:"mini__item_details"},c.a.createElement("span",null,"\u0414\u0430\u0442\u0430 : "),_(e.date)," / ",e.category))));var t,n}))}),y=function(e){var t=e.news;return c.a.createElement(c.a.Fragment,null,c.a.createElement("aside",{className:"sidebar"},c.a.createElement("h2",{className:"sidebar__title"},"LAST News"),c.a.createElement("ul",{className:"footer__items sidebar__items"},c.a.createElement(b,{news:t,num:15}))))},k=(a(23),function(e){var t=e.cat,a=e.news,n=a.filter((function(e){return e.category===t}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"category"},c.a.createElement("section",{className:"section section__category"},c.a.createElement("h2",{className:"section__title"},t),c.a.createElement(E,{news:n})),c.a.createElement(y,{news:a})))}),S=(a(53),function(e){var t=e.abstract,a=e.category,n=e.date,l=e.id,m=e.hostName,s=e.title,r=(e.url,e.urlToImage),i=e.news;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"category"},c.a.createElement("section",{className:"section section__category"},c.a.createElement("h2",{className:"section__title"},a),c.a.createElement("div",{className:"article",key:l},c.a.createElement("h1",{className:"article__title"},s),c.a.createElement("div",{className:"item__wrap"},c.a.createElement("img",{src:r,alt:"foto",className:"item__img"})),c.a.createElement("div",{className:"item__details"},c.a.createElement("span",null,"\u0414\u0430\u0442\u0430 : "),function(e){var t=new Date(e).getDate(),a=new Date(e).getMonth()+1;return" ".concat(t,".").concat(a<10?"0"+a:a," ")}(n)," / ",a," / ",m),c.a.createElement("p",null,t)),c.a.createElement("hr",null),c.a.createElement("div",{className:"comments__list"},c.a.createElement("h2",null,"Comments"),c.a.createElement("div",{className:"comments__item"},c.a.createElement("div",{className:"comments__avatar"},c.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/61.jpg",alt:"ava"})),c.a.createElement("div",{className:"comments__details"},c.a.createElement("div",{className:"comments__username"},"John Smith"),c.a.createElement("div",{className:"comments__published"},"30.06 18:20"),c.a.createElement("p",{className:"comments__text"}," Consectetur adipisicing elit. Iusto reprehenderit nulla sunt rerum totam saepe, ad fuga aperiam veritatis consequuntur assumenda eos libero sequi similique eaque a illo omnis quisquam."))),c.a.createElement("div",{className:"comments__item"},c.a.createElement("div",{className:"comments__avatar"},c.a.createElement("img",{src:"https://randomuser.me/api/portraits/women/72.jpg",alt:"ava"})),c.a.createElement("div",{className:"comments__details"},c.a.createElement("div",{className:"comments__username"},"Jane Smith"),c.a.createElement("div",{className:"comments__published"},"30.06 20:48"),c.a.createElement("p",{className:"comments__text"}," Iusto reprehenderit nulla sunt rerum totam saepe, ad fuga aperiam veritatis consequuntur assumenda eos libero sequi similique eaque a illo omnis quisquam."))),c.a.createElement("form",{className:"comments__form"},c.a.createElement("h2",null,"Leave your comment"),c.a.createElement("input",{type:"text",name:"name",className:"input"}),c.a.createElement("span",null,"Name"),c.a.createElement("input",{type:"text",name:"email",className:"input"}),c.a.createElement("span",null,"Email"),c.a.createElement("textarea",{name:"message",className:"area"}),c.a.createElement("span",null,"Message"),c.a.createElement("button",{type:"submit",id:"contact_send",value:"Send",className:"contacts__button"},"Add comment")))),c.a.createElement(y,{news:i})))}),x=(a(54),a(55),function(){return c.a.createElement("div",{className:"contacts__info"},c.a.createElement("p",{className:"info__title"},"Administration"),c.a.createElement("a",{href:"tel: +111111111",className:"info__phone"},"111-111-111"),c.a.createElement("a",{href:"tel: +222222222",className:"info__phone"},"222-222-222"),c.a.createElement("a",{href:"mailto: mail@mail.com",className:"info__email"},"mail@mail.com"),c.a.createElement("div",{className:"info__address"},"32 Alexandra Road, ",c.a.createElement("br",null)," Swansea,",c.a.createElement("br",null)," SA1 5DT"))}),T=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"map"},c.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.9873993292745!2d-3.947044484225763!3d51.62343997965438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef53610959b6f%3A0xc8fed07fe492837e!2zMzIgQWxleGFuZHJhIFJkLCBTd2Fuc2VhIFNBMSA1RFQsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sua!4v1595313146105!5m2!1sru!2sua","aria-hidden":"false",title:"map 32 Alexandra Road,Swansea,SA1 5DT"})),c.a.createElement("h1",{className:"contacts__title"},"Contacts"),c.a.createElement("div",{className:"contacts__block"},c.a.createElement("form",{className:"contacts__form"},c.a.createElement("h2",null,"Wright us letter"),c.a.createElement("input",{type:"text",name:"name",className:"input"}),c.a.createElement("span",null,"Name"),c.a.createElement("input",{type:"text",name:"email",className:"input"}),c.a.createElement("span",null,"Email"),c.a.createElement("input",{type:"text",name:"website",className:"input"}),c.a.createElement("span",null,"Theme"),c.a.createElement("textarea",{name:"message",className:"area"}),c.a.createElement("span",null,"Message"),c.a.createElement("button",{type:"submit",id:"contact_send",value:"Send",className:"contacts__button"},"Send")),c.a.createElement(x,null)))},j=(a(56),function(e){var t=e.news,a=["Last News"].concat(Object(i.a)(new Set(t.map((function(e){return e.category}))))),l=Object(w.f)(),m=l.pathname.split("/"),s=m[m.length-1],r=t.find((function(e){return e.id===+s}));return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[l]),c.a.createElement("main",null,c.a.createElement("div",{className:"container"},c.a.createElement(w.c,null,c.a.createElement(w.a,{path:"/",exact:!0},a.map((function(e){return c.a.createElement(v,{category:e,title:e,news:t,key:e})}))),c.a.createElement(w.a,{exact:!0,path:"/sport"},c.a.createElement(k,{cat:"sport",news:t})),c.a.createElement(w.a,{exact:!0,path:"/politics"},c.a.createElement(k,{cat:"politics",news:t})),c.a.createElement(w.a,{exact:!0,path:"/economic"},c.a.createElement(k,{cat:"economic",news:t})),c.a.createElement(w.a,{exact:!0,path:"/lifestyle"},c.a.createElement(k,{cat:"lifestyle",news:t})),c.a.createElement(w.a,{exact:!0,path:"/science"},c.a.createElement(k,{cat:"science",news:t})),c.a.createElement(w.a,{exact:!0,path:"/contacts"},c.a.createElement(T,null)),c.a.createElement(w.a,{path:"/:category/:id"},c.a.createElement(S,Object.assign({},r,{news:t}))))))}),C=(a(57),function(e){var t=e.news;return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"footer__wrapper"},c.a.createElement("div",{className:"footer__contacts"},c.a.createElement("p",{className:"info__title footer__title"},"Administration"),c.a.createElement("a",{href:"tel: +111111111",className:"info__phone footer__phone"},"111-111-111"),c.a.createElement("a",{href:"tel: +222222222",className:"info__phone footer__phone"},"222-222-222"),c.a.createElement("a",{href:"mailto: mail@mail.com",className:"info__email footer__email"},"mail@mail.com"),c.a.createElement("div",{className:"info__address footer__address"},"32 Alexandra Road, ",c.a.createElement("br",null)," Swansea,",c.a.createElement("br",null)," SA1 5DT")),c.a.createElement("div",{className:"footer__lastnews"},c.a.createElement("p",{className:"footer__title"},"LAST Posts"),c.a.createElement("ul",{className:"footer__items"},c.a.createElement(b,{news:t,num:3}))),c.a.createElement("div",{className:"footer__social"},c.a.createElement("p",{className:"footer__title"},"We are in socials"),c.a.createElement("ul",{className:"footer__socialLinks"},c.a.createElement("li",{className:"facebook"},c.a.createElement("a",{href:"https://facebook.com"},"Facebook")),c.a.createElement("li",{className:"google"},c.a.createElement("a",{href:"https://support.google.com/plus/?hl=ru"},"Google+")),c.a.createElement("li",{className:"twitter"},c.a.createElement("a",{href:"https://twitter.com/?lang=ru"},"Twitter")),c.a.createElement("li",{className:"dribbble"},c.a.createElement("a",{href:"https://dribbble.com/"},"Dribbble"))))),c.a.createElement("div",{className:"footer__policy"},"\xa9 2010\u20132020 TOPnews"),c.a.createElement("div",{className:"footer__made"},c.a.createElement("a",{href:"https://juliadzyuba.github.io/jdwebdev/",alt:"JDWebDev",rel:"noopener noreferrer",target:"_blank"},"\u263c Made by ",c.a.createElement("b",null,"JDWebDev ")," \u200b"))))}),O=a(19),A=a.n(O),D=a(31);var q=function(){var e=function(e){var t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){Object(D.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(e){return e.json()})).then((function(e){return l(e)}));case 2:case"end":return t.stop()}}),t)})))()}),[e]),c}("https://juliadzyuba.github.io/newsportal/news.json");return c.a.createElement("div",{className:"App"},c.a.createElement(u,{news:e}),c.a.createElement(j,{news:e}),c.a.createElement(C,{news:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{basename:"/newsportal"},c.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.9cb69e20.chunk.js.map