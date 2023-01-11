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
                const link = document.createElement('a');
                link.href = `card.html`;
                link.appendChild(details);
                const addToCart = document.createElement('button');
                const totalSpan = document.querySelector('.total');
                const cartContentDiv = document.querySelector('.cart-content');
                let totalPrice = 0;
               
                addToCart.addEventListener(('click'), (ev) => {
                    let cart = localStorage.getItem('cart');
                    let itemsInCart: string[];
                    if (cart){
                       itemsInCart = cart.split(' ');
                    } else {
                        itemsInCart = [];
                    }
                    if (ev.target instanceof HTMLElement){
                        ev.target.classList.toggle('inCart');
                        if (ev.target.classList.contains('inCart')){
                            ev.target.textContent = 'Drop from cart';
                            ev.target.style.backgroundColor = '#fddf19';
                            itemsInCart.push(`${el.price}`);
                            totalPrice +=  el.price;
                            if (totalSpan instanceof HTMLElement){
                                totalPrice = itemsInCart.reduce((sum, e) => sum + parseInt(e), 0 );
                                totalSpan.textContent = `${totalPrice}€`;
                            };
                        
                            if (cartContentDiv instanceof HTMLElement){
                                cartContentDiv.innerHTML = `${itemsInCart.length}`;
                            };
                            localStorage.setItem('cart', `${itemsInCart.join(' ')}`);
                        } else {
                            ev.target.textContent =  'Add to cart';
                            console.log(itemsInCart.filter((e)=> e != `${el.price}`));
                            const itemsInCartLeft = itemsInCart.filter((e)=> e != `${el.price}`);
                            ev.target.style.backgroundColor = '#d6360f';
                            if (totalSpan instanceof HTMLElement){
                                totalPrice = itemsInCartLeft.reduce((sum, e) => sum + parseInt(e), 0 );
                                totalSpan.textContent = `${totalPrice}€`;
                            };
                            if (cartContentDiv instanceof HTMLElement){
                                cartContentDiv.innerHTML = `${itemsInCartLeft.length}`;
                            };
                            localStorage.setItem('cart', `${itemsInCartLeft.join(' ')}`);
                            
                        }
                    }  
                });
                addToCart.innerText = 'Add to cart';
                buttonsDiv.appendChild(link);
                buttonsDiv.appendChild(addToCart);
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
                link.href = `card.html`;
                link.appendChild(details);
   
                const addToCart = document.createElement('button');
   
                const totalSpan = document.querySelector('.total');
                const cartContentDiv = document.querySelector('.cart-content');
                let totalPrice = 0;
                let cart = localStorage.getItem('cart');
                addToCart.addEventListener(('click'), (ev) => {
                    let cart = localStorage.getItem('cart');
                    let itemsInCart: string[];
                    if (cart){
                       itemsInCart = cart.split(' ');
                    } else {
                        itemsInCart = [];
                    }
                    if (ev.target instanceof HTMLElement){
                        ev.target.classList.toggle('inCart');
                        if (ev.target.classList.contains('inCart')){
                            ev.target.textContent = 'Drop from cart';
                            ev.target.style.backgroundColor = '#fddf19';
                            itemsInCart.push(`${el.price}`);
                            totalPrice +=  el.price;
                            if (totalSpan instanceof HTMLElement){
                                totalPrice = itemsInCart.reduce((sum, e) => sum + parseInt(e), 0 );
                                totalSpan.textContent = `${totalPrice}€`;
                            };

                            if (cartContentDiv instanceof HTMLElement){
                                cartContentDiv.innerHTML = `${itemsInCart.length}`;
                            };
                            localStorage.setItem('cart', `${itemsInCart.join(' ')}`);
                        } else {
                            ev.target.textContent =  'Add to cart';
                            const itemsInCartLeft = itemsInCart.filter((e)=> e != `${el.price}`);
                            ev.target.style.backgroundColor = '#d6360f';
                            if (totalSpan instanceof HTMLElement){
                                totalPrice = itemsInCartLeft.reduce((sum, e) => sum + parseInt(e), 0 );
                                totalSpan.textContent = `${totalPrice}€`;
                            };
                            if (cartContentDiv instanceof HTMLElement){
                                cartContentDiv.innerHTML = `${itemsInCartLeft.length}`;
                            };
                            localStorage.setItem('cart', `${itemsInCartLeft.join(' ')}`);
                            
                        }
                    }  
                });
                addToCart.innerText = 'Add to cart';
                buttonsDiv.appendChild(link);
                buttonsDiv.appendChild(addToCart);
                productInfo.appendChild(buttonsDiv);
                const stat = document.getElementsByClassName('stat')[0];
                stat.innerHTML = `Found: ${listItems.length}`;
                productItems.appendChild(itemEl);
            }
        });
    }
}

export default drawProductItems;
