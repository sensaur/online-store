import { IproductItem } from './IproductItem';
import productData from '../../productList';

function changeStockRangeFilteredItems(filteredItemsTotal: IproductItem[] = productData) {
    const inputMinValue = document.querySelector('.range_stock_from');
    const inputMaxValue = document.querySelector('.range_stock_to');

    if (inputMaxValue instanceof HTMLInputElement && inputMinValue instanceof HTMLInputElement) {
      if (filteredItemsTotal.length !== 0){
        const arrayFilteredItemsStock = filteredItemsTotal?.map((e) => e.stock);
        const arrayStockASC = arrayFilteredItemsStock.sort((a, b) => a - b);
        const minStock = arrayStockASC[0];
        const maxStock = arrayStockASC[arrayStockASC.length - 1];
        inputMinValue.value = `${minStock}`;
        inputMaxValue.value = `${maxStock}`;
      } else {
        inputMinValue.value = inputMinValue.min;
        inputMaxValue.value = inputMinValue.max;
      }    
    }

    
    

   
}

export default changeStockRangeFilteredItems;
