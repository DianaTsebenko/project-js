document.addEventListener("DOMContentLoaded",(()=>{const n={modal:document.getElementById("event-modal"),list:document.getElementById("events-list"),modalContent:document.querySelector(".modal__window")};n.list.addEventListener("click",(function(e){var t,a,i,o,d,l,s,v,c,r,h;e.preventDefault(),console.log("Event clicked:",e.target);const m=e.target.closest(".event_thumb");if(!m)return void console.log("No event item found");const p=m.id,u=window.eventDataArray.find((n=>n.id===p));if(!u)return void console.log("Event data not found for id:",p);const{name:g,images:f,info:w,dates:_,products:y,priceRanges:$,url:b}=u;n.modalContent.innerHTML=`\n<div class="modal__close-btn-container">\n    <div class="modal__close-btn">\n<svg  viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">\n<path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25Z" />\n<path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" />\n</svg>\n    </div>\n</div>\n\n    <div class="modal__icon">\n      <img src="${(null===(t=f[4])||void 0===t?void 0:t.url)||"default-image.jpg"}" alt="${g}">\n    </div>\n    <div class="modal__main-info">\n      <img src="${(null===(a=f[2])||void 0===a?void 0:a.url)||"default-image.jpg"}" alt="${g}">\n      <ul class="main-info-list">\n        <li class="main-info-item">\n          <h3>INFO</h3>\n          <p>${w||"No additional information available"}</p>\n        </li>\n        <li class="main-info-item">\n          <h3>WHEN</h3>\n          <p>\n            <span>${(null==_||null===(i=_.start)||void 0===i?void 0:i.localDate)||"Date not available"}</span>\n            <span>${(null==_||null===(o=_.start)||void 0===o?void 0:o.localTime)||"Time not available"}</span>\n          </p>\n        </li>\n        <li class="main-info-item">\n          <h3>WHERE</h3>\n          <p>\n            <span>${(null==_?void 0:_.timezone)||"Timezone not available"}</span>\n            <span>${(null===(d=y[0])||void 0===d?void 0:d.name)||"Venue not available"}</span>\n          </p>\n        </li>\n        <li class="main-info-item">\n          <h3>WHO</h3>\n          <p>${g||"Name not available"}</p>\n        </li>\n        <li class="main-info-item">\n          <h3>PRICES</h3>\n          <div>\n            ${$[0]?`\n              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 44 32">\n                <path d="M4.91 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M17.26 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M24.699 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M44.19 1.27h-7.291v29.46h7.291v-29.46z"></path>\n                <path d="M9.82 1.27h-2.381v29.46h2.381v-29.46z"></path>\n                <path d="M29.46 1.27h-2.381v29.46h2.381v-29.46z"></path>\n                <path d="M34.37 1.27h-2.381v29.46h2.381v-29.46z"></path>\n              </svg>\n              Standard ${(null===(l=$[0])||void 0===l?void 0:l.min)||"N/A"}-${(null===(s=$[0])||void 0===s?void 0:s.max)||"N/A"} ${(null===(v=$[0])||void 0===v?void 0:v.currency)||"N/A"}\n            `:"Price information not available"}\n                      </div>\n              <div>\n            ${$[1]?`\n              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 44 32">\n                <path d="M4.91 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M17.26 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M24.699 1.27h-4.91v29.46h4.91v-29.46z"></path>\n                <path d="M44.19 1.27h-7.291v29.46h7.291v-29.46z"></path>\n                <path d="M9.82 1.27h-2.381v29.46h2.381v-29.46z"></path>\n                <path d="M29.46 1.27h-2.381v29.46h2.381v-29.46z"></path>\n                <path d="M34.37 1.27h-2.381v29.46h2.381v-29.46z"></path>\n              </svg>\n              VIP ${null===(c=$[1])||void 0===c?void 0:c.min}-${null===(r=$[1])||void 0===r?void 0:r.max} ${null===(h=$[1])||void 0===h?void 0:h.currency}\n            `:""}\n            <a class="buyTicketsBtn" href="${b||"#"}" target="_blank">BUY TICKETS</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class="modal__more-btn">\n      <a class="authorInfoBtn" href="#">MORE FROM THIS AUTHOR</a>\n    </div>\n  `,n.modal.classList.remove("hidden")})),n.modal.addEventListener("click",(function(e){(e.target.classList.contains("modal__back-drop")||e.target.classList.contains("modal__close-btn-icon"))&&n.modal.classList.add("hidden")}))}));const n=document.getElementById("events-list"),e=document.getElementById("search-form"),t=document.querySelector(".searchInput"),a=document.querySelector(".country_select"),i=document.getElementById("load-more");let o=1,d="",l="";async function s(n){n.preventDefault(),o=1,d=t.value.trim(),l=a.value,await v(d,l,o)}async function v(e,t,a){try{const d=await async function(n="",e="",t=0){let a=`https://app.ticketmaster.com/discovery/v2/events.json?apikey=EtDAV1vyZ1Jbh6c6G3DrYAs7JMLAasp6&page=${t}&size=20`;n&&(a+=`&keyword=${n}`),e&&(a+=`&countryCode=${e}`);const i=await fetch(a);if(!i.ok)throw new Error(i.status);return await i.json()}(e,t,a);!function(e){if(1===o&&(n.innerHTML=""),!e._embedded||!e._embedded.events||0===e._embedded.events.length)return void(i.style.display="none");i.style.display="block",window.eventDataArray=e._embedded.events;const t=e._embedded.events.map((n=>{const e=function(n){const e=n.find((n=>n.url.includes("SOURCE")));return e?e.url:n[0].url}(n.images);return`<li class="event_thumb" id="${n.id}">\n        <a href="" class="event_link">\n            <img src="${e}" alt="${n.name} preview" class="event_img" />\n            <p class="event_name">${n.name}</p>\n            <p class="event_date">${n.dates.start.localDate}</p>\n            <p class="event_location">${n._embedded.venues[0].name}</p>\n        </a>\n    </li>`})).join("");n.insertAdjacentHTML("beforeend",t)}(d)}catch(n){console.error("Error rendering events:",n)}}window.eventDataArray=[],e.addEventListener("submit",s),a.addEventListener("change",s),i.addEventListener("click",(async function(){o++,await v(d,l,o)})),n.addEventListener("click",{}.onOpenModal),v("","",1);
//# sourceMappingURL=index.edc8075c.js.map
