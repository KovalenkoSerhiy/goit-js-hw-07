import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems) {
    const makeLiItem = galleryItems.map(({preview, original, description}) =>
          `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
            </a>
          </li>`)
      .join('');
  
    galleryList.insertAdjacentHTML('afterbegin', makeLiItem);
  }

createGallery(galleryItems);

 var lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData:'alt',
    captionDelay: 250,
    overlayOpacity: 0.7,
    });

console.log(galleryItems);
