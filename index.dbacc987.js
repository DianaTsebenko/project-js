var apiKey="EtDAV1vyZ1Jbh6c6G3DrYAs7JMLAasp6",url="https://app.ticketmaster.com/discovery/v2/events.json?apikey=".concat(apiKey,"&locale=*"),eventsList=document.getElementById("events-list");function fetchEvents(){return fetch(url).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function getImageByCondition(e){var n=e.find((function(e){return e.url.includes("SOURCE")}));return n?n.url:e[0].url}function renderEvents(e){var n=e._embedded.events.map((function(e){var n=getImageByCondition(e.images);return'<li class="event_thumb">\n        <a href="" class="event_link">\n            <img src="'.concat(n,'" alt="').concat(e.name,' preview" class="event_img" />\n            <p class="event_name">').concat(e.name,'</p>\n            <p class="event_date">').concat(e.dates.start.localDate,'</p>\n            <div class="container_location">\n                <svg class="icon-location">\n                    <use href="./images/sprite.svg#icon-location"></use>\n                </svg>\n                <p class="event_location">').concat(e._embedded.venues[0].name,"</p>\n            </div>\n        </a>\n    </li>")})).join("");eventsList.insertAdjacentHTML("beforeend",n),console.log(e._embedded.events)}fetchEvents().then((function(e){return renderEvents(e)})).catch((function(e){return console.log(e)}));
//# sourceMappingURL=index.dbacc987.js.map
