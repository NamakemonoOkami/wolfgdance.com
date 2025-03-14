(()=>{function e(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var l=0,a=function(){};return{s:a,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}window.addEventListener("DOMContentLoaded",(function(t){var r,n=e(document.querySelectorAll(".eb-gallery-img-wrapper.enable-isotope"));try{var l,a,i=function(){var t,n=r.value,i=n.getAttribute("data-id"),o=n.getAttribute("data-default-filter"),c=n.getAttribute("data-searchfilter"),s=n.closest(".eb-parent-wrapper").querySelectorAll(".eb-img-gallery-loadmore")[0],u=null==s?void 0:s.getAttribute("data-loadmore"),d=null==s?void 0:s.getAttribute("data-infinite-scroll"),f=Number(null==s?void 0:s.getAttribute("data-images-per-page")),p=f,v=n.closest(".eb-parent-wrapper").querySelectorAll(".filter-wrapper-".concat(i)),y=n.closest(".eb-parent-wrapper").querySelectorAll(".eb-img-gallery-filter-item"),g=n.closest(".eb-parent-wrapper").querySelectorAll(".eb-filter-select")[0],m=n.closest(".eb-parent-wrapper").querySelectorAll(".eb-img-gallery-filter-wrapper")[0],b=null==g?void 0:g.querySelector("span"),h="true"===c,w=n.closest(".eb-parent-wrapper").querySelector(".eb-search-gallery-input"),L=n.closest(".eb-parent-wrapper").querySelector(".eb-search-gallery-close"),A=n.closest(".eb-parent-wrapper").querySelector("#eb-img-gallery-not-found");if(y)if(o){var S,k=e(y);try{for(k.s();!(S=k.n()).done;){var E=S.value,q=E.getAttribute("data-filter");q!==".eb-filter-img-".concat(o)&&q!==o||E.classList.add("is-checked")}}catch(e){k.e(e)}finally{k.f()}}else{var I;null===(I=y[0])||void 0===I||I.classList.add("is-checked")}for(l=0,a=v.length;l<a;l++)C(v[l]);function C(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"li")&&(e.querySelector(".is-checked").classList.remove("is-checked"),t.target.classList.add("is-checked"),h&&(b.textContent=t.target.textContent,m.classList.remove("open-filters")))}))}h&&(null==g||g.addEventListener("click",(function(){m.classList.toggle("open-filters")})),null==g||g.addEventListener("blur",(function(){setTimeout((function(){document.activeElement.closest(".nav-controls")||document.activeElement===g||m.classList.remove("open-filters")}),500)})));var x=null,R="*";function M(e,r){var l,a=n.querySelectorAll(".hidden"),i=n.classList.contains("grid")?"fitRows":"masonry";a.forEach((function(e){e.classList.remove("hidden")}));var o=null===(l=e.filteredItems)||void 0===l?void 0:l.slice(r,e.filteredItems.length).map((function(e){return e.element}));null==o||o.forEach((function(e){e.classList.add("hidden")})),t.arrange({layoutMode:i}),0==(null==o?void 0:o.length)?s.style.display="none":s.style.display="block"}if(imagesLoaded(n,(function(){var e=n.classList.contains("grid")?"fitRows":"masonry",r=!!n.classList.contains("masonry-uneven");t=new Isotope(".".concat(i),{itemSelector:".eb-gallery-img-content",layoutMode:e,transitionDuration:"0.5s",percentPosition:"fitRows"!==e,masonry:"fitRows"!==e?{columnWidth:r?".grid-sizer":".eb-gallery-img-content"}:null,filter:function(e,t){var r=e||t;if(!r)return!1;var n=(null==r?void 0:r.textContent)||"",l=!x||n.match(x),a="*"===R||r.matches(R);return l&&a}}),o?t.arrange({filter:"*"===o?"*":".eb-filter-img-".concat(o)}):t.arrange(),h&&(w.addEventListener("keyup",(function(){L.style.display=w.value.length>0?"block":"none",t.arrange({filter:function(e,t){var r=e||t;if(!r)return!1;var n=(null==r?void 0:r.textContent)||"",l=!x||n.match(x),a="*"===R||r.matches(R);return l&&a}}),x=new RegExp(w.value,"gi"),t.arrange();var e=t.filteredItems.length;s.style.display=e>f?"block":"none"})),L.addEventListener("click",(function(e){e.preventDefault(),L.style.display="none",w.value="",x=null,t.arrange()}))),"true"===u&&"false"===d&&M(t,f),"true"===u&&"true"===d&&(window.addEventListener("scroll",(function(e){window.innerHeight+window.scrollY>=n.offsetHeight&&(M(t,p),p+=f)})),M(t,p),p+=f);var l=n.closest(".eb-parent-wrapper").querySelectorAll(".filter-wrapper-".concat(i," li"));l.length>0&&l.forEach((function(e){e.addEventListener("click",(function(r){var n=e.closest(".eb-parent-wrapper").querySelector(".".concat(i));R=r.target.getAttribute("data-filter"),(t=Isotope.data(n))&&t.arrange({filter:R})}))})),A&&t.on("arrangeComplete",(function(e){0===e.length?(A.classList.add("show"),s&&(s.style.display="none")):(A.classList.remove("show"),s&&(s.style.display="block"))}))})),"true"===u&&"false"===d){var z=n.closest(".eb-parent-wrapper").querySelector(".eb-img-gallery-filter-wrapper");z&&(z.dataset.clicked="true"),s.addEventListener("click",(function(e){t=Isotope.data(".".concat(i)),"true"===(null==z?void 0:z.dataset.clicked)&&(p=f,z.dataset.clicked="false"),M(t,p+=f)})),null==z||z.addEventListener("click",(function(){t=Isotope.data(".".concat(i)),this.dataset.clicked="true",M(t,f)}))}document.addEventListener("lazyloaded",(function(){var e;null===(e=t)||void 0===e||e.layout()})),window.addEventListener("resize",(function(){var e;null===(e=t)||void 0===e||e.layout()}))};for(n.s();!(r=n.n()).done;)i()}catch(e){n.e(e)}finally{n.f()}}))})();