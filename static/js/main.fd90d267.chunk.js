(this.webpackJsonpbooks_googleapi=this.webpackJsonpbooks_googleapi||[]).push([[0],{16:function(e,t,o){e.exports={books__title:"books_books__title__z9VgX",books__content:"books_books__content__4d2OU",books__btn:"books_books__btn__2guzp"}},21:function(e,t,o){e.exports={select:"select_select__MMYmn",select__title:"select_select__title__cQbo6",select__item:"select_select__item__2scHP"}},22:function(e,t,o){e.exports={input:"input_input__aR-Dq",input__search:"input_input__search__WS9HL",input__btn:"input_input__btn__1djQ8"}},23:function(e,t,o){e.exports={notFound:"notFoundPage_notFound__ycuJp",notFound__error:"notFoundPage_notFound__error__2YM_J",colchanger:"notFoundPage_colchanger__1iqoY",notFound__text:"notFoundPage_notFound__text__10pXy"}},31:function(e,t,o){e.exports={searchForm:"searchForm_searchForm__lboGr",searchForm__selects:"searchForm_searchForm__selects__2dnwQ"}},32:function(e,t,o){e.exports={searchSection:"searchSection_searchSection__-Bwcz",searchSection__title:"searchSection_searchSection__title__tipmW"}},54:function(e,t,o){},7:function(e,t,o){e.exports={bookdescr:"bookDescrPage_bookdescr__4WYFn",bookdescr__btn:"bookDescrPage_bookdescr__btn__3oeUR",bookdescr__wrapper:"bookDescrPage_bookdescr__wrapper__3sbdN",bookdescr__cover:"bookDescrPage_bookdescr__cover__2y97B",bookdescr__text:"bookDescrPage_bookdescr__text__3ISSs",bookdescr__text_list:"bookDescrPage_bookdescr__text_list__22YH5",bookdescr__text_category:"bookDescrPage_bookdescr__text_category__3Yzie",bookdescr__text_title:"bookDescrPage_bookdescr__text_title__2KtL5",bookdescr__text_author:"bookDescrPage_bookdescr__text_author__1IuTB",bookdescr__text_info:"bookDescrPage_bookdescr__text_info__3pVta"}},77:function(e,t,o){"use strict";o.r(t);var c={};o.r(c),o.d(c,"fetchBooks",(function(){return h})),o.d(c,"loadMoreBooks",(function(){return k}));var n,s=o(19),a=o.n(s),r=o(12),_=(o(54),o(9)),i=o(3),l=o(15),b=o.n(l),d=o(27),u=o(28),j=o.n(u);!function(e){e.FETCH_BOOKS="FETCH_BOOKS",e.FETCH_BOOKS_SUCCESS="FETCH_BOOKS_SUCCESS",e.FETCH_BOOKS_FAIL="FETCH_BOOKS_FAIL",e.LOAD_MORE="LOAD_MORE",e.LOAD_MORE_SUCCESS="LOAD_MORE_SUCCESS",e.LOAD_MORE_FAIL="LOAD_MORE_FAIL"}(n||(n={}));var O=Object({NODE_ENV:"production",PUBLIC_URL:"https://mitya-me.github.io/google_books_api",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyC3LalOpXX188PDdu-aJwxv5d1tJhArBRA"}).API_URL,p="AIzaSyC3LalOpXX188PDdu-aJwxv5d1tJhArBRA",h=function(e,t,o){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return function(){var s=Object(d.a)(b.a.mark((function s(a){var r;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a({type:n.FETCH_BOOKS}),s.next=4,j.a.get("".concat(O,"q=").concat(e,"+subject=").concat(t,"&orderBy=").concat(o,"&startIndex=").concat(c,"&maxResults=30&key=").concat(p));case 4:r=s.sent,a({type:n.FETCH_BOOKS_SUCCESS,payload:r.data}),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),a({type:n.FETCH_BOOKS_FAIL,payload:"Sorry, books fetching failed..."});case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(e){return s.apply(this,arguments)}}()},k=function(e,t,o){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60;return function(){var s=Object(d.a)(b.a.mark((function s(a){var r;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a({type:n.FETCH_BOOKS}),s.next=4,j.a.get("".concat(O,"q=").concat(e,"+subject=").concat(t,"&orderBy=").concat(o,"&startIndex=").concat(c,"&maxResults=30&key=").concat(p));case 4:r=s.sent,a({type:n.LOAD_MORE_SUCCESS,payload:r.data}),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),a({type:n.LOAD_MORE_FAIL,payload:"Sorry, it is impossible to download more books..."});case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(e){return s.apply(this,arguments)}}()},m=Object(i.a)({},c),x=function(){var e=Object(r.b)();return Object(_.b)(m,e)},v=r.c,f=o(11),g=o(8),S=o.n(g),y=o(1),C=function(e){var t=e.id,o=e.thumbnail,c=e.category,n=e.title,s=e.author;return Object(y.jsx)("div",{className:S.a.book,children:Object(y.jsxs)(f.b,{to:"/bookId=".concat(t),children:[Object(y.jsx)("div",{className:S.a.book__cover,children:Object(y.jsx)("img",{src:o,alt:""})}),Object(y.jsxs)("ul",{className:S.a.book__description,children:[Object(y.jsx)("li",{className:"".concat(S.a.book__description_item," ").concat(S.a.book__description_ctgry),children:c?c.join(" "):"category not specified"}),Object(y.jsxs)("li",{className:"".concat(S.a.book__description_item," ").concat(S.a.book__description_title),children:[" ",n," "]}),Object(y.jsxs)("li",{className:S.a.book__description_item,children:[" ",s?s.join(", "):"author not specified"," "]})]})]})})},E=o(16),F=o.n(E),N=function(){var e=v((function(e){return e.books})).books,t=x().loadMoreBooks;return Object(y.jsxs)("section",{className:F.a.books,children:[e.totalItems?Object(y.jsxs)("h2",{className:F.a.books__title,children:["Results ",Object(y.jsx)("span",{children:e.totalItems})]}):null,Object(y.jsx)("div",{className:F.a.books__content,children:e.items.length?e.items.map((function(e){return Object(y.jsx)(C,{id:e.id,thumbnail:void 0===e.volumeInfo.imageLinks?"http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200":e.volumeInfo.imageLinks.thumbnail,category:e.volumeInfo.categories,title:e.volumeInfo.title,author:e.volumeInfo.authors},e.id)})):Object(y.jsx)("h1",{style:{fontSize:"25px",padding:"20px"},children:"Enter the book you need in the search field"})}),Object(y.jsx)("div",{className:F.a.books__btn,children:Object(y.jsx)("button",{onClick:function(){return t("python","All","newest")},children:"Load more"})})]})},I=o(24),A=o(0),D=["All","Art","Biography","Computers","History","Medical","Poetry"],L=["relevance","newest"],T=o(31),B=o.n(T),P=o(21),R=o.n(P),w=function(e){var t=e.selectTitle,o=e.options,c=e.setValue,n=e.value;return Object(y.jsxs)("div",{className:R.a.select,children:[Object(y.jsxs)("span",{className:R.a.select__title,children:[" ",t," "]}),Object(y.jsx)("select",{className:R.a.select__item,value:n,onChange:function(e){return c(e.target.value)},children:o.map((function(e,t){return Object(y.jsxs)("option",{value:e,children:[" ",e," "]},t++)}))})]})},H=o(22),K=o.n(H),M=function(e){var t=e.handleKey,o=e.searchValue,c=e.setSearchValue;return Object(y.jsxs)("div",{className:K.a.input,children:[Object(y.jsx)("input",{value:o,onChange:function(e){return c(e.target.value)},onKeyDown:t,type:"text",className:K.a.input__search,placeholder:"Find your book"}),Object(y.jsx)("button",{className:K.a.input__btn})]})},U=function(){var e=x().fetchBooks,t=Object(A.useState)(""),o=Object(I.a)(t,2),c=o[0],n=o[1],s=Object(A.useState)("all"),a=Object(I.a)(s,2),r=a[0],_=a[1],i=Object(A.useState)("relevance"),l=Object(I.a)(i,2),b=l[0],d=l[1];return Object(y.jsxs)("div",{className:B.a.searchForm,children:[Object(y.jsx)(M,{handleKey:function(t){"Enter"===t.key&&e(c,r,b)},searchValue:c,setSearchValue:n}),Object(y.jsxs)("div",{className:B.a.searchForm__selects,children:[Object(y.jsx)(w,{value:r,setValue:_,selectTitle:"Categories",options:D}),Object(y.jsx)(w,{value:b,setValue:d,selectTitle:"Sorting by",options:L})]})]})},V=o(32),X=o.n(V),J=function(){return Object(y.jsxs)("section",{className:X.a.searchSection,children:[Object(y.jsx)("h1",{className:X.a.searchSection__title,children:" Search for books "}),Object(y.jsx)(U,{})]})},z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J,{}),Object(y.jsx)(N,{})]})},Y=o(7),W=o.n(Y),q=o(2),Q=function(){var e=Object(q.g)(),t=v((function(e){return e.books.books.items})),o=Object(q.f)();return Object(y.jsx)(y.Fragment,{children:t.filter((function(t){return t.id===e.id})).map((function(e){return Object(y.jsxs)("section",{className:W.a.bookdescr,children:[Object(y.jsx)("button",{className:W.a.bookdescr__btn,onClick:function(){return o.push("/")}}),Object(y.jsxs)("div",{className:W.a.bookdescr__wrapper,children:[Object(y.jsx)("div",{className:W.a.bookdescr__cover,children:Object(y.jsx)("img",{src:void 0===e.volumeInfo.imageLinks?"http://shop.btpubservices.com/content/images/cover_not_available_360.jpg?height=200":e.volumeInfo.imageLinks.thumbnail,alt:"book cover"})}),Object(y.jsxs)("div",{className:W.a.bookdescr__text,children:[Object(y.jsxs)("ul",{className:W.a.bookdescr__text_list,children:[Object(y.jsx)("li",{className:W.a.bookdescr__text_category,children:e.volumeInfo.categories}),Object(y.jsx)("li",{className:W.a.bookdescr__text_title,children:e.volumeInfo.title}),Object(y.jsx)("li",{className:W.a.bookdescr__text_author,children:e.volumeInfo.authors.join(", ")})]}),Object(y.jsx)("div",{className:W.a.bookdescr__text_info,children:e.volumeInfo.description})]})]})]},e.volumeInfo.title)}))})},G=o(23),Z=o.n(G),$=function(){return Object(y.jsxs)("div",{className:Z.a.notFound,children:[Object(y.jsx)("span",{className:Z.a.notFound__error,children:" 404 "}),Object(y.jsx)("span",{className:Z.a.notFound__text,children:"Page not found"})]})},ee=function(){return Object(y.jsx)("div",{className:"app",children:Object(y.jsxs)(q.c,{children:[Object(y.jsx)(q.a,{exact:!0,path:"/",component:z}),Object(y.jsx)(q.a,{exact:!0,path:"/bookId=:id",component:Q}),Object(y.jsx)(q.a,{exact:!0,path:"*",component:$})]})})},te=o(45),oe=o(33),ce={books:{items:[],totalItems:""},loading:!0,error:null},ne=Object(_.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_BOOKS:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case n.FETCH_BOOKS_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{books:t.payload,loading:!1});case n.FETCH_BOOKS_FAIL:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload,loading:!1});case n.LOAD_MORE:return Object(i.a)(Object(i.a)({},e),{},{loading:!0});case n.LOAD_MORE_SUCCESS:var o={items:[].concat(Object(oe.a)(e.books.items),Object(oe.a)(t.payload.items)),totalItems:t.payload.totalItems};return Object(i.a)(Object(i.a)({},e),{},{books:o,loading:!1});case n.LOAD_MORE_FAIL:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload,loading:!1});default:return e}}}),se=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,ae=Object(_.e)(ne,se(Object(_.a)(te.a)));a.a.render(Object(y.jsx)(f.a,{children:Object(y.jsx)(r.a,{store:ae,children:Object(y.jsx)(ee,{})})}),document.getElementById("root"))},8:function(e,t,o){e.exports={book:"bookCard_book__PlDdB",book__cover:"bookCard_book__cover__1TIHf",book__description:"bookCard_book__description__1iN0_",book__description_item:"bookCard_book__description_item__1cmNq",book__description_ctgry:"bookCard_book__description_ctgry__1k7g3",book__description_title:"bookCard_book__description_title__1T36X"}}},[[77,1,2]]]);
//# sourceMappingURL=main.fd90d267.chunk.js.map