import './styles/main.scss';
import getDualSliderWorking from './components/app/getDualSliderWorking';

let multirangeBlockPrice = document.querySelector(".multirange_price");
let multirangeBlockStock = document.querySelector(".multirange_stock");

if (multirangeBlockPrice instanceof HTMLElement){
    getDualSliderWorking(multirangeBlockPrice);
}

if (multirangeBlockStock instanceof HTMLElement){
    getDualSliderWorking(multirangeBlockStock);
}




