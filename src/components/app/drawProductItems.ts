import { IproductItem } from './IproductItem';

function drawProductItems(listItems: IproductItem[], isBig: boolean) {
    if (isBig) {
        listItems.forEach((el) => {
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
                details.addEventListener('click', () => {});
                const addToCard = document.createElement('button');
                addToCard.innerText = 'Add to cart';
                buttonsDiv.appendChild(details);
                buttonsDiv.appendChild(addToCard);
                productInfo.appendChild(buttonsDiv);
                const stat = document.getElementsByClassName('stat')[0];
                stat.innerHTML = `Found: ${listItems.length}`;
                productItems.appendChild(itemEl);
            }
        });
    } else {
        listItems.forEach((el) => {
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
                const link = document.createElement('a');
                // link.href = `productDetails/${el.id}`;
                link.href = `card.html`;
                link.appendChild(details);
                // details.addEventListener('click', (e) => {
                //     e.preventDefault();
                //     const currentUrl = new URL(window.location.href);
                //     window.location.search = `productDetails=${el.id}`;
                // });
                const addToCard = document.createElement('button');
                addToCard.innerText = 'Add to cart';
                buttonsDiv.appendChild(link);
                buttonsDiv.appendChild(addToCard);
                productInfo.appendChild(buttonsDiv);
                const stat = document.getElementsByClassName('stat')[0];
                stat.innerHTML = `Found: ${listItems.length}`;
                productItems.appendChild(itemEl);
            }
        });
    }
}

export default drawProductItems;
