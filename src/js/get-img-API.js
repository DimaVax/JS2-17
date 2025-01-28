import { makeMarkup } from "./make-markup";
import { page } from "./load-more";
import { pageSize } from "./load-more";
const key = '48498537-253c13cd2fa195324306c7d0b';

export const getImages = (page, pageSize) => {
    const API = `https://pixabay.com/api/?key=${key}&editors_choice="true"&page=${page}&per_page=${pageSize}&q="space"`
    return fetch(API).then((data) => data.json()).then((data) => makeMarkup(data));
};
getImages(page, pageSize)