import productData from '../../productList';
import ISearchParam from './ISearchParam';
import { IproductItem } from './IproductItem';


function getItemsFiltered(objectFromCurrenQueryParams: ISearchParam){
    if (productData) {
        productData.filter((e) => {
            if (objectFromCurrenQueryParams.category) {
                objectFromCurrenQueryParams.category.includes(e.category);
            }
        });
    }

    try {
        //filtering items
        const filterByBrand = () => {
            if (!objectFromCurrenQueryParams.brand) {
                return productData;
            } else {
                return productData.filter((el) => {
                    if (objectFromCurrenQueryParams.brand) {
                        if (objectFromCurrenQueryParams.brand.includes(encodeURI(el.brand))) {
                            return el;
                        }
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
                    if (objectFromCurrenQueryParams.category) {
                        if (objectFromCurrenQueryParams.category.includes(el.category.toLowerCase())) {
                            return el;
                        }
                    }
                });
            }
        };

        // getting result
        const filteredItemsTotal = filterByCategory();

        // filtering
        console.log('filteredItemsTotal=>', filteredItemsTotal);

        const sortByPriceASCResult = sortByPriceASC(filteredItemsTotal);
        console.log('sortByPriceASCResult==>', sortByPriceASCResult);

        const sortByPriceDESCResult = [...filteredItemsTotal].sort((a, b) => b.price - a.price);
        console.log('sortByPriceDESCResult==>', sortByPriceDESCResult);

        const sortByRatingASC = [...filteredItemsTotal].sort((a, b) => a.rating - b.rating);
        console.log('sortByRatingASC==>', sortByRatingASC);

        const sortByRatingDESC = [...filteredItemsTotal].sort((a, b) => b.rating - a.rating);
        console.log('sortByRatingDESC==>', sortByRatingDESC);

        // rendering filtered
        if ((objectFromCurrenQueryParams.big)&&(objectFromCurrenQueryParams?.big[0] === 'true')) {
            filteredItemsTotal.forEach((el) => {
                const itemEl = document.createElement('div');
                itemEl.classList.add('p_wrapper');
                const itemWrapper = document.createElement('div');
                itemWrapper.classList.add('p_product-img');
                const image = document.createElement('img');
                image.src = el.thumbnail;
                itemEl.appendChild(itemWrapper);
                itemWrapper.appendChild(image);
                const productItems = document.getElementById('products__items');

                if (productItems) {
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
                    stat.innerHTML = `Found: ${filteredItemsTotal.length}`;
                    productItems.appendChild(itemEl);
                }
            });
        } else {
            filteredItemsTotal.forEach((el) => {
                const itemEl = document.createElement('div');
                itemEl.classList.add('p_sm_wrapper');
                const itemWrapper = document.createElement('div');
                itemWrapper.classList.add('p_sm_product-img');
                const image = document.createElement('img');
                image.src = el.thumbnail;
                itemEl.appendChild(itemWrapper);
                itemWrapper.appendChild(image);
                const productItems = document.getElementById('products__items_sm');
                // const productItems = document.getElementById('products__items');

                if (productItems) {
                    const productInfo = document.createElement('div');
                    productInfo.classList.add('p_sm_product-info');
                    const productText = document.createElement('div');
                    productText.classList.add('p_sm_product-text');
                    const header = document.createElement('h1');
                    header.innerText = el.title;
                    itemWrapper.appendChild(productInfo);
                    productInfo.appendChild(productText);
                    productText.appendChild(header);
                    const buttonsDiv = document.createElement('div');
                    buttonsDiv.classList.add('p_sm_product-price-btn');
                    const details = document.createElement('button');
                    details.innerText = 'Details';
                    const addToCard = document.createElement('button');
                    addToCard.innerText = 'Add to cart';
                    buttonsDiv.appendChild(details);
                    buttonsDiv.appendChild(addToCard);
                    productInfo.appendChild(buttonsDiv);
                    const stat = document.getElementsByClassName('stat')[0];
                    stat.innerHTML = `Found: ${filteredItemsTotal.length}`;
                    productItems.appendChild(itemEl);
                }
            });
        }
        return filteredItemsTotal;
        
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }

}


function sortByPriceASC(arr: IproductItem[]) {
    return [...arr].sort((a: IproductItem, b: IproductItem) => a.price - b.price);
}


function sortByPriceDESC(arr: IproductItem[]) {
    return [...arr].sort((a: IproductItem, b: IproductItem) => b.price - a.price);
}

export default getItemsFiltered;