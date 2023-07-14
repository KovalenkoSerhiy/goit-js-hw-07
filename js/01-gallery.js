import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems) {
  const makeLiItem = galleryItems.map(({ preview, original, description }) =>
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
// openModalWindow
galleryList.addEventListener('click', openGalleryImg);



function openGalleryImg(event) {
    event.preventDefault();
    const clickImg = event.target.classList.contains('gallery__image');
        if (!clickImg){
          return;  
        };
        
        if (event.target) {
            createImg();
        };       
    };
    
function createImg() {
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="900" height="900" >`);
    instance.show();

    document.addEventListener('keydown', closeGalleryImg);
};

// closeModalWindow
function closeGalleryImg(event) {
    const escKey = 'Escape';
    if (event.code === escKey) {
      deleteModalImg();
  
      document.removeEventListener('keydown', closeGalleryImg);
    }
  };

  function deleteModalImg() {
    const instance = document.querySelector('.basicLightbox--visible');
    instance.remove();
  };