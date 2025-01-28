const list = document.querySelector('.img-list')

export const makeMarkup = (data) => {
    console.log(data);
    data.hits.forEach(hit => {
        console.log(hit)
        const item = document.createElement("li");
        list.append(item);
        item.classList.add('img-list__item')

        const img = document.createElement("img");
        img.setAttribute('src', hit.largeImageURL);
        item.append(img)
        img.classList.add('img-list__img')

    });
};
