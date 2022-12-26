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

/*if (multirangeBlockPrice instanceof HTMLElement){
    const multirangePrice = new Multirange(multirangeBlockPrice);
    multirangePrice.getMultirangeData();
    let slidersArr = multirangeBlockPrice.querySelectorAll(".range");
    let sliderOne = slidersArr[0];
    let sliderTwo = slidersArr[1];
    if ((sliderOne instanceof HTMLElement)&&(sliderTwo instanceof HTMLElement)){
        sliderOne.onchange = function(){
            multirangePrice.getMultirangeData();
        }
        sliderTwo.onchange = function(){
            multirangePrice.getMultirangeData();
        }
    } 
}*/


/*window.onload = function(){
    getMultirangeData();
}*/

