document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    modal: document.getElementById('event-modal'),
    list: document.getElementById('events-list'),
    modalContent: document.querySelector('.modal__window'),
  };

 // Handle opening the modal
function onOpenModal(evt) {
  evt.preventDefault();
  console.log('Event clicked:', evt.target);

  const eventItem = evt.target.closest('.event_thumb');
  if (!eventItem) {
    console.log('No event item found');
    return;
  }

  const eventId = eventItem.id;
  const eventData = window.eventDataArray.find(item => item.id === eventId);

  if (!eventData) {
    console.log('Event data not found for id:', eventId);
    return;
  }

  const {
    name,
    images,
    info,
    dates,
    products,
    priceRanges,
    url
  } = eventData;

  

  refs.modalContent.innerHTML = `
<div class="modal__close-btn-container">
    <div class="modal__close-btn">
<svg  viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
<path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25Z" />
<path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" />
</svg>
    </div>
</div>

    <div class="modal__icon">
      <img src="${images[4]?.url || 'default-image.jpg'}" alt="${name}">
    </div>
    <div class="modal__main-info">
      <img src="${images[2]?.url || 'default-image.jpg'}" alt="${name}">
      <ul class="main-info-list">
        <li class="main-info-item">
          <h3>INFO</h3>
          <p>${info || 'No additional information available'}</p>
        </li>
        <li class="main-info-item">
          <h3>WHEN</h3>
          <p>
            <span>${dates?.start?.localDate || 'Date not available'}</span>
            <span>${dates?.start?.localTime || 'Time not available'}</span>
          </p>
        </li>
        <li class="main-info-item">
          <h3>WHERE</h3>
          <p>
            <span>${dates?.timezone || 'Timezone not available'}</span>
            <span>${products[0]?.name || 'Venue not available'}</span>
          </p>
        </li>
        <li class="main-info-item">
          <h3>WHO</h3>
          <p>${name || 'Name not available'}</p>
        </li>
        <li class="main-info-item">
          <h3>PRICES</h3>
          <div>
            ${priceRanges[0] ? `
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 44 32">
                <path d="M4.91 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M17.26 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M24.699 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M44.19 1.27h-7.291v29.46h7.291v-29.46z"></path>
                <path d="M9.82 1.27h-2.381v29.46h2.381v-29.46z"></path>
                <path d="M29.46 1.27h-2.381v29.46h2.381v-29.46z"></path>
                <path d="M34.37 1.27h-2.381v29.46h2.381v-29.46z"></path>
              </svg>
              Standard ${priceRanges[0]?.min || 'N/A'}-${priceRanges[0]?.max || 'N/A'} ${priceRanges[0]?.currency || 'N/A'}
            ` : 'Price information not available'}
                      </div>
              <div>
            ${priceRanges[1] ? `
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="29" height="20" viewBox="0 0 44 32">
                <path d="M4.91 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M17.26 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M24.699 1.27h-4.91v29.46h4.91v-29.46z"></path>
                <path d="M44.19 1.27h-7.291v29.46h7.291v-29.46z"></path>
                <path d="M9.82 1.27h-2.381v29.46h2.381v-29.46z"></path>
                <path d="M29.46 1.27h-2.381v29.46h2.381v-29.46z"></path>
                <path d="M34.37 1.27h-2.381v29.46h2.381v-29.46z"></path>
              </svg>
              VIP ${priceRanges[1]?.min}-${priceRanges[1]?.max} ${priceRanges[1]?.currency}
            ` : ''}
            <a class="buyTicketsBtn" href="${url || '#'}" target="_blank">BUY TICKETS</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="modal__more-btn">
      <a class="authorInfoBtn" href="#">MORE FROM THIS AUTHOR</a>
    </div>
  `;
  
  refs.modal.classList.remove('hidden');
}


  // Handle closing the modal
  function onModalClose(e) {
    if (
      e.target.classList.contains('modal__back-drop') ||
      e.target.classList.contains('modal__close-btn-icon')
    ) {
      refs.modal.classList.add('hidden');
    }
  }

  // Attach event listeners
  refs.list.addEventListener('click', onOpenModal);
  refs.modal.addEventListener('click', onModalClose);
});
