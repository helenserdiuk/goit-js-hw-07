import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryArr = document.querySelector(".gallery");

function createGalleryEl(array) {
  const galleryItem = array
    .map(({ preview, original, description } = {}) => {
      return `<div class="gallery__item">
        <a
        class="gallery__link"
        href="${original}"
        >
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
  galleryArr.insertAdjacentHTML("afterbegin", galleryItem);
}

createGalleryEl(galleryItems);

galleryArr.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const datasetSourceImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${datasetSourceImg}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeEsc);
      },
    }
  );

  instance.show();

  function closeEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
