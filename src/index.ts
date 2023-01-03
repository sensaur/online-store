import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';
import filtersList from './components/app/filters';
import slider from './components/app/card';


filtersList();

const multirangeBlockPrice = document.querySelector('.multirange_price');
const multirangeBlockStock = document.querySelector('.multirange_stock');

if (multirangeBlockPrice instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockPrice);
}

if (multirangeBlockStock instanceof HTMLElement) {
    getDualSliderWorking(multirangeBlockStock);
}

/*window.onload = () => {
    slider();
};*/
