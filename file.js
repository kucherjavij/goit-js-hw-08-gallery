import galleryItems from './js/app.js';
const galleryList = document.querySelector(".js-gallery")
const moodalJS = document.querySelector('.js-lightbox')
const modalImg = moodalJS.querySelector('.lightbox__image')
const btn = moodalJS.querySelector('.lightbox__button')
galleryList.insertAdjacentHTML('beforeend', createImg(galleryItems))

galleryList.addEventListener('click', clickOnGallery )
function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image">
        </a>
        
        </li>
        `
    })
    .join('');
}
function clickOnGallery(evt) {
  evt.preventDefault();
  const isGalleryItem = evt.target.nodeName
  if (isGalleryItem !== 'IMG') { return; }


  moodalJS.classList.add('is-open');
  modalImg.setAttribute('src', evt.target.dataset.source)
  
}
function closeIMG() {
    moodalJS.classList.remove('is-open');
    modalImg.removeAttribute('src')
  
}
btn.addEventListener('click', closeIMG)