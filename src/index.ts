import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
import filtersList from './components/app/filters';
import slider from './components/app/card';
import productData from './productList';
import resetFilters from './components/app/resetFilters';
import drawPageWithSearchParam from './components/app/drawPageWithSearchParam';


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


if (window.location.href !== window.location.pathname){
    drawPageWithSearchParam();
}

const bigSizeItemsPics = true;

const buttonResetfilters = document.querySelector('.reset-link__button');
buttonResetfilters?.addEventListener('click', resetFilters);











/*window.onload = () => {
    slider();
};*/
