import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
import filtersList from './components/app/filters';
import slider from './components/app/card';
import productData from './productList';
import { makeLogger } from 'ts-loader/dist/logger';

filtersList();

//dual-slider
const multirangeBlockPrice = document.querySelector('.multirange_price');
const multirangeBlockStock = document.querySelector('.multirange_stock');

if (multirangeBlockPrice instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockPrice, true);
}

if (multirangeBlockStock instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockStock, false);
}

const bigSizeItemsPics = true;
const productItem = document.querySelector('.p_wrapper');

export const currentUrl = new URL(window.location.href);
export const queryParams: { [key: string]: string[] } = {};

window.onload = () => {
    // slider();
    try {
        const url_string = window.location.href.toLowerCase();
        console.log(url_string);
        const url = new URL(url_string);
        const currentQueryParamsString = decodeURIComponent(url.search).slice(1).split('&');
        const arFromCurrentQueryParams = <[string, string[]]>currentQueryParamsString.map((e) => {
            return e.split('=');
        });
        const objectFromCurrenQueryParams: { [key: string]: string[] } = arFromCurrentQueryParams.reduce(
            (obj: { [key: string]: string[] }, e) => {
                obj[e[0]] = e[1].split('↕');
                return obj;
            },
            {}
        );
        console.log(objectFromCurrenQueryParams);

        const filterByBrand = () => {
            if (!objectFromCurrenQueryParams.brand) {
                return productData;
            } else {
                return productData.filter((el) => {
                    if (objectFromCurrenQueryParams.brand.includes(el.brand.toLowerCase())) {
                        return el;
                    }
                });
            }
        };
        const filteredByBrand = filterByBrand();
        console.log('filteredByBrand', filteredByBrand);

        const filterByCategory = () => {
            if (!objectFromCurrenQueryParams.category) {
                return filteredByBrand;
            } else {
                return filteredByBrand.filter((el) => {
                    if (objectFromCurrenQueryParams?.category.includes(el.category.toLowerCase())) {
                        return el;
                    }
                });
            }
        };
        const filteredByCategory = filterByCategory();

        filteredByCategory.forEach((el) => {
            const itemEl = document.createElement('div');
            itemEl.classList.add('p_wrapper');
            const itemWrapper = document.createElement('div');
            itemWrapper.classList.add('p_product-img');
            const image = document.createElement('img');
            image.src = el.thumbnail;
            itemEl.appendChild(itemWrapper);
            itemWrapper.appendChild(image);
            const productItems = document.getElementById('products__items');

            const productInfo = document.createElement('div');
            productInfo.classList.add('p_product-info');
            const productText = document.createElement('div');
            productText.classList.add('p_product-text');
            const header = document.createElement('h1');
            header.innerText = el.title;
            itemEl.appendChild(productInfo);
            productInfo.appendChild(productText);
            productText.appendChild(header);
            const headerBrand = document.createElement('h2');
            headerBrand.innerText = el.brand;
            productText.appendChild(headerBrand);
            const paragraph = document.createElement('p');
            paragraph.innerText = `Category: ${el.category.toUpperCase()}
        Price: €${el.price}
        Rating: ${el.rating}
        Discount: ${el.discountPercentage}
        Stock: ${el.stock}
        `;
            productText.appendChild(paragraph);
            const buttonsDiv = document.createElement('div');
            buttonsDiv.classList.add('p_product-price-btn');
            const details = document.createElement('button');
            details.innerText = 'Details';
            const addToCard = document.createElement('button');
            addToCard.innerText = 'Add to cart';
            buttonsDiv.appendChild(details);
            buttonsDiv.appendChild(addToCard);
            productInfo.appendChild(buttonsDiv);
            const stat = document.getElementsByClassName('stat')[0];
            stat.innerHTML = `Found: ${filteredByCategory.length}`

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            productItems.appendChild(itemEl);
        });
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
};
