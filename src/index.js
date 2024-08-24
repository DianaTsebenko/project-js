const eventsList = document.getElementById('events-list');
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.searchInput');
const countrySelect = document.querySelector('.country_select');
const loadMoreBtn = document.getElementById('load-more');

const apiKey = 'EtDAV1vyZ1Jbh6c6G3DrYAs7JMLAasp6';

let currentPage = 1;
let currentQuery = '';
let currentCountry = '';
const perPage = 20;

searchForm.addEventListener('submit', onSubmit);
countrySelect.addEventListener('change', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function fetchEvents(query = '', country = '', page = 0) {
  let searchUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&page=${page}&size=${perPage}`;

  if (query) {
    searchUrl += `&keyword=${query}`;
  }

  if (country) {
    searchUrl += `&countryCode=${country}`;
  }

  const response = await fetch(searchUrl);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return data;
}

function getImageByCondition(images) {
  const sourceImage = images.find(img => img.url.includes('SOURCE'));
  return sourceImage ? sourceImage.url : images[0].url;
}

function renderEvents(events) {
  if (currentPage === 1) {
    eventsList.innerHTML = '';
  }

  // Check if there are any events
  if (
    !events._embedded ||
    !events._embedded.events ||
    events._embedded.events.length === 0
  ) {
    loadMoreBtn.style.display = 'none';
    return;
  }
  loadMoreBtn.style.display = 'block';

  const eventmap = events._embedded.events
    .map(event => {
      const imageUrl = getImageByCondition(event.images);

      return `<li class="event_thumb">
        <a href="" class="event_link">
            <img src="${imageUrl}" alt="${event.name} preview" class="event_img" />
            <p class="event_name">${event.name}</p>
            <p class="event_date">${event.dates.start.localDate}</p>
            <p class="event_location">${event._embedded.venues[0].name}</p>
        </a>
    </li>`;
    })
    .join('');
  eventsList.insertAdjacentHTML('beforeend', eventmap);
}

async function onSubmit(event) {
  event.preventDefault();
  currentPage = 1;

  currentQuery = searchInput.value.trim();
  currentCountry = countrySelect.value;

  await loadEvents(currentQuery, currentCountry, currentPage);
}

async function onLoadMore() {
  currentPage++;
  await loadEvents(currentQuery, currentCountry, currentPage);
}

async function loadEvents(query, country, page) {
  try {
    const events = await fetchEvents(query, country, page);
    renderEvents(events);
  } catch (error) {
    console.error('Error rendering events:', error);
  }
}

loadEvents('', '', 1);
