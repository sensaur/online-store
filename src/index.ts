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
export const queryParams: {[key: string]:string[]} = {};







/*window.onload = () => {
    slider();
};*/
