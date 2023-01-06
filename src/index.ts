import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
import filtersList from './components/app/filters';
import slider from './components/app/card';
import productData from './productList';

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
        const category = url.searchParams.get('category');
        const brand = url.searchParams.get('brand');
        console.log('category=>', category, 'brand', brand);
        // render products
        console.log('1', productData.filter((el) => el.category === category));
        const filtered = productData.filter((el) => el.brand.toLowerCase() === brand);
        console.log('2', filtered);
        const itemEl = document.createElement('div');
        itemEl.classList.add('p_wrapper');
        const image = document.createElement('img');
        image.src = filtered[0].thumbnail;
        image.classList.add('p_product-img');
        itemEl.appendChild(image);
        const productItems = document.getElementById('products__items');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        productItems.appendChild(itemEl);
    } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
    }
};
