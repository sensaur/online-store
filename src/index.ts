import './styles/main.scss';
import Multirange from './components/app/getMultirange';

let multirangeBlockPrice = document.querySelector(".multirange_price");
if (multirangeBlockPrice instanceof HTMLElement){
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
}


/*window.onload = function(){
    getMultirangeData();
}*/

