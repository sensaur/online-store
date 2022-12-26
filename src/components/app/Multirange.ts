class Multirange{
    block: HTMLElement;
    
    constructor(block: HTMLElement, ){
        this.block = block;   
    }
    
    getMultirangeData(){
        let slidersArr = this.block.querySelectorAll(".range");
        let sliderOne = slidersArr[0];
        let sliderTwo = slidersArr[1];
        let displayValOne = this.block.querySelector(".multirange__data_from");
        let displayValTwo = this.block.querySelector(".multirange__data_to");;
        let minGap = 0;
        let sliderTrack = this.block.querySelector(".dual-slider");
        if ((sliderOne instanceof HTMLInputElement)&&(sliderTwo instanceof HTMLInputElement)&&(displayValOne !== null)&&(displayValTwo !== null)&&(sliderTrack instanceof HTMLElement)){
            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
              sliderOne.value = `${parseInt(sliderTwo.value) - minGap}`;
          }
          displayValOne.textContent = `€${sliderOne.value}`;
          fillColor(sliderOne, sliderTwo, sliderTrack);
          if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
              sliderTwo.value = `${parseInt(sliderOne.value) + minGap}`;
          }
          displayValTwo.textContent = `€${sliderTwo.value}`;
          fillColor(sliderOne, sliderTwo, sliderTrack);
          } 

    }
       
}


function fillColor(sliderOne: HTMLInputElement, sliderTwo: HTMLInputElement, sliderTrack: HTMLElement){
   let sliderMaxValue = sliderOne.max;
   let percent1 = (Number(sliderOne.value) / Number(sliderMaxValue)) * 100;
   let percent2 = (Number(sliderTwo.value) / Number(sliderMaxValue)) * 100;
   sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #333333 ${percent1}% , #333333 ${percent2}%, #dadae5 ${percent2}%)`;
}

export default Multirange;
