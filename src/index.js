const apiKey = 'EtDAV1vyZ1Jbh6c6G3DrYAs7JMLAasp6';
const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&locale=*`;

const eventsList = document.getElementById('events-list');

function fetchEvents() {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function getImageByCondition(images) {
  const sourceImage = images.find(img => img.url.includes('SOURCE'));
  return sourceImage ? sourceImage.url : images[0].url;
}

function renderEvents(events) {
  const eventmap = events._embedded.events
    .map(event => {
      const imageUrl = getImageByCondition(event.images);

      return `<li class="event_thumb">
        <a href="" class="event_link">
            <img src="${imageUrl}" alt="${event.name} preview" class="event_img" />
            <p class="event_name">${event.name}</p>
            <p class="event_date">${event.dates.start.localDate}</p>
            <div class="container_location">
                <svg class="icon-location">
                    <use href="images/sprite.svg#icon-location"></use>
                </svg>
                <p class="event_location">${event._embedded.venues[0].name}</p>
            </div>
        </a>
    </li>`;
    })
    .join('');
  eventsList.insertAdjacentHTML('beforeend', eventmap);
  // console.log(events._embedded.events);
}

fetchEvents()
  .then(events => renderEvents(events))
  .catch(error => console.log(error));
