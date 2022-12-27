import './styles/main.scss';
import Multirange from './components/app/getMultirange';

import slider from './components/app/card';

const multirangeBlockPrice = document.querySelector('.multirange_price');
if (multirangeBlockPrice instanceof HTMLElement) {
    const multirangePrice = new Multirange(multirangeBlockPrice);
    multirangePrice.getMultirangeData();
    const slidersArr = multirangeBlockPrice.querySelectorAll('.range');
    const sliderOne = slidersArr[0];
    const sliderTwo = slidersArr[1];
    if (sliderOne instanceof HTMLElement && sliderTwo instanceof HTMLElement) {
        sliderOne.onchange = function () {
            multirangePrice.getMultirangeData();
        };
        sliderTwo.onchange = function () {
            multirangePrice.getMultirangeData();
        };
    }
}

/*window.onload = function(){
    getMultirangeData();
}*/

window.onload = function () {
    slider();
};
