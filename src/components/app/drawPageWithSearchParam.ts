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
    objectFromCurrenQueryParams.big ? null : (objectFromCurrenQueryParams.big = ['true']);
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

    const viewModeSmall = document.querySelector('.view-mode_small');
    const viewModeBig = document.querySelector('.view-mode_big'); 
    if (sortedItems){
        if (objectFromCurrenQueryParams.big[0] === 'true'){
            drawProductItems(sortedItems, true);
            if ((viewModeSmall instanceof HTMLElement)&&(viewModeBig instanceof HTMLElement)){
                viewModeBig.classList.add('selected');
                viewModeSmall.classList.remove('selected');
                console.log(viewModeSmall);
            }

        } else {
            drawProductItems(sortedItems, false);
           
            if ((viewModeSmall instanceof HTMLElement)&&(viewModeBig instanceof HTMLElement)){
                viewModeSmall.classList.add('selected');
                viewModeBig.classList.remove('selected');
                console.log(viewModeSmall);
            }

        }
        
    }
    

}


export default drawPageWithSearchParam;
