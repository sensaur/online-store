import ISearchParam from './ISearchParam';
import productData from '../../productList';
import getItemsFiltered from './getItemsFiltered';
import getCheckboxChecked from './getCheckboxChecked';
import { IproductItem } from './IproductItem';
import filtersList from './filters';
import changePriceRangeFilteredItems from './changePriceRangeFilteredItems';
import changeStockRangeFilteredItems from './changeStockRangeFilteredItems';
import getItemsSorted from './getItemsSorted';
import drawProductItems from './drawProductItems';
import getCurrentParamsFromUrl from './getCurrentParamsFromURL';



function drawPageWithSearchParam() {
    const objectFromCurrenQueryParams = getCurrentParamsFromUrl();
    objectFromCurrenQueryParams.big ? null : (objectFromCurrenQueryParams.big = 'true');
    const filteredItemsTotal = getItemsFiltered(objectFromCurrenQueryParams);
    filtersList(filteredItemsTotal);
    if (filteredItemsTotal){
        if (filteredItemsTotal.length !== 0){
            changePriceRangeFilteredItems(filteredItemsTotal);
            changeStockRangeFilteredItems(filteredItemsTotal);
        }
        getCheckboxChecked(objectFromCurrenQueryParams.category);
        getCheckboxChecked(objectFromCurrenQueryParams.brand);
    }
    
    let sortedItems = filteredItemsTotal;
    if ((objectFromCurrenQueryParams.sort) && (filteredItemsTotal)){
        const select = document.querySelector('.sort');
        if (select instanceof HTMLSelectElement){
            select.value = objectFromCurrenQueryParams.sort[0];
            console.log(objectFromCurrenQueryParams.sort);
            sortedItems = getItemsSorted(objectFromCurrenQueryParams.sort[0], filteredItemsTotal);
        }
    }

    if (sortedItems){
        if (objectFromCurrenQueryParams.big = 'true'){
            drawProductItems(sortedItems, true);
        } else {
            drawProductItems(sortedItems, false);
        }
        
    }
    

}


export default drawPageWithSearchParam;
