import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
import slider from './components/app/card';

const multirangeBlockPrice = document.querySelector('.multirange_price');
const multirangeBlockStock = document.querySelector('.multirange_stock');

if (multirangeBlockPrice instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockPrice);
}

if (multirangeBlockStock instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockStock);
}

window.onload = () => {
    slider();
};
