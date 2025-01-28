import { getImages } from "./get-img-API";
import { makeMarkup } from "./make-markup";

const btn = document.querySelector('.img-list__btn')

export let page = 1;
export let pageSize = 9;
btn.addEventListener('click', () => {
    page += 1
    getImages(page, pageSize);
    

});
