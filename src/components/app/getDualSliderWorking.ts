
import Multirange from './Multirange';

function getDualSliderWorking (block: HTMLElement){
    const multirangeForBlock = new Multirange(block);
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