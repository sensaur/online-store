import getPriceStockParamsToUrl from './getPriceStockParamsToUrl';

class Multirange {
    block: HTMLElement;
    isPrice: boolean;

    constructor(block: HTMLElement, isPrice: boolean) {
        this.block = block;
        this.isPrice = isPrice;
    }

    getMultirangeData(onChange: boolean) {
        const slidersArr = this.block.querySelectorAll('.range');
        const sliderOne = slidersArr[0];
        const sliderTwo = slidersArr[1];
        const displayValOne = this.block.querySelector('.multirange__data_from');
        const displayValTwo = this.block.querySelector('.multirange__data_to');
        const minGap = 0;
        const sliderTrack = this.block.querySelector('.dual-slider');
        if (
            sliderOne instanceof HTMLInputElement &&
            sliderTwo instanceof HTMLInputElement &&
            displayValOne !== null &&
            displayValTwo !== null &&
            sliderTrack instanceof HTMLElement
        ) {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderOne.value = `${parseInt(sliderTwo.value) - minGap}`;
            }
            if (this.isPrice) {
                displayValOne.textContent = `€${sliderOne.value}`;
            } else {
                displayValOne.textContent = `${sliderOne.value}`;
            }

            fillColor(sliderOne, sliderTwo, sliderTrack);
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = `${parseInt(sliderOne.value) + minGap}`;
            }
            if (this.isPrice) {
                displayValTwo.textContent = `€${sliderTwo.value}`;
            } else {
                displayValTwo.textContent = `${sliderTwo.value}`;
            }

            fillColor(sliderOne, sliderTwo, sliderTrack);

            if (onChange) {
                getPriceStockParamsToUrl(sliderOne.value, sliderTwo.value, this.isPrice);
            }
        }
    }
}

function fillColor(sliderOne: HTMLInputElement, sliderTwo: HTMLInputElement, sliderTrack: HTMLElement) {
    const sliderMaxValue = sliderOne.max;
    const percent1 = (Number(sliderOne.value) / Number(sliderMaxValue)) * 100;
    const percent2 = (Number(sliderTwo.value) / Number(sliderMaxValue)) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #333333 ${percent1}% , #333333 ${percent2}%, #dadae5 ${percent2}%)`;
}

export default Multirange;
