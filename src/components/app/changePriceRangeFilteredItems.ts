import { IproductItem } from './IproductItem';
import productData from '../../productList';
import getDualSliderWorking from './getDualSliderWorking';

function changePriceRangeFilteredItems(filteredItemsTotal: IproductItem[] = productData) {
    const arrayFilteredItemsPrice = filteredItemsTotal?.map((e) => e.price);
    const arrayPricesASC = arrayFilteredItemsPrice.sort((a, b) => a - b);
    const minPrice = arrayPricesASC[0];
    const maxPrice = arrayPricesASC[arrayPricesASC.length - 1];
    const inputMinValue = document.querySelector('.range_price_from');
    const inputMaxValue = document.querySelector('.range_price_to');

    if (inputMaxValue instanceof HTMLInputElement && inputMinValue instanceof HTMLInputElement) {
        inputMinValue.value = `${minPrice}`;
        inputMaxValue.value = `${maxPrice}`;
    }
}

export default changePriceRangeFilteredItems;
