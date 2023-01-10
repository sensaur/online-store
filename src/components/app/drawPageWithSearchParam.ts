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


function drawPageWithSearchParam() {
    const currentUrl = new URL(window.location.href);
    let objectFromCurrenQueryParams: ISearchParam = {};
    
    const currentQueryParamsString = decodeURIComponent(currentUrl.search).slice(1).split('&');
    const arFromCurrentQueryParams = currentQueryParamsString.map((e) => {
        return e.split('=');
    });

    objectFromCurrenQueryParams = arFromCurrentQueryParams.reduce((obj: { [key: string]: string[]| string }, e) => {
        if (e[1]?.includes('↕')){
            obj[e[0]] = e[1]?.split('↕');
        } else {
            obj[e[0]] = e[1];
        }
        return obj;
    }, {});
    console.log(objectFromCurrenQueryParams);
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
            select.value = objectFromCurrenQueryParams.sort;
            console.log(objectFromCurrenQueryParams.sort);
            sortedItems = getItemsSorted(objectFromCurrenQueryParams.sort, filteredItemsTotal);
        }
    }

    if (sortedItems){
        drawProductItems(sortedItems, true);
    }
    

}

function getNumberFoundItems(filteredItemsTotal: IproductItem[]) {
    const arrayCategoryFound: string[] = filteredItemsTotal.map((e) => e.category);
    const arrayBrandFound: string[] = filteredItemsTotal.map((e) => e.category);
}

export default drawPageWithSearchParam;
