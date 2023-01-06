
import Multirange from './Multirange';

function getDualSliderWorking (block: HTMLElement, isPrice: boolean){
    const multirangeForBlock = new Multirange(block, isPrice);
    multirangeForBlock.getMultirangeData();
    let slidersArr = block.querySelectorAll(".range");
    let sliderOne = slidersArr[0];
    let sliderTwo = slidersArr[1];
    if ((sliderOne instanceof HTMLElement)&&(sliderTwo instanceof HTMLElement)){
        sliderOne.onchange = function(){
            multirangeForBlock.getMultirangeData();
        }
        sliderTwo.onchange = function(){
            multirangeForBlock.getMultirangeData();
        }
    } 
}
export default getDualSliderWorking;