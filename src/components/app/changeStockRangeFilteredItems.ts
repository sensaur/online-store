import { IproductItem } from './IproductItem';
import productData from '../../productList';

function changeStockRangeFilteredItems(filteredItemsTotal: IproductItem[] = productData) {
    const arrayFilteredItemsStock = filteredItemsTotal?.map((e) => e.stock);
    const arrayStockASC = arrayFilteredItemsStock.sort((a, b) => a - b);
    const minStock = arrayStockASC[0];
    const maxStock = arrayStockASC[arrayStockASC.length - 1];
    const inputMinValue = document.querySelector('.range_stock_from');
    const inputMaxValue = document.querySelector('.range_stock_to');

    if (inputMaxValue instanceof HTMLInputElement && inputMinValue instanceof HTMLInputElement) {
        inputMinValue.value = `${minStock}`;
        inputMaxValue.value = `${maxStock}`;
    }
}

export default changeStockRangeFilteredItems;
