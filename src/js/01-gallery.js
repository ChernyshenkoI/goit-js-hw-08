// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEL = document.querySelector(".gallery")

function createMarkup(arr) {

    const result = arr.map(({ preview, original, description }) => {

        return `<li> <a class="gallery__item" 
          href="${preview}">
          <img class="gallery__image" 
          src="${original}"  
          alt=${description}" />
 </a> </li>`

    }).join("");

    galleryEL.innerHTML = result;

};

createMarkup(galleryItems);

new SimpleLightbox(".gallery a", {
    captionsData: "alt", captionDelay: 250

})

console.log(SimpleLightbox);
