import ISearchParam from './ISearchParam';
import productData from '../../productList';

function drawPageWithSearchParam() {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: ISearchParam = {};
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = currentQueryParamsString.map((e) => {
        return e.split('=');
    });
    objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: { [key: string]: string[] }, e) => {
        obj[e[0]] = e[1]?.split('↕');
        return obj;
    }, {});
    objectFromCurrenQueryParams.big ? null : (objectFromCurrenQueryParams.big = 'true');
    // console.log('objectFromCurrenQueryParams111', objectFromCurrenQueryParams);
    getCheckboxChecked(objectFromCurrenQueryParams.category);
    getCheckboxChecked(objectFromCurrenQueryParams.brand);
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
                        if (objectFromCurrenQueryParams.brand.includes(el.brand)) {
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

        // rendering filtered
        if (objectFromCurrenQueryParams?.big[0] === 'true') {
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
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
}

function getCheckboxChecked(blockCheckboxName: string[] | undefined) {
    if (blockCheckboxName) {
        blockCheckboxName.forEach((e) => {
            const checkbox = document.getElementById(e);
            // console.log('checkbox=>', checkbox);
            if (checkbox instanceof HTMLInputElement) {
                checkbox.checked = true;
            }
        });
    }
}

export default drawPageWithSearchParam;
