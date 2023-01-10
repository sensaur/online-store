import { IproductItem } from "./IproductItem";
import productData from "../../productList";


function changePriceRangeFilteredItems(filteredItemsTotal: IproductItem[] = productData){
    const inputMinValue = document.querySelector('.range_price_from');
    const inputMaxValue = document.querySelector('.range_price_to');
    if ((inputMaxValue instanceof HTMLInputElement)&&(inputMinValue instanceof HTMLInputElement)){
        if (filteredItemsTotal.length !== 0){
            const arrayFilteredItemsPrice = filteredItemsTotal.map((e) => e.price);
            const arrayPricesASC = arrayFilteredItemsPrice.sort((a, b) => a-b);
            const minPrice = arrayPricesASC[0];
            const maxPrice = arrayPricesASC[arrayPricesASC.length - 1];
            inputMinValue.value = `${minPrice}`;
            inputMaxValue.value = `${maxPrice}`;
        } else {
            inputMinValue.value = inputMinValue.min;
            inputMaxValue.value = inputMinValue.max;
        }
    }
}

export default changePriceRangeFilteredItems;