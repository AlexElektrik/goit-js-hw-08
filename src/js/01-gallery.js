// Add imports above this line
import SimpleLightbox from "Simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');


const item = ({preview, original, description}) => `<a class="gallery__item" href='${original}'>
  <img class="gallery__image"
      src='${preview}'
      alt='${description}' />
</a>`
const imgItems = galleryItems.map(img => item(img)).join('');
gallery.insertAdjacentHTML('beforeend',imgItems )
console.log(imgItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
 });

console.log(galleryItems);
console.log(gallery);